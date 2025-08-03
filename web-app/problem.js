// Problem Page JavaScript
class ProblemPage {
    constructor() {
        this.currentProblem = null;
        this.currentLanguage = 'javascript';
        this.loadProblemFromURL();
        this.initializeEventListeners();
    }

    loadProblemFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const problemId = urlParams.get('id');
        
        if (problemId) {
            this.loadProblem(problemId);
        } else {
            // Redirect back to main page if no problem ID
            window.location.href = 'index.html';
        }
    }

    loadProblem(problemId) {
        // Get problems data from the main app
        const problemsData = this.generateSampleData();
        
        console.log('🔍 Looking for problem ID:', problemId);
        
        // Find the problem by ID first
        let foundProblem = null;
        for (const category of Object.values(problemsData.categories)) {
            const problem = category.problems.find(p => p.id === problemId);
            if (problem) {
                foundProblem = problem;
                break;
            }
        }

        // If not found by direct ID match, try to find by converted name
        if (!foundProblem) {
            console.log('🔄 Trying to find by name conversion for ID:', problemId);
            for (const category of Object.values(problemsData.categories)) {
                const problem = category.problems.find(p => {
                    if (p.title || p.name) {
                        const convertedName = (p.title || p.name).toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        console.log(`🔍 Checking: "${p.title || p.name}" → "${convertedName}" vs "${problemId}"`);
                        return convertedName === problemId;
                    }
                    return false;
                });
                if (problem) {
                    foundProblem = problem;
                    console.log('✅ Found by name conversion:', problem);
                    break;
                }
            }
        }

        if (foundProblem) {
            this.currentProblem = foundProblem;
            this.renderProblem();
        } else {
            console.error('Problem not found:', problemId);
            console.log('Available problems:', problemsData);
            // Instead of redirecting immediately, show an error
            this.showProblemNotFound(problemId);
        }
    }

    showProblemNotFound(problemId) {
        document.getElementById('problemTitle').textContent = `Problem Not Found: ${problemId}`;
        document.getElementById('problemDescription').innerHTML = `
            <h3>🚧 Problem Under Construction</h3>
            <p>The problem "<strong>${problemId}</strong>" hasn't been implemented yet.</p>
            <p>Available problems:</p>
            <ul>
                <li>Two Sum (two-sum)</li>
                <li>Best Time to Buy and Sell Stock (best-time-to-buy-and-sell-stock)</li>
                <li>Contains Duplicate (contains-duplicate)</li>
            </ul>
            <button onclick="goBack()" class="primary-btn">Go Back to Quest Map</button>
        `;
    }

    renderProblem() {
        const problem = this.currentProblem;
        
        // Update title and meta info
        document.getElementById('problemTitle').textContent = problem.title || problem.name;
        document.getElementById('difficultyBadge').textContent = problem.difficulty;
        document.getElementById('categoryBadge').textContent = problem.category;
        document.title = `${problem.title || problem.name} - CodeQuest Academy`;
        
        // Update difficulty badge color
        const difficultyBadge = document.getElementById('difficultyBadge');
        difficultyBadge.className = `difficulty-badge ${problem.difficulty.toLowerCase()}`;
        
        // Load problem description
        document.getElementById('problemDescription').innerHTML = problem.description;
        
        // Load documentation
        this.loadDocumentation();
        
        // Set initial code template
        this.loadCodeTemplate();
    }

    loadDocumentation() {
        const docs = this.getDocumentationForProblem(this.currentProblem.id);
        document.getElementById('documentationContent').innerHTML = docs;
    }

    loadCodeTemplate() {
        const problem = this.currentProblem;
        const codeInput = document.getElementById('codeInput');
        
        if (this.currentLanguage === 'javascript') {
            codeInput.value = problem.starterCode?.javascript || '// Write your solution here\nfunction solution() {\n    \n}';
        } else {
            codeInput.value = problem.starterCode?.java || '// Write your solution here\npublic class Solution {\n    \n}';
        }
    }

    switchCodeLanguage() {
        const selector = document.getElementById('codeLangSelector');
        this.currentLanguage = selector.value;
        this.loadCodeTemplate();
    }

    initializeEventListeners() {
        // Language tabs for documentation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Remove active class from all tabs
                document.querySelectorAll('.tab-btn').forEach(tab => tab.classList.remove('active'));
                // Add active class to clicked tab
                e.target.classList.add('active');
                
                // Update documentation based on selected language
                this.loadDocumentation();
            });
        });
    }

    getDocumentationForProblem(problemId) {
        const activeTab = document.querySelector('.tab-btn.active')?.dataset.lang || 'javascript';
        
        // Combined documentation for both languages
        return `
            <div class="combined-docs">
                ${activeTab === 'javascript' ? this.getJavaScriptDocs(problemId) : this.getJavaDocs(problemId)}
            </div>
        `;
    }

    getJavaScriptDocs(problemId) {
        const docs = {
            'two-sum': {
                concept: 'Hash Map / Object for O(1) lookups',
                approach: 'Store complements in a hash map as you iterate',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                keyMethods: ['Map.set()', 'Map.get()', 'Map.has()'],
                example: `
// Using Map for O(1) lookups
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};`
            }
        };
        
        const doc = docs[problemId] || docs['two-sum'];
        return `
            <div class="language-section javascript-section">
                <h4>🟨 JavaScript Approach</h4>
                <div class="doc-item">
                    <strong>Core Concept:</strong> ${doc.concept}
                </div>
                <div class="doc-item">
                    <strong>Approach:</strong> ${doc.approach}
                </div>
                <div class="doc-item">
                    <strong>Time Complexity:</strong> ${doc.timeComplexity}
                </div>
                <div class="doc-item">
                    <strong>Space Complexity:</strong> ${doc.spaceComplexity}
                </div>
                <div class="doc-item">
                    <strong>Key Methods:</strong> ${doc.keyMethods.join(', ')}
                </div>
                <div class="code-example">
                    <strong>Example Implementation:</strong>
                    <pre><code>${doc.example}</code></pre>
                </div>
            </div>
        `;
    }

    getJavaDocs(problemId) {
        const docs = {
            'two-sum': {
                concept: 'HashMap for O(1) lookups with Integer keys',
                approach: 'Use HashMap to store value-index pairs while iterating',
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                keyMethods: ['HashMap.put()', 'HashMap.get()', 'HashMap.containsKey()'],
                example: `
// Using HashMap for O(1) lookups
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    throw new IllegalArgumentException("No solution");
}`
            }
        };
        
        const doc = docs[problemId] || docs['two-sum'];
        return `
            <div class="language-section java-section">
                <h4>☕ Java Approach</h4>
                <div class="doc-item">
                    <strong>Core Concept:</strong> ${doc.concept}
                </div>
                <div class="doc-item">
                    <strong>Approach:</strong> ${doc.approach}
                </div>
                <div class="doc-item">
                    <strong>Time Complexity:</strong> ${doc.timeComplexity}
                </div>
                <div class="doc-item">
                    <strong>Space Complexity:</strong> ${doc.spaceComplexity}
                </div>
                <div class="doc-item">
                    <strong>Key Methods:</strong> ${doc.keyMethods.join(', ')}
                </div>
                <div class="code-example">
                    <strong>Example Implementation:</strong>
                    <pre><code>${doc.example}</code></pre>
                </div>
            </div>
        `;
    }

    generateSampleData() {
        return {
            categories: {
                Array: {
                    name: "Array & Hashing",
                    problems: [
                        {
                            id: "two-sum",
                            name: "Two Sum",
                            title: "Two Sum",
                            difficulty: "Easy",
                            category: "Array",
                            description: `
                                <h3>Problem Statement</h3>
                                <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to target.</p>
                                
                                <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
                                
                                <p>You can return the answer in any order.</p>
                                
                                <h4>Example 1:</h4>
                                <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</pre>
                                
                                <h4>Example 2:</h4>
                                <pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]</pre>
                                
                                <h4>Example 3:</h4>
                                <pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]</pre>
                                
                                <h4>Constraints:</h4>
                                <ul>
                                    <li>2 ≤ nums.length ≤ 10⁴</li>
                                    <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                                    <li>-10⁹ ≤ target ≤ 10⁹</li>
                                    <li><strong>Only one valid answer exists.</strong></li>
                                </ul>
                            `,
                            starterCode: {
                                javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`,
                                java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`
                            }
                        },
                        {
                            id: "best-time-to-buy-and-sell-stock",
                            name: "Best Time to Buy and Sell Stock",
                            title: "Best Time to Buy and Sell Stock",
                            difficulty: "Easy",
                            category: "Array",
                            description: `
                                <h3>Problem Statement</h3>
                                <p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the ith day.</p>
                                
                                <p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p>
                                
                                <p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p>
                                
                                <h4>Example 1:</h4>
                                <pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.</pre>
                                
                                <h4>Example 2:</h4>
                                <pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.</pre>
                                
                                <h4>Constraints:</h4>
                                <ul>
                                    <li>1 ≤ prices.length ≤ 10⁵</li>
                                    <li>0 ≤ prices[i] ≤ 10⁴</li>
                                </ul>
                            `,
                            starterCode: {
                                javascript: `/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Write your solution here
    
};`,
                                java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your solution here
        
    }
}`
                            }
                        },
                        {
                            id: "contains-duplicate",
                            name: "Contains Duplicate",
                            title: "Contains Duplicate",
                            difficulty: "Easy",
                            category: "Array",
                            description: `
                                <h3>Problem Statement</h3>
                                <p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>
                                
                                <h4>Example 1:</h4>
                                <pre><strong>Input:</strong> nums = [1,2,3,1]
<strong>Output:</strong> true</pre>
                                
                                <h4>Example 2:</h4>
                                <pre><strong>Input:</strong> nums = [1,2,3,4]
<strong>Output:</strong> false</pre>
                                
                                <h4>Example 3:</h4>
                                <pre><strong>Input:</strong> nums = [1,1,1,3,3,4,3,2,4,2]
<strong>Output:</strong> true</pre>
                                
                                <h4>Constraints:</h4>
                                <ul>
                                    <li>1 ≤ nums.length ≤ 10⁵</li>
                                    <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                                </ul>
                            `,
                            starterCode: {
                                javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Write your solution here
    
};`,
                                java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
    }
}`
                            }
                        }
                    ]
                }
            }
        };
    }
}

// Global functions for button clicks
function goBack() {
    window.location.href = 'index.html';
}

function runCode() {
    alert('Code execution feature coming soon!');
}

function getHint() {
    alert('Hint system coming soon!');
}

function showSolution() {
    alert('Solution viewer coming soon!');
}

function submitSolution() {
    alert('Solution submission coming soon!');
}

function switchCodeLanguage() {
    if (window.problemPage) {
        window.problemPage.switchCodeLanguage();
    }
}

// Initialize the problem page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.problemPage = new ProblemPage();
});
