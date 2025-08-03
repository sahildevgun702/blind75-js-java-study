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
        // For simplicity and to avoid CORS issues when opening HTML directly,
        // we'll use the built-in sample data instead of fetching from JSON
        console.log('📦 Using built-in sample data for web app');
        this.problemsData = this.generateSampleData();
        console.log('✅ Sample data loaded:', this.problemsData);
        console.log('🔍 Categories found:', Object.keys(this.problemsData.categories || {}));
        console.log('🔍 Array category:', this.problemsData.categories?.Array);
        
        // Always render quest map after loading data
        console.log('🗺️ About to render quest map with data:', this.problemsData ? 'Available' : 'Missing');
        this.renderQuestMap();
    }

    generateSampleData() {
        return {
            categories: {
                "Array": {
                    count: 15,
                    problems: [
                        {
                            id: "two-sum",
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
                        },
                        {
                            id: 3,
                            name: "Contains Duplicate",
                            difficulty: "Easy",
                            tags: ["Array", "Hash Table"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🕵️ Your Mission</h4>
                                    <p>You're a detective investigating duplicate evidence! Can you spot if any items appear more than once?</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Given an array of integers, return true if any value appears at least twice.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Detective Work</h4>
                                    <pre>Input: [1,2,3,1]
Investigation: 1 appears twice!
Output: true</pre>
                                </div>
                            `,
                            examples: "Input: nums = [1,2,3,1]\nOutput: true",
                            hints: [
                                "🔍 Use a Set to track numbers you've seen",
                                "⚡ Return true as soon as you find a duplicate",
                                "🎯 Think about what data structure gives O(1) lookup"
                            ]
                        },
                        {
                            id: 4,
                            name: "3Sum",
                            difficulty: "Medium",
                            tags: ["Array", "Two Pointers"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🎯 Your Mission</h4>
                                    <p>You're organizing a team of 3 heroes whose powers must sum to zero for perfect balance!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Find all unique triplets in the array that sum to zero.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Team Formation</h4>
                                    <pre>Input: [-1,0,1,2,-1,-4]
Perfect Teams: [[-1,-1,2],[-1,0,1]]
Output: [[-1,-1,2],[-1,0,1]]</pre>
                                </div>
                            `,
                            examples: "Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]",
                            hints: [
                                "🔄 Sort the array first",
                                "🎯 Use two pointers technique",
                                "⚡ Skip duplicates to avoid repeated triplets",
                                "🧠 Fix one element, then find pairs for the rest"
                            ]
                        },
                        {
                            id: 5,
                            name: "Container With Most Water",
                            difficulty: "Medium",
                            tags: ["Array", "Two Pointers"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🌊 Your Mission</h4>
                                    <p>You're a water engineer designing the largest possible reservoir between two walls!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Find two lines that form a container holding the most water.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Engineering Challenge</h4>
                                    <pre>Input: [1,8,6,2,5,4,8,3,7]
Best Design: walls at index 1 and 8
Water Volume: min(8,7) × (8-1) = 49</pre>
                                </div>
                            `,
                            examples: "Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49",
                            hints: [
                                "🎯 Use two pointers from both ends",
                                "🌊 Area = min(left_height, right_height) × width",
                                "⚡ Move the pointer with smaller height",
                                "🧠 Think greedy: always try to increase area"
                            ]
                        },
                        {
                            id: 6,
                            name: "Longest Increasing Subsequence",
                            difficulty: "Medium",
                            tags: ["Dynamic Programming", "Binary Search"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>📈 Your Mission</h4>
                                    <p>You're tracking the longest winning streak in a gaming tournament!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Find the length of the longest strictly increasing subsequence.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Tournament Analysis</h4>
                                    <pre>Input: [10,9,2,5,3,7,101,18]
Winning Streak: [2,3,7,101] (length 4)
Output: 4</pre>
                                </div>
                            `,
                            examples: "Input: nums = [10,9,2,5,3,7,101,18]\nOutput: 4",
                            hints: [
                                "🎯 Think Dynamic Programming",
                                "📈 dp[i] = length of LIS ending at index i",
                                "⚡ For each element, check all previous elements",
                                "🚀 Advanced: Use binary search for O(n log n)"
                            ]
                        },
                        {
                            id: 7,
                            name: "Word Break",
                            difficulty: "Hard",
                            tags: ["Dynamic Programming", "String"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🧩 Your Mission</h4>
                                    <p>You're a master puzzle solver breaking down complex words into dictionary words!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Determine if a string can be segmented into dictionary words.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Word Puzzle</h4>
                                    <pre>Input: s = "leetcode", wordDict = ["leet","code"]
Breakdown: "leet" + "code" ✓
Output: true</pre>
                                </div>
                            `,
                            examples: 'Input: s = "leetcode", wordDict = ["leet","code"]\nOutput: true',
                            hints: [
                                "🧠 Think Dynamic Programming",
                                "🔍 dp[i] = can substring(0, i) be segmented?",
                                "🎯 For each position, check all possible word endings",
                                "⚡ Use a set for O(1) dictionary lookup"
                            ]
                        },
                        {
                            id: 8,
                            name: "Merge K Sorted Lists",
                            difficulty: "Hard",
                            tags: ["Linked List", "Divide and Conquer", "Heap"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>⚔️ Your Mission</h4>
                                    <p>You're commanding multiple sorted armies and need to merge them into one mighty force!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Merge k sorted linked lists into one sorted linked list.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Army Merger</h4>
                                    <pre>Input: [[1,4,5],[1,3,4],[2,6]]
United Army: [1,1,2,3,4,4,5,6]
Output: [1,1,2,3,4,4,5,6]</pre>
                                </div>
                            `,
                            examples: "Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]",
                            hints: [
                                "⚔️ Divide and conquer approach",
                                "🔄 Merge lists pairwise",
                                "🏔️ Use a min heap for optimal solution",
                                "🎯 Time complexity: O(N log k) where N is total nodes"
                            ]
                        },
                        {
                            id: 9,
                            name: "Trapping Rain Water",
                            difficulty: "Hard",
                            tags: ["Array", "Two Pointers", "Stack"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `
                                <div class="problem-story">
                                    <h4>🌧️ Your Mission</h4>
                                    <p>You're a civil engineer calculating how much rainwater can be trapped between buildings!</p>
                                </div>
                                
                                <div class="problem-challenge">
                                    <h4>📝 The Challenge</h4>
                                    <p>Given heights of buildings, calculate trapped rainwater volume.</p>
                                </div>
                                
                                <div class="problem-examples">
                                    <h4>🌟 Water Engineering</h4>
                                    <pre>Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Trapped Water: 6 units
Visual: Water pools between buildings</pre>
                                </div>
                            `,
                            examples: "Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6",
                            hints: [
                                "🌊 Water level = min(left_max, right_max)",
                                "🎯 Use two pointers from both ends",
                                "⚡ Keep track of max heights seen so far",
                                "🧠 Alternative: Use stack to track boundaries"
                            ]
                        },
                        {
                            id: 10,
                            name: "Maximum Subarray",
                            difficulty: "Easy",
                            tags: ["Array", "Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Find the contiguous subarray with the largest sum.`,
                            examples: "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6 (subarray [4,-1,2,1])",
                            hints: [
                                "Think about Kadane's algorithm",
                                "Keep track of current sum and max sum",
                                "Reset current sum when it becomes negative"
                            ]
                        },
                        {
                            id: 11,
                            name: "Product of Array Except Self",
                            difficulty: "Medium",
                            tags: ["Array"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Return array where each element is product of all elements except itself.`,
                            examples: "Input: nums = [1,2,3,4]\nOutput: [24,12,8,6]",
                            hints: [
                                "Think about left and right products",
                                "Use two passes through the array",
                                "Can you do it without division?"
                            ]
                        },
                        {
                            id: 12,
                            name: "Find Minimum in Rotated Sorted Array",
                            difficulty: "Medium",
                            tags: ["Array", "Binary Search"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Find the minimum element in a rotated sorted array.`,
                            examples: "Input: nums = [3,4,5,1,2]\nOutput: 1",
                            hints: [
                                "Use binary search",
                                "Compare middle with right element",
                                "Decide which half to search"
                            ]
                        },
                        {
                            id: 13,
                            name: "Search in Rotated Sorted Array",
                            difficulty: "Medium",
                            tags: ["Array", "Binary Search"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Search for target in rotated sorted array.`,
                            examples: "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
                            hints: [
                                "Modified binary search",
                                "Check which half is sorted",
                                "Search in the appropriate half"
                            ]
                        }
                    ]
                },
                "String": {
                    count: 10,
                    problems: [
                        {
                            id: 14,
                            name: "Valid Anagram",
                            difficulty: "Easy",
                            tags: ["String", "Hash Table"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Check if two strings are anagrams of each other.`,
                            examples: "Input: s = 'anagram', t = 'nagaram'\nOutput: true",
                            hints: [
                                "Count character frequencies",
                                "Compare character counts",
                                "Sort strings and compare"
                            ]
                        },
                        {
                            id: 15,
                            name: "Valid Parentheses",
                            difficulty: "Easy",
                            tags: ["String", "Stack"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Check if parentheses are properly matched.`,
                            examples: "Input: s = '()[]{}'\nOutput: true",
                            hints: [
                                "Use a stack",
                                "Push opening brackets",
                                "Pop and match closing brackets"
                            ]
                        },
                        {
                            id: 16,
                            name: "Longest Palindromic Substring",
                            difficulty: "Medium",
                            tags: ["String", "Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Find the longest palindromic substring.`,
                            examples: "Input: s = 'babad'\nOutput: 'bab' or 'aba'",
                            hints: [
                                "Expand around centers",
                                "Check odd and even length palindromes",
                                "Dynamic programming approach"
                            ]
                        },
                        {
                            id: 17,
                            name: "Palindromic Substrings",
                            difficulty: "Medium",
                            tags: ["String", "Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Count the number of palindromic substrings.`,
                            examples: "Input: s = 'abc'\nOutput: 3 ('a', 'b', 'c')",
                            hints: [
                                "Expand around each character",
                                "Count both odd and even palindromes",
                                "Use helper function"
                            ]
                        }
                    ]
                },
                "Linked List": {
                    count: 8,
                    problems: [
                        {
                            id: 18,
                            name: "Reverse Linked List",
                            difficulty: "Easy",
                            tags: ["Linked List"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Reverse a singly linked list.`,
                            examples: "Input: 1->2->3->4->5\nOutput: 5->4->3->2->1",
                            hints: [
                                "Use three pointers: prev, curr, next",
                                "Iteratively reverse connections",
                                "Consider recursive approach"
                            ]
                        },
                        {
                            id: 19,
                            name: "Linked List Cycle",
                            difficulty: "Easy",
                            tags: ["Linked List", "Two Pointers"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Detect if linked list has a cycle.`,
                            examples: "Input: [3,2,0,-4] with cycle\nOutput: true",
                            hints: [
                                "Floyd's cycle detection algorithm",
                                "Use slow and fast pointers",
                                "If fast catches slow, there's a cycle"
                            ]
                        },
                        {
                            id: 20,
                            name: "Merge Two Sorted Lists",
                            difficulty: "Easy",
                            tags: ["Linked List"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Merge two sorted linked lists.`,
                            examples: "Input: l1 = [1,2,4], l2 = [1,3,4]\nOutput: [1,1,2,3,4,4]",
                            hints: [
                                "Use dummy node",
                                "Compare values and link smaller",
                                "Handle remaining nodes"
                            ]
                        }
                    ]
                },
                "Tree": {
                    count: 12,
                    problems: [
                        {
                            id: 21,
                            name: "Invert Binary Tree",
                            difficulty: "Easy",
                            tags: ["Tree", "Binary Tree"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Invert/flip a binary tree.`,
                            examples: "Input: [4,2,7,1,3,6,9]\nOutput: [4,7,2,9,6,3,1]",
                            hints: [
                                "Recursively swap left and right children",
                                "Base case: null node",
                                "Can also use BFS/DFS iteratively"
                            ]
                        },
                        {
                            id: 22,
                            name: "Maximum Depth of Binary Tree",
                            difficulty: "Easy",
                            tags: ["Tree", "Binary Tree", "DFS"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Find the maximum depth of a binary tree.`,
                            examples: "Input: [3,9,20,null,null,15,7]\nOutput: 3",
                            hints: [
                                "Use recursion",
                                "Max depth = 1 + max(left depth, right depth)",
                                "Base case: null node returns 0"
                            ]
                        },
                        {
                            id: 23,
                            name: "Same Tree",
                            difficulty: "Easy",
                            tags: ["Tree", "Binary Tree"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Check if two binary trees are the same.`,
                            examples: "Input: p = [1,2,3], q = [1,2,3]\nOutput: true",
                            hints: [
                                "Compare values recursively",
                                "Check both left and right subtrees",
                                "Handle null cases"
                            ]
                        }
                    ]
                },
                "Dynamic Programming": {
                    count: 8,
                    problems: [
                        {
                            id: 24,
                            name: "Climbing Stairs",
                            difficulty: "Easy",
                            tags: ["Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Count ways to climb n stairs (1 or 2 steps at a time).`,
                            examples: "Input: n = 3\nOutput: 3 (1+1+1, 1+2, 2+1)",
                            hints: [
                                "This is Fibonacci sequence",
                                "dp[i] = dp[i-1] + dp[i-2]",
                                "Base cases: dp[1] = 1, dp[2] = 2"
                            ]
                        },
                        {
                            id: 25,
                            name: "House Robber",
                            difficulty: "Medium",
                            tags: ["Dynamic Programming"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Rob houses to maximize money without robbing adjacent houses.`,
                            examples: "Input: nums = [2,7,9,3,1]\nOutput: 12 (rob 2, 9, 1)",
                            hints: [
                                "For each house: rob it or don't rob it",
                                "dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
                                "Track max money at each house"
                            ]
                        }
                    ]
                },
                "Graph": {
                    count: 6,
                    problems: [
                        {
                            id: 26,
                            name: "Number of Islands",
                            difficulty: "Medium",
                            tags: ["Graph", "DFS", "BFS"],
                            javascript: false,
                            java: false,
                            dateCompleted: { javascript: null, java: null },
                            description: `Count the number of islands in a 2D grid.`,
                            examples: "Input: grid with 1s and 0s\nOutput: number of connected 1s",
                            hints: [
                                "Use DFS or BFS",
                                "Mark visited cells",
                                "Count connected components"
                            ]
                        }
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
        console.log('🎯 Quest map element:', questMap);
        
        if (!questMap) {
            console.log('❌ Quest map element not found in DOM');
            return;
        }
        
        if (!this.problemsData) {
            console.log('❌ No problems data available');
            questMap.innerHTML = '<div class="empty-path"><h3>🔄 Loading Problems...</h3><p>Initializing the quest map...</p></div>';
            return;
        }

        if (!this.problemsData.categories) {
            console.log('❌ No categories in problems data');
            questMap.innerHTML = '<div class="empty-path"><h3>⚠️ No Categories Found</h3><p>Problem categories are missing.</p></div>';
            return;
        }

        console.log('🏗️ Starting to build quest map...');
        questMap.innerHTML = '';

        let nodeCount = 0;
        Object.entries(this.problemsData.categories).forEach(([category, data]) => {
            console.log(`🏷️ Processing category: ${category}`, data);
            if (data && data.problems) {
                data.problems.forEach(problem => {
                    console.log(`📝 Creating node for: ${problem.name}`);
                    const questNode = this.createQuestNode(problem, category);
                    questMap.appendChild(questNode);
                    nodeCount++;
                });
            }
        });
        
        console.log(`✅ Rendered ${nodeCount} quest nodes`);
    }

    createQuestNode(problem, category) {
        const node = document.createElement('div');
        node.className = 'quest-node animate-slide-in';
        
        const isCompleted = this.playerData.completedProblems.some(p => p.id === problem.id);
        const isAvailable = this.isProblemAvailable(problem);
        
        console.log(`Problem ${problem.id} (${problem.name}): completed=${isCompleted}, available=${isAvailable}`);
        
        // Make the node clickable only if available
        if (isAvailable || isCompleted) {
            node.style.cursor = 'pointer';
            node.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log(`🎯 Quest node clicked! Problem: ${problem.name || problem.title}`);
                console.log('📋 Problem object:', problem);
                console.log('📁 Category:', category);
                this.openChallenge(problem, category);
            };
        } else {
            node.style.cursor = 'not-allowed';
            node.onclick = (e) => {
                e.preventDefault();
                console.log(`Problem ${problem.name} is locked`);
                this.showNotification('🔒 Complete previous challenges to unlock this one!', 'warning');
            };
        }

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
        console.log('🎯 openChallenge called with:', problem.name || problem.title, category);
        console.log('🔍 Full problem object:', problem);
        console.log('🔍 Problem ID:', problem.id);
        console.log('🔍 Problem availability:', this.isProblemAvailable(problem));
        
        if (!this.isProblemAvailable(problem)) {
            console.log('❌ Problem not available:', problem.name);
            this.showNotification('🔒 Complete previous challenges to unlock this one!', 'warning');
            return;
        }

        console.log('✅ Problem available, setting current problem');
        this.currentProblem = { ...problem, category };
        console.log('📝 Current problem set to:', this.currentProblem);
        
        console.log('🚀 Navigating to problem page...');
        this.navigateToProblemPage(problem.id);
    }

    navigateToProblemPage(problemId) {
        console.log('🔗 navigateToProblemPage called with ID:', problemId, 'type:', typeof problemId);
        
        // Convert any ID to URL-friendly string
        let urlId;
        if (typeof problemId === 'string') {
            // Already a string, clean it up
            urlId = problemId.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        } else if (typeof problemId === 'number') {
            // Convert number to problem name, then to URL-friendly
            const problemName = this.currentProblem.name || `Problem ${problemId}`;
            urlId = problemName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
        } else {
            console.error('❌ Invalid problem ID type:', problemId);
            return;
        }
        
        console.log('🔗 Final URL ID:', urlId);
        const finalUrl = `problem.html?id=${urlId}`;
        console.log('🌐 Navigating to:', finalUrl);
        
        // Add a small delay to see the logs before navigation
        setTimeout(() => {
            window.location.href = finalUrl;
        }, 100);
    }

    showChallengeModal() {
        console.log('🎭 showChallengeModal called');
        const modal = document.getElementById('challengeModal');
        console.log('📦 Modal element:', modal);
        
        const problem = this.currentProblem;
        console.log('📝 Current problem in modal:', problem);
        
        document.getElementById('challengeTitle').textContent = problem.name;
        document.getElementById('difficultyBadge').textContent = problem.difficulty;
        document.getElementById('difficultyBadge').className = `difficulty-badge ${problem.difficulty.toLowerCase()}`;
        document.getElementById('categoryBadge').textContent = problem.category;
        
        // Show comprehensive problem description with documentation
        document.getElementById('problemDescription').innerHTML = `
            <div class="problem-tabs">
                <button class="problem-tab active" data-tab="description">📝 Problem</button>
                <button class="problem-tab" data-tab="docs">📚 Documentation</button>
                <button class="problem-tab" data-tab="hints">💡 Hints</button>
            </div>
            
            <div class="tab-content active" id="description-content">
                ${problem.description || `
                    <h4>🎯 Challenge: ${problem.name}</h4>
                    <p>Master this fundamental ${problem.category} problem!</p>
                    ${problem.examples ? `<div class="examples"><h5>💫 Example:</h5><pre>${problem.examples}</pre></div>` : ''}
                `}
            </div>
            
            <div class="tab-content" id="docs-content">
                ${this.getDocumentationForProblem(problem)}
            </div>
            
            <div class="tab-content" id="hints-content">
                ${this.getHintsForProblem(problem)}
            </div>
        `;
        
        // Set up problem tab switching
        this.setupProblemTabs();
        
        // Set up code editor with starter code
        this.setupCodeEditor();
        
        console.log('🔍 About to show modal...');
        console.log('📦 Modal before display:', modal.style.display);
        modal.style.display = 'block';
        modal.classList.add('show'); // Add show class for enhanced styles
        console.log('📦 Modal after display:', modal.style.display);
        modal.classList.add('animate-slide-in');
        console.log('✅ Modal should now be visible');
    }

    closeModal() {
        const modal = document.getElementById('challengeModal');
        modal.style.display = 'none';
        modal.classList.remove('show');
        modal.classList.remove('animate-slide-in');
    }

    setupCodeEditor() {
        const problem = this.currentProblem;
        const starterCode = this.getStarterCode(problem);
        
        document.getElementById('codeInput').value = starterCode[this.currentLanguage];
    }
    
    getStarterCode(problem) {
        const problemTemplates = {
            'Two Sum': {
                javascript: `function twoSum(nums, target) {
    // Your solution here
    // Hint: Consider using a hash map for O(n) solution
    return [];
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]`,
                java: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your solution here
        // Hint: Consider using HashMap for O(n) solution
        return new int[0];
    }
    
    // Test your solution
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] result1 = sol.twoSum(new int[]{2, 7, 11, 15}, 9);
        int[] result2 = sol.twoSum(new int[]{3, 2, 4}, 6);
        System.out.println(Arrays.toString(result1)); // Expected: [0, 1]
        System.out.println(Arrays.toString(result2)); // Expected: [1, 2]
    }
}`
            },
            'Contains Duplicate': {
                javascript: `function containsDuplicate(nums) {
    // Your solution here
    // Hint: Consider using a Set for O(n) solution
    return false;
}

// Test your solution
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
                java: `import java.util.*;

public class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Your solution here
        // Hint: Consider using HashSet for O(n) solution
        return false;
    }
    
    // Test your solution
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(sol.containsDuplicate(new int[]{1,2,3,4})); // Expected: false
    }
}`
            },
            'Maximum Subarray': {
                javascript: `function maxSubArray(nums) {
    // Your solution here
    // Hint: Kadane's algorithm
    // Track current sum and maximum sum
    return 0;
}

// Test your solution
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1`,
                java: `public class Solution {
    public int maxSubArray(int[] nums) {
        // Your solution here
        // Hint: Kadane's algorithm
        // Track current sum and maximum sum
        return 0;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(sol.maxSubArray(new int[]{1})); // Expected: 1
    }
}`
            },
            'Valid Anagram': {
                javascript: `function isAnagram(s, t) {
    // Your solution here
    // Hint: Count character frequencies or sort both strings
    return false;
}

// Test your solution
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
                java: `import java.util.*;

public class Solution {
    public boolean isAnagram(String s, String t) {
        // Your solution here
        // Hint: Count character frequencies or sort both strings
        return false;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(sol.isAnagram("rat", "car")); // Expected: false
    }
}`
            },
            'Valid Parentheses': {
                javascript: `function isValid(s) {
    // Your solution here
    // Hint: Use a stack to track opening brackets
    return false;
}

// Test your solution
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
                java: `import java.util.*;

public class Solution {
    public boolean isValid(String s) {
        // Your solution here
        // Hint: Use Stack to track opening brackets
        return false;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isValid("()")); // Expected: true
        System.out.println(sol.isValid("()[]{}")); // Expected: true
        System.out.println(sol.isValid("(]")); // Expected: false
    }
}`
            }
        };
        
        return problemTemplates[problem.name] || {
            javascript: `// Write your solution here for ${problem.name}
function solve() {
    // Your code here
}`,
            java: `// Write your solution here for ${problem.name}
public class Solution {
    public void solve() {
        // Your code here
    }
}`
        };
    }
    
    setupProblemTabs() {
        document.querySelectorAll('.problem-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                // Remove active class from all tabs and content
                document.querySelectorAll('.problem-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                e.target.classList.add('active');
                
                // Show corresponding content
                const tabId = e.target.dataset.tab + '-content';
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    getDocumentationForProblem(problem) {
        console.log('🔍 Getting documentation for problem:', problem);
        console.log('📂 Problem category:', problem.category);
        
        const docs = {
            'Array': `
                <div class="combined-docs">
                    <h4>📚 Arrays - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript Arrays</h5>
                        <div class="code-example">
                            <pre><code>// Creating arrays
let arr = [1, 2, 3, 4, 5];
let empty = [];

// Accessing elements
console.log(arr[0]); // 1
console.log(arr.length); // 5

// Common methods
arr.push(6);        // Add to end
arr.pop();          // Remove from end
arr.unshift(0);     // Add to start
arr.shift();        // Remove from start

// Iteration
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Modern methods
arr.forEach(item => console.log(item));
arr.map(item => item * 2);
arr.filter(item => item > 3);
arr.find(item => item === 3);</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java Arrays</h5>
                        <div class="code-example">
                            <pre><code>// Creating arrays
int[] arr = {1, 2, 3, 4, 5};
int[] empty = new int[10];

// Accessing elements
System.out.println(arr[0]); // 1
System.out.println(arr.length); // 5

// Useful classes
import java.util.*;

// ArrayList (dynamic arrays)
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.get(0);        // Get element
list.size();        // Get size
list.remove(0);     // Remove element

// Arrays utility class
Arrays.sort(arr);                    // Sort array
Arrays.toString(arr);                // Convert to string
Arrays.copyOf(arr, newLength);       // Copy array
Arrays.binarySearch(arr, target);    // Binary search</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>🎯 <strong>Two Pointers:</strong> Use for sorted arrays or comparisons</li>
                        <li>🗺️ <strong>Hash Maps:</strong> Store seen elements for O(1) lookup</li>
                        <li>🔄 <strong>Sliding Window:</strong> For subarray problems</li>
                        <li>📊 <strong>Prefix Sums:</strong> For range sum queries</li>
                    </ul>
                    
                    <h5>⚡ Time Complexity:</h5>
                    <ul>
                        <li>Access: O(1)</li>
                        <li>Search: O(n)</li>
                        <li>Insertion: O(1) at end, O(n) elsewhere</li>
                        <li>Deletion: O(1) at end, O(n) elsewhere</li>
                    </ul>
                </div>
            `,
            'String': `
                <div class="combined-docs">
                    <h4>📚 Strings - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript Strings</h5>
                        <div class="code-example">
                            <pre><code>// Creating strings
let str = "Hello World";
let template = \`Template \${str}\`;

// String properties
str.length          // Get length
str[0]              // Access character (read-only)

// Common methods
str.charAt(0)       // Get character at index
str.substring(0, 5) // Extract substring
str.slice(0, 5)     // Extract slice
str.split(" ")      // Split into array
str.toLowerCase()   // Convert to lowercase
str.toUpperCase()   // Convert to uppercase
str.trim()          // Remove whitespace

// Search methods
str.indexOf("o")    // Find first occurrence
str.includes("ell") // Check if contains
str.startsWith("H") // Check start
str.endsWith("d")   // Check end

// Modern methods
str.repeat(3)       // Repeat string
str.padStart(10, "0") // Pad start</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java Strings</h5>
                        <div class="code-example">
                            <pre><code>// Creating strings
String str = "Hello World";
StringBuilder sb = new StringBuilder();

// String properties & methods
str.length()              // Get length
str.charAt(0)             // Get character at index
str.substring(0, 5)       // Extract substring
str.split(" ")            // Split into array
str.toLowerCase()         // Convert to lowercase
str.toUpperCase()         // Convert to uppercase
str.trim()                // Remove whitespace

// Search methods
str.indexOf("o")          // Find first occurrence
str.contains("ell")       // Check if contains
str.startsWith("H")       // Check start
str.endsWith("d")         // Check end

// StringBuilder (mutable)
sb.append("text")         // Add text
sb.insert(0, "prefix")    // Insert at position
sb.toString()             // Convert to String

// Character arrays
char[] chars = str.toCharArray();
String newStr = new String(chars);</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>🎯 <strong>Character Frequency:</strong> Use Map/HashMap to count characters</li>
                        <li>🔄 <strong>Two Pointers:</strong> For palindromes and string comparisons</li>
                        <li>📚 <strong>Stack:</strong> For matching parentheses and nested structures</li>
                        <li>🌟 <strong>Sliding Window:</strong> For substring problems</li>
                    </ul>
                </div>
            `,
            'Linked List': `
                <div class="combined-docs">
                    <h4>📚 Linked Lists - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript Linked Lists</h5>
                        <div class="code-example">
                            <pre><code>// ListNode definition
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Creating a linked list: 1 -> 2 -> 3
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Traversal
function traverse(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

// Common patterns
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java Linked Lists</h5>
                        <div class="code-example">
                            <pre><code>// ListNode definition
class ListNode {
    int val;
    ListNode next;
    
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { 
        this.val = val; 
        this.next = next; 
    }
}

// Creating a linked list: 1 -> 2 -> 3
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

// Traversal
public void traverse(ListNode head) {
    ListNode current = head;
    while (current != null) {
        System.out.println(current.val);
        current = current.next;
    }
}

// Reverse linked list
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>🎯 <strong>Two Pointers:</strong> slow/fast for cycle detection</li>
                        <li>🔄 <strong>Dummy Node:</strong> Simplify edge cases</li>
                        <li>📚 <strong>Recursion:</strong> Natural fit for linked list problems</li>
                        <li>🌟 <strong>Three Pointers:</strong> prev, current, next for operations</li>
                    </ul>
                </div>
            `,
            'Tree': `
                <div class="combined-docs">
                    <h4>📚 Trees - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript Trees</h5>
                        <div class="code-example">
                            <pre><code>// TreeNode definition
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// DFS Traversals
function inorder(root) {
    if (!root) return [];
    return [...inorder(root.left), root.val, ...inorder(root.right)];
}

function preorder(root) {
    if (!root) return [];
    return [root.val, ...preorder(root.left), ...preorder(root.right)];
}

// BFS Traversal
function levelOrder(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        result.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return result;
}</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java Trees</h5>
                        <div class="code-example">
                            <pre><code>// TreeNode definition
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// DFS Traversals
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    inorderHelper(root, result);
    return result;
}

private void inorderHelper(TreeNode node, List<Integer> result) {
    if (node != null) {
        inorderHelper(node.left, result);
        result.add(node.val);
        inorderHelper(node.right, result);
    }
}

// BFS Traversal
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> level = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        result.add(level);
    }
    return result;
}</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>🎯 <strong>Recursion:</strong> Most tree problems are naturally recursive</li>
                        <li>🔄 <strong>DFS vs BFS:</strong> Choose based on problem requirements</li>
                        <li>📚 <strong>Base Cases:</strong> Always handle null/empty nodes</li>
                        <li>🌟 <strong>Helper Functions:</strong> Use for passing additional parameters</li>
                    </ul>
                </div>
            `,
            'Dynamic Programming': `
                <div class="combined-docs">
                    <h4>📚 Dynamic Programming - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript DP</h5>
                        <div class="code-example">
                            <pre><code>// Memoization (Top-Down)
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Tabulation (Bottom-Up)
function fibBottomUp(n) {
    if (n <= 2) return 1;
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 1;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space Optimized
function fibOptimized(n) {
    if (n <= 2) return 1;
    
    let prev2 = 1, prev1 = 1;
    for (let i = 3; i <= n; i++) {
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java DP</h5>
                        <div class="code-example">
                            <pre><code>// Memoization (Top-Down)
public int fibonacci(int n, Map<Integer, Integer> memo) {
    if (memo.containsKey(n)) return memo.get(n);
    if (n <= 2) return 1;
    
    int result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    memo.put(n, result);
    return result;
}

// Tabulation (Bottom-Up)
public int fibBottomUp(int n) {
    if (n <= 2) return 1;
    
    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 1;
    
    for (int i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

// Space Optimized
public int fibOptimized(int n) {
    if (n <= 2) return 1;
    
    int prev2 = 1, prev1 = 1;
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>🎯 <strong>Identify Subproblems:</strong> Break down into smaller problems</li>
                        <li>🔄 <strong>State Definition:</strong> What does dp[i] represent?</li>
                        <li>📚 <strong>Recurrence Relation:</strong> How to build current from previous</li>
                        <li>🌟 <strong>Base Cases:</strong> Initialize the foundation</li>
                    </ul>
                </div>
            `,
            'Graph': `
                <div class="combined-docs">
                    <h4>📚 Graphs - JavaScript & Java Reference</h4>
                    
                    <div class="language-section">
                        <h5>🟨 JavaScript Graphs</h5>
                        <div class="code-example">
                            <pre><code>// DFS (Depth-First Search)
function dfs(graph, start, visited = new Set()) {
    visited.add(start);
    console.log(start);
    
    for (let neighbor of graph[start] || []) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// BFS (Breadth-First Search)
function bfs(graph, start) {
    let visited = new Set();
    let queue = [start];
    visited.add(start);
    
    while (queue.length > 0) {
        let node = queue.shift();
        console.log(node);
        
        for (let neighbor of graph[node] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Graph representation (adjacency list)
let graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
};</code></pre>
                        </div>
                    </div>
                    
                    <div class="language-section">
                        <h5>☕ Java Graphs</h5>
                        <div class="code-example">
                            <pre><code>// DFS (Depth-First Search)
public void dfs(Map<Integer, List<Integer>> graph, int start, Set<Integer> visited) {
    visited.add(start);
    System.out.println(start);
    
    for (int neighbor : graph.getOrDefault(start, new ArrayList<>())) {
        if (!visited.contains(neighbor)) {
            dfs(graph, neighbor, visited);
        }
    }
}

// BFS (Breadth-First Search)
public void bfs(Map<Integer, List<Integer>> graph, int start) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();
    
    queue.offer(start);
    visited.add(start);
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.println(node);
        
        for (int neighbor : graph.getOrDefault(node, new ArrayList<>())) {
            if (!visited.contains(neighbor)) {
                visited.add(neighbor);
                queue.offer(neighbor);
            }
        }
    }
}

// Graph representation (adjacency list)
Map<Integer, List<Integer>> graph = new HashMap<>();
graph.put(1, Arrays.asList(2, 3));
graph.put(2, Arrays.asList(1, 4));
graph.put(3, Arrays.asList(1, 4));
graph.put(4, Arrays.asList(2, 3));</code></pre>
                        </div>
                    </div>
                    
                    <h5>💡 Problem-Solving Tips (Both Languages):</h5>
                    <ul>
                        <li>� <strong>Choose Algorithm:</strong> DFS for paths, BFS for shortest distance</li>
                        <li>🔄 <strong>Track Visited:</strong> Prevent infinite loops in cycles</li>
                        <li>📚 <strong>Representation:</strong> Adjacency list vs matrix based on density</li>
                        <li>🌟 <strong>Edge Cases:</strong> Disconnected components, self-loops</li>
                    </ul>
                </div>
            `
        };
        
        const result = docs[problem.category] || `
            <div class="combined-docs">
                <h4>📚 Documentation for ${problem.category}</h4>
                <p>Learn the fundamentals of ${problem.category} data structures and algorithms.</p>
                <p>This section shows both JavaScript and Java implementations side by side.</p>
            </div>
        `;
        
        console.log('📖 Documentation result for category "' + problem.category + '":', result ? 'Found' : 'Not found');
        console.log('🔍 Available categories:', Object.keys(docs));
        
        return result;
    }
    
    getHintsForProblem(problem) {
        if (problem.hints && problem.hints.length > 0) {
            return `
                <h4>💡 Progressive Hints</h4>
                <div class="hints-container">
                    ${problem.hints.map((hint, index) => `
                        <div class="hint-item" onclick="this.querySelector('.hint-text').classList.toggle('hidden')">
                            <span class="hint-number">${index + 1}</span>
                            <strong>Hint ${index + 1}</strong>
                            <div class="hint-text hidden">${hint}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        return `
            <h4>💡 General Problem-Solving Tips</h4>
            <div class="hints-container">
                <div class="hint-item">
                    <span class="hint-number">1</span>
                    <strong>Understand the Problem</strong>
                    <p>Read carefully and identify inputs, outputs, and constraints.</p>
                </div>
                <div class="hint-item">
                    <span class="hint-number">2</span>
                    <strong>Think of Examples</strong>
                    <p>Work through small examples manually to understand the pattern.</p>
                </div>
                <div class="hint-item">
                    <span class="hint-number">3</span>
                    <strong>Consider Data Structures</strong>
                    <p>What data structure would make this problem easier? Arrays, Hash Maps, etc.</p>
                </div>
                <div class="hint-item">
                    <span class="hint-number">4</span>
                    <strong>Start Simple</strong>
                    <p>Write a brute force solution first, then optimize.</p>
                </div>
            </div>
        `;
    }

    updateDocumentationDisplay() {
        // Update documentation content when language changes
        if (this.currentProblem) {
            const docsContent = document.getElementById('docs-content');
            if (docsContent) {
                docsContent.innerHTML = this.getDocumentationForProblem(this.currentProblem);
            }
        }
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
                // Update documentation when language changes
                this.updateDocumentationDisplay();
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
        console.log('🔍 Checking availability for problem:', problem.id, 'type:', typeof problem.id);
        
        // Convert id to number if it's a string, or use problem order
        let problemNumber;
        if (typeof problem.id === 'string') {
            // For string IDs like "two-sum", make them available by default for testing
            if (problem.id === 'two-sum') problemNumber = 1;
            else problemNumber = 999; // Make other string IDs require completion
        } else {
            problemNumber = problem.id;
        }
        
        console.log('🔍 Problem number used for availability:', problemNumber);
        
        // Make first few problems always available, then unlock based on completion
        if (problemNumber <= 3) return true; // First 3 problems always available
        
        // For problems 4-6, need at least 1 completed
        if (problemNumber <= 6) return this.playerData.completedProblems.length >= 1;
        
        // For problems 7+, need at least 3 completed
        return this.playerData.completedProblems.length >= 3;
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
        let visibleCount = 0;
        
        questNodes.forEach(node => {
            const difficultyElement = node.querySelector('.quest-difficulty');
            if (!difficultyElement) return;
            
            const difficulty = difficultyElement.textContent.toLowerCase();
            
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
            
            if (show) {
                node.style.display = 'block';
                node.style.animation = 'fadeIn 0.5s ease';
                visibleCount++;
            } else {
                node.style.display = 'none';
            }
        });
        
        // Show message if no problems found for this path
        this.showPathMessage(path, visibleCount);
    }

    showPathMessage(path, count) {
        // Remove existing message
        const existingMessage = document.querySelector('.path-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const questMap = document.getElementById('questMap');
        
        if (count === 0) {
            const message = document.createElement('div');
            message.className = 'path-message';
            message.innerHTML = `
                <div class="empty-path">
                    <div class="empty-icon">🏗️</div>
                    <h3>Coming Soon!</h3>
                    <p>More ${path === 'intermediate' ? 'Medium' : 'Hard'} challenges are being crafted for your epic journey!</p>
                    <p>🎯 Try the Beginner Path to start your adventure!</p>
                </div>
            `;
            questMap.appendChild(message);
        } else {
            // Show count of problems
            const message = document.createElement('div');
            message.className = 'path-message';
            message.innerHTML = `
                <div class="path-info">
                    <span class="path-count">${count} challenges await you!</span>
                </div>
            `;
            questMap.insertBefore(message, questMap.firstChild);
        }
    }

    // Revolutionary Features Implementation
    runCodeWithLiveFeedback() {
        const code = document.getElementById('codeInput').value;
        let resultsDiv = document.getElementById('testResults');
        
        if (!resultsDiv) {
            // Create test results div if it doesn't exist
            resultsDiv = document.createElement('div');
            resultsDiv.id = 'testResults';
            resultsDiv.className = 'test-results';
            const codeEditor = document.querySelector('.code-editor');
            if (codeEditor) {
                codeEditor.appendChild(resultsDiv);
            } else {
                this.showNotification('🧪 Code is running in your mind! Think through the logic step by step.', 'info');
                return;
            }
        }
        
        resultsDiv.style.display = 'block';
        
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

// Global Functions (called from HTML)
let app;

function startQuest() {
    document.getElementById('learningPath').scrollIntoView({ behavior: 'smooth' });
}

function debugQuestNodes() {
    console.log('🐛 DEBUG: Quest nodes debugging...');
    const questMap = document.getElementById('questMap');
    console.log('🗺️ Quest map element:', questMap);
    console.log('🔢 Quest map children count:', questMap ? questMap.children.length : 'Quest map not found');
    
    const questNodes = document.querySelectorAll('.quest-node');
    console.log('🎯 Found quest nodes:', questNodes.length);
    
    questNodes.forEach((node, index) => {
        console.log(`🎯 Node ${index}:`, node);
        console.log(`📝 Node innerHTML:`, node.innerHTML.substring(0, 100) + '...');
        console.log(`🖱️ Node onclick:`, node.onclick);
        console.log(`👆 Node cursor:`, node.style.cursor);
    });
    
    if (window.app || app) {
        const appInstance = window.app || app;
        console.log('🎮 App instance:', appInstance);
        console.log('📦 Problems data:', appInstance.problemsData);
        
        // Try to manually trigger the first problem
        if (appInstance.problemsData?.categories?.Array?.problems?.[0]) {
            const firstProblem = appInstance.problemsData.categories.Array.problems[0];
            console.log('🧪 Testing with first problem:', firstProblem);
            appInstance.openChallenge(firstProblem, 'Array');
        }
    } else {
        console.log('❌ No app instance found');
    }
}

function closeModal() {
    if (app) app.closeModal();
}

function runCode() {
    if (app) app.runCodeWithLiveFeedback();
}

function submitSolution() {
    if (app) app.submitWithCelebration();
}

function getHint() {
    if (app) app.getSmartHint();
}

function showSolution() {
    if (app) app.showSolutionWithExplanation();
}

function getNewMotivation() {
    if (app) app.generatePersonalizedMotivation();
}

function loadNextChallenge() {
    if (app) {
        const problemIndex = Math.floor(Math.random() * 3) + 1;
        app.openChallenge && app.openChallenge(app.problemsData?.categories?.Array?.problems?.[problemIndex] || {}, 'Array');
    }
}

function reviewSolution() {
    closeModal();
    setTimeout(() => {
        alert('Solution review coming soon! 🎯');
    }, 500);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    app = new CodeQuestAcademy();
    window.app = app; // Make sure it's available globally
    console.log('🚀 CodeQuest Academy initialized successfully!');
    
    // Add manual test functions to window for console testing
    window.testProblemNavigation = () => {
        console.log('🧪 Manual test: Trying to navigate to Two Sum...');
        const firstProblem = app.problemsData.categories.Array.problems[0];
        console.log('🎯 First problem:', firstProblem);
        app.openChallenge(firstProblem, 'Array');
    };
    
    // Also add quest node click test
    window.testQuestNodeClick = () => {
        console.log('🧪 Testing quest node click...');
        const questNodes = document.querySelectorAll('.quest-node');
        console.log('🎯 Found quest nodes:', questNodes.length);
        if (questNodes.length > 0) {
            console.log('🖱️ Clicking first quest node...');
            questNodes[0].click();
        } else {
            console.log('❌ No quest nodes found');
        }
    };
    
    console.log('🧪 Test functions added to window: testProblemNavigation() and testQuestNodeClick()');
});