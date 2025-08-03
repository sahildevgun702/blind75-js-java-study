// DSA Content Integration System
// Loads educational content from docs and creates interactive tutorials

class DSAContentLoader {
    constructor() {
        this.contentBase = '../docs/data-structures-algorithms/';
        this.tutorials = this.initializeTutorials();
    }

    initializeTutorials() {
        return {
            'arrays-strings': {
                title: "Arrays & Strings: Your First Data Containers",
                icon: "📦",
                steps: [
                    {
                        title: "What is an Array?",
                        content: `
                            <h3>🏠 Real-World Analogy</h3>
                            <p>Think of an array like an <strong>apartment building</strong>:</p>
                            <div class="analogy-visual">
                                <pre>
Building "MyArray"
┌─────────────────────┐
│ Unit 0: [42]       │ ← First apartment  
│ Unit 1: [17]       │ ← Second apartment
│ Unit 2: [88]       │ ← Third apartment  
│ Unit 3: [99]       │ ← Fourth apartment
│ Unit 4: [13]       │ ← Fifth apartment
└─────────────────────┘
                                </pre>
                            </div>
                            <ul>
                                <li>Each unit has a <strong>NUMBER</strong> (index)</li>
                                <li>Each unit stores <strong>ONE VALUE</strong></li>
                                <li>You can visit any unit directly if you know the number</li>
                                <li>All units are the <strong>SAME SIZE</strong></li>
                            </ul>
                        `,
                        visual: `
                            <div class="array-demo">
                                <div class="array-container">
                                    <div class="array-element">42</div>
                                    <div class="array-element">17</div>
                                    <div class="array-element">88</div>
                                    <div class="array-element">99</div>
                                    <div class="array-element">13</div>
                                </div>
                                <div class="indices">
                                    <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: "Array Operations",
                        content: `
                            <h3>🔧 What Can You Do With Arrays?</h3>
                            <div class="operation-grid">
                                <div class="operation">
                                    <h4>📍 Access by Index</h4>
                                    <p><code>array[2]</code> gets the 3rd element</p>
                                    <span class="complexity">O(1) - Instant!</span>
                                </div>
                                <div class="operation">
                                    <h4>🔍 Search for Value</h4>
                                    <p>Find where 88 is stored</p>
                                    <span class="complexity">O(n) - Check each spot</span>
                                </div>
                                <div class="operation">
                                    <h4>➕ Add Element</h4>
                                    <p>Put new value at the end</p>
                                    <span class="complexity">O(1) - Quick!</span>
                                </div>
                                <div class="operation">
                                    <h4>➖ Remove Element</h4>
                                    <p>Take out value and shift others</p>
                                    <span class="complexity">O(n) - Slow</span>
                                </div>
                            </div>
                        `,
                        visual: `
                            <div class="operations-demo">
                                <button onclick="demoAccess()">Access Index 2</button>
                                <button onclick="demoSearch()">Search for 88</button>
                                <button onclick="demoAdd()">Add Element</button>
                                <button onclick="demoRemove()">Remove Element</button>
                            </div>
                        `
                    },
                    {
                        title: "Strings as Character Arrays",
                        content: `
                            <h3>📝 Strings Are Just Arrays of Characters!</h3>
                            <p>A string like "HELLO" is really:</p>
                            <div class="string-visual">
                                <pre>
String: "HELLO"
┌─┬─┬─┬─┬─┐
│H│E│L│L│O│
└─┴─┴─┴─┴─┘
 0 1 2 3 4  ← Position numbers
                                </pre>
                            </div>
                            <ul>
                                <li>Each position holds <strong>ONE CHARACTER</strong></li>
                                <li>Characters are in a <strong>SPECIFIC ORDER</strong></li>
                                <li>You can read any character if you know its position</li>
                            </ul>
                        `,
                        visual: `
                            <div class="string-demo">
                                <div class="string-container">
                                    <div class="char-element">H</div>
                                    <div class="char-element">E</div>
                                    <div class="char-element">L</div>
                                    <div class="char-element">L</div>
                                    <div class="char-element">O</div>
                                </div>
                                <div class="indices">
                                    <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                                </div>
                            </div>
                        `
                    },
                    {
                        title: "Common Array Patterns",
                        content: `
                            <h3>🎯 Patterns You'll See in Problems</h3>
                            <div class="pattern-grid">
                                <div class="pattern">
                                    <h4>🔄 Two Pointers</h4>
                                    <p>Start from both ends, move toward center</p>
                                    <code>left = 0, right = array.length - 1</code>
                                </div>
                                <div class="pattern">
                                    <h4>🪟 Sliding Window</h4>
                                    <p>Move a "window" across the array</p>
                                    <code>for (let i = 0; i < array.length - k; i++)</code>
                                </div>
                                <div class="pattern">
                                    <h4>📊 Prefix Sums</h4>
                                    <p>Pre-calculate running totals</p>
                                    <code>prefixSum[i] = prefixSum[i-1] + array[i]</code>
                                </div>
                            </div>
                        `,
                        visual: `
                            <div class="patterns-demo">
                                <button onclick="demoTwoPointers()">Two Pointers</button>
                                <button onclick="demoSlidingWindow()">Sliding Window</button>
                                <button onclick="demoPrefixSum()">Prefix Sums</button>
                            </div>
                        `
                    },
                    {
                        title: "Ready to Practice!",
                        content: `
                            <h3>🎯 Time to Apply Your Knowledge!</h3>
                            <p>Now that you understand arrays and strings, you're ready to tackle these Blind 75 problems:</p>
                            <div class="next-problems">
                                <div class="next-problem">
                                    <h4>🎯 Two Sum</h4>
                                    <p>Use arrays and hash tables to find pairs</p>
                                    <span class="difficulty easy">Easy</span>
                                </div>
                                <div class="next-problem">
                                    <h4>📈 Best Time to Buy and Sell Stock</h4>
                                    <p>Track minimum value while traversing</p>
                                    <span class="difficulty easy">Easy</span>
                                </div>
                                <div class="next-problem">
                                    <h4>🔍 Contains Duplicate</h4>
                                    <p>Check for repeated values efficiently</p>
                                    <span class="difficulty easy">Easy</span>
                                </div>
                            </div>
                            <p><strong>Remember:</strong> You now know that arrays give O(1) access by index but O(n) search by value. Use this knowledge!</p>
                        `,
                        visual: `
                            <div class="completion-celebration">
                                <div class="trophy">🏆</div>
                                <h3>Arrays & Strings Mastered!</h3>
                                <p>You've unlocked the foundation of programming!</p>
                            </div>
                        `
                    }
                ]
            },
            'hash-tables': {
                title: "Hash Tables: Lightning-Fast Lookups",
                icon: "⚡",
                steps: [
                    {
                        title: "What is a Hash Table?",
                        content: `
                            <h3>🗄️ Real-World Analogy</h3>
                            <p>Think of a hash table like a <strong>magical filing cabinet</strong>:</p>
                            <ul>
                                <li>🔍 <strong>Instant lookup</strong> - say a name, instantly get their file</li>
                                <li>🏷️ <strong>Smart organization</strong> - files aren't stored alphabetically, but you can find them instantly</li>
                                <li>📋 <strong>Key-Value pairs</strong> - name (key) leads to file (value)</li>
                                <li>⚡ <strong>O(1) access time</strong> - no matter how many files, lookup is instant</li>
                            </ul>
                            <h4>🌟 The Magic: Hash Functions</h4>
                            <p>A hash function takes your key (like "John Smith") and converts it to a number that tells you exactly which drawer to check!</p>
                        `,
                        visual: `
                            <div class="hash-table-demo">
                                <div class="hash-input">
                                    <input type="text" placeholder="Enter a key..." id="hashKey">
                                    <button onclick="demonstrateHashing()">Hash It!</button>
                                </div>
                                <div class="hash-result" id="hashResult"></div>
                            </div>
                        `
                    },
                    {
                        title: "Why Hash Tables Are Amazing",
                        content: `
                            <h3>⚡ Speed Comparison</h3>
                            <div class="speed-comparison">
                                <div class="method">
                                    <h4>📚 Array Search</h4>
                                    <p>To find "John Smith" in an array of 1,000 people:</p>
                                    <code>Average: 500 checks, Worst: 1,000 checks</code>
                                    <span class="complexity bad">O(n) - Linear time</span>
                                </div>
                                <div class="vs">VS</div>
                                <div class="method">
                                    <h4>⚡ Hash Table Lookup</h4>
                                    <p>To find "John Smith" in a hash table of 1,000 people:</p>
                                    <code>Always: 1 check (direct access)</code>
                                    <span class="complexity good">O(1) - Constant time</span>
                                </div>
                            </div>
                            <p><strong>That's the power of hash tables!</strong> Trade a little memory for massive speed gains.</p>
                        `,
                        visual: `
                            <div class="performance-demo">
                                <button onclick="demoArraySearch()">Search 1000-item Array</button>
                                <button onclick="demoHashSearch()">Search Hash Table</button>
                                <div id="searchResults"></div>
                            </div>
                        `
                    }
                ]
            }
            // Add more concepts here...
        };
    }

    getTutorial(conceptId) {
        return this.tutorials[conceptId] || null;
    }

    // Load actual content from documentation files
    async loadConceptFromDocs(conceptId) {
        try {
            const response = await fetch(`${this.contentBase}${this.getConceptPath(conceptId)}/README.md`);
            const content = await response.text();
            return this.parseMarkdownContent(content);
        } catch (error) {
            console.warn(`Could not load content for ${conceptId}, using built-in content`);
            return this.getTutorial(conceptId);
        }
    }

    getConceptPath(conceptId) {
        const pathMap = {
            'arrays-strings': '01-arrays-strings',
            'hash-tables': '02-hash-tables',
            'big-o': '03-big-o',
            'linked-lists': '04-linked-lists',
            'stacks-queues': '05-stacks-queues',
            'recursion': '06-recursion',
            'trees': '07-trees',
            'graphs': '08-graphs',
            'dynamic-programming': '12-dynamic-programming'
        };
        return pathMap[conceptId] || conceptId;
    }

    parseMarkdownContent(markdown) {
        // Simple markdown parser for educational content
        // In a real implementation, you'd use a proper markdown parser
        const lines = markdown.split('\n');
        let currentSection = '';
        let content = {};
        
        lines.forEach(line => {
            if (line.startsWith('# ')) {
                content.title = line.substring(2);
            } else if (line.startsWith('## ')) {
                currentSection = line.substring(3);
                content[currentSection] = '';
            } else if (currentSection) {
                content[currentSection] += line + '\n';
            }
        });
        
        return content;
    }
}

// Enhanced CodeQuest Academy with integrated content
class EnhancedCodeQuestAcademy extends CodeQuestAcademy {
    constructor() {
        super();
        this.contentLoader = new DSAContentLoader();
        this.currentTutorial = null;
        this.currentTutorialStep = 0;
    }

    // Start interactive tutorial for a concept
    async startConceptTutorial(conceptId) {
        this.currentTutorial = await this.contentLoader.loadConceptFromDocs(conceptId);
        if (!this.currentTutorial) {
            this.currentTutorial = this.contentLoader.getTutorial(conceptId);
        }
        
        if (this.currentTutorial) {
            this.currentTutorialStep = 0;
            this.switchToScreen('tutorial');
            this.renderTutorialStep();
        }
    }

    // Render current tutorial step
    renderTutorialStep() {
        if (!this.currentTutorial || !this.currentTutorial.steps) return;

        const step = this.currentTutorial.steps[this.currentTutorialStep];
        const totalSteps = this.currentTutorial.steps.length;

        // Update progress
        document.getElementById('currentStep').textContent = this.currentTutorialStep + 1;
        document.getElementById('totalSteps').textContent = totalSteps;
        
        const progressPercentage = ((this.currentTutorialStep + 1) / totalSteps) * 100;
        document.getElementById('tutorialProgress').style.width = progressPercentage + '%';

        // Update content
        document.getElementById('tutorialTitle').innerHTML = step.title;
        document.getElementById('tutorialText').innerHTML = step.content;
        document.getElementById('tutorialVisual').innerHTML = step.visual || '';

        // Update navigation buttons
        document.getElementById('prevStep').disabled = this.currentTutorialStep === 0;
        document.getElementById('nextStep').innerHTML = 
            this.currentTutorialStep === totalSteps - 1 ? 
            'Complete Tutorial <i class="fas fa-check"></i>' : 
            'Next <i class="fas fa-chevron-right"></i>';
    }

    // Navigate tutorial steps
    nextTutorialStep() {
        if (!this.currentTutorial) return;

        if (this.currentTutorialStep < this.currentTutorial.steps.length - 1) {
            this.currentTutorialStep++;
            this.renderTutorialStep();
        } else {
            // Tutorial completed
            this.completeTutorial();
        }
    }

    previousTutorialStep() {
        if (this.currentTutorialStep > 0) {
            this.currentTutorialStep--;
            this.renderTutorialStep();
        }
    }

    // Complete tutorial and mark concept as learned
    completeTutorial() {
        // Mark concept as completed
        const conceptId = this.currentConcept?.id;
        if (conceptId) {
            this.markConceptCompleted(conceptId);
            this.showConceptCompletionModal(conceptId);
        }
        
        // Return to concept overview
        this.showConcept(conceptId);
    }

    // Enhanced problem rendering with concept connections
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

    // Show individual problem with enhanced context
    showProblem(problemId) {
        const problem = this.problems.find(p => p.id === problemId);
        if (!problem) return;

        this.currentProblem = problem;
        this.switchToScreen('problem');
        this.renderProblemDetails();
    }

    // Render problem with full educational context
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
}

// Replace the original instance
const codeQuest = new EnhancedCodeQuestAcademy();
