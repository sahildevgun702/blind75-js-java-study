// CodeQuest Academy - Learning Journey Platform
// A comprehensive DSA learning experience that teaches concepts FIRST, then applies them

class CodeQuestAcademy {
    constructor() {
        this.currentUser = {
            name: "CodeWarrior",
            level: 1,
            xp: 150,
            streak: 5,
            conceptsLearned: 3,
            problemsSolved: 12,
            totalConcepts: 12,
            totalProblems: 75,
            currentPath: null,
            completedConcepts: ['arrays-strings'], // Track completed concepts
            unlockedConcepts: ['arrays-strings', 'hash-tables'] // Track unlocked concepts
        };
        
        // Learning Journey Structure: Concepts → Problems
        this.learningPaths = [
            {
                id: "foundation",
                title: "🏗️ Foundation Path",
                description: "Master the basics - Arrays, Strings, and Hash Tables",
                difficulty: "beginner",
                icon: "🏗️",
                duration: "2-3 weeks",
                totalConcepts: 3,
                totalProblems: 21,
                concepts: [
                    {
                        id: "arrays-strings",
                        title: "Arrays & Strings",
                        description: "Your first data containers - like numbered storage boxes",
                        icon: "📦",
                        estimatedTime: "3-4 hours",
                        prerequisite: null,
                        completed: true,
                        unlocked: true,
                        problems: ["two-sum", "best-time-stock", "contains-duplicate", "product-array"],
                        realWorldExample: "Managing your music playlist or organizing your bookshelf",
                        keyTakeaways: [
                            "Arrays store elements in consecutive memory locations", 
                            "Strings are just arrays of characters",
                            "Index-based access is O(1) time complexity"
                        ]
                    },
                    {
                        id: "hash-tables",
                        title: "Hash Tables & Maps", 
                        description: "Lightning-fast lookups - like a magical filing cabinet",
                        icon: "⚡",
                        estimatedTime: "2-3 hours",
                        prerequisite: "arrays-strings",
                        completed: false,
                        unlocked: true,
                        problems: ["two-sum", "group-anagrams", "valid-anagram", "longest-substring"],
                        realWorldExample: "Dictionary lookups or phone contact lists",
                        keyTakeaways: [
                            "Hash tables provide O(1) average lookup time",
                            "Perfect for checking existence and counting",
                            "Trade space for time efficiency"
                        ]
                    },
                    {
                        id: "big-o",
                        title: "Big O Notation",
                        description: "Measuring efficiency - how fast is fast enough?",
                        icon: "📊",
                        estimatedTime: "2 hours", 
                        prerequisite: "arrays-strings",
                        completed: false,
                        unlocked: false,
                        problems: ["two-sum", "contains-duplicate"],
                        realWorldExample: "Comparing different routes to work - which is fastest?",
                        keyTakeaways: [
                            "Big O measures worst-case performance",
                            "Focus on dominant terms as input grows",
                            "Space vs time complexity trade-offs"
                        ]
                    }
                ]
            },
            {
                id: "building-blocks", 
                title: "🧱 Building Blocks",
                description: "Dynamic structures and recursive thinking",
                difficulty: "intermediate",
                icon: "🧱",
                duration: "3-4 weeks",
                totalConcepts: 3,
                totalProblems: 18,
                concepts: [
                    {
                        id: "linked-lists",
                        title: "Linked Lists",
                        description: "Dynamic chains of data - like train cars connected together",
                        icon: "🔗",
                        estimatedTime: "4-5 hours",
                        prerequisite: "arrays-strings",
                        completed: false,
                        unlocked: false,
                        problems: ["reverse-linked-list", "merge-two-lists", "linked-list-cycle", "remove-nth-node"],
                        realWorldExample: "Train cars, playlist where songs link to next song",
                        keyTakeaways: [
                            "Dynamic size unlike arrays",
                            "O(1) insertion/deletion if you have the node",
                            "O(n) search time - must traverse from head"
                        ]
                    },
                    {
                        id: "stacks-queues",
                        title: "Stacks & Queues", 
                        description: "Ordered processing - like plates in a cafeteria or line at a store",
                        icon: "📚",
                        estimatedTime: "3-4 hours",
                        prerequisite: "arrays-strings",
                        completed: false,
                        unlocked: false,
                        problems: ["valid-parentheses", "min-stack", "daily-temperatures"],
                        realWorldExample: "Browser back button (stack) or printer queue (queue)",
                        keyTakeaways: [
                            "Stack: Last In, First Out (LIFO)",
                            "Queue: First In, First Out (FIFO)", 
                            "Perfect for tracking order and processing"
                        ]
                    },
                    {
                        id: "recursion",
                        title: "Recursion",
                        description: "Solving by breaking down - like Russian nesting dolls",
                        icon: "🪆",
                        estimatedTime: "4-6 hours",
                        prerequisite: "linked-lists",
                        completed: false,
                        unlocked: false,
                        problems: ["climbing-stairs", "fibonacci", "power-function"],
                        realWorldExample: "Searching through folders within folders on your computer",
                        keyTakeaways: [
                            "Break problems into smaller identical subproblems",
                            "Base case prevents infinite recursion",
                            "Call stack manages function calls"
                        ]
                    }
                ]
            },
            {
                id: "advanced",
                title: "🚀 Advanced Mastery", 
                description: "Trees, graphs, and dynamic programming",
                difficulty: "advanced",
                icon: "🚀",
                duration: "4-6 weeks",
                totalConcepts: 3,
                totalProblems: 36,
                concepts: [
                    {
                        id: "trees",
                        title: "Binary Trees",
                        description: "Hierarchical data - like family trees or company org charts", 
                        icon: "🌳",
                        estimatedTime: "6-8 hours",
                        prerequisite: "recursion",
                        completed: false,
                        unlocked: false,
                        problems: ["invert-tree", "max-depth", "same-tree", "level-order", "validate-bst"],
                        realWorldExample: "Family tree, file system directories, decision trees",
                        keyTakeaways: [
                            "Each node has at most 2 children",
                            "Recursive structure enables elegant solutions",
                            "Tree traversal: inorder, preorder, postorder"
                        ]
                    },
                    {
                        id: "graphs",
                        title: "Graphs",
                        description: "Complex relationships - like social networks or city maps",
                        icon: "🕸️", 
                        estimatedTime: "8-10 hours",
                        prerequisite: "trees",
                        completed: false,
                        unlocked: false,
                        problems: ["number-of-islands", "clone-graph", "course-schedule"],
                        realWorldExample: "Social networks, GPS navigation, web page links",
                        keyTakeaways: [
                            "Nodes connected by edges",
                            "BFS finds shortest path, DFS explores deeply",
                            "Can detect cycles and connected components"
                        ]
                    },
                    {
                        id: "dynamic-programming",
                        title: "Dynamic Programming",
                        description: "Optimized problem solving - remember solutions to avoid repeating work",
                        icon: "🧠",
                        estimatedTime: "10-15 hours",
                        prerequisite: "recursion",
                        completed: false,
                        unlocked: false,
                        problems: ["climbing-stairs", "house-robber", "coin-change", "longest-common-subsequence"],
                        realWorldExample: "Remembering shortest routes, caching web pages, game AI",
                        keyTakeaways: [
                            "Memoization: store results to avoid recalculation",
                            "Bottom-up vs top-down approaches",
                            "Optimal substructure and overlapping subproblems"
                        ]
                    }
                ]
            }
        ];

        // Blind 75 problems mapped to concepts
        this.problems = [
            // Array & String Problems
            {
                id: "two-sum",
                title: "Two Sum",
                difficulty: "easy",
                category: "Array",
                concepts: ["arrays-strings", "hash-tables"],
                description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
                realWorldContext: "🎯 You're helping a cashier find two items that total exactly the customer's budget!",
                conceptExplanation: "This problem combines array traversal with hash table lookups for efficient pair finding.",
                hints: [
                    "What if you could remember every number you've seen?",
                    "For each number, what would its 'partner' need to be?", 
                    "Hash tables let you check if that partner exists instantly!"
                ],
                xpReward: 25,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                blind75Position: 1
            },
            {
                id: "best-time-stock",
                title: "Best Time to Buy and Sell Stock", 
                difficulty: "easy",
                category: "Array",
                concepts: ["arrays-strings"],
                description: "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
                realWorldContext: "📈 You're a time traveler who can see stock prices, but can only make one trade!",
                conceptExplanation: "This demonstrates array traversal with state tracking - keeping the minimum price while calculating maximum profit.",
                hints: [
                    "Track the lowest price you've seen so far",
                    "At each day, calculate: today's price - lowest price so far",
                    "Keep track of the maximum profit you could make"
                ],
                xpReward: 25,
                timeComplexity: "O(n)",
                spaceComplexity: "O(1)",
                blind75Position: 2
            },
            {
                id: "contains-duplicate", 
                title: "Contains Duplicate",
                difficulty: "easy",
                category: "Array",
                concepts: ["arrays-strings", "hash-tables"],
                description: "Given an integer array nums, return true if any value appears at least twice in the array.",
                realWorldContext: "🔍 You're a detective looking for duplicate evidence in a case file!",
                conceptExplanation: "Perfect introduction to hash tables - using a Set to track what you've seen for constant-time lookups.",
                hints: [
                    "Use a Set to remember numbers you've already seen",
                    "If you see a number that's already in the Set, you found a duplicate!",
                    "Sets have O(1) lookup time - much faster than searching arrays"
                ],
                xpReward: 20,
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                blind75Position: 3
            }
        ];

        this.currentScreen = 'welcome';
        this.currentConcept = null;
        this.currentPath = null;
        this.currentProblem = null;
        
        // Ensure DOM is loaded before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    init() {
        console.log('Initializing CodeQuest Academy...');
        this.renderHeroStats();
        this.renderLearningPaths();
        this.setupEventListeners();
        this.updateProgressTracking();
        
        // Show navbar
        setTimeout(() => {
            const navbar = document.getElementById('navbar');
            if (navbar) {
                navbar.classList.add('visible');
            }
        }, 500);
    }

    // Show welcome screen
    showWelcomeScreen() {
        this.switchToScreen('welcome');
        this.renderHeroStats();
    }

    // Show learning paths
    showLearningPaths() {
        this.switchToScreen('learning-paths');
        this.renderLearningPaths();
    }

    // Show dashboard
    showDashboard() {
        this.switchToScreen('dashboard');
        this.renderDashboard();
    }

    // Show specific concept learning
    showConcept(conceptId) {
        this.currentConcept = this.findConceptById(conceptId);
        if (this.currentConcept) {
            this.switchToScreen('concept');
            this.renderConceptLearning();
        }
    }

    // Show problems for a concept
    showProblemsForConcept(conceptId) {
        this.currentConcept = this.findConceptById(conceptId);
        if (this.currentConcept) {
            this.switchToScreen('problems');
            this.renderConceptProblems();
        }
    }

    // Render learning paths with concept progression
    renderLearningPaths() {
        const pathGrid = document.querySelector('.path-grid');
        if (!pathGrid) {
            console.log('Path grid not found');
            return;
        }

        pathGrid.innerHTML = this.learningPaths.map(path => {
            const completedConcepts = path.concepts.filter(c => c.completed).length;
            const progressPercentage = (completedConcepts / path.totalConcepts) * 100;

            return `
                <div class="path-card ${path.difficulty}" onclick="codeQuest.showPathDetails('${path.id}')">
                    <div class="path-badge">${path.difficulty}</div>
                    <div class="path-icon">${path.icon}</div>
                    <h3>${path.title}</h3>
                    <div class="path-description">
                        <p>${path.description}</p>
                        <div class="path-progress">
                            <div class="progress-bar-container">
                                <div class="progress-bar-fill" style="width: ${progressPercentage}%"></div>
                            </div>
                            <span class="progress-text">${completedConcepts}/${path.totalConcepts} concepts</span>
                        </div>
                        <div class="concepts-preview">
                            ${path.concepts.slice(0, 3).map(concept => `
                                <div class="concept-preview ${concept.completed ? 'completed' : concept.unlocked ? 'unlocked' : 'locked'}" onclick="event.stopPropagation(); codeQuest.showConcept('${concept.id}')">
                                    <span class="concept-icon">${concept.icon}</span>
                                    <span class="concept-name">${concept.title}</span>
                                    ${concept.completed ? '<i class="fas fa-check"></i>' : concept.unlocked ? '<i class="fas fa-unlock"></i>' : '<i class="fas fa-lock"></i>'}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="path-stats">
                        <div class="duration">📅 ${path.duration}</div>
                        <div class="problems">🎯 ${path.totalProblems} problems</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Show detailed view of a learning path
    showPathDetails(pathId) {
        const path = this.learningPaths.find(p => p.id === pathId);
        if (!path) return;

        this.currentPath = path;
        this.switchToScreen('path-details');
        this.renderPathDetails();
    }

    // Render path details
    renderPathDetails() {
        const container = document.getElementById('path-details-content');
        if (!container || !this.currentPath) return;

        container.innerHTML = `
            <div class="path-details-container">
                <div class="path-details-header">
                    <button class="back-btn" onclick="codeQuest.showLearningPaths()">
                        <i class="fas fa-arrow-left"></i> Back to Paths
                    </button>
                    <h2>${this.currentPath.title}</h2>
                    <p>${this.currentPath.description}</p>
                </div>
                <div class="path-roadmap">
                    ${this.currentPath.concepts.map(concept => `
                        <div class="roadmap-concept ${concept.completed ? 'completed' : concept.unlocked ? 'unlocked' : 'locked'}">
                            <div class="concept-header">
                                <span class="concept-icon">${concept.icon}</span>
                                <h3>${concept.title}</h3>
                                <span class="concept-status">
                                    ${concept.completed ? '✅ Completed' : concept.unlocked ? '🔓 Unlocked' : '🔒 Locked'}
                                </span>
                            </div>
                            <p>${concept.description}</p>
                            <div class="concept-actions">
                                ${concept.unlocked ? `
                                    <button class="cta-button primary" onclick="codeQuest.showConcept('${concept.id}')">
                                        ${concept.completed ? 'Review Concept' : 'Learn Concept'}
                                    </button>
                                    <button class="cta-button secondary" onclick="codeQuest.showProblemsForConcept('${concept.id}')">
                                        Practice Problems
                                    </button>
                                ` : `
                                    <p class="prerequisite-note">
                                        📋 Prerequisite: ${concept.prerequisite ? this.findConceptById(concept.prerequisite)?.title : 'None'}
                                    </p>
                                `}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Render concept learning interface
    renderConceptLearning() {
        const conceptContainer = document.getElementById('concept-content');
        if (!conceptContainer || !this.currentConcept) return;

        conceptContainer.innerHTML = `
            <div class="concept-header">
                <button class="back-btn" onclick="codeQuest.showLearningPaths()">
                    <i class="fas fa-arrow-left"></i> Back to Paths
                </button>
                <div class="concept-info">
                    <span class="concept-icon">${this.currentConcept.icon}</span>
                    <h2>${this.currentConcept.title}</h2>
                    <span class="concept-time">⏱️ ${this.currentConcept.estimatedTime}</span>
                </div>
            </div>

            <div class="concept-learning">
                <div class="concept-overview">
                    <h3>📚 What You'll Learn</h3>
                    <p>${this.currentConcept.description}</p>
                    
                    <div class="real-world-example">
                        <h4>🌍 Real World Example</h4>
                        <p>${this.currentConcept.realWorldExample}</p>
                    </div>

                    <div class="key-takeaways">
                        <h4>🎯 Key Takeaways</h4>
                        <ul>
                            ${this.currentConcept.keyTakeaways.map(takeaway => `<li>${takeaway}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="concept-actions">
                    <button class="cta-button primary" onclick="codeQuest.startConceptTutorial('${this.currentConcept.id}')">
                        <i class="fas fa-play"></i> Start Learning
                        <div class="button-glow"></div>
                    </button>
                    
                    <button class="cta-button secondary" onclick="codeQuest.showProblemsForConcept('${this.currentConcept.id}')">
                        <i class="fas fa-code"></i> Practice Problems
                        <div class="button-glow"></div>
                    </button>
                </div>

                <div class="related-problems">
                    <h4>🎯 Problems You'll Master</h4>
                    <div class="problems-grid">
                        ${this.currentConcept.problems.map(problemId => {
                            const problem = this.problems.find(p => p.id === problemId);
                            return problem ? `
                                <div class="problem-preview">
                                    <span class="problem-difficulty ${problem.difficulty}">${problem.difficulty}</span>
                                    <span class="problem-title">${problem.title}</span>
                                    <span class="problem-xp">+${problem.xpReward} XP</span>
                                </div>
                            ` : '';
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // Start interactive concept tutorial  
    startConceptTutorial(conceptId) {
        console.log(`Starting tutorial for ${conceptId}`);
        // For now, just mark as completed and show success
        this.markConceptCompleted(conceptId);
        this.showConceptCompletionModal(conceptId);
    }

    // Mark concept as completed and unlock next concepts
    markConceptCompleted(conceptId) {
        // Find and mark concept as completed
        this.learningPaths.forEach(path => {
            path.concepts.forEach(concept => {
                if (concept.id === conceptId) {
                    concept.completed = true;
                    this.currentUser.conceptsLearned++;
                    this.currentUser.xp += 50; // Bonus XP for learning concepts
                }
            });
        });

        // Unlock dependent concepts
        this.unlockDependentConcepts(conceptId);
        this.saveProgress();
        this.renderHeroStats(); // Update stats display
    }

    // Unlock concepts that depend on the completed one
    unlockDependentConcepts(completedConceptId) {
        this.learningPaths.forEach(path => {
            path.concepts.forEach(concept => {
                if (concept.prerequisite === completedConceptId) {
                    concept.unlocked = true;
                }
            });
        });
    }

    // Show problems for a concept
    renderConceptProblems() {
        if (!this.currentConcept) return;

        const problemsContainer = document.getElementById('conceptProblemsGrid');
        if (!problemsContainer) return;

        const conceptProblems = this.problems.filter(problem => 
            problem.concepts.includes(this.currentConcept.id)
        );

        document.getElementById('conceptProblemsTitle').textContent = 
            `${this.currentConcept.title} - Practice Problems`;
        document.getElementById('conceptProblemsDescription').textContent = 
            `Apply your knowledge of ${this.currentConcept.title.toLowerCase()} to these Blind 75 questions`;

        problemsContainer.innerHTML = conceptProblems.map(problem => `
            <div class="problem-card" onclick="codeQuest.showProblem('${problem.id}')">
                <div class="problem-header">
                    <span class="problem-difficulty ${problem.difficulty}">${problem.difficulty}</span>
                    <span class="blind75-position">#${problem.blind75Position || '?'}</span>
                </div>
                <h3>${problem.title}</h3>
                <p class="problem-context">${problem.realWorldContext}</p>
                <div class="concept-connection">
                    <strong>Why this problem?</strong>
                    <p>${problem.conceptExplanation}</p>
                </div>
                <div class="problem-footer">
                    <span class="xp-reward">+${problem.xpReward} XP</span>
                    <span class="complexity">${problem.timeComplexity}</span>
                </div>
            </div>
        `).join('');
    }

    // Show individual problem
    showProblem(problemId) {
        const problem = this.problems.find(p => p.id === problemId);
        if (!problem) return;

        this.currentProblem = problem;
        this.switchToScreen('problem');
        this.renderProblemDetails();
    }

    // Render problem details
    renderProblemDetails() {
        if (!this.currentProblem) return;

        // Update problem info
        document.getElementById('problemNumber').textContent = `#${this.currentProblem.blind75Position || '?'}`;
        document.getElementById('problemDifficulty').textContent = this.currentProblem.difficulty;
        document.getElementById('problemDifficulty').className = `problem-difficulty ${this.currentProblem.difficulty}`;
        document.getElementById('problemTitle').textContent = this.currentProblem.title;
        document.getElementById('problemContext').textContent = this.currentProblem.realWorldContext;
        document.getElementById('problemDescription').textContent = this.currentProblem.description;

        // Render concept tags
        const conceptsContainer = document.getElementById('problemConcepts');
        conceptsContainer.innerHTML = this.currentProblem.concepts.map(conceptId => {
            const concept = this.findConceptById(conceptId);
            return concept ? `<span class="concept-tag">${concept.icon} ${concept.title}</span>` : '';
        }).join('');

        // Render progressive hints
        const hintsContainer = document.getElementById('problemHints');
        hintsContainer.innerHTML = this.currentProblem.hints.map((hint, index) => `
            <div class="hint-item" onclick="this.classList.toggle('revealed')">
                <span class="hint-number">${index + 1}</span>
                <span class="hint-text">${hint}</span>
            </div>
        `).join('');
    }

    // Find concept by ID across all paths
    findConceptById(conceptId) {
        for (let path of this.learningPaths) {
            const concept = path.concepts.find(c => c.id === conceptId);
            if (concept) {
                concept.pathId = path.id; // Add path reference
                return concept;
            }
        }
        return null;
    }

    // Switch between different screens
    switchToScreen(screenName) {
        console.log(`Switching to screen: ${screenName}`);
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(`${screenName}-screen`);
        if (targetScreen) {
            targetScreen.classList.add('active');
        } else {
            console.error(`Screen not found: ${screenName}-screen`);
        }

        this.currentScreen = screenName;
    }

    // Event listeners setup
    setupEventListeners() {
        console.log('Setting up event listeners...');
        
        // Navigation buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.start-journey-btn') || e.target.closest('.start-journey-btn')) {
                e.preventDefault();
                console.log('Start journey clicked');
                this.showLearningPaths();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.showWelcomeScreen();
            }
        });
    }

    // Dashboard rendering
    renderDashboard() {
        // Simple dashboard rendering for now
        console.log('Rendering dashboard...');
    }

    // Save progress to localStorage
    saveProgress() {
        try {
            localStorage.setItem('codequest_progress', JSON.stringify({
                user: this.currentUser,
                paths: this.learningPaths
            }));
        } catch (error) {
            console.error('Error saving progress:', error);
        }
    }

    // Load progress from localStorage
    loadProgress() {
        try {
            const saved = localStorage.getItem('codequest_progress');
            if (saved) {
                const data = JSON.parse(saved);
                this.currentUser = { ...this.currentUser, ...data.user };
                // Merge saved path progress
                data.paths?.forEach(savedPath => {
                    const currentPath = this.learningPaths.find(p => p.id === savedPath.id);
                    if (currentPath) {
                        currentPath.concepts = savedPath.concepts;
                    }
                });
            }
        } catch (error) {
            console.error('Error loading progress:', error);
        }
    }

    // Update progress tracking
    updateProgressTracking() {
        this.loadProgress();
        this.renderHeroStats();
    }

    // Render hero stats
    renderHeroStats() {
        const statsElements = {
            level: document.getElementById('userLevel'),
            xp: document.getElementById('userXP'),
            streak: document.getElementById('userStreak'),
            concepts: document.getElementById('conceptsLearned'),
            problems: document.getElementById('problemsSolved')
        };

        if (statsElements.level) statsElements.level.textContent = this.currentUser.level;
        if (statsElements.xp) statsElements.xp.textContent = this.currentUser.xp;
        if (statsElements.streak) statsElements.streak.textContent = this.currentUser.streak;
        if (statsElements.concepts) statsElements.concepts.textContent = `${this.currentUser.conceptsLearned}/${this.currentUser.totalConcepts}`;
        if (statsElements.problems) statsElements.problems.textContent = `${this.currentUser.problemsSolved}/${this.currentUser.totalProblems}`;
    }

    // Show concept completion modal
    showConceptCompletionModal(conceptId) {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.add('show');
        }
        
        // Auto-close after 3 seconds
        setTimeout(() => {
            this.closeModal();
        }, 3000);
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('successModal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    // Enhanced code execution methods
    runCode() {
        console.log('Running code...');
        
        const outputElement = document.getElementById('output');
        if (!outputElement) {
            console.error('Output element not found');
            return;
        }

        // Get the current code from the editor
        const codeEditor = document.getElementById('codeEditor');
        const code = codeEditor ? codeEditor.value : '';
        
        if (!code.trim()) {
            outputElement.innerHTML = `
                <div style="color: #e74c3c; padding: 1rem;">
                    <i class="fas fa-exclamation-triangle"></i> 
                    Please write some code first!
                </div>
            `;
            return;
        }

        // Show loading state
        outputElement.innerHTML = `
            <div style="color: #3498db; padding: 1rem;">
                <i class="fas fa-spinner fa-spin"></i> 
                Running your code...
            </div>
        `;

        // Simulate code execution with setTimeout
        setTimeout(() => {
            try {
                let result = '';
                
                if (this.currentLanguage === 'javascript') {
                    // Simple JavaScript execution simulation
                    result = this.simulateJavaScriptExecution(code);
                } else if (this.currentLanguage === 'java') {
                    // Simple Java execution simulation
                    result = this.simulateJavaExecution(code);
                }

                outputElement.innerHTML = `
                    <div style="color: #27ae60; padding: 1rem;">
                        <i class="fas fa-check-circle"></i> 
                        <strong>Output:</strong><br>
                        <pre style="background: #2c3e50; padding: 1rem; border-radius: 8px; margin-top: 0.5rem; color: #ecf0f1;">${result}</pre>
                    </div>
                `;
            } catch (error) {
                outputElement.innerHTML = `
                    <div style="color: #e74c3c; padding: 1rem;">
                        <i class="fas fa-times-circle"></i> 
                        <strong>Error:</strong><br>
                        <pre style="background: #2c3e50; padding: 1rem; border-radius: 8px; margin-top: 0.5rem; color: #e74c3c;">${error.message}</pre>
                    </div>
                `;
            }
        }, 1000);
    }

    simulateJavaScriptExecution(code) {
        // Simple simulation for common JavaScript patterns
        if (code.includes('console.log')) {
            const logMatches = code.match(/console\.log\(([^)]+)\)/g);
            if (logMatches) {
                return logMatches.map(match => {
                    const content = match.match(/console\.log\(([^)]+)\)/)[1];
                    return eval(content.replace(/['"]/g, ''));
                }).join('\n');
            }
        }
        
        if (code.includes('function')) {
            return "Function defined successfully! Call it to see results.";
        }
        
        if (code.includes('return')) {
            try {
                const func = new Function(code + '; return result;');
                return func();
            } catch (e) {
                return "Code executed successfully!";
            }
        }
        
        return "Code executed successfully! No output to display.";
    }

    simulateJavaExecution(code) {
        // Simple simulation for Java patterns
        if (code.includes('System.out.print')) {
            const printMatches = code.match(/System\.out\.print(?:ln)?\(([^)]+)\)/g);
            if (printMatches) {
                return printMatches.map(match => {
                    const content = match.match(/System\.out\.print(?:ln)?\(([^)]+)\)/)[1];
                    return content.replace(/['"]/g, '');
                }).join('\n');
            }
        }
        
        if (code.includes('public static void main')) {
            return "Main method executed successfully!";
        }
        
        if (code.includes('class ')) {
            return "Class compiled successfully!";
        }
        
        return "Java code compiled and executed successfully!";
    }

    submitSolution() {
        console.log('Submitting solution...');
        
        const outputElement = document.getElementById('output');
        if (!outputElement) {
            console.error('Output element not found');
            return;
        }

        const codeEditor = document.getElementById('codeEditor');
        const code = codeEditor ? codeEditor.value : '';
        
        if (!code.trim()) {
            outputElement.innerHTML = `
                <div style="color: #e74c3c; padding: 1rem;">
                    <i class="fas fa-exclamation-triangle"></i> 
                    Please write a solution first!
                </div>
            `;
            return;
        }

        // Show submission process
        outputElement.innerHTML = `
            <div style="color: #f39c12; padding: 1rem;">
                <i class="fas fa-paper-plane"></i> 
                Submitting your solution...
            </div>
        `;

        // Simulate submission with setTimeout
        setTimeout(() => {
            const isCorrect = Math.random() > 0.3; // 70% chance of success for demo
            
            if (isCorrect) {
                outputElement.innerHTML = `
                    <div style="color: #27ae60; padding: 1rem;">
                        <i class="fas fa-trophy"></i> 
                        <strong>Congratulations!</strong><br>
                        Your solution is correct! 🎉<br>
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(39, 174, 96, 0.1); border-radius: 8px;">
                            <strong>Results:</strong><br>
                            ✅ All test cases passed<br>
                            ⚡ Runtime: 42ms (beats 89% of submissions)<br>
                            💾 Memory: 14.2MB (beats 76% of submissions)
                        </div>
                    </div>
                `;
                
                // Update progress
                this.updateProgress();
                
            } else {
                outputElement.innerHTML = `
                    <div style="color: #e74c3c; padding: 1rem;">
                        <i class="fas fa-times-circle"></i> 
                        <strong>Almost there!</strong><br>
                        Your solution didn't pass all test cases.<br>
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(231, 76, 60, 0.1); border-radius: 8px;">
                            <strong>Failed Test Case:</strong><br>
                            Input: [1, 2, 3, 4]<br>
                            Expected: [2, 4, 6, 8]<br>
                            Got: [1, 2, 3, 4]<br>
                            <br>
                            💡 <strong>Hint:</strong> Check your algorithm logic!
                        </div>
                    </div>
                `;
            }
        }, 1500);
    }

    switchLanguage(language) {
        console.log(`Switching to ${language}`);
        this.currentLanguage = language;
        
        // Update active tab
        document.querySelectorAll('.lang-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

// Initialize the application
console.log('Creating CodeQuest Academy instance...');
const codeQuest = new CodeQuestAcademy();
