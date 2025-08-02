# DSA → Blind 75 Complete Mapping Guide 🗺️

## 🎯 How to Use This Guide

This guide shows you **exactly** which Data Structures and Algorithms you need for each Blind 75 problem. Use it to:

1. **Identify Prerequisites**: See what DSA concepts to study before attempting each problem
2. **Pattern Recognition**: Understand which problems use similar techniques
3. **Study Planning**: Focus on the most frequently used DSA concepts first
4. **Progress Tracking**: Check off problems as you master the underlying concepts

---

## 📊 **Quick Stats: DSA Usage in Blind 75**

| DSA Concept | # of Problems | % of Total | Priority |
|-------------|---------------|------------|----------|
| **Hash Tables/Maps** | 25+ | 33% | 🔥 CRITICAL |
| **Arrays & Strings** | 21 | 28% | 🔥 CRITICAL |
| **Trees** | 11 | 15% | 🔥 CRITICAL |
| **Dynamic Programming** | 12 | 16% | 🟡 HIGH |
| **Graphs** | 7 | 9% | 🟡 HIGH |
| **Linked Lists** | 6 | 8% | 🟡 HIGH |
| **Two Pointers** | 15+ | 20% | 🟠 MEDIUM |
| **Sliding Window** | 8 | 11% | 🟠 MEDIUM |
| **Stacks & Queues** | 8 | 11% | 🟠 MEDIUM |
| **Binary Search** | 6 | 8% | 🟠 MEDIUM |
| **Heaps** | 2 | 3% | 🟢 LOW |
| **Tries** | 3 | 4% | 🟢 LOW |

---

## 🔥 **CRITICAL DSA Concepts (Study These First!)**

### 📦 Arrays & Strings (21 problems)

#### **Core Concepts Needed:**
- Array indexing and manipulation
- String character access and manipulation
- Two pointers technique
- Sliding window pattern
- Prefix sums

#### **Direct Array Problems:**
1. **Two Sum** 
   - 🔧 **DSA**: Hash map + Array indexing
   - 📚 **Study**: [Hash Tables](./02-hash-tables/), [Arrays](./01-arrays-strings/)

2. **Best Time to Buy and Sell Stock**
   - 🔧 **DSA**: Single-pass array traversal + Greedy algorithm
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

3. **Contains Duplicate**
   - 🔧 **DSA**: Hash set for duplicate detection
   - 📚 **Study**: [Hash Tables](./02-hash-tables/)

4. **Product of Array Except Self**
   - 🔧 **DSA**: Array manipulation + Prefix/suffix products
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

5. **Maximum Subarray**
   - 🔧 **DSA**: Kadane's algorithm + Dynamic programming on arrays
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

6. **Maximum Product Subarray**
   - 🔧 **DSA**: Array traversal + State tracking (min/max products)
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

7. **Find Minimum in Rotated Sorted Array**
   - 🔧 **DSA**: Binary search on rotated array
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

8. **Search in Rotated Sorted Array**
   - 🔧 **DSA**: Modified binary search
   - 📚 **Study**: [Arrays](./01-arrays-strings/)

9. **3Sum**
   - 🔧 **DSA**: Two pointers + Sorting + Hash set
   - 📚 **Study**: [Arrays](./01-arrays-strings/), [Hash Tables](./02-hash-tables/)

10. **Container With Most Water**
    - 🔧 **DSA**: Two pointers optimization
    - 📚 **Study**: [Arrays](./01-arrays-strings/)

#### **Direct String Problems:**
11. **Longest Substring Without Repeating Characters**
    - 🔧 **DSA**: Sliding window + Hash set
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/), [Hash Tables](./02-hash-tables/)

12. **Longest Repeating Character Replacement**
    - 🔧 **DSA**: Sliding window + Character counting
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/)

13. **Minimum Window Substring**
    - 🔧 **DSA**: Sliding window + Hash map for character matching
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/), [Hash Tables](./02-hash-tables/)

14. **Valid Anagram**
    - 🔧 **DSA**: Character frequency counting
    - 📚 **Study**: [Hash Tables](./02-hash-tables/)

15. **Group Anagrams**
    - 🔧 **DSA**: String sorting + Hash map grouping
    - 📚 **Study**: [Hash Tables](./02-hash-tables/)

16. **Valid Parentheses**
    - 🔧 **DSA**: Stack for bracket matching
    - 📚 **Study**: [Stacks & Queues](./05-stacks-queues/)

17. **Valid Palindrome**
    - 🔧 **DSA**: Two pointers on string
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/)

18. **Longest Palindromic Substring**
    - 🔧 **DSA**: String expansion from center
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/)

19. **Palindromic Substrings**
    - 🔧 **DSA**: String analysis + Counting
    - 📚 **Study**: [Arrays & Strings](./01-arrays-strings/)

### 🗃️ Hash Tables & Maps (25+ problems)

#### **Why Critical:** Used in 1/3 of all Blind 75 problems for O(1) lookups

#### **Pattern Applications:**
- **Frequency Counting**: Group Anagrams, Valid Anagram, Top K Frequent
- **Two Sum Pattern**: Two Sum, 3Sum (with modifications)
- **Caching/Memoization**: Word Break, Climbing Stairs (DP problems)
- **Mapping/Grouping**: Clone Graph, Course Schedule adjacency lists

#### **Problems Where Hash Tables Are Essential:**
- All the array/string problems listed above that mention hash maps
- Plus: **Word Break**, **Clone Graph**, **Course Schedule**, **Alien Dictionary**
- **Top K Frequent Elements**, **Design Add and Search Words**

### 🌳 Trees (11 problems)

#### **Core Concepts Needed:**
- Binary tree structure and terminology
- Tree traversals (inorder, preorder, postorder, level-order)
- Binary Search Tree properties
- Recursive thinking on trees

#### **Direct Tree Problems:**

20. **Maximum Depth of Binary Tree**
    - 🔧 **DSA**: Recursive height calculation
    - 📚 **Study**: [Trees](./07-trees/)

21. **Same Tree**
    - 🔧 **DSA**: Tree comparison with recursion
    - 📚 **Study**: [Trees](./07-trees/)

22. **Invert Binary Tree**
    - 🔧 **DSA**: Tree transformation/reversal
    - 📚 **Study**: [Trees](./07-trees/)

23. **Binary Tree Maximum Path Sum**
    - 🔧 **DSA**: Tree DP + Recursive path calculation
    - 📚 **Study**: [Trees](./07-trees/)

24. **Binary Tree Level Order Traversal**
    - 🔧 **DSA**: BFS with queue
    - 📚 **Study**: [Trees](./07-trees/), [Stacks & Queues](./05-stacks-queues/)

25. **Serialize and Deserialize Binary Tree**
    - 🔧 **DSA**: Tree encoding/decoding + String manipulation
    - 📚 **Study**: [Trees](./07-trees/)

26. **Subtree of Another Tree**
    - 🔧 **DSA**: Tree matching + String/hash comparison
    - 📚 **Study**: [Trees](./07-trees/)

27. **Construct Binary Tree from Preorder and Inorder Traversal**
    - 🔧 **DSA**: Tree reconstruction + Array manipulation
    - 📚 **Study**: [Trees](./07-trees/), [Arrays](./01-arrays-strings/)

28. **Validate Binary Search Tree**
    - 🔧 **DSA**: BST property validation + Recursive bounds checking
    - 📚 **Study**: [Trees](./07-trees/)

29. **Kth Smallest Element in a BST**
    - 🔧 **DSA**: Inorder traversal + Early termination
    - 📚 **Study**: [Trees](./07-trees/)

30. **Lowest Common Ancestor of a Binary Search Tree**
    - 🔧 **DSA**: BST navigation + Recursive search
    - 📚 **Study**: [Trees](./07-trees/)

---

## 🟡 **HIGH Priority DSA Concepts**

### 💡 Dynamic Programming (12 problems)

#### **Core Concepts Needed:**
- Memoization (top-down)
- Tabulation (bottom-up)  
- State transitions
- Optimal substructure

#### **DP Problems:**

31. **Climbing Stairs**
    - 🔧 **DSA**: Basic DP + Fibonacci pattern
    - 📚 **Study**: Dynamic Programming fundamentals

32. **Coin Change**
    - 🔧 **DSA**: Unbounded knapsack DP
    - 📚 **Study**: DP + Array manipulation

33. **Longest Increasing Subsequence**
    - 🔧 **DSA**: DP + Binary search optimization
    - 📚 **Study**: DP + Arrays

34. **Longest Common Subsequence**
    - 🔧 **DSA**: 2D DP + String comparison
    - 📚 **Study**: DP + Strings

35. **Word Break**
    - 🔧 **DSA**: DP + Hash set for word lookup + String manipulation
    - 📚 **Study**: DP + Hash Tables + Strings

36. **Combination Sum**
    - 🔧 **DSA**: Backtracking + DP concepts
    - 📚 **Study**: DP + Recursion

37. **House Robber**
    - 🔧 **DSA**: Linear DP + State machines
    - 📚 **Study**: DP + Arrays

38. **House Robber II**
    - 🔧 **DSA**: Circular array DP
    - 📚 **Study**: DP + Arrays

39. **Decode Ways**
    - 🔧 **DSA**: String DP + Path counting
    - 📚 **Study**: DP + Strings

40. **Unique Paths**
    - 🔧 **DSA**: Grid DP + Combinatorics
    - 📚 **Study**: DP + 2D Arrays

41. **Jump Game**
    - 🔧 **DSA**: Greedy + DP validation
    - 📚 **Study**: DP + Arrays

### 🕸️ Graphs (7 problems)

#### **Core Concepts Needed:**
- Graph representation (adjacency list/matrix)
- DFS (Depth-First Search)
- BFS (Breadth-First Search)
- Topological sorting
- Union-Find

#### **Graph Problems:**

42. **Clone Graph**
    - 🔧 **DSA**: Graph traversal + Hash map for node mapping
    - 📚 **Study**: Graphs + Hash Tables

43. **Course Schedule**
    - 🔧 **DSA**: Topological sort + Cycle detection + Hash map adjacency
    - 📚 **Study**: Graphs + Hash Tables

44. **Pacific Atlantic Water Flow**
    - 🔧 **DSA**: DFS/BFS on 2D grid + Multiple source traversal
    - 📚 **Study**: Graphs + 2D Arrays

45. **Number of Islands**
    - 🔧 **DSA**: DFS/BFS on 2D grid + Connected components
    - 📚 **Study**: Graphs + 2D Arrays

46. **Longest Consecutive Sequence**
    - 🔧 **DSA**: Hash set + Sequence building (graph-like thinking)
    - 📚 **Study**: Hash Tables + Graphs

47. **Alien Dictionary** (Premium)
    - 🔧 **DSA**: Topological sort + Character ordering + Hash maps
    - 📚 **Study**: Graphs + Hash Tables + Strings

48. **Graph Valid Tree** (Premium)
    - 🔧 **DSA**: Graph validation + DFS + Union-Find
    - 📚 **Study**: Graphs

### 🔗 Linked Lists (6 problems)

#### **Core Concepts Needed:**
- Node structure and pointer manipulation
- Two pointers technique (slow/fast)
- List reversal
- List merging

#### **Linked List Problems:**

49. **Reverse Linked List**
    - 🔧 **DSA**: Pointer reversal + Iterative/recursive approaches
    - 📚 **Study**: [Linked Lists](./04-linked-lists/)

50. **Detect Cycle in Linked List**
    - 🔧 **DSA**: Floyd's cycle detection (two pointers)
    - 📚 **Study**: [Linked Lists](./04-linked-lists/)

51. **Merge Two Sorted Lists**
    - 🔧 **DSA**: Two-pointer merging + Dummy node technique
    - 📚 **Study**: [Linked Lists](./04-linked-lists/)

52. **Merge k Sorted Lists**
    - 🔧 **DSA**: Divide and conquer + List merging + Priority queue
    - 📚 **Study**: [Linked Lists](./04-linked-lists/) + Heaps

53. **Remove Nth Node From End of List**
    - 🔧 **DSA**: Two pointers with gap + Dummy node
    - 📚 **Study**: [Linked Lists](./04-linked-lists/)

54. **Reorder List**
    - 🔧 **DSA**: Find middle + Reverse second half + Merge alternating
    - 📚 **Study**: [Linked Lists](./04-linked-lists/)

---

## 🟠 **MEDIUM Priority DSA Concepts**

### 👉👈 Two Pointers (15+ problems)

#### **When to Use:** Array pairs, palindromes, sorted array problems

#### **Problems Using Two Pointers:**
- **Two Sum** (on sorted array)
- **3Sum**, **Container With Most Water**
- **Valid Palindrome**
- **Remove Nth Node From End** (linked list)
- **Detect Cycle** (slow/fast pointers)

### 🪟 Sliding Window (8 problems)

#### **When to Use:** Substring/subarray with constraints

#### **Problems Using Sliding Window:**
- **Longest Substring Without Repeating Characters**
- **Longest Repeating Character Replacement**
- **Minimum Window Substring**

### 📚🚶‍♂️ Stacks & Queues (8 problems)

#### **Stack Problems:**
- **Valid Parentheses** → Bracket matching
- **Daily Temperatures** → Monotonic stack
- Tree traversal (DFS simulation)

#### **Queue Problems:**
- **Binary Tree Level Order Traversal** → BFS
- **Sliding Window Maximum** → Deque

### 🔍 Binary Search (6 problems)

#### **Binary Search Problems:**
- **Find Minimum in Rotated Sorted Array**
- **Search in Rotated Sorted Array**
- **Search a 2D Matrix**

---

## 🟢 **LOW Priority DSA Concepts**

### 🏔️ Heaps & Priority Queues (2 problems)

#### **Heap Problems:**

55. **Top K Frequent Elements**
    - 🔧 **DSA**: Frequency counting + Min heap
    - 📚 **Study**: Hash Tables + Heaps

56. **Find Median from Data Stream**
    - 🔧 **DSA**: Two heaps (max heap + min heap)
    - 📚 **Study**: Heaps + Balanced data structures

### 🌐 Tries (3 problems)

#### **Trie Problems:**

57. **Implement Trie (Prefix Tree)**
    - 🔧 **DSA**: Trie construction + Hash maps for children
    - 📚 **Study**: Tries + Hash Tables

58. **Design Add and Search Words Data Structure**
    - 🔧 **DSA**: Trie + Wildcard matching + DFS
    - 📚 **Study**: Tries + Recursion

59. **Word Search II**
    - 🔧 **DSA**: Trie + 2D grid DFS + Backtracking
    - 📚 **Study**: Tries + Graphs + 2D Arrays

---

## 📋 **Study Order Recommendation**

### **Week 1-2: Critical Foundations**
1. ✅ [Arrays & Strings](./01-arrays-strings/) → Master two pointers, sliding window
2. ✅ [Hash Tables](./02-hash-tables/) → Master frequency counting, two sum pattern
3. Practice: Two Sum, Contains Duplicate, Valid Anagram

### **Week 3-4: Core Data Structures**
4. ✅ [Linked Lists](./04-linked-lists/) → Master pointer manipulation
5. ✅ [Stacks & Queues](./05-stacks-queues/) → Master LIFO/FIFO patterns
6. Practice: Reverse Linked List, Valid Parentheses

### **Week 5-6: Hierarchical Thinking**
7. ✅ [Trees](./07-trees/) → Master recursion and traversals
8. Practice: Maximum Depth, Same Tree, Invert Binary Tree

### **Week 7-8: Advanced Patterns**
9. Dynamic Programming basics
10. Graph algorithms (DFS/BFS)
11. Practice: Climbing Stairs, Number of Islands

### **Week 9-10: Optimization**
12. Binary Search
13. Heaps & Tries
14. Practice: Search in Rotated Array, Top K Frequent

---

## 🎯 **Problem Difficulty Progression**

### **🟢 Start Here (Easy DSA Application):**
- Two Sum
- Valid Parentheses  
- Maximum Depth of Binary Tree
- Reverse Linked List
- Contains Duplicate

### **🟡 Intermediate (Multiple Concepts):**
- 3Sum (arrays + two pointers + hash set)
- Group Anagrams (strings + hash maps + sorting)
- Binary Tree Level Order Traversal (trees + queues)
- Merge Two Sorted Lists (linked lists + two pointers)

### **🔴 Advanced (Complex Applications):**
- Minimum Window Substring (sliding window + hash maps)
- Binary Tree Maximum Path Sum (trees + DP)
- Word Break (DP + hash sets + strings)
- Serialize and Deserialize Binary Tree (trees + strings)

---

## 📊 **DSA Concept → Problems Quick Reference**

### **Arrays & Strings:**
Two Sum, Best Time to Buy/Sell Stock, Contains Duplicate, Product of Array Except Self, Maximum Subarray, Maximum Product Subarray, Find Minimum in Rotated Sorted Array, Search in Rotated Sorted Array, 3Sum, Container With Most Water, Longest Substring Without Repeating Characters, Longest Repeating Character Replacement, Minimum Window Substring, Valid Anagram, Group Anagrams, Valid Palindrome, Longest Palindromic Substring, Palindromic Substrings

### **Hash Tables:**
Two Sum, Contains Duplicate, Valid Anagram, Group Anagrams, Top K Frequent Elements, Word Break, Clone Graph, Course Schedule, Longest Substring Without Repeating Characters, Minimum Window Substring, 3Sum

### **Linked Lists:**
Reverse Linked List, Detect Cycle, Merge Two Sorted Lists, Merge k Sorted Lists, Remove Nth Node From End, Reorder List

### **Trees:**
Maximum Depth, Same Tree, Invert Binary Tree, Binary Tree Maximum Path Sum, Binary Tree Level Order Traversal, Serialize and Deserialize Binary Tree, Subtree of Another Tree, Construct Binary Tree from Preorder and Inorder, Validate BST, Kth Smallest Element in BST, Lowest Common Ancestor of BST

### **Stacks & Queues:**
Valid Parentheses, Binary Tree Level Order Traversal, Daily Temperatures, Sliding Window Maximum

### **Graphs:**
Clone Graph, Course Schedule, Pacific Atlantic Water Flow, Number of Islands, Longest Consecutive Sequence, Alien Dictionary, Graph Valid Tree

---

## 🏆 **Mastery Validation**

Before attempting Blind 75 problems, ensure you can:

✅ **Arrays & Strings Mastery:**
- [ ] Implement two pointers pattern from scratch
- [ ] Apply sliding window to substring problems
- [ ] Use arrays for O(1) lookups and manipulation

✅ **Hash Tables Mastery:**
- [ ] Implement frequency counting pattern
- [ ] Apply two sum pattern variations
- [ ] Choose between hash maps and hash sets appropriately

✅ **Tree Mastery:**
- [ ] Write all four traversal methods
- [ ] Solve problems recursively on trees
- [ ] Understand BST properties and operations

✅ **Linked List Mastery:**
- [ ] Manipulate pointers confidently
- [ ] Apply two pointers (slow/fast) technique
- [ ] Reverse and merge linked lists

---

**🎯 Now you're ready to conquer the Blind 75! Each problem will feel familiar because you understand the underlying data structures and algorithms.**

**Remember: DSA mastery + Pattern recognition = Interview success!** 🚀