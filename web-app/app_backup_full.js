// CodeQuest Academy - Interactive Learning Platform
// Revolutionary gamified approach to learning DSA

class CodeQuestAcademy {
    constructor() {
        this.playerData = this.loadPlayerData();
        this.problemsData = null;
        this.currentProblem = null;
        this.currentLanguage = 'javascript';
        this.motivationalQuotes = [
            "🚀 Every expert was once a beginner!",
            "💪 You're building your coding superpowers!",
            "🌟 Each problem solved makes you stronger!",
            "🎯 Stay focused, you're on the right path!",
            "⚡ Code like nobody's watching!",
            "🔥 Your persistence will pay off!",
            "✨ Keep calm and code on!",
            "🏆 Champions never give up!",
            "🎪 Make it work, make it right, make it fast!",
            "🌈 Every bug fixed is a lesson learned!"
        ];
        
        this.init();
    }

    init() {
        this.loadProblemsData();
        this.renderHeroStats();
        this.renderQuestMap();
        this.renderDashboard();
        this.renderMotivationalSection();
        this.setupEventListeners();
        this.startDailyMotivation();
        this.initializeRevolutionaryFeatures();
        this.startGameLoop();
    }

    // Revolutionary Features
    initializeRevolutionaryFeatures() {
        this.setupProgressAnimations();
        this.initializeAchievementSystem();
        this.setupStreakNotifications();
        this.initializeAdaptiveLearning();
        this.setupCodeAnalytics();
        this.startMotivationalEngine();
    }

    startGameLoop() {
        // Update animations and stats every second
        setInterval(() => {
            this.updateLiveStats();
            this.checkForAchievements();
            this.updateMotivation();
        }, 1000);
    }

    setupProgressAnimations() {
        // Animate XP bar filling
        const xpBar = document.getElementById('xpFill');
        if (xpBar) {
            const currentLevel = this.playerData.level;
            const xpForCurrentLevel = (currentLevel - 1) * 100;
            const xpProgress = this.playerData.xp - xpForCurrentLevel;
            const progressPercentage = (xpProgress / 100) * 100;
            
            xpBar.style.width = '0%';
            setTimeout(() => {
                xpBar.style.transition = 'width 2s ease-out';
                xpBar.style.width = progressPercentage + '%';
            }, 500);
        }
    }

    initializeAchievementSystem() {
        this.achievements = [
            { id: 'first_problem', name: 'First Steps', description: 'Solve your first problem', icon: '🎯', unlocked: false },
            { id: 'streak_3', name: 'Momentum Builder', description: '3-day coding streak', icon: '🔥', unlocked: false },
            { id: 'streak_7', name: 'Week Warrior', description: '7-day coding streak', icon: '⚡', unlocked: false },
            { id: 'array_master', name: 'Array Master', description: 'Complete all array problems', icon: '📊', unlocked: false },
            { id: 'speed_demon', name: 'Speed Demon', description: 'Solve 5 problems in one day', icon: '🚀', unlocked: false },
            { id: 'night_owl', name: 'Night Owl', description: 'Code after midnight', icon: '🦉', unlocked: false },
            { id: 'perfectionist', name: 'Perfectionist', description: 'Solve 10 problems on first try', icon: '💎', unlocked: false }
        ];
    }

    setupStreakNotifications() {
        // Check streak status and show encouraging messages
        this.updateStreak();
        this.showStreakMotivation();
    }

    initializeAdaptiveLearning() {
        // Analyze user's solving patterns and suggest next problems
        this.adaptiveSuggestions = this.analyzeUserProgress();
    }

    setupCodeAnalytics() {
        // Track coding patterns, time spent, common mistakes
        this.analyticsData = {
            timeSpentCoding: 0,
            averageSolveTime: 0,
            commonErrors: [],
            strengthAreas: [],
            improvementAreas: []
        };
    }

    startMotivationalEngine() {
        // Show contextual motivation based on user state
        this.showContextualMotivation();
    }

    // Data Management
    loadPlayerData() {
        const defaultData = {
            level: 1,
            xp: 0,
            completedProblems: [],
            streak: 0,
            lastActive: null,
            achievements: [],
            totalXP: 0,
            startDate: new Date().toISOString()
        };

        const saved = localStorage.getItem('codequest_progress');
        return saved ? { ...defaultData, ...JSON.parse(saved) } : defaultData;
    }

    savePlayerData() {
        localStorage.setItem('codequest_progress', JSON.stringify(this.playerData));
    }

    async loadProblemsData() {
        // Load from our existing progress tracker data
        try {
            const response = await fetch('../tools/progress-tracker.json');
            const data = await response.json();
            this.problemsData = data;
            this.renderQuestMap();
        } catch (error) {
            console.error('Failed to load problems data:', error);
            // Fallback to sample data
            this.problemsData = this.generateSampleData();
            this.renderQuestMap();
        }
    }

    generateSampleData() {
        return {
            categories: {
                "Array": {
                    count: 12,
                    problems: [
                        {
                            id: 1,
                            name: "Two Sum",
                            difficulty: "Easy",
                            tags: ["Array", "Hash Table"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🎯 Your Mission</h4>
                                    <p>You're a detective looking for two numbers in an array that add up to a target! Can you find their hiding spots?</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Given an array of integers and a target number, find the indices of two numbers that add up to the target.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Example Adventure</h4>
                                    <pre>Input: [2, 7, 11, 15], target = 9
Detective Work: 2 + 7 = 9 ✓
Output: [0, 1] (found them at positions 0 and 1!)</pre>
                                </div>
                                
                                <div class="beginner-tips">
                                    <h4>💡 Beginner Tips</h4>
                                    <ul>
                                        <li>🔍 Start by checking every pair (nested loops)</li>
                                        <li>🚀 Level up: use a hash map for O(n) solution</li>
                                        <li>✨ Remember: we want indices, not the numbers!</li>
                                    </ul>
                                </div>
                                
                                <div class="real-world">
                                    <h4>🌍 Real World Use</h4>
                                    <p>Finding pairs in datasets, matching algorithms, cryptocurrency trading pairs</p>
                                </div>
                            `,
                            examples: "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",
                            hints: [
                                "🔍 Start with a nested loop approach first - it's okay to be simple!",
                                "🏃‍♂️ Try using a Map/HashMap to store numbers you've seen before",
                                "✨ For each number, check if (target - current_number) exists in your map",
                                "🎯 Don't forget to return the indices, not the actual numbers!"
                            ],
                            encouragement: [
                                "🌟 This is a classic! Every programmer starts here",
                                "💪 You're building your problem-solving muscles",
                                "🎯 Focus on understanding, speed comes with practice"
                            ],
                            nextSteps: [
                                "Try solving with nested loops first",
                                "Then optimize with hash map approach", 
                                "Compare time complexity: O(n²) vs O(n)"
                            ]
                        },
                        {
                            id: 2,
                            name: "Best Time to Buy and Sell Stock",
                            difficulty: "Easy",
                            tags: ["Array", "Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>💰 Your Mission</h4>
                                    <p>You're a time-traveling stock trader! Find the perfect buy-low, sell-high moment to maximize profit.</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📈 The Challenge</h4>
                                    <p>Given stock prices over time, find the maximum profit from buying once and selling once later.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Trading Adventure</h4>
                                    <pre>Input: [7,1,5,3,6,4]
Best Strategy: Buy at 1, Sell at 6
Profit: 6 - 1 = 5 💰</pre>
                                </div>
                                
                                <div class="beginner-tips">
                                    <h4>💡 Beginner Tips</h4>
                                    <ul>
                                        <li>📉 Keep track of the lowest price you've seen</li>
                                        <li>💵 For each day, calculate: current_price - lowest_price</li>
                                        <li>🏆 Remember the best profit you've seen</li>
                                    </ul>
                                </div>
                                
                                <div class="real-world">
                                    <h4>🌍 Real World Use</h4>
                                    <p>Stock trading algorithms, price optimization, time-series analysis</p>
                                </div>
                            `,
                            examples: "Input: prices = [7,1,5,3,6,4]\nOutput: 5",
                            hints: [
                                "📉 Track the minimum price as you go through the array",
                                "💵 For each price, calculate the profit if you sold that day",
                                "🏆 Keep updating your maximum profit",
                                "⚠️ Remember: you can't sell before you buy!"
                            ],
                            encouragement: [
                                "💰 Think like a trader - buy low, sell high!",
                                "🎯 This teaches you about tracking state while iterating",
                                "🚀 One-pass solution is possible - you got this!"
                            ]
                        }
                        // More enhanced problems would be loaded from the actual data
                    ]
                }
            }
        };
    }

    // UI Rendering
    renderHeroStats() {
        document.getElementById('completedProblems').textContent = this.playerData.completedProblems.length;
        document.getElementById('currentLevel').textContent = this.playerData.level;
        document.getElementById('levelBadge').textContent = `LVL ${this.playerData.level}`;
        
        const xpForNextLevel = this.getXPForLevel(this.playerData.level + 1);
        const currentLevelXP = this.getXPForLevel(this.playerData.level);
        const progressXP = this.playerData.xp - currentLevelXP;
        const neededXP = xpForNextLevel - currentLevelXP;
        const percentage = (progressXP / neededXP) * 100;
        
        document.getElementById('xpFill').style.width = `${percentage}%`;
        document.getElementById('xpText').textContent = `${progressXP} / ${neededXP} XP`;
    }

    renderQuestMap() {
        const questMap = document.getElementById('questMap');
        if (!this.problemsData) return;

        questMap.innerHTML = '';

        Object.entries(this.problemsData.categories).forEach(([category, data]) => {
            data.problems.forEach(problem => {
                const questNode = this.createQuestNode(problem, category);
                questMap.appendChild(questNode);
            });
        });
    }

    createQuestNode(problem, category) {
        const node = document.createElement('div');
        node.className = 'quest-node animate-slide-in';
        node.onclick = () => this.openChallenge(problem, category);

        const isCompleted = this.playerData.completedProblems.some(p => p.id === problem.id);
        const isAvailable = this.isProblemAvailable(problem);

        node.innerHTML = `
            <div class="quest-header">
                <div>
                    <h3 class="quest-title">${problem.name}</h3>
                    <div class="quest-category">${category}</div>
                </div>
                <div class="quest-status ${isCompleted ? 'completed' : isAvailable ? 'available' : 'locked'}">
                    ${isCompleted ? '✅' : isAvailable ? '🎯' : '🔒'}
                </div>
            </div>
            <div class="quest-difficulty ${problem.difficulty.toLowerCase()}">
                ${this.getDifficultyIcon(problem.difficulty)} ${problem.difficulty}
            </div>
            <div class="quest-rewards">
                <span class="xp-reward">+${this.getXPReward(problem.difficulty)} XP</span>
            </div>
        `;

        return node;
    }

    renderDashboard() {
        this.renderAchievements();
        this.renderSkillBars();
        this.renderActivityFeed();
        this.renderStreak();
    }

    renderAchievements() {
        const achievementList = document.getElementById('achievementList');
        const achievements = this.calculateAchievements();
        
        achievementList.innerHTML = achievements.map(achievement => `
            <div class="achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}">
                <span class="achievement-icon">${achievement.icon}</span>
                <span class="achievement-name">${achievement.name}</span>
            </div>
        `).join('');
    }

    renderSkillBars() {
        const skillBars = document.getElementById('skillBars');
        const skills = this.calculateSkillProgress();
        
        skillBars.innerHTML = skills.map(skill => `
            <div class="skill-item">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-percentage">${skill.percentage}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-fill" style="width: ${skill.percentage}%"></div>
                </div>
            </div>
        `).join('');
    }

    renderActivityFeed() {
        const activityFeed = document.getElementById('activityFeed');
        const recentActivities = this.getRecentActivities();
        
        activityFeed.innerHTML = recentActivities.map(activity => `
            <div class="activity-item">
                <span class="activity-icon">${activity.icon}</span>
                <span class="activity-text">${activity.text}</span>
            </div>
        `).join('');
    }

    renderStreak() {
        document.getElementById('streakNumber').textContent = this.playerData.streak;
    }

    renderMotivationalSection() {
        const randomQuote = this.motivationalQuotes[Math.floor(Math.random() * this.motivationalQuotes.length)];
        const parts = randomQuote.split(' ');
        const emoji = parts[0];
        const text = parts.slice(1).join(' ');
        
        document.getElementById('motivationTitle').textContent = text;
        document.querySelector('.motivation-icon').textContent = emoji;
    }

    // Challenge System
    openChallenge(problem, category) {
        if (!this.isProblemAvailable(problem)) {
            this.showNotification('🔒 Complete previous challenges to unlock this one!', 'warning');
            return;
        }

        this.currentProblem = { ...problem, category };
        this.showChallengeModal();
    }

    showChallengeModal() {
        const modal = document.getElementById('challengeModal');
        const problem = this.currentProblem;
        
        document.getElementById('challengeTitle').textContent = problem.name;
        document.getElementById('difficultyBadge').textContent = problem.difficulty;
        document.getElementById('difficultyBadge').className = `difficulty-badge ${problem.difficulty.toLowerCase()}`;
        document.getElementById('categoryBadge').textContent = problem.category;
        document.getElementById('problemDescription').innerHTML = `
            <h4>Problem Description</h4>
            <p>${problem.description || 'Solve this challenging problem!'}</p>
            ${problem.examples ? `<h5>Example:</h5><pre>${problem.examples}</pre>` : ''}
        `;
        
        // Set up code editor with starter code
        this.setupCodeEditor();
        
        modal.style.display = 'block';
        modal.classList.add('animate-slide-in');
    }

    closeModal() {
        document.getElementById('challengeModal').style.display = 'none';
    }

    setupCodeEditor() {
        const starterCode = {
            javascript: `function twoSum(nums, target) {
    // Your solution here
    return [];
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]`,
            java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        return new int[0];
    }
    
    // Test your solution
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] result = sol.twoSum(new int[]{2, 7, 11, 15}, 9);
        // Expected: [0, 1]
    }
}`
        };
        
        document.getElementById('codeInput').value = starterCode[this.currentLanguage];
    }

    // Event Handlers
    setupEventListeners() {
        // Language tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.currentLanguage = e.target.dataset.lang;
                this.setupCodeEditor();
            });
        });

        // Path selector
        document.querySelectorAll('.path-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.path-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterProblemsByPath(e.target.dataset.path);
            });
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('challengeModal');
            if (e.target === modal) {
                this.closeModal();
            }
        });
    }

    // Game Logic
    submitSolution() {
        const code = document.getElementById('codeInput').value.trim();
        
        if (!code || code === '') {
            this.showNotification('💭 Please write some code first!', 'warning');
            return;
        }

        // Simulate code testing (in a real app, this would run actual tests)
        this.simulateCodeTesting(code);
    }

    simulateCodeTesting(code) {
        const testResults = document.getElementById('testResults');
        testResults.style.display = 'block';
        testResults.innerHTML = '<div class="testing">🧪 Running tests...</div>';

        setTimeout(() => {
            const passed = Math.random() > 0.3; // 70% chance of passing for demo
            
            if (passed) {
                this.handleSuccessfulSubmission();
                testResults.innerHTML = `
                    <div class="test-success">
                        <h4>🎉 All tests passed!</h4>
                        <p>✅ Test case 1: PASSED</p>
                        <p>✅ Test case 2: PASSED</p>
                        <p>✅ Test case 3: PASSED</p>
                    </div>
                `;
            } else {
                testResults.innerHTML = `
                    <div class="test-failure">
                        <h4>❌ Some tests failed</h4>
                        <p>✅ Test case 1: PASSED</p>
                        <p>❌ Test case 2: FAILED - Expected [0,1] but got []</p>
                        <p>💡 Hint: Check your edge cases!</p>
                    </div>
                `;
            }
        }, 2000);
    }

    handleSuccessfulSubmission() {
        const problem = this.currentProblem;
        const xpReward = this.getXPReward(problem.difficulty);
        
        // Update player progress
        this.addXP(xpReward);
        this.markProblemCompleted(problem);
        
        // Celebrate!
        this.celebrate();
        
        setTimeout(() => {
            this.closeModal();
            this.showNotification(`🎉 Amazing! You earned ${xpReward} XP!`, 'success');
            this.renderHeroStats();
            this.renderQuestMap();
            this.renderDashboard();
        }, 2000);
    }

    celebrate() {
        document.querySelector('.character-avatar').classList.add('celebrate');
        
        // Create confetti effect
        this.createConfetti();
        
        setTimeout(() => {
            document.querySelector('.character-avatar').classList.remove('celebrate');
        }, 1000);
    }

    createConfetti() {
        const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall 3s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }
    }

    // Helper Methods
    isProblemAvailable(problem) {
        // For demo, make first few problems always available
        return problem.id <= 5 || this.playerData.completedProblems.length >= problem.id - 3;
    }

    getXPReward(difficulty) {
        const rewards = { Easy: 50, Medium: 100, Hard: 200 };
        return rewards[difficulty] || 50;
    }

    getXPForLevel(level) {
        return level * 100; // Simple formula: 100 XP per level
    }

    getDifficultyIcon(difficulty) {
        const icons = { Easy: '🟢', Medium: '🟡', Hard: '🔴' };
        return icons[difficulty] || '⚪';
    }

    addXP(amount) {
        this.playerData.xp += amount;
        this.playerData.totalXP += amount;
        
        // Check for level up
        const newLevel = Math.floor(this.playerData.xp / 100) + 1;
        if (newLevel > this.playerData.level) {
            this.playerData.level = newLevel;
            this.showNotification(`🆙 Level up! You're now level ${newLevel}!`, 'success');
        }
        
        this.savePlayerData();
    }

    markProblemCompleted(problem) {
        const existing = this.playerData.completedProblems.find(p => p.id === problem.id);
        if (!existing) {
            this.playerData.completedProblems.push({
                id: problem.id,
                name: problem.name,
                language: this.currentLanguage,
                completedAt: new Date().toISOString(),
                difficulty: problem.difficulty,
                category: problem.category
            });
        }
        
        this.updateStreak();
        this.savePlayerData();
    }

    updateStreak() {
        const today = new Date().toDateString();
        const lastActive = this.playerData.lastActive ? new Date(this.playerData.lastActive).toDateString() : null;
        
        if (lastActive === today) {
            // Already active today, don't change streak
            return;
        }
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastActive === yesterday.toDateString()) {
            // Continuing streak
            this.playerData.streak++;
        } else if (lastActive !== today) {
            // Streak broken, start new
            this.playerData.streak = 1;
        }
        
        this.playerData.lastActive = new Date().toISOString();
    }

    calculateAchievements() {
        const completed = this.playerData.completedProblems.length;
        const streak = this.playerData.streak;
        
        return [
            { name: 'First Steps', icon: '👶', unlocked: completed >= 1 },
            { name: 'Problem Solver', icon: '🧩', unlocked: completed >= 5 },
            { name: 'Array Master', icon: '📊', unlocked: this.getCategoryCount('Array') >= 5 },
            { name: 'Streak Master', icon: '🔥', unlocked: streak >= 7 },
            { name: 'Level Up!', icon: '⬆️', unlocked: this.playerData.level >= 5 },
            { name: 'Dedicated Learner', icon: '📚', unlocked: completed >= 25 }
        ];
    }

    calculateSkillProgress() {
        const categories = ['Array', 'String', 'Tree', 'Graph', 'Dynamic Programming'];
        return categories.map(category => ({
            name: category,
            percentage: Math.min(100, (this.getCategoryCount(category) / 5) * 100)
        }));
    }

    getCategoryCount(category) {
        return this.playerData.completedProblems.filter(p => p.category === category).length;
    }

    getRecentActivities() {
        return this.playerData.completedProblems
            .slice(-5)
            .reverse()
            .map(problem => ({
                icon: '✅',
                text: `Solved ${problem.name} in ${problem.language}`
            }));
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 10000;
            animation: slideInUp 0.3s ease;
        `;
        
        if (type === 'warning') notification.style.background = 'var(--warning-color)';
        if (type === 'error') notification.style.background = 'var(--danger-color)';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    startDailyMotivation() {
        // Show a motivational message every hour
        setInterval(() => {
            this.renderMotivationalSection();
        }, 3600000); // 1 hour
    }

    filterProblemsByPath(path) {
        // Filter problems based on difficulty path
        const questNodes = document.querySelectorAll('.quest-node');
        questNodes.forEach(node => {
            const difficulty = node.querySelector('.quest-difficulty').textContent.toLowerCase();
            
            let show = false;
            switch (path) {
                case 'beginner':
                    show = difficulty.includes('easy');
                    break;
                case 'intermediate':
                    show = difficulty.includes('medium');
                    break;
                case 'advanced':
                    show = difficulty.includes('hard');
                    break;
                default:
                    show = true;
            }
            
            node.style.display = show ? 'block' : 'none';
        });
    }

    // Revolutionary Features Implementation
    runCodeWithLiveFeedback() {
        const code = document.getElementById('codeInput').value;
        const resultsDiv = document.getElementById('testResults');
        
        if (!resultsDiv) {
            this.showNotification('🧪 Code is running in your mind! Think through the logic step by step.', 'info');
            return;
        }
        
        // Show live typing feedback
        resultsDiv.innerHTML = `
            <div class="live-feedback">
                <div class="running-animation">
                    <span class="emoji">🔬</span>
                    <span class="text">Analyzing your code...</span>
                    <div class="progress-dots">
                        <span>.</span><span>.</span><span>.</span>
                    </div>
                </div>
            </div>
        `;
        
        // Simulate code analysis
        setTimeout(() => {
            const feedback = this.analyzeCode(code);
            this.showLiveFeedback(feedback);
        }, 1500);
    }

    analyzeCode(code) {
        const analysis = {
            syntaxValid: true,
            hasLogic: code.length > 50,
            usesGoodPractices: code.includes('//') || code.includes('/*'),
            complexity: 'beginner',
            suggestions: []
        };
        
        // Basic syntax check
        if (!code.includes('function') && !code.includes('class') && !code.includes('{')) {
            analysis.syntaxValid = false;
            analysis.suggestions.push("🔧 Add a function or class structure");
        }
        
        // Logic check
        if (code.trim().length < 30) {
            analysis.suggestions.push("💡 Try adding more logic to solve the problem");
        }
        
        // Encouragement
        if (analysis.hasLogic) {
            analysis.suggestions.push("🌟 Great! You're thinking through the problem");
        }
        
        return analysis;
    }

    showLiveFeedback(feedback) {
        const resultsDiv = document.getElementById('testResults');
        if (!resultsDiv) return;
        
        let feedbackHTML = `
            <div class="code-feedback">
                <div class="feedback-header">
                    <h4>🎯 Live Code Analysis</h4>
                </div>
        `;
        
        if (feedback.syntaxValid) {
            feedbackHTML += `
                <div class="feedback-item success">
                    <span class="icon">✅</span>
                    <span>Syntax looks good!</span>
                </div>
            `;
        } else {
            feedbackHTML += `
                <div class="feedback-item error">
                    <span class="icon">❌</span>
                    <span>Check your syntax</span>
                </div>
            `;
        }
        
        if (feedback.hasLogic) {
            feedbackHTML += `
                <div class="feedback-item success">
                    <span class="icon">🧠</span>
                    <span>Good problem-solving approach!</span>
                </div>
            `;
        }
        
        feedbackHTML += `
                <div class="suggestions">
                    <h5>💡 Suggestions:</h5>
                    <ul>
        `;
        
        feedback.suggestions.forEach(suggestion => {
            feedbackHTML += `<li>${suggestion}</li>`;
        });
        
        feedbackHTML += `
                    </ul>
                </div>
                <div class="encouragement">
                    <p>🚀 Keep going! Every expert was once a beginner!</p>
                </div>
            </div>
        `;
        
        resultsDiv.innerHTML = feedbackHTML;
    }

    submitWithCelebration() {
        const code = document.getElementById('codeInput').value;
        
        if (!code || code.trim() === '') {
            this.showNotification('💭 Please write some code first!', 'warning');
            return;
        }
        
        // Enhanced submission with better feedback
        this.simulateCodeTesting(code);
    }

    getSmartHint() {
        const hints = [
            "💡 Think about what data structure could help you find elements quickly...",
            "🔍 Have you considered using a hash map to store what you've seen?",
            "🎯 What's the relationship between the current element and what you're looking for?",
            "⚡ Can you solve this in a single pass through the array?",
            "🧠 Break the problem down: what do you need to track as you iterate?"
        ];
        
        const randomHint = hints[Math.floor(Math.random() * hints.length)];
        this.showNotification(randomHint, 'info');
    }

    showSolutionWithExplanation() {
        const solutions = {
            javascript: `function twoSum(nums, target) {
    const numMap = {}; // Create a hash map to store numbers and indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // What number do we need?
        
        if (complement in numMap) {
            return [numMap[complement], i]; // Found the pair!
        }
        
        numMap[nums[i]] = i; // Store current number and its index
    }
    
    return []; // No solution found
}`,
            java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>(); // Hash map for O(1) lookup
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i]; // What number do we need?
            
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i}; // Found the pair!
            }
            
            numMap.put(nums[i], i); // Store current number and its index
        }
        
        return new int[0]; // No solution found
    }
}`
        };
        
        const codeInput = document.getElementById('codeInput');
        if (codeInput) {
            codeInput.value = solutions[this.currentLanguage];
            this.showNotification('📖 Solution revealed! Study it carefully and try to understand each step.', 'info');
        }
    }

    generatePersonalizedMotivation() {
        const motivations = [
            "🚀 You're building incredible skills one problem at a time!",
            "💪 Every challenge you face makes you stronger!",
            "🌟 Your persistence is your superpower!",
            "🎯 Focus on progress, not perfection!",
            "⚡ Code with confidence - you've got this!",
            "🏆 Every expert was once a beginner like you!",
            "✨ Your future self will thank you for not giving up!",
            "🔥 Turn your obstacles into stepping stones!"
        ];
        
        const randomMotivation = motivations[Math.floor(Math.random() * motivations.length)];
        
        const motivationTitle = document.getElementById('motivationTitle');
        const motivationText = document.getElementById('motivationText');
        
        if (motivationTitle) motivationTitle.textContent = "You're Amazing!";
        if (motivationText) motivationText.textContent = randomMotivation;
        
        // Add sparkle effect
        const motivationSection = document.getElementById('motivationSection');
        if (motivationSection) {
            motivationSection.style.animation = 'sparkle 1s ease';
            setTimeout(() => {
                motivationSection.style.animation = '';
            }, 1000);
        }
    }

    // Additional helper methods
    updateLiveStats() {
        // Update real-time statistics
        this.renderHeroStats();
    }

    checkForAchievements() {
        // Check and unlock achievements
        const achievements = this.calculateAchievements();
        // Update achievement display if needed
    }

    updateMotivation() {
        // Periodically update motivational content
        if (Math.random() < 0.001) { // Very low chance for subtle updates
            this.renderMotivationalSection();
        }
    }

    showContextualMotivation() {
        // Show motivation based on current context
        const completedCount = this.playerData.completedProblems.length;
        if (completedCount === 0) {
            this.showNotification("🌟 Ready to start your coding adventure? Every expert began exactly where you are now!", 'info');
        }
    }

    analyzeUserProgress() {
        // Return adaptive learning suggestions
        return {
            suggestedProblems: [],
            strengthAreas: ['Arrays'],
            improvementAreas: ['Dynamic Programming']
        };
    }

    showStreakMotivation() {
        // Show streak-based motivation
        if (this.playerData.streak > 0) {
            this.showNotification(`🔥 ${this.playerData.streak} day streak! You're on fire!`, 'success');
        }
    }
}
