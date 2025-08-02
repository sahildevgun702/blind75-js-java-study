# Day 2: Basic Algorithm Building Blocks 🧱

## 🎯 Learning Goals
- Master fundamental searching and sorting concepts
- Build algorithmic thinking step by step  
- Practice the STEP method (Study, Think, Execute, Practice)

---

## 🔍 Challenge 1: Linear Search

### Problem
Find the index of a target value in an array. Return -1 if not found.

### 🧠 Think First!
**Before coding, answer these:**

1. **What's the simplest approach?**
   - Check each element one by one until you find it

2. **What's your step-by-step plan?**
   - Step 1: _______________
   - Step 2: _______________  
   - Step 3: _______________

3. **What are the edge cases?**
   - Empty array: _______________
   - Target not found: _______________
   - Target at first position: _______________
   - Target at last position: _______________

4. **Test your logic manually:**
   - Array: [10, 20, 30, 40], Target: 30 → Expected: 2
   - Array: [5, 1, 9], Target: 7 → Expected: -1

### Your Implementation Space
```javascript
function linearSearch(arr, target) {
    // 🚀 Your algorithm here
    // Remember: Check each element in order
    
}
```

```java
public static int linearSearch(int[] arr, int target) {
    // 🚀 Your algorithm here
    // Remember: Check each element in order
    
}
```

---

## 🎯 Challenge 2: Find Maximum Element

### Problem
Find the largest number in an array of integers.

### 🧠 Think First!
**Planning questions:**

1. **What's the basic strategy?**
   - Keep track of the biggest number seen so far

2. **How do you start?**
   - What should your "current max" be initially?

3. **What do you do for each element?**
   - Compare it with current max and update if needed

4. **Edge cases:**
   - Empty array: _______________
   - All elements the same: _______________
   - Negative numbers only: _______________

### Your Implementation Space
```javascript
function findMax(arr) {
    // 🚀 Your algorithm here
    // Think: What should you initialize as the current max?
    
}
```

---

## 🔄 Challenge 3: Reverse Array In-Place

### Problem  
Reverse the elements of an array without creating a new array.

### 🧠 Think First!
**Approach analysis:**

1. **What does "in-place" mean?**
   - Modify the original array, don't create a new one

2. **What's the key insight?**
   - Swap elements from the outside in
   - First element swaps with last, second with second-to-last, etc.

3. **When do you stop swapping?**
   - When you reach the middle

4. **Trace through an example:**
   - [1, 2, 3, 4, 5]
   - After swap 1: _______________
   - After swap 2: _______________
   - Final result: _______________

### Your Implementation Space
```javascript
function reverseArray(arr) {
    // 🚀 Your algorithm here
    // Hint: Use two pointers, one at start and one at end
    
}
```

---

## 📊 Challenge 4: Count Occurrences

### Problem
Count how many times each element appears in an array. Return the results as a map/object.

### 🧠 Think First!
**Data structure decisions:**

1. **What do you need to store?**
   - Element → Count mapping

2. **What data structure is perfect for this?**
   - JavaScript: Object or Map
   - Java: HashMap

3. **Algorithm steps:**
   - Step 1: _______________
   - Step 2: _______________
   - Step 3: _______________

4. **How do you handle first occurrence vs. repeat?**
   - First time seeing element: _______________
   - Already seen element: _______________

### Your Implementation Space
```javascript
function countOccurrences(arr) {
    // 🚀 Your algorithm here
    // Think: How do you check if you've seen an element before?
    
}
```

---

## 🎲 Challenge 5: Simple Sorting (Bubble Sort)

### Problem
Sort an array in ascending order using the bubble sort algorithm.

### 🧠 Think First!
**Understanding bubble sort:**

1. **What's the basic idea?**
   - Compare adjacent elements and swap if they're in wrong order
   - Repeat until no more swaps needed

2. **Why is it called "bubble" sort?**
   - Large elements "bubble up" to the end

3. **How many passes do you need?**
   - In worst case: n-1 passes for n elements

4. **Trace through a small example:**
   - [3, 1, 4, 2]
   - Pass 1: _______________
   - Pass 2: _______________
   - Pass 3: _______________

### Your Implementation Space
```javascript
function bubbleSort(arr) {
    // 🚀 Your algorithm here
    // Think: You need nested loops - outer for passes, inner for comparisons
    
}
```

---

## 🏃‍♂️ Challenge 6: Two Pointers Practice

### Problem
Check if an array is a palindrome (reads the same forwards and backwards).

### 🧠 Think First!
**Two pointer technique:**

1. **What are the two pointers?**
   - Left pointer: starts at beginning
   - Right pointer: starts at end

2. **What do you check at each step?**
   - Are the elements at left and right pointers equal?

3. **When do you move the pointers?**
   - Move both pointers toward center

4. **When do you stop?**
   - When pointers meet or cross

### Your Implementation Space
```javascript
function isPalindrome(arr) {
    // 🚀 Your algorithm here
    // Think: Use left and right pointers moving toward each other
    
}
```

---

## 🎯 Progressive Testing Framework

### Test Each Function
For each challenge, test with:

```javascript
// Test Framework
function runTests(func, testCases, funcName) {
    console.log(`\n=== Testing ${funcName} ===`);
    
    testCases.forEach((test, index) => {
        console.log(`\nTest ${index + 1}:`);
        console.log("Input:", test.input);
        console.log("Expected:", test.expected);
        
        let result = func(...test.input);
        console.log("Actual:", result);
        console.log("Pass:", JSON.stringify(result) === JSON.stringify(test.expected));
    });
}

// Example usage:
const linearSearchTests = [
    { input: [[1, 2, 3, 4], 3], expected: 2 },
    { input: [[1, 2, 3, 4], 5], expected: -1 },
    { input: [[], 1], expected: -1 },
    { input: [[42], 42], expected: 0 }
];

runTests(linearSearch, linearSearchTests, "linearSearch");
```

---

## 🤔 Reflection Questions

After completing each challenge:

1. **Did I understand the problem before coding?**
2. **Did I trace through examples first?**
3. **Did I consider edge cases?**
4. **Is my solution clear and readable?**
5. **What would I do differently next time?**

---

## 🏆 Success Metrics

Check off each skill as you master it:

- [ ] Can analyze a problem before coding
- [ ] Can trace through algorithms manually
- [ ] Can implement linear search efficiently
- [ ] Understand the two-pointer technique
- [ ] Can work with hash maps/objects for counting
- [ ] Can implement a basic sorting algorithm
- [ ] Can test my solutions systematically

---

**Next:** [Day 3: Pattern Recognition](../day-03-pattern-recognition/)

**Remember:** These fundamentals are the building blocks for every complex algorithm. Master these, and the Blind 75 problems will feel much more approachable!