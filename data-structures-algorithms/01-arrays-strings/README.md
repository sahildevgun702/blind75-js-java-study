# Arrays & Strings: Your First Data Containers 📦

## 🏠 Real-World Analogy

**Arrays = Apartment Building**
```
Building "MyArray"
┌─────────────────────┐
│ Unit 0: [42]       │ ← First apartment  
│ Unit 1: [17]       │ ← Second apartment
│ Unit 2: [88]       │ ← Third apartment  
│ Unit 3: [99]       │ ← Fourth apartment
│ Unit 4: [13]       │ ← Fifth apartment
└─────────────────────┘

- Each unit has a NUMBER (index)
- Each unit stores ONE VALUE  
- You can visit any unit directly if you know the number
- All units are the SAME SIZE
```

**Strings = Message on a Sign**
```
Sign: "HELLO"
┌─┬─┬─┬─┬─┐
│H│E│L│L│O│
└─┴─┴─┴─┴─┘
 0 1 2 3 4  ← Position numbers

- Each position holds ONE CHARACTER
- Characters are in a SPECIFIC ORDER
- You can read any character if you know its position
```

---

## 📊 Arrays Deep Dive

### What Is an Array?
An **array** is a collection of items stored in **consecutive memory locations**. Think of it as numbered storage boxes arranged in a row.

### 🔍 Visual Representation
```
Array: [10, 20, 30, 40, 50]

Memory Layout:
┌────┬────┬────┬────┬────┐
│ 10 │ 20 │ 30 │ 40 │ 50 │
└────┴────┴────┴────┴────┘
  ↑    ↑    ↑    ↑    ↑
  0    1    2    3    4   ← Indices (positions)

Key Facts:
- Index starts at 0 (not 1!)
- Size is FIXED in most languages
- Direct access to any element: O(1)
```

### ⚡ Java vs JavaScript Arrays

#### 🟨 **JavaScript Arrays**
```javascript
// Creating arrays
let numbers = [1, 2, 3, 4, 5];           // Direct creation
let mixed = [1, "hello", true, 3.14];    // Can mix types!
let empty = [];                          // Empty array
let sized = new Array(5);                // Array with 5 empty slots

// Dynamic sizing
numbers.push(6);                         // Add to end: [1,2,3,4,5,6]
numbers.pop();                           // Remove from end: [1,2,3,4,5]
numbers.unshift(0);                      // Add to start: [0,1,2,3,4,5]

// Useful methods
console.log(numbers.length);             // Get size
console.log(numbers.includes(3));       // Check if exists
let doubled = numbers.map(x => x * 2);   // Transform all elements
```

#### ☕ **Java Arrays**
```java
// Creating arrays
int[] numbers = {1, 2, 3, 4, 5};        // Direct creation
int[] empty = new int[5];                // Fixed size, filled with 0s
String[] names = new String[3];          // Fixed size, filled with null

// IMPORTANT: Size is FIXED!
System.out.println(numbers.length);     // Get size (no parentheses!)
numbers[0] = 10;                         // Change element
// numbers[5] = 6;                       // ERROR! Index out of bounds

// For dynamic sizing, use ArrayList
import java.util.ArrayList;
ArrayList<Integer> dynamicList = new ArrayList<>();
dynamicList.add(1);                      // Add element
dynamicList.remove(0);                   // Remove by index
```

### 🤔 **When to Use Which?**

| Feature | JavaScript | Java | Best For |
|---------|------------|------|----------|
| **Dynamic Sizing** | ✅ Built-in | ❌ Use ArrayList | Rapid prototyping |
| **Type Safety** | ❌ Mixed types | ✅ Single type | Large applications |
| **Performance** | 🟡 Good | ✅ Excellent | Performance-critical |
| **Memory Control** | ❌ Automatic | ✅ Manual | System programming |

---

## 🔤 Strings Deep Dive

### What Is a String?
A **string** is a sequence of characters. Think of it as an array of characters that forms words, sentences, or any text.

### 🔍 Visual Representation
```
String: "CODING"

Character Array View:
┌─┬─┬─┬─┬─┬─┐
│C│O│D│I│N│G│
└─┴─┴─┴─┴─┴─┘
 0 1 2 3 4 5  ← Indices

Operations:
- Length: 6
- First character: "C" (index 0)
- Last character: "G" (index 5)
- Middle character: "I" (index 3)
```

### ⚡ Java vs JavaScript Strings

#### 🟨 **JavaScript Strings**
```javascript
// Creating strings
let message = "Hello World";
let name = 'Alice';                      // Single or double quotes
let template = `Hi ${name}!`;            // Template literals

// String properties and methods
console.log(message.length);            // 11
console.log(message[0]);                // "H" - bracket notation
console.log(message.charAt(1));         // "e" - method notation

// String manipulation (creates NEW strings)
let upper = message.toUpperCase();      // "HELLO WORLD"
let lower = message.toLowerCase();      // "hello world"  
let part = message.substring(0, 5);     // "Hello"
let split = message.split(" ");         // ["Hello", "World"]

// Strings are IMMUTABLE
message[0] = "X";                       // Does nothing!
console.log(message);                   // Still "Hello World"
```

#### ☕ **Java Strings**
```java
// Creating strings
String message = "Hello World";
String name = "Alice";
String template = String.format("Hi %s!", name);

// String properties and methods
System.out.println(message.length());   // 11 (method, not property!)
System.out.println(message.charAt(0));  // 'H'
// System.out.println(message[0]);      // ERROR! No bracket notation

// String manipulation (creates NEW strings)
String upper = message.toUpperCase();   // "HELLO WORLD"
String lower = message.toLowerCase();   // "hello world"
String part = message.substring(0, 5);  // "Hello"
String[] split = message.split(" ");    // ["Hello", "World"]

// For frequent modifications, use StringBuilder
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();          // "Hello World"
```

### 🤔 **String Performance Comparison**

| Operation | JavaScript | Java | Winner |
|-----------|------------|------|--------|
| **Creation** | `"text"` | `"text"` | Tie |
| **Concatenation** | `str1 + str2` | `str1 + str2` | JS (simpler) |
| **Many Concatenations** | Slow | Use StringBuilder | Java |
| **Character Access** | `str[i]` or `str.charAt(i)` | `str.charAt(i)` only | JS (flexibility) |
| **Memory Usage** | Automatic | Manual control | Depends on needs |

---

## 🎯 Essential Array Patterns for Coding Interviews

### Pattern 1: Two Pointers Technique
**When to Use:** Finding pairs, palindromes, or working with sorted arrays

```
Array: [1, 2, 3, 4, 5, 6]
       ↑              ↑
     left           right

Algorithm:
1. Start pointers at opposite ends
2. Move pointers toward each other based on condition
3. Stop when pointers meet or cross
```

#### **JavaScript Implementation:**
```javascript
function twoSum(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left < right) {
        let sum = sortedArray[left] + sortedArray[right];
        
        if (sum === target) {
            return [left, right];           // Found pair!
        } else if (sum < target) {
            left++;                         // Need bigger sum
        } else {
            right--;                        // Need smaller sum
        }
    }
    
    return [];                              // No pair found
}
```

#### **Java Implementation:**
```java
public static int[] twoSum(int[] sortedArray, int target) {
    int left = 0;
    int right = sortedArray.length - 1;
    
    while (left < right) {
        int sum = sortedArray[left] + sortedArray[right];
        
        if (sum == target) {
            return new int[]{left, right};  // Found pair!
        } else if (sum < target) {
            left++;                         // Need bigger sum
        } else {
            right--;                        // Need smaller sum
        }
    }
    
    return new int[0];                      // No pair found
}
```

### Pattern 2: Sliding Window Technique
**When to Use:** Finding subarrays or substrings with specific properties

```
Array: [1, 2, 3, 4, 5, 6]
       ↑─────↑              ← Window of size 3
       start end

Window slides:
[1, 2, 3] → [2, 3, 4] → [3, 4, 5] → [4, 5, 6]
```

#### **Example: Maximum Sum of K Consecutive Elements**
```javascript
function maxSumOfK(arr, k) {
    // Calculate sum of first window
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    let maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];  // Remove left, add right
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### Pattern 3: Array Traversal Patterns

#### **Standard Forward Traversal:**
```javascript
// JavaScript
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Or modern way
for (const element of array) {
    console.log(element);
}
```

```java
// Java
for (int i = 0; i < array.length; i++) {
    System.out.println(array[i]);
}

// Or enhanced for loop
for (int element : array) {
    System.out.println(element);
}
```

#### **Reverse Traversal:**
```javascript
// JavaScript
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
```

```java
// Java
for (int i = array.length - 1; i >= 0; i--) {
    System.out.println(array[i]);
}
```

---

## 🎯 Essential String Patterns

### Pattern 1: Character Frequency Counting
```javascript
function countCharacters(str) {
    const count = {};
    
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    
    return count;
}

// Example: countCharacters("hello") 
// Returns: {h: 1, e: 1, l: 2, o: 1}
```

### Pattern 2: Palindrome Checking
```javascript
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
```

### Pattern 3: Anagram Detection
```javascript
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const count1 = countCharacters(str1);
    const count2 = countCharacters(str2);
    
    for (const char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }
    
    return true;
}
```

---

## 🚀 Practice Exercises

### 🟢 **Beginner Level**

#### Exercise 1: Array Sum
```javascript
// Find the sum of all elements in an array
function arraySum(arr) {
    // Your implementation here
    // Hint: Use a loop to add each element
}

// Test: arraySum([1, 2, 3, 4, 5]) should return 15
```

#### Exercise 2: Find Maximum
```javascript
// Find the largest element in an array
function findMax(arr) {
    // Your implementation here
    // Hint: Keep track of the biggest number seen so far
}

// Test: findMax([3, 1, 4, 1, 5, 9]) should return 9
```

#### Exercise 3: Reverse String
```javascript
// Reverse a string without using built-in reverse method
function reverseString(str) {
    // Your implementation here
    // Hint: Build new string from end to beginning
}

// Test: reverseString("hello") should return "olleh"
```

### 🟡 **Intermediate Level**

#### Exercise 4: Remove Duplicates
```javascript
// Remove duplicate elements from an array
function removeDuplicates(arr) {
    // Your implementation here
    // Hint: Use a Set or track seen elements
}

// Test: removeDuplicates([1, 2, 2, 3, 3, 4]) should return [1, 2, 3, 4]
```

#### Exercise 5: Longest Word
```javascript
// Find the longest word in a sentence
function longestWord(sentence) {
    // Your implementation here
    // Hint: Split into words and compare lengths
}

// Test: longestWord("The quick brown fox") should return "quick"
```

### 🟠 **Advanced Level**

#### Exercise 6: Two Sum (Array version)
```javascript
// Find two numbers that add up to target
function twoSum(nums, target) {
    // Your implementation here
    // Hint: Use hash map or two pointers
}

// Test: twoSum([2, 7, 11, 15], 9) should return [0, 1]
```

---

## 🎯 Connection to Blind 75 Problems

### **Arrays (12 problems):**
1. **Two Sum** → Hash map + Array indexing
2. **Best Time to Buy and Sell Stock** → Single pass array traversal
3. **Contains Duplicate** → Array searching + Hash sets
4. **Product of Array Except Self** → Array manipulation
5. **Maximum Subarray** → Dynamic programming on arrays
6. **Maximum Product Subarray** → Array traversal with state tracking
7. **Find Minimum in Rotated Sorted Array** → Binary search on arrays
8. **Search in Rotated Sorted Array** → Modified binary search
9. **3Sum** → Two pointers + sorting
10. **Container With Most Water** → Two pointers optimization
11. **Plus One** → Array manipulation + carry logic
12. **Move Zeroes** → Two pointers in-place modification

### **Strings (9 problems):**
1. **Longest Substring Without Repeating Characters** → Sliding window + hash set
2. **Longest Repeating Character Replacement** → Sliding window + counting
3. **Minimum Window Substring** → Sliding window + hash map
4. **Valid Anagram** → Character counting
5. **Group Anagrams** → String sorting + hash map
6. **Valid Parentheses** → String parsing + stack
7. **Valid Palindrome** → Two pointers on string
8. **Longest Palindromic Substring** → String expansion + checking
9. **Palindromic Substrings** → String analysis + counting

---

## ✅ **Mastery Checklist**

Before moving to the next DSA topic, ensure you can:

### **Arrays:**
- [ ] Create and initialize arrays in both Java and JavaScript
- [ ] Access and modify elements using indices
- [ ] Understand why arrays use 0-based indexing
- [ ] Implement two pointers technique
- [ ] Implement sliding window technique
- [ ] Traverse arrays forward and backward
- [ ] Calculate time complexity of array operations
- [ ] Choose between fixed arrays and dynamic arrays

### **Strings:**
- [ ] Create and manipulate strings in both languages
- [ ] Understand string immutability
- [ ] Access characters by index
- [ ] Implement character counting
- [ ] Implement palindrome checking
- [ ] Use two pointers on strings
- [ ] Convert between strings and character arrays
- [ ] Choose between String and StringBuilder in Java

### **Problem-Solving Patterns:**
- [ ] Recognize when to use two pointers
- [ ] Identify sliding window opportunities
- [ ] Apply character frequency counting
- [ ] Handle edge cases (empty arrays/strings, single elements)
- [ ] Optimize brute force solutions
- [ ] Debug array index errors
- [ ] Test solutions with multiple examples

---

## 🚀 **Next Steps**

Congratulations! You've mastered the foundation of data structures. Arrays and strings appear in **28% of all Blind 75 problems**, so this knowledge will serve you well.

**Next Topic:** [Hash Tables & Maps](../02-hash-tables/) - Learn the secret weapon for O(1) lookups!

---

**Remember:** 
- **Arrays** = Numbered storage containers
- **Strings** = Arrays of characters  
- **Two Pointers** = Work from both ends
- **Sliding Window** = Move a range across data
- **Practice** = The path to mastery! 🎯