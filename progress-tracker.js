#!/usr/bin/env node

/**
 * Blind 75 Progress Tracker
 * 
 * This utility helps track your progress through the Blind 75 problems
 * for both JavaScript and Java implementations.
 * 
 * Usage:
 *   node progress-tracker.js mark <problem-id> <language> [completed]
 *   node progress-tracker.js stats
 *   node progress-tracker.js reset
 *   node progress-tracker.js export
 */

const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, 'progress-tracker.json');
const README_FILE = path.join(__dirname, 'README.md');

class ProgressTracker {
    constructor() {
        this.loadProgress();
    }

    loadProgress() {
        try {
            const data = fs.readFileSync(PROGRESS_FILE, 'utf8');
            this.progress = JSON.parse(data);
        } catch (error) {
            console.error('Error loading progress file:', error.message);
            process.exit(1);
        }
    }

    saveProgress() {
        try {
            this.progress.metadata.lastUpdated = new Date().toISOString();
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(this.progress, null, 2));
            console.log('✅ Progress saved successfully!');
        } catch (error) {
            console.error('Error saving progress:', error.message);
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

    resetProgress() {
        console.log('⚠️  This will reset ALL progress. Are you sure? (This action cannot be undone)');
        console.log('To confirm, run: node progress-tracker.js reset-confirm');
    }

    scanProjectFiles() {
        console.log('🔍 Scanning project files for solved problems...');
        
        const weekFolders = fs.readdirSync(__dirname).filter(name => 
            name.startsWith('week-') && fs.statSync(path.join(__dirname, name)).isDirectory()
        );
        
        let foundSolutions = 0;
        
        weekFolders.forEach(weekFolder => {
            const weekPath = path.join(__dirname, weekFolder);
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
            const language = args[2];
            const completed = args[3] === 'false' ? false : true;
            
            if (!['javascript', 'java'].includes(language)) {
                console.error('Language must be "javascript" or "java"');
                process.exit(1);
            }
            
            tracker.markProblem(problemId, language, completed);
            break;
            
        case 'stats':
            tracker.displayStats();
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
            
        default:
            console.log('📊 Blind 75 Progress Tracker');
            console.log('');
            console.log('Commands:');
            console.log('  mark <id> <lang>     Mark problem as completed');
            console.log('  stats                Show progress statistics');
            console.log('  list [category]      List all problems by category');
            console.log('  quick                Quick list of all problems with IDs');
            console.log('  scan                 Auto-detect completed problems from files');
            console.log('  export               Export progress to file & update README');
            console.log('  reset                Reset all progress');
            console.log('');
            console.log('Examples:');
            console.log('  node progress-tracker.js mark 1 javascript');
            console.log('  node progress-tracker.js mark 1 java false');
            console.log('  node progress-tracker.js stats');
            console.log('  node progress-tracker.js quick');
            console.log('  node progress-tracker.js scan');
            console.log('  node progress-tracker.js list Array');
    }
}

if (require.main === module) {
    main();
}

module.exports = ProgressTracker;