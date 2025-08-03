#!/usr/bin/env node

/**
 * 🎯 Blind 75 Progress Tracker
 * 
 * A beginner-friendly tool to track your coding interview preparation journey!
 * 
 * 🚀 Quick Start Examples:
 *   node progress-tracker.js                    # Show help and getting started guide
 *   node progress-tracker.js stats              # See your overall progress  
 *   node progress-tracker.js list               # See all problems with status
 *   node progress-tracker.js mark 1 js          # Mark problem #1 as completed in JavaScript
 *   node progress-tracker.js mark 1 java        # Mark problem #1 as completed in Java
 *   node progress-tracker.js unmark 1 js        # Unmark problem #1 in JavaScript
 *   node progress-tracker.js next               # Get your next recommended problem
 *   node progress-tracker.js setup              # Initial setup and goal setting
 * 
 * 🎓 Study Tips:
 *   - Start with easy problems to build confidence
 *   - Try to solve in both languages to strengthen understanding
 *   - Focus on understanding patterns, not memorizing solutions
 *   - Use the 'next' command to get personalized recommendations
 */

const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, 'progress-tracker.json');
const README_FILE = path.join(__dirname, '..', 'README.md');

// Console colors for better UX
const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m'
};

class ProgressTracker {
    constructor() {
        this.loadProgress();
    }

    loadProgress() {
        try {
            const data = fs.readFileSync(PROGRESS_FILE, 'utf8');
            this.progress = JSON.parse(data);
        } catch (error) {
            console.error(`${colors.red}❌ Error loading progress file: ${error.message}${colors.reset}`);
            console.log(`${colors.yellow}💡 Make sure you're in the correct directory with progress-tracker.json${colors.reset}`);
            process.exit(1);
        }
    }

    saveProgress() {
        try {
            this.progress.metadata.lastUpdated = new Date().toISOString();
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(this.progress, null, 2));
            console.log(`${colors.green}✅ Progress saved successfully!${colors.reset}`);
        } catch (error) {
            console.error(`${colors.red}❌ Error saving progress: ${error.message}${colors.reset}`);
        }
    }

    findProblemById(id) {
        for (const [category, data] of Object.entries(this.progress.categories)) {
            const problem = data.problems.find(p => p.id === parseInt(id));
            if (problem) {
                return { problem, category };
            }
        }
        return null;
    }

    markProblem(id, language, completed = true) {
        const result = this.findProblemById(id);
        if (!result) {
            console.error(`❌ Problem with ID ${id} not found!`);
            return;
        }

        const { problem, category } = result;
        const wasCompleted = problem[language];
        
        problem[language] = completed;
        problem.dateCompleted[language] = completed ? new Date().toISOString() : null;

        // Update stats
        this.updateStats();

        // Log activity
        if (completed && !wasCompleted) {
            this.progress.stats.recentActivity.unshift({
                date: new Date().toISOString(),
                action: 'completed',
                problem: problem.name,
                language: language,
                category: category
            });

            // Keep only last 10 activities
            this.progress.stats.recentActivity = this.progress.stats.recentActivity.slice(0, 10);
        }

        console.log(`✅ Marked "${problem.name}" as ${completed ? 'completed' : 'incomplete'} for ${language}`);
        console.log(`📊 Category: ${category}`);
        
        this.saveProgress();
        this.updateReadme();
    }

    updateStats() {
        // Reset stats
        this.progress.stats.overall.javascript.completed = 0;
        this.progress.stats.overall.java.completed = 0;
        this.progress.stats.byCategory = {};

        // Calculate stats for each category
        for (const [category, data] of Object.entries(this.progress.categories)) {
            let jsCompleted = 0;
            let javaCompleted = 0;

            data.problems.forEach(problem => {
                if (problem.javascript) jsCompleted++;
                if (problem.java) javaCompleted++;
            });

            this.progress.stats.byCategory[category] = {
                javascript: {
                    completed: jsCompleted,
                    total: data.count,
                    percentage: Math.round((jsCompleted / data.count) * 100)
                },
                java: {
                    completed: javaCompleted,
                    total: data.count,
                    percentage: Math.round((javaCompleted / data.count) * 100)
                }
            };

            // Add to overall stats
            this.progress.stats.overall.javascript.completed += jsCompleted;
            this.progress.stats.overall.java.completed += javaCompleted;
        }

        // Calculate overall percentages
        this.progress.stats.overall.javascript.percentage = 
            Math.round((this.progress.stats.overall.javascript.completed / 75) * 100);
        this.progress.stats.overall.java.percentage = 
            Math.round((this.progress.stats.overall.java.completed / 75) * 100);
    }

    displayStats() {
        console.log('\n📊 BLIND 75 PROGRESS REPORT\n');
        console.log('═'.repeat(50));
        
        // Overall progress
        const jsProgress = this.progress.stats.overall.javascript;
        const javaProgress = this.progress.stats.overall.java;
        
        console.log(`🟨 JavaScript: ${jsProgress.completed}/75 (${jsProgress.percentage}%)`);
        console.log(`☕ Java:       ${javaProgress.completed}/75 (${javaProgress.percentage}%)`);
        console.log('═'.repeat(50));

        // Category breakdown
        console.log('\n📋 CATEGORY BREAKDOWN:\n');
        
        for (const [category, stats] of Object.entries(this.progress.stats.byCategory)) {
            const jsBar = this.createProgressBar(stats.javascript.percentage);
            const javaBar = this.createProgressBar(stats.java.percentage);
            
            console.log(`${category}:`);
            console.log(`  🟨 JS:   ${jsBar} ${stats.javascript.completed}/${stats.javascript.total} (${stats.javascript.percentage}%)`);
            console.log(`  ☕ Java: ${javaBar} ${stats.java.completed}/${stats.java.total} (${stats.java.percentage}%)`);
            console.log('');
        }

        // Recent activity
        if (this.progress.stats.recentActivity.length > 0) {
            console.log('🕒 RECENT ACTIVITY:\n');
            this.progress.stats.recentActivity.slice(0, 5).forEach(activity => {
                const date = new Date(activity.date).toLocaleDateString();
                console.log(`  ${date} - Completed "${activity.problem}" (${activity.language}) in ${activity.category}`);
            });
        }
    }

    createProgressBar(percentage, length = 20) {
        const filled = Math.round((percentage / 100) * length);
        const empty = length - filled;
        return '█'.repeat(filled) + '░'.repeat(empty);
    }

    updateReadme() {
        try {
            let readme = fs.readFileSync(README_FILE, 'utf8');
            
            // Generate progress section
            const progressSection = this.generateProgressSection();
            
            // Replace the progress section
            const startMarker = '<!-- PROGRESS-START -->';
            const endMarker = '<!-- PROGRESS-END -->';
            
            const startIndex = readme.indexOf(startMarker);
            const endIndex = readme.indexOf(endMarker) + endMarker.length;
            
            if (startIndex !== -1 && endIndex !== -1) {
                readme = readme.substring(0, startIndex) + progressSection + readme.substring(endIndex);
                fs.writeFileSync(README_FILE, readme);
                console.log('✅ README updated with latest progress!');
            }
        } catch (error) {
            console.error('Error updating README:', error.message);
        }
    }

    generateProgressSection() {
        const jsProgress = this.progress.stats.overall.javascript;
        const javaProgress = this.progress.stats.overall.java;
        
        let section = `<!-- PROGRESS-START -->
## 📊 Progress Tracking

### Overall Progress
- **JavaScript**: ${jsProgress.completed}/75 problems (${jsProgress.percentage}%) ${this.createProgressBar(jsProgress.percentage)}
- **Java**: ${javaProgress.completed}/75 problems (${javaProgress.percentage}%) ${this.createProgressBar(javaProgress.percentage)}

### Category Progress (JS / Java)

| Category | JS Progress | Java Progress | Problems |
|----------|-------------|---------------|----------|`;

        for (const [category, stats] of Object.entries(this.progress.stats.byCategory)) {
            const jsBar = this.createProgressBar(stats.javascript.percentage, 10);
            const javaBar = this.createProgressBar(stats.java.percentage, 10);
            section += `\n| **${category}** | ${jsBar} ${stats.javascript.completed}/${stats.javascript.total} | ${javaBar} ${stats.java.completed}/${stats.java.total} | ${stats.javascript.total} |`;
        }

        section += '\n\n### Detailed Progress\n\n';

        for (const [category, data] of Object.entries(this.progress.categories)) {
            section += `#### ${category} (${data.count} problems)\n\n`;
            
            data.problems.forEach(problem => {
                const jsCheck = problem.javascript ? '✅' : '❌';
                const javaCheck = problem.java ? '✅' : '❌';
                const difficulty = problem.difficulty;
                const difficultyEmoji = difficulty === 'Easy' ? '🟢' : difficulty === 'Medium' ? '🟡' : '🔴';
                
                section += `- **${problem.name}** ${difficultyEmoji} | JS: ${jsCheck} | Java: ${javaCheck}\n`;
            });
            
            section += '\n';
        }

        if (this.progress.stats.recentActivity.length > 0) {
            section += '### Recent Activity\n\n';
            this.progress.stats.recentActivity.slice(0, 5).forEach(activity => {
                const date = new Date(activity.date).toLocaleDateString();
                section += `- ${date}: Completed **${activity.problem}** (${activity.language}) in ${activity.category}\n`;
            });
        }

        section += '\n### How to Update Progress\n\n';
        section += '```bash\n';
        section += '# Mark problem as completed\n';
        section += 'node progress-tracker.js mark <problem-id> <javascript|java>\n\n';
        section += '# View detailed stats\n';
        section += 'node progress-tracker.js stats\n\n';
        section += '# Examples:\n';
        section += 'node progress-tracker.js mark 1 javascript  # Mark Two Sum as completed in JS\n';
        section += 'node progress-tracker.js mark 1 java        # Mark Two Sum as completed in Java\n';
        section += '```\n\n';
        
        section += '<!-- PROGRESS-END -->';
        
        return section;
    }

    exportProgress() {
        // Update stats before exporting
        this.updateStats();
        
        const exportData = {
            exportDate: new Date().toISOString(),
            totalProblemsCompleted: {
                javascript: this.progress.stats.overall.javascript.completed,
                java: this.progress.stats.overall.java.completed
            },
            categoryBreakdown: this.progress.stats.byCategory,
            completedProblems: []
        };

        // Get list of completed problems
        for (const [category, data] of Object.entries(this.progress.categories)) {
            data.problems.forEach(problem => {
                if (problem.javascript || problem.java) {
                    exportData.completedProblems.push({
                        id: problem.id,
                        name: problem.name,
                        category: category,
                        difficulty: problem.difficulty,
                        javascript: problem.javascript,
                        java: problem.java,
                        dateCompleted: problem.dateCompleted
                    });
                }
            });
        }

        const exportFile = `progress-export-${new Date().toISOString().split('T')[0]}.json`;
        fs.writeFileSync(exportFile, JSON.stringify(exportData, null, 2));
        console.log(`📁 Progress exported to ${exportFile}`);
        
        // Also update the README with latest progress
        this.updateReadme();
    }

    // 🎯 BEGINNER-FRIENDLY METHODS

    showHelp() {
        console.log(`${colors.bold}${colors.cyan}🎯 Blind 75 Progress Tracker - Your Study Companion${colors.reset}\n`);
        
        console.log(`${colors.bold}📚 Quick Start Guide:${colors.reset}`);
        console.log(`${colors.green}  1. Set up your goals:${colors.reset}        node progress-tracker.js setup`);
        console.log(`${colors.green}  2. See what to do next:${colors.reset}     node progress-tracker.js next`);
        console.log(`${colors.green}  3. Mark problems complete:${colors.reset}  node progress-tracker.js mark 1 js`);
        console.log(`${colors.green}  4. Check your progress:${colors.reset}     node progress-tracker.js stats\n`);
        
        console.log(`${colors.bold}🛠️ All Commands:${colors.reset}`);
        console.log(`${colors.yellow}  Basic Commands:${colors.reset}`);
        console.log(`    stats                    📊 Show your overall progress`);
        console.log(`    list [category]          📝 List problems (optional: by category)`);
        console.log(`    next                     🎯 Get your next recommended problem`);
        console.log(`    setup                    ⚙️  Initial setup and goal setting\n`);
        
        console.log(`${colors.yellow}  Tracking Commands:${colors.reset}`);
        console.log(`    mark <id> <lang>         ✅ Mark problem as completed`);
        console.log(`    unmark <id> <lang>       ❌ Mark problem as incomplete`);
        console.log(`    scan                     🔍 Auto-detect completed problems from files\n`);
        
        console.log(`${colors.yellow}  Advanced Commands:${colors.reset}`);
        console.log(`    export                   📤 Export progress and update README`);
        console.log(`    reset                    🔄 Reset all progress (with confirmation)\n`);
        
        console.log(`${colors.bold}💡 Examples:${colors.reset}`);
        console.log(`${colors.dim}    node progress-tracker.js mark 1 js           # Mark Two Sum as completed in JavaScript`);
        console.log(`    node progress-tracker.js mark 5 java         # Mark Maximum Subarray as completed in Java`);
        console.log(`    node progress-tracker.js list Array          # Show all Array problems`);
        console.log(`    node progress-tracker.js next                # Get personalized recommendation${colors.reset}\n`);
        
        console.log(`${colors.bold}🎓 Study Tips:${colors.reset}`);
        console.log(`${colors.blue}  • Start with 'setup' to create your study plan`);
        console.log(`  • Use 'next' to get problems matching your skill level`);
        console.log(`  • Try solving in both languages to deepen understanding`);
        console.log(`  • Focus on patterns and problem-solving approach, not memorization${colors.reset}\n`);
    }

    setupStudyPlan() {
        console.log(`${colors.bold}${colors.cyan}🎯 Let's Set Up Your Study Plan!${colors.reset}\n`);
        
        // Interactive setup would go here - for now, show guidance
        console.log(`${colors.bold}📝 Study Planning Guide:${colors.reset}\n`);
        
        console.log(`${colors.yellow}1. Choose Your Timeline:${colors.reset}`);
        console.log(`   • 📅 4 weeks (intensive): 3-4 hours/day`);
        console.log(`   • 📅 8 weeks (steady): 1-2 hours/day`);
        console.log(`   • 📅 12+ weeks (gradual): 30-60 min/day\n`);
        
        console.log(`${colors.yellow}2. Pick Your Starting Point:${colors.reset}`);
        console.log(`   • 🟢 Complete beginner: Start with docs/programming-fundamentals/`);
        console.log(`   • 🟡 Some experience: Start with docs/data-structures-algorithms/`);
        console.log(`   • 🟠 Ready for practice: Start with easy Array problems\n`);
        
        console.log(`${colors.yellow}3. Choose Your Language Focus:${colors.reset}`);
        console.log(`   • 🚀 JavaScript: Great for web development interviews`);
        console.log(`   • ☕ Java: Excellent for system design and enterprise roles`);
        console.log(`   • 🎯 Both: Maximum learning and flexibility\n`);
        
        console.log(`${colors.green}✨ Ready to start? Use 'node progress-tracker.js next' for your first problem!${colors.reset}\n`);
    }

    getNextRecommendation() {
        console.log(`${colors.bold}${colors.cyan}🎯 Your Next Recommended Problem${colors.reset}\n`);
        
        // Calculate user's current level
        const jsCompleted = this.progress.stats.overall.javascript.completed;
        const javaCompleted = this.progress.stats.overall.java.completed;
        const totalCompleted = Math.max(jsCompleted, javaCompleted);
        
        // Get all problems and sort by difficulty and completion status
        const allProblems = [];
        for (const [category, data] of Object.entries(this.progress.categories)) {
            data.problems.forEach(problem => {
                allProblems.push({
                    ...problem,
                    category,
                    isCompleted: problem.javascript || problem.java,
                    needsJS: !problem.javascript,
                    needsJava: !problem.java
                });
            });
        }
        
        // Find the best next problem
        let recommendation = null;
        
        // If beginner (0-5 completed), suggest easy problems
        if (totalCompleted < 5) {
            recommendation = allProblems.find(p => 
                p.difficulty === 'Easy' && !p.isCompleted && 
                (p.category === 'Array' || p.category === 'String')
            );
        }
        // If intermediate (5-25 completed), suggest medium problems or easy ones they missed
        else if (totalCompleted < 25) {
            recommendation = allProblems.find(p => 
                (p.difficulty === 'Easy' || p.difficulty === 'Medium') && !p.isCompleted
            );
        }
        // If advanced, suggest any incomplete problem
        else {
            recommendation = allProblems.find(p => !p.isCompleted);
        }
        
        if (!recommendation) {
            // Check for second language practice
            const needsSecondLang = allProblems.find(p => p.needsJS || p.needsJava);
            if (needsSecondLang) {
                const langNeeded = needsSecondLang.needsJS ? 'JavaScript' : 'Java';
                console.log(`${colors.green}🎉 Great job! You've completed all problems in your primary language!${colors.reset}`);
                console.log(`${colors.yellow}💡 Suggestion: Practice "${needsSecondLang.name}" in ${langNeeded} to strengthen your understanding.${colors.reset}\n`);
                this.showProblemDetails(needsSecondLang);
                return;
            } else {
                console.log(`${colors.green}🎉 CONGRATULATIONS! You've completed all 75 problems in both languages!${colors.reset}`);
                console.log(`${colors.yellow}🚀 You're ready for technical interviews! Consider:${colors.reset}`);
                console.log(`   • Mock interviews with friends or platforms`);
                console.log(`   • System design study`);
                console.log(`   • Company-specific problem practice\n`);
                return;
            }
        }
        
        // Show the recommendation
        this.showProblemDetails(recommendation);
        
        // Show why this was recommended
        console.log(`${colors.bold}🤔 Why this problem?${colors.reset}`);
        if (totalCompleted < 5) {
            console.log(`   • Perfect for beginners - ${recommendation.difficulty} difficulty`);
            console.log(`   • Teaches fundamental ${recommendation.category.toLowerCase()} concepts`);
        } else if (totalCompleted < 25) {
            console.log(`   • Good progression from your current level`);
            console.log(`   • Covers important ${recommendation.category} patterns`);
        } else {
            console.log(`   • Filling gaps in your knowledge`);
            console.log(`   • Advanced ${recommendation.category} problem`);
        }
        console.log(`   • Tags: ${recommendation.tags.join(', ')}\n`);
        
        console.log(`${colors.green}📝 To mark as completed: ${colors.bold}node progress-tracker.js mark ${recommendation.id} js${colors.reset}`);
        console.log(`${colors.green}📝 To mark as completed: ${colors.bold}node progress-tracker.js mark ${recommendation.id} java${colors.reset}\n`);
    }

    showProblemDetails(problem) {
        console.log(`${colors.bold}📋 Problem #${problem.id}: ${problem.name}${colors.reset}`);
        console.log(`${colors.cyan}🏷️  Category: ${problem.category}${colors.reset}`);
        console.log(`${colors.yellow}⚡ Difficulty: ${this.getDifficultyIcon(problem.difficulty)} ${problem.difficulty}${colors.reset}`);
        
        const jsStatus = problem.javascript ? `${colors.green}✅ Completed` : `${colors.red}❌ Not completed`;
        const javaStatus = problem.java ? `${colors.green}✅ Completed` : `${colors.red}❌ Not completed`;
        
        console.log(`${colors.blue}🚀 JavaScript: ${jsStatus}${colors.reset}`);
        console.log(`${colors.blue}☕ Java: ${javaStatus}${colors.reset}\n`);
    }

    getDifficultyIcon(difficulty) {
        switch (difficulty) {
            case 'Easy': return '🟢';
            case 'Medium': return '🟡';  
            case 'Hard': return '🔴';
            default: return '⚪';
        }
    }

    unmarkProblem(problemId, language) {
        const langKey = language.toLowerCase().startsWith('j') ? 
                       (language.toLowerCase() === 'js' || language.toLowerCase() === 'javascript' ? 'javascript' : 'java') : 
                       language.toLowerCase();
        
        if (!['javascript', 'java'].includes(langKey)) {
            console.log(`${colors.red}❌ Language must be 'javascript', 'js', or 'java'${colors.reset}`);
            return;
        }

        const { problem, category } = this.findProblemById(problemId);
        if (!problem) {
            console.log(`${colors.red}❌ Problem with ID ${problemId} not found${colors.reset}`);
            console.log(`${colors.yellow}💡 Use 'node progress-tracker.js list' to see all problem IDs${colors.reset}`);
            return;
        }

        problem[langKey] = false;
        problem.dateCompleted[langKey] = null;

        this.updateStats();
        
        console.log(`${colors.yellow}🔄 Unmarked "${problem.name}" for ${langKey}${colors.reset}`);
        console.log(`${colors.cyan}📊 Category: ${category}${colors.reset}`);
        
        this.saveProgress();
    }

    displayEnhancedStats() {
        console.log(`${colors.bold}${colors.cyan}📊 Your Coding Interview Progress${colors.reset}\n`);
        
        const jsStats = this.progress.stats.overall.javascript;
        const javaStats = this.progress.stats.overall.java;
        
        // Overall progress with visual bars
        console.log(`${colors.bold}🎯 Overall Progress:${colors.reset}`);
        console.log(`${colors.blue}🚀 JavaScript: ${jsStats.completed}/75 (${jsStats.percentage}%)${colors.reset}`);
        console.log(`   ${this.createColorProgressBar(jsStats.percentage, 30)}`);
        console.log(`${colors.blue}☕ Java: ${javaStats.completed}/75 (${javaStats.percentage}%)${colors.reset}`);
        console.log(`   ${this.createColorProgressBar(javaStats.percentage, 30)}\n`);
        
        // Category breakdown
        console.log(`${colors.bold}📚 Progress by Category:${colors.reset}`);
        for (const [category, stats] of Object.entries(this.progress.stats.byCategory)) {
            console.log(`\n${colors.bold}${category}:${colors.reset}`);
            console.log(`  🚀 JS: ${stats.javascript.completed}/${stats.javascript.total} ${this.createColorProgressBar(stats.javascript.percentage, 20)}`);
            console.log(`  ☕ Java: ${stats.java.completed}/${stats.java.total} ${this.createColorProgressBar(stats.java.percentage, 20)}`);
        }
        
        // Study insights
        const daysStudying = this.calculateStudyDays();
        const completionRate = Math.round(((jsStats.completed + javaStats.completed) / 150) * 100);
        
        console.log(`\n${colors.bold}📈 Study Insights:${colors.reset}`);
        console.log(`${colors.green}📅 Days studying: ${daysStudying}${colors.reset}`);
        console.log(`${colors.green}🎯 Overall completion: ${completionRate}%${colors.reset}`);
        
        if (completionRate < 20) {
            console.log(`${colors.yellow}💡 You're just getting started! Focus on easy Array and String problems.${colors.reset}`);
        } else if (completionRate < 50) {
            console.log(`${colors.yellow}💡 Great progress! Try mixing easy and medium difficulty problems.${colors.reset}`);
        } else if (completionRate < 80) {
            console.log(`${colors.yellow}💡 You're doing excellent! Focus on the harder problems and second language.${colors.reset}`);
        } else {
            console.log(`${colors.green}🎉 Amazing! You're nearly interview-ready! Practice mock interviews now.${colors.reset}`);
        }
        
        console.log(`\n${colors.cyan}🎯 Next step: Use 'node progress-tracker.js next' for your next problem!${colors.reset}\n`);
    }

    createColorProgressBar(percentage, width = 20) {
        const filled = Math.round((percentage / 100) * width);
        const empty = width - filled;
        
        let bar = '';
        for (let i = 0; i < filled; i++) {
            bar += `${colors.green}█${colors.reset}`;
        }
        for (let i = 0; i < empty; i++) {
            bar += `${colors.dim}░${colors.reset}`;
        }
        
        return `${bar} ${percentage}%`;
    }

    calculateStudyDays() {
        if (!this.progress.metadata.studyStartDate) {
            return 'Not set';
        }
        
        const startDate = new Date(this.progress.metadata.studyStartDate);
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        return diffDays;
    }

    resetProgress() {
        console.log('⚠️  This will reset ALL progress. Are you sure? (This action cannot be undone)');
        console.log('To confirm, run: node progress-tracker.js reset-confirm');
    }

    scanProjectFiles() {
        console.log('🔍 Scanning project files for solved problems...');
        
        const rootDir = path.join(__dirname, '..');
        const weekFolders = fs.readdirSync(rootDir).filter(name => 
            name.startsWith('week-') && fs.statSync(path.join(rootDir, name)).isDirectory()
        );
        
        let foundSolutions = 0;
        
        weekFolders.forEach(weekFolder => {
            const weekPath = path.join(rootDir, weekFolder);
            const dayFolders = fs.readdirSync(weekPath).filter(name => 
                name.startsWith('day-') && fs.statSync(path.join(weekPath, name)).isDirectory()
            );
            
            dayFolders.forEach(dayFolder => {
                const dayPath = path.join(weekPath, dayFolder);
                const files = fs.readdirSync(dayPath);
                
                const hasJavaScript = files.some(file => file.endsWith('.js') && file !== 'README.md');
                const hasJava = files.some(file => file.endsWith('.java'));
                
                if (hasJavaScript || hasJava) {
                    // Try to match folder name to problem
                    const folderName = dayFolder.replace('day-', '').replace(/\d+-/, '');
                    const problemName = this.guessProblemFromFolder(folderName);
                    
                    if (problemName) {
                        const problem = this.findProblemByName(problemName);
                        if (problem) {
                            let updated = false;
                            
                            if (hasJavaScript && !problem.problem.javascript) {
                                problem.problem.javascript = true;
                                problem.problem.dateCompleted = problem.problem.dateCompleted || new Date().toISOString();
                                updated = true;
                                foundSolutions++;
                            }
                            
                            if (hasJava && !problem.problem.java) {
                                problem.problem.java = true;
                                problem.problem.dateCompleted = problem.problem.dateCompleted || new Date().toISOString();
                                updated = true;
                                foundSolutions++;
                            }
                            
                            if (updated) {
                                console.log(`✅ Auto-detected: ${problem.problem.name} (${hasJavaScript ? 'JS' : ''} ${hasJava ? 'Java' : ''})`);
                            }
                        }
                    }
                }
            });
        });
        
        if (foundSolutions > 0) {
            this.updateStats();
            this.saveProgress();
            this.updateReadme();
            console.log(`🎉 Found ${foundSolutions} completed solutions!`);
        } else {
            console.log('📝 No new solutions detected. Make sure your files follow the naming convention.');
        }
    }
    
    guessProblemFromFolder(folderName) {
        // Convert folder names to problem names
        const nameMap = {
            'tip-calculator': 'Two Sum', // Your current example
            'two-sum': 'Two Sum',
            'best-time-buy-sell-stock': 'Best Time to Buy and Sell Stock',
            'contains-duplicate': 'Contains Duplicate',
            'product-array-except-self': 'Product of Array Except Self',
            'maximum-subarray': 'Maximum Subarray',
            'maximum-product-subarray': 'Maximum Product Subarray',
            'find-minimum-rotated-sorted-array': 'Find Minimum in Rotated Sorted Array',
            'search-rotated-sorted-array': 'Search in Rotated Sorted Array',
            '3sum': '3Sum',
            'container-most-water': 'Container With Most Water'
            // Add more mappings as needed
        };
        
        return nameMap[folderName] || null;
    }
    
    findProblemByName(name) {
        for (const [category, data] of Object.entries(this.progress.categories)) {
            const problem = data.problems.find(p => p.name === name);
            if (problem) {
                return { problem, category };
            }
        }
        return null;
    }

    resetProgressConfirm() {
        // Reset all problems
        for (const [category, data] of Object.entries(this.progress.categories)) {
            data.problems.forEach(problem => {
                problem.javascript = false;
                problem.java = false;
                problem.dateCompleted.javascript = null;
                problem.dateCompleted.java = null;
            });
        }

        // Reset stats
        this.progress.stats.recentActivity = [];
        this.updateStats();
        this.saveProgress();
        this.updateReadme();
        
        console.log('🔄 All progress has been reset!');
    }

    listProblems(category = null) {
        console.log('\n📋 BLIND 75 PROBLEMS LIST\n');
        
        for (const [cat, data] of Object.entries(this.progress.categories)) {
            if (category && cat.toLowerCase() !== category.toLowerCase()) continue;
            
            console.log(`\n${cat.toUpperCase()} (${data.count} problems):`);
            console.log('─'.repeat(50));
            
            data.problems.forEach(problem => {
                const jsStatus = problem.javascript ? '✅' : '❌';
                const javaStatus = problem.java ? '✅' : '❌';
                const difficulty = problem.difficulty;
                const difficultyEmoji = difficulty === 'Easy' ? '🟢' : difficulty === 'Medium' ? '🟡' : '🔴';
                
                console.log(`${problem.id.toString().padStart(2)}: ${problem.name} ${difficultyEmoji}`);
                console.log(`    JS: ${jsStatus} | Java: ${javaStatus} | Tags: ${problem.tags.join(', ')}`);
            });
        }
    }
    
    quickList() {
        console.log('📋 QUICK REFERENCE - All Problems by ID\n');
        
        const allProblems = [];
        for (const [category, data] of Object.entries(this.progress.categories)) {
            data.problems.forEach(problem => {
                allProblems.push({
                    ...problem,
                    category
                });
            });
        }
        
        // Sort by ID
        allProblems.sort((a, b) => a.id - b.id);
        
        allProblems.forEach(problem => {
            const jsStatus = problem.javascript ? '✅' : '❌';
            const javaStatus = problem.java ? '✅' : '❌';
            const difficultyEmoji = problem.difficulty === 'Easy' ? '🟢' : 
                                   problem.difficulty === 'Medium' ? '🟡' : '🔴';
            
            console.log(`${problem.id.toString().padStart(2, ' ')}. ${problem.name.padEnd(40)} ${difficultyEmoji} | JS: ${jsStatus} Java: ${javaStatus} | ${problem.category}`);
        });
        
        console.log('\n💡 Usage: node progress-tracker.js mark <id> <javascript|java>');
    }
}

// CLI Interface
function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    
    const tracker = new ProgressTracker();
    
    switch (command) {
        case 'mark':
            if (args.length < 3) {
                console.error('Usage: node progress-tracker.js mark <problem-id> <javascript|java> [true|false]');
                process.exit(1);
            }
            const problemId = args[1];
            let language = args[2].toLowerCase();
            
            // Convert short forms to full names
            if (language === 'js') language = 'javascript';
            if (language === 'j') language = 'java';
            
            const completed = args[3] === 'false' ? false : true;
            
            if (!['javascript', 'java'].includes(language)) {
                console.error(`${colors.red}Language must be "javascript", "js", "java", or "j"${colors.reset}`);
                process.exit(1);
            }
            
            tracker.markProblem(problemId, language, completed);
            break;
            
        case 'stats':
            tracker.displayEnhancedStats();
            break;
            
        case 'list':
            const category = args[1];
            tracker.listProblems(category);
            break;
            
        case 'quick':
            tracker.quickList();
            break;
            
        case 'export':
            tracker.exportProgress();
            break;
            
        case 'scan':
            tracker.scanProjectFiles();
            break;
            
        case 'reset':
            tracker.resetProgress();
            break;
            
        case 'reset-confirm':
            tracker.resetProgressConfirm();
            break;
            
        case 'help':
        case '--help':
        case '-h':
            tracker.showHelp();
            break;
            
        case 'setup':
            tracker.setupStudyPlan();
            break;
            
        case 'next':
            tracker.getNextRecommendation();
            break;
            
        case 'unmark':
            if (args.length < 3) {
                console.error(`${colors.red}Usage: node progress-tracker.js unmark <problem-id> <javascript|java>${colors.reset}`);
                process.exit(1);
            }
            tracker.unmarkProblem(args[1], args[2]);
            break;
            
        default:
            if (command) {
                console.log(`${colors.red}❌ Unknown command: ${command}${colors.reset}\n`);
            }
            tracker.showHelp();
    }
}

if (require.main === module) {
    main();
}

module.exports = ProgressTracker;