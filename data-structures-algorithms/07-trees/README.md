# Trees: Hierarchical Data Structures 🌳

## 🌳 Real-World Analogy

**Binary Tree = Family Tree**
```
👨‍👩‍👧‍👦 Johnson Family Tree

                    Grandpa Joe (Root)
                   /              \
            Father Bob            Uncle Mike
           /         \           /         \
     Son Alice   Daughter Eve  Cousin Tom  Cousin Sue
     /       \
Young Tim  Baby Sara

Tree Properties:
🏠 Root: Grandpa Joe (top of family, no parents in this tree)
👥 Parent: Bob is parent of Alice and Eve
👶 Children: Alice and Eve are children of Bob  
🌿 Leaves: Tim, Sara, Tom, Sue (no children of their own)
📏 Height: 4 levels from Grandpa Joe to Tim/Sara
🔗 Path: To reach Tim, go: Joe → Bob → Alice → Tim

Key Rules:
- Each person has AT MOST 2 children (binary tree)
- Each person has EXACTLY 1 parent (except root)
- No cycles - you can't be your own ancestor!
```

---

## 🌲 What Is a Binary Tree?

A **Binary Tree** is a hierarchical data structure where each node has **at most two children**, called the **left child** and **right child**.

### 🔍 Visual Representation
```
Binary Tree Structure:

                    10 (Root)
                   /  \
                  5    15
                 / \   / \
                3   7 12  20
               /   /     \
              1   6      18

Tree Terminology:
├─ Root: 10 (topmost node)
├─ Internal Nodes: 5, 15, 3, 7, 12 (have children)
├─ Leaf Nodes: 1, 6, 18, 20 (no children)
├─ Height: 4 (longest path from root to leaf)
├─ Depth of node 6: 3 (distance from root)
└─ Subtrees: Every node is root of its own subtree

Node Structure:
┌─────────────┐
│    Data     │ ← Value stored in node
│   /     \   │
│ Left   Right│ ← Pointers to children
└─────────────┘
```

### ⚡ JavaScript Tree Implementation

#### **TreeNode Class:**
```javascript
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Creating the tree from diagram above
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);
root.left.left.left = new TreeNode(1);
root.left.right.left = new TreeNode(6);
root.right.right.left = new TreeNode(18);

// Helper functions
function getHeight(node) {
    if (node === null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

function countNodes(node) {
    if (node === null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

function isLeaf(node) {
    return node !== null && node.left === null && node.right === null;
}
```

### ☕ Java Tree Implementation

```java
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

// Creating the tree
TreeNode root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);
root.left.left.left = new TreeNode(1);
root.left.right.left = new TreeNode(6);
root.right.right.left = new TreeNode(18);

// Helper methods
public static int getHeight(TreeNode node) {
    if (node == null) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

public static int countNodes(TreeNode node) {
    if (node == null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

public static boolean isLeaf(TreeNode node) {
    return node != null && node.left == null && node.right == null;
}
```

---

## 🔄 Tree Traversal Methods

### **The Big Question: In What Order Should We Visit Nodes?**

There are three main ways to traverse a binary tree:

### 1. **Inorder Traversal (Left → Root → Right)**
```
Visiting Order: Left subtree, then Root, then Right subtree

Our tree:     10
             /  \
            5    15
           / \   / \
          3   7 12  20

Inorder Steps:
1. Visit left subtree of 10: (3, 5, 7)
2. Visit root: 10  
3. Visit right subtree of 10: (12, 15, 18, 20)

Result: [3, 5, 7, 10, 12, 15, 18, 20]
Notice: For Binary Search Trees, this gives SORTED order!
```

#### **JavaScript Implementation:**
```javascript
function inorderTraversal(root) {
    const result = [];
    
    function inorder(node) {
        if (node === null) return;
        
        inorder(node.left);        // Left
        result.push(node.val);     // Root
        inorder(node.right);       // Right
    }
    
    inorder(root);
    return result;
}

// Iterative version using stack
function inorderIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
    
    while (current !== null || stack.length > 0) {
        // Go to leftmost node
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current is null, so process stack top
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    
    return result;
}
```

### 2. **Preorder Traversal (Root → Left → Right)**
```
Visiting Order: Root first, then Left subtree, then Right subtree

Our tree:     10
             /  \
            5    15
           / \   / \
          3   7 12  20

Preorder Steps:
1. Visit root: 10
2. Visit left subtree of 10: (5, 3, 7)  
3. Visit right subtree of 10: (15, 12, 20, 18)

Result: [10, 5, 3, 7, 15, 12, 20, 18]
Use case: Creating a copy of the tree, prefix expressions
```

#### **JavaScript Implementation:**
```javascript
function preorderTraversal(root) {
    const result = [];
    
    function preorder(node) {
        if (node === null) return;
        
        result.push(node.val);     // Root
        preorder(node.left);       // Left
        preorder(node.right);      // Right
    }
    
    preorder(root);
    return result;
}

// Iterative version
function preorderIterative(root) {
    if (root === null) return [];
    
    const result = [];
    const stack = [root];
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        
        // Push right first, then left (stack is LIFO)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return result;
}
```

### 3. **Postorder Traversal (Left → Right → Root)**
```
Visiting Order: Left subtree, then Right subtree, then Root

Our tree:     10
             /  \
            5    15
           / \   / \
          3   7 12  20

Postorder Steps:
1. Visit left subtree of 10: (3, 7, 5)
2. Visit right subtree of 10: (12, 18, 20, 15)
3. Visit root: 10

Result: [3, 7, 5, 12, 18, 20, 15, 10]
Use case: Deleting tree, postfix expressions, calculating directory sizes
```

#### **JavaScript Implementation:**
```javascript
function postorderTraversal(root) {
    const result = [];
    
    function postorder(node) {
        if (node === null) return;
        
        postorder(node.left);      // Left
        postorder(node.right);     // Right
        result.push(node.val);     // Root
    }
    
    postorder(root);
    return result;
}
```

### 4. **Level Order Traversal (Breadth-First)**
```
Visiting Order: Level by level, left to right

Our tree:     10      ← Level 0
             /  \
            5    15    ← Level 1  
           / \   / \
          3   7 12  20 ← Level 2
         /   /     \
        1   6      18 ← Level 3

Result: [10, 5, 15, 3, 7, 12, 20, 1, 6, 18]
Use case: Finding shortest path, level-by-level processing
```

#### **JavaScript Implementation:**
```javascript
function levelOrder(root) {
    if (root === null) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;  // [[10], [5, 15], [3, 7, 12, 20], [1, 6, 18]]
}
```

---

## 🎯 Essential Tree Patterns

### Pattern 1: **Tree Depth/Height Calculations**
```javascript
// Maximum depth (height) of tree
function maxDepth(root) {
    if (root === null) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
}

// Minimum depth (shortest path to leaf)
function minDepth(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    
    if (root.left === null) return 1 + minDepth(root.right);
    if (root.right === null) return 1 + minDepth(root.left);
    
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
```

### Pattern 2: **Tree Comparison**
```javascript
// Check if two trees are identical
function isSameTree(p, q) {
    // Both null
    if (p === null && q === null) return true;
    
    // One null, one not
    if (p === null || q === null) return false;
    
    // Different values
    if (p.val !== q.val) return false;
    
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Check if tree is symmetric (mirror of itself)
function isSymmetric(root) {
    function isMirror(left, right) {
        if (left === null && right === null) return true;
        if (left === null || right === null) return false;
        
        return left.val === right.val && 
               isMirror(left.left, right.right) && 
               isMirror(left.right, right.left);
    }
    
    return root === null || isMirror(root.left, root.right);
}
```

### Pattern 3: **Path Sum Problems**
```javascript
// Check if there's a path from root to leaf with given sum
function hasPathSum(root, targetSum) {
    if (root === null) return false;
    
    // Leaf node: check if we reached target
    if (root.left === null && root.right === null) {
        return root.val === targetSum;
    }
    
    // Recursively check left and right paths
    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
}

// Find all paths from root to leaf with given sum
function pathSum(root, targetSum) {
    const result = [];
    
    function findPaths(node, remaining, currentPath) {
        if (node === null) return;
        
        currentPath.push(node.val);
        
        // Leaf node with target sum
        if (node.left === null && node.right === null && remaining === node.val) {
            result.push([...currentPath]);  // Copy current path
        } else {
            // Continue searching
            findPaths(node.left, remaining - node.val, currentPath);
            findPaths(node.right, remaining - node.val, currentPath);
        }
        
        currentPath.pop();  // Backtrack
    }
    
    findPaths(root, targetSum, []);
    return result;
}
```

### Pattern 4: **Tree Inversion**
```javascript
// Invert (mirror) a binary tree
function invertTree(root) {
    if (root === null) return null;
    
    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}
```

---

## 🌲 Binary Search Tree (BST)

### **Special Property: Left < Root < Right**
```
Valid BST:        Invalid BST:
      10               10
     /  \             /  \
    5    15          5    15
   / \   / \        / \   / \
  3   7 12  20     3   7 12  8  ← 8 < 10, should be in left subtree!

BST Rules:
- All nodes in LEFT subtree < root
- All nodes in RIGHT subtree > root  
- Both subtrees are also BSTs
- Inorder traversal gives SORTED sequence
```

#### **BST Operations:**
```javascript
// Search in BST
function searchBST(root, val) {
    if (root === null || root.val === val) return root;
    
    if (val < root.val) {
        return searchBST(root.left, val);   // Search left
    } else {
        return searchBST(root.right, val);  // Search right
    }
}

// Insert into BST
function insertIntoBST(root, val) {
    if (root === null) return new TreeNode(val);
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    
    return root;
}

// Validate BST
function isValidBST(root) {
    function validate(node, min, max) {
        if (node === null) return true;
        
        if (node.val <= min || node.val >= max) return false;
        
        return validate(node.left, min, node.val) && 
               validate(node.right, node.val, max);
    }
    
    return validate(root, -Infinity, Infinity);
}
```

---

## 🚀 Practice Exercises

### 🟢 **Beginner Level**

#### Exercise 1: Tree Basics
```javascript
// Count total number of nodes in tree
function countNodes(root) {
    // Your implementation here
    // Hint: Recursively count left + right + 1
}

// Find maximum value in tree
function findMax(root) {
    // Your implementation here
}
```

#### Exercise 2: Tree Properties
```javascript
// Check if tree is balanced (height difference ≤ 1)
function isBalanced(root) {
    // Your implementation here
    // Hint: Check height difference of left and right subtrees
}

// Count leaf nodes
function countLeaves(root) {
    // Your implementation here
}
```

### 🟡 **Intermediate Level**

#### Exercise 3: Tree Construction
```javascript
// Build tree from preorder and inorder traversals
function buildTree(preorder, inorder) {
    // Your implementation here
    // Hint: First element of preorder is root
}

// Serialize tree to string and deserialize back
function serialize(root) {
    // Your implementation here
}

function deserialize(data) {
    // Your implementation here
}
```

### 🟠 **Advanced Level**

#### Exercise 4: Complex Tree Operations
```javascript
// Find lowest common ancestor of two nodes
function lowestCommonAncestor(root, p, q) {
    // Your implementation here
    // Hint: Use recursion to find path to both nodes
}

// Find maximum path sum in tree
function maxPathSum(root) {
    // Your implementation here
    // Hint: Consider paths through current node
}
```

---

## 🎯 Connection to Blind 75 Problems

### **Direct Tree Problems (11 problems):**

1. **Maximum Depth of Binary Tree** → Recursive height calculation
2. **Same Tree** → Tree comparison with recursion
3. **Invert Binary Tree** → Tree transformation
4. **Binary Tree Maximum Path Sum** → Dynamic programming on trees
5. **Binary Tree Level Order Traversal** → BFS with queue
6. **Serialize and Deserialize Binary Tree** → Tree encoding/decoding
7. **Subtree of Another Tree** → Tree matching algorithm
8. **Construct Binary Tree from Preorder and Inorder** → Tree reconstruction
9. **Validate Binary Search Tree** → BST property checking
10. **Kth Smallest Element in a BST** → Inorder traversal
11. **Lowest Common Ancestor of BST** → BST navigation

### **Tree Traversal Applications:**
- **DFS (Depth-First)**: Preorder, Inorder, Postorder
- **BFS (Breadth-First)**: Level order traversal
- **Path Finding**: Root-to-leaf paths
- **Tree Validation**: Checking tree properties

---

## ⚙️ **Time & Space Complexity**

### **Tree Operations:**
| Operation | Average | Worst Case | Space |
|-----------|---------|------------|-------|
| **Search (BST)** | O(log n) | O(n) | O(1) |
| **Insert (BST)** | O(log n) | O(n) | O(1) |
| **Traversal** | O(n) | O(n) | O(h)* |
| **Height Calculation** | O(n) | O(n) | O(h)* |

*h = height of tree (O(log n) for balanced, O(n) for skewed)

### **Space Complexity Notes:**
- **Recursive calls** use O(h) stack space
- **Iterative with explicit stack** uses O(h) space
- **Level order traversal** uses O(w) space (w = maximum width)

---

## ✅ **Mastery Checklist**

### **Tree Fundamentals:**
- [ ] Understand tree structure and terminology
- [ ] Implement TreeNode in both JavaScript and Java
- [ ] Calculate height, depth, and node counts
- [ ] Identify balanced vs unbalanced trees
- [ ] Distinguish between binary tree and BST

### **Traversal Mastery:**
- [ ] Implement all four traversal methods (in/pre/post/level)
- [ ] Write both recursive and iterative versions
- [ ] Understand when to use each traversal type
- [ ] Apply traversals to solve tree problems
- [ ] Handle empty trees and single nodes

### **Problem-Solving Patterns:**
- [ ] Tree comparison and validation
- [ ] Path sum calculations
- [ ] Tree inversion and transformation
- [ ] BST operations and validation
- [ ] Lowest common ancestor algorithms
- [ ] Tree serialization and deserialization

### **Advanced Concepts:**
- [ ] Balanced tree properties
- [ ] Tree reconstruction from traversals
- [ ] Maximum path sum algorithms
- [ ] Subtree matching
- [ ] Tree pruning and modification

---

## 🚀 **Next Steps**

Outstanding! You've mastered hierarchical thinking and recursive algorithms. Trees appear in **11 Blind 75 problems** and form the foundation for graphs and advanced algorithms.

**Next:** Return to the [main DSA curriculum](../) or dive into specific tree problems in the Blind 75!

---

**Remember:**
- **Trees** = Hierarchical family structures 👨‍👩‍👧‍👦
- **Recursion** = Perfect for tree problems 🔄
- **Traversals** = Different ways to visit family members 👥
- **BST** = Sorted family tree (left < root < right) 📊
- **Practice** = Grows your tree knowledge! 🌱