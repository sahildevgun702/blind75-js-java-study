# Day 3: Pattern Recognition Mastery 🎯

## 🎯 Learning Goals
- Recognize common algorithmic patterns
- Understand when to apply each pattern
- Build confidence in approaching new problems

---

## 🧩 Pattern 1: The "Hash Map Lookup" Pattern

### When to Use
- Problems asking "Have I seen this before?"
- Counting or frequency problems
- Need O(1) lookup time

### 🚀 Mini-Challenge: First Unique Character
**Problem:** Find the first character in a string that appears exactly once.

### 🧠 Pattern Analysis
**Before coding, identify the pattern:**

1. **What are we looking for?**
   - Character that appears exactly once, and appears first

2. **What's the two-step approach?**
   - Step 1: Count all characters
   - Step 2: Find first character with count = 1

3. **Why use a hash map?**
   - Fast counting and lookup

### Your Pattern Implementation
```javascript
function firstUniqueChar(s) {
    // Pattern: Hash Map for Counting
    // Step 1: Count frequencies
    // Step 2: Find first character with count 1
    
}
```

**Test Cases:**
- "leetcode" → 'l' (first unique)
- "aabbcc" → null (no unique)
- "abcabc" → null (no unique)

---

## 🎯 Pattern 2: The "Two Pointers" Pattern

### When to Use
- Array or string problems
- Looking for pairs or palindromes
- Need to check elements from both ends

### 🚀 Mini-Challenge: Valid Palindrome
**Problem:** Check if a string is a palindrome, ignoring spaces and case.

### 🧠 Pattern Analysis
**Identify the pattern structure:**

1. **Where do pointers start?**
   - Left: beginning of string
   - Right: end of string

2. **What do you compare?**
   - Characters at left and right positions

3. **When do you move pointers?**
   - Move both toward center after each comparison

4. **When do you stop?**
   - When pointers meet or find mismatch

### Your Pattern Implementation
```javascript
function isPalindrome(s) {
    // Pattern: Two Pointers
    // Start from both ends, move toward center
    // Compare characters, ignoring non-alphanumeric
    
}
```

**Test Cases:**
- "A man a plan a canal Panama" → true
- "race a car" → false
- "hello" → false

---

## 🔄 Pattern 3: The "Sliding Window" Pattern

### When to Use
- Subarray or substring problems
- Finding optimal window (min/max length)
- Need to track a "window" of consecutive elements

### 🚀 Mini-Challenge: Longest Substring Length
**Problem:** Find the length of the longest substring without repeating characters.

### 🧠 Pattern Analysis
**Understand the sliding window:**

1. **What defines your window?**
   - Left and right boundaries of current substring

2. **When do you expand the window?**
   - When you can add a character without duplicates

3. **When do you shrink the window?**
   - When you encounter a duplicate character

4. **What do you track?**
   - Characters in current window
   - Maximum length seen so far

### Your Pattern Implementation
```javascript
function lengthOfLongestSubstring(s) {
    // Pattern: Sliding Window
    // Expand window when no duplicates
    // Shrink window when duplicate found
    // Track max length
    
}
```

**Test Cases:**
- "abcabcbb" → 3 ("abc")
- "bbbbb" → 1 ("b")
- "pwwkew" → 3 ("wke")

---

## 📊 Pattern 4: The "Stack" Pattern

### When to Use
- Problems involving "last in, first out"
- Matching parentheses or brackets
- Undo operations or backtracking

### 🚀 Mini-Challenge: Valid Parentheses
**Problem:** Check if a string of parentheses is valid (properly opened and closed).

### 🧠 Pattern Analysis
**Understand the stack approach:**

1. **What do you push onto the stack?**
   - Opening brackets

2. **When do you pop from the stack?**
   - When you see a closing bracket

3. **How do you check validity?**
   - Stack must be empty at the end
   - Each closing bracket must match the most recent opening

### Your Pattern Implementation
```javascript
function isValid(s) {
    // Pattern: Stack for Matching
    // Push opening brackets
    // Pop and check for closing brackets
    // Valid if stack empty at end
    
}
```

**Test Cases:**
- "()" → true
- "()[]{}" → true  
- "(]" → false
- "([)]" → false

---

## 🎯 Pattern 5: The "Greedy" Pattern

### When to Use
- Optimization problems
- Making the locally optimal choice
- Problems where greedy approach is proven correct

### 🚀 Mini-Challenge: Maximum Meetings
**Problem:** Given meeting times, find the maximum number of non-overlapping meetings you can attend.

### 🧠 Pattern Analysis
**Understand the greedy strategy:**

1. **What's the greedy choice?**
   - Always pick the meeting that ends earliest

2. **Why does this work?**
   - Leaves maximum room for future meetings

3. **What's the algorithm?**
   - Sort by end times
   - Pick meetings that don't overlap

### Your Pattern Implementation
```javascript
function maxMeetings(meetings) {
    // Pattern: Greedy Algorithm
    // Sort by end times
    // Pick non-overlapping meetings greedily
    
}
```

**Test Cases:**
- [[1,3], [2,4], [3,5]] → 2 meetings
- [[1,2], [3,4], [5,6]] → 3 meetings

---

## 🧠 Pattern Recognition Quiz

**For each problem, identify the pattern:**

### Problem A: "Find two numbers that sum to target"
**Pattern:** _______________
**Why:** _______________

### Problem B: "Remove duplicates from sorted array"
**Pattern:** _______________
**Why:** _______________

### Problem C: "Find minimum window containing all characters"
**Pattern:** _______________
**Why:** _______________

### Problem D: "Evaluate mathematical expression"
**Pattern:** _______________
**Why:** _______________

### Problem E: "Find majority element (appears > n/2 times)"
**Pattern:** _______________
**Why:** _______________

---

## 🎯 Pattern Combination Practice

### Challenge: Two Sum with Sorted Array
**Problem:** Find two numbers in a SORTED array that sum to target.

### 🧠 Multi-Pattern Analysis
**This problem can use multiple patterns:**

1. **Hash Map approach (from Pattern 1):**
   - Time: O(n), Space: O(n)

2. **Two Pointers approach (from Pattern 2):**
   - Time: O(n), Space: O(1)
   - Use the fact that array is sorted!

### Your Implementation
```javascript
function twoSumSorted(nums, target) {
    // Choose your pattern: Hash Map or Two Pointers?
    // Consider: Which is more efficient for sorted array?
    
}
```

---

## 🏆 Pattern Mastery Checklist

Check off each pattern as you master it:

**Hash Map Pattern:**
- [ ] Can identify counting/lookup problems
- [ ] Know when O(1) lookup is needed
- [ ] Can implement frequency counting

**Two Pointers Pattern:**
- [ ] Can identify when to use two pointers
- [ ] Understand left/right pointer movement
- [ ] Can handle palindrome-type problems

**Sliding Window Pattern:**
- [ ] Can identify substring/subarray problems
- [ ] Understand window expansion/contraction
- [ ] Can track optimal window

**Stack Pattern:**
- [ ] Can identify LIFO scenarios
- [ ] Understand when to push/pop
- [ ] Can handle matching problems

**Greedy Pattern:**
- [ ] Can identify optimization problems
- [ ] Understand locally optimal choices
- [ ] Can prove greedy correctness

---

## 🎮 Final Challenge: Pattern Detective

**Look at these Blind 75 problems and identify the pattern:**

1. **Contains Duplicate** → Pattern: _______________
2. **Best Time to Buy and Sell Stock** → Pattern: _______________
3. **Valid Anagram** → Pattern: _______________
4. **Group Anagrams** → Pattern: _______________
5. **Valid Parentheses** → Pattern: _______________
6. **Longest Substring Without Repeating Characters** → Pattern: _______________

---

## 🚀 Graduation Requirements

You're ready for the Blind 75 when you can:

- [ ] Identify the pattern within 30 seconds of reading a problem
- [ ] Explain why a specific pattern applies
- [ ] Implement the pattern from scratch
- [ ] Adapt the pattern to slight variations
- [ ] Combine patterns when needed

---

**Congratulations! 🎉** 

You now have the fundamental building blocks to tackle any coding interview problem. The patterns you've learned here appear in 80%+ of coding interview questions.

**Next Steps:**
1. Apply these patterns to the enhanced Blind 75 problems
2. Use the thinking frameworks you've learned  
3. Remember: every expert was once a beginner!

**Ready to conquer the Blind 75? Let's go!** 💪