# Hash Tables & Maps: Lightning-Fast Lookups ⚡

## 🏢 Real-World Analogy

**Hash Table = Hotel with Room Service**
```
🏨 Grand Hash Hotel

Reception Desk (Hash Function):
"What's your name?" → "Room Number"

Guest Registry:
┌─────────────────┬──────────────┐
│ Guest Name      │ Room Number  │
├─────────────────┼──────────────┤
│ "Alice"         │ → Room 247   │
│ "Bob"           │ → Room 381   │
│ "Charlie"       │ → Room 156   │
│ "Diana"         │ → Room 492   │
└─────────────────┴──────────────┘

🔍 When you ask for "Alice":
1. Reception instantly knows: "Room 247!"
2. No need to check every room
3. Direct access = SUPER FAST!

🏠 Rooms (Memory Slots):
[Room 156: Charlie's stuff]
[Room 247: Alice's stuff]  
[Room 381: Bob's stuff]
[Room 492: Diana's stuff]
```

**The Magic:** You can find ANY guest in the hotel instantly, no matter how many guests there are!

---

## 🧠 What Is a Hash Table?

A **Hash Table** (also called Hash Map) is a data structure that stores **key-value pairs** and provides **O(1) average time** for:
- **Insertion**: Adding a new key-value pair
- **Deletion**: Removing a key-value pair  
- **Lookup**: Finding a value by its key

### 🔍 Visual Representation
```
Hash Table: {"name" → "Alice", "age" → 25, "city" → "NYC"}

┌─────────────────────────────────────────────────────┐
│                Hash Function                        │
│        "name" → hash("name") → Index 2             │
│        "age"  → hash("age")  → Index 7             │
│        "city" → hash("city") → Index 4             │
└─────────────────────────────────────────────────────┘
                         ↓
┌───┬───┬──────────┬───┬──────────┬───┬───┬──────────┬───┐
│   │   │"name"    │   │"city"    │   │   │"age"     │   │
│   │   │"Alice"   │   │"NYC"     │   │   │25        │   │
└───┴───┴──────────┴───┴──────────┴───┴───┴──────────┴───┘
  0   1      2       3      4       5   6      7       8

Key Insights:
- Keys are converted to array indices using a hash function
- Values are stored at those calculated indices
- Direct access = No searching required!
```

---

## ⚡ JavaScript vs Java Hash Tables

### 🟨 **JavaScript: Objects & Maps**

JavaScript gives you TWO options for hash tables:

#### **Option 1: Plain Objects (Most Common)**
```javascript
// Creating hash tables with objects
const student = {};                     // Empty object
const grades = {                        // Object literal
    "math": 95,
    "science": 87,
    "english": 92
};

// Adding/updating values
student["name"] = "Alice";              // Bracket notation
student.age = 20;                       // Dot notation
student["has graduation"] = false;      // Spaces require brackets

// Getting values
console.log(student["name"]);           // "Alice"
console.log(student.age);               // 20
console.log(student["missing"]);        // undefined

// Checking if key exists
if ("name" in student) {                // Method 1
    console.log("Name exists!");
}
if (student.hasOwnProperty("age")) {    // Method 2
    console.log("Age exists!");
}

// Deleting keys
delete student.age;                     // Remove key-value pair

// Iterating
for (const key in student) {            // Get keys
    console.log(key, student[key]);
}

Object.keys(student);                   // ["name", "has graduation"]
Object.values(student);                 // ["Alice", false]
```

#### **Option 2: Map Objects (Modern & Powerful)**
```javascript
// Creating Maps
const studentMap = new Map();

// Adding values
studentMap.set("name", "Alice");
studentMap.set("age", 20);
studentMap.set(42, "answer");           // Any type as key!

// Getting values
console.log(studentMap.get("name"));    // "Alice"
console.log(studentMap.get("missing")); // undefined

// Checking existence
console.log(studentMap.has("age"));     // true

// Size and deletion
console.log(studentMap.size);           // 3
studentMap.delete("age");               // Remove key-value pair
studentMap.clear();                     // Remove everything

// Iterating
for (const [key, value] of studentMap) {
    console.log(key, value);
}
```

### ☕ **Java: HashMap & Other Maps**

```java
import java.util.HashMap;
import java.util.Map;

// Creating hash maps
HashMap<String, Integer> grades = new HashMap<>();
Map<String, String> student = new HashMap<>();  // Interface type

// Adding/updating values
grades.put("math", 95);
grades.put("science", 87);
grades.put("english", 92);

student.put("name", "Alice");
student.put("major", "Computer Science");

// Getting values
Integer mathGrade = grades.get("math");         // 95
String name = student.get("name");              // "Alice"
String missing = student.get("missing");       // null

// Checking if key exists
if (grades.containsKey("math")) {
    System.out.println("Math grade exists!");
}

// Default values for missing keys
int defaultGrade = grades.getOrDefault("history", 0);  // 0 if missing

// Removing keys
grades.remove("science");

// Size and emptiness
System.out.println(grades.size());             // 2
System.out.println(grades.isEmpty());          // false

// Iterating
for (Map.Entry<String, Integer> entry : grades.entrySet()) {
    String subject = entry.getKey();
    Integer grade = entry.getValue();
    System.out.println(subject + ": " + grade);
}

// Just keys or values
for (String subject : grades.keySet()) {
    System.out.println(subject);
}

for (Integer grade : grades.values()) {
    System.out.println(grade);
}
```

### 🤔 **Objects vs Maps vs HashMap**

| Feature | JS Object | JS Map | Java HashMap |
|---------|-----------|--------|-------------|
| **Key Types** | String/Symbol only | Any type | Any Object type |
| **Syntax** | `obj.key` or `obj["key"]` | `map.set(k,v)` | `map.put(k,v)` |
| **Size** | `Object.keys(obj).length` | `map.size` | `map.size()` |
| **Iteration** | `for...in` loop | `for...of` loop | Enhanced for loop |
| **Performance** | Very fast | Fast | Very fast |
| **Use When** | Simple string keys | Complex keys/order matters | Type safety needed |

---

## 🎯 Essential Hash Table Patterns

### Pattern 1: Frequency Counting
**When to Use:** Count how many times each element appears

```
Problem: Count character frequencies in "hello"
Expected: {h: 1, e: 1, l: 2, o: 1}

Visual Process:
String: "hello"
         h e l l o
         ↓ ↓ ↓ ↓ ↓
Map:    {h:1} → {h:1,e:1} → {h:1,e:1,l:1} → {h:1,e:1,l:2} → {h:1,e:1,l:2,o:1}
```

#### **JavaScript Implementation:**
```javascript
function countFrequency(str) {
    const count = {};
    
    for (const char of str) {
        // If character exists, increment; otherwise start at 1
        count[char] = (count[char] || 0) + 1;
    }
    
    return count;
}

// Alternative with Map
function countFrequencyMap(str) {
    const count = new Map();
    
    for (const char of str) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    return count;
}
```

#### **Java Implementation:**
```java
import java.util.HashMap;
import java.util.Map;

public static Map<Character, Integer> countFrequency(String str) {
    Map<Character, Integer> count = new HashMap<>();
    
    for (char c : str.toCharArray()) {
        count.put(c, count.getOrDefault(c, 0) + 1);
    }
    
    return count;
}
```

### Pattern 2: Two Sum Pattern (Hash Map Lookup)
**When to Use:** Find two elements that satisfy a condition

```
Problem: Find two numbers that add up to target
Array: [2, 7, 11, 15], Target: 9

Process:
Index 0: See 2, need 7 (9-2), store {2: 0}
Index 1: See 7, need 2 (9-7), found 2 at index 0! → Return [0, 1]
```

#### **JavaScript Implementation:**
```javascript
function twoSum(nums, target) {
    const numMap = {};  // number → index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        
        numMap[nums[i]] = i;
    }
    
    return [];  // No solution found
}
```

#### **Java Implementation:**
```java
import java.util.HashMap;
import java.util.Map;

public static int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> numMap = new HashMap<>();  // number → index
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        
        if (numMap.containsKey(complement)) {
            return new int[]{numMap.get(complement), i};
        }
        
        numMap.put(nums[i], i);
    }
    
    return new int[0];  // No solution found
}
```

### Pattern 3: Grouping Pattern
**When to Use:** Group elements by some property

```
Problem: Group words by their sorted letters (anagrams)
Input: ["eat", "tea", "tan", "ate", "nat", "bat"]

Process:
"eat" → sorted: "aet" → group["aet"] = ["eat"]
"tea" → sorted: "aet" → group["aet"] = ["eat", "tea"]  
"tan" → sorted: "ant" → group["ant"] = ["tan"]
"ate" → sorted: "aet" → group["aet"] = ["eat", "tea", "ate"]
...

Result: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

#### **JavaScript Implementation:**
```javascript
function groupAnagrams(strs) {
    const groups = {};
    
    for (const str of strs) {
        // Create a key by sorting the characters
        const key = str.split('').sort().join('');
        
        // Add to group or create new group
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    }
    
    return Object.values(groups);
}
```

### Pattern 4: Set Operations (Duplicate Detection)
**When to Use:** Check for existence or find duplicates

```javascript
// Check for duplicates using Set
function hasDuplicates(arr) {
    const seen = new Set();
    
    for (const num of arr) {
        if (seen.has(num)) {
            return true;  // Found duplicate!
        }
        seen.add(num);
    }
    
    return false;
}

// Find intersection of two arrays
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
    
    for (const num of arr2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num);  // Avoid duplicates in result
        }
    }
    
    return result;
}
```

---

## 🔧 Hash Function Deep Dive

### How Does Hashing Work?
```
Input: "Alice"
          ↓
    Hash Function
          ↓
    Number: 247
          ↓
    Array Index: 247 % array_size

The hash function converts ANY input into a number!
```

### Simple Hash Function Example:
```javascript
function simpleHash(str, tableSize) {
    let hash = 0;
    
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);  // Add ASCII values
    }
    
    return hash % tableSize;  // Fit within table size
}

// Example:
simpleHash("Alice", 10);  // Might return 7
simpleHash("Bob", 10);    // Might return 3
```

### 🚨 **Collision Handling**
What happens when two keys hash to the same index?

```
Problem: Both "Alice" and "Charlie" hash to index 3

Solution 1: Chaining (Most Common)
┌───┬───┬───┬─────────────────┬───┐
│   │   │   │ [Alice][Charlie]│   │
└───┴───┴───┴─────────────────┴───┘
  0   1   2          3          4
                    ↑
                Chain of values

Solution 2: Open Addressing
┌───┬───┬───┬───────┬─────────┬───┐
│   │   │   │ Alice │ Charlie │   │
└───┴───┴───┴───────┴─────────┴───┘
  0   1   2     3        4      5
                ↑        ↑
              First    Next available
```

---

## 🚀 Practice Exercises

### 🟢 **Beginner Level**

#### Exercise 1: First Unique Character
```javascript
// Find the first character that appears exactly once
function firstUnique(str) {
    // Your implementation here
    // Hint: Count frequencies, then find first with count 1
}

// Test: firstUnique("leetcode") should return "l"
// Test: firstUnique("loveleetcode") should return "v"
```

#### Exercise 2: Two Sum
```javascript
// Find indices of two numbers that add up to target
function twoSum(nums, target) {
    // Your implementation here
    // Hint: Store number → index mapping
}

// Test: twoSum([2,7,11,15], 9) should return [0,1]
```

### 🟡 **Intermediate Level**

#### Exercise 3: Valid Anagram
```javascript
// Check if two strings are anagrams
function isAnagram(s, t) {
    // Your implementation here
    // Hint: Compare character frequency counts
}

// Test: isAnagram("listen", "silent") should return true
// Test: isAnagram("rat", "car") should return false
```

#### Exercise 4: Contains Duplicate
```javascript
// Check if array contains any duplicates
function containsDuplicate(nums) {
    // Your implementation here
    // Hint: Use Set to track seen numbers
}

// Test: containsDuplicate([1,2,3,1]) should return true
// Test: containsDuplicate([1,2,3,4]) should return false
```

### 🟠 **Advanced Level**

#### Exercise 5: Group Anagrams
```javascript
// Group strings that are anagrams of each other
function groupAnagrams(strs) {
    // Your implementation here
    // Hint: Use sorted string as key
}

// Test: groupAnagrams(["eat","tea","tan","ate","nat","bat"]) 
// should return [["eat","tea","ate"],["tan","nat"],["bat"]]
```

#### Exercise 6: Top K Frequent Elements
```javascript
// Find k most frequent elements in array
function topKFrequent(nums, k) {
    // Your implementation here
    // Hint: Count frequencies, then find top k
}

// Test: topKFrequent([1,1,1,2,2,3], 2) should return [1,2]
```

---

## 🎯 Connection to Blind 75 Problems

### **Hash Table Problems (15+ direct uses):**

1. **Two Sum** → Classic hash map lookup pattern
2. **Group Anagrams** → Grouping by hash key pattern
3. **Top K Frequent Elements** → Frequency counting + sorting
4. **Valid Anagram** → Character frequency comparison
5. **Contains Duplicate** → Set for duplicate detection
6. **Longest Substring Without Repeating Characters** → Set for tracking unique chars
7. **Minimum Window Substring** → Character frequency matching
8. **3Sum** → Hash set for duplicate triplet detection
9. **Word Break** → Memoization with hash map
10. **Clone Graph** → Hash map for node mapping
11. **Course Schedule** → Hash map for adjacency lists
12. **Alien Dictionary** → Hash map for character ordering
13. **Design Add and Search Words** → Trie with hash maps
14. **Word Search II** → Trie + hash set optimizations
15. **LRU Cache** → Hash map + doubly linked list

### **Performance Improvements:**
- **Brute Force O(n²)** → **Hash Map O(n)** for lookup problems
- **Nested Loops** → **Single Pass** with hash storage
- **Linear Search** → **Constant Time Access**

---

## ⚙️ **Time & Space Complexity**

### **Average Case (Good Hash Function):**
| Operation | Time | Space |
|-----------|------|-------|
| **Insert** | O(1) | O(1) |
| **Delete** | O(1) | O(1) |
| **Lookup** | O(1) | O(1) |
| **Space** | O(n) | O(n) |

### **Worst Case (Poor Hash Function):**
| Operation | Time | Space |
|-----------|------|-------|
| **Insert** | O(n) | O(1) |
| **Delete** | O(n) | O(1) |
| **Lookup** | O(n) | O(1) |

### **Why O(1) Average Time?**
```
Good Hash Function:
Keys spread evenly → Few collisions → Direct access

Bad Hash Function:  
All keys hash to same spot → Long chains → Linear search
```

---

## ✅ **Mastery Checklist**

Before moving to the next DSA topic, ensure you can:

### **Hash Table Fundamentals:**
- [ ] Explain how hash functions work
- [ ] Understand key-value pair storage
- [ ] Implement basic hash table operations
- [ ] Handle collision scenarios
- [ ] Calculate time/space complexity

### **JavaScript Proficiency:**
- [ ] Use objects for simple hash tables
- [ ] Use Maps for complex keys
- [ ] Choose between Object and Map appropriately
- [ ] Iterate through keys and values
- [ ] Handle undefined values gracefully

### **Java Proficiency:**
- [ ] Use HashMap for key-value storage
- [ ] Use HashSet for unique value storage
- [ ] Understand generic types in collections
- [ ] Handle null values appropriately
- [ ] Use getOrDefault() for safe access

### **Problem-Solving Patterns:**
- [ ] Recognize frequency counting problems
- [ ] Apply two sum pattern with hash maps
- [ ] Implement grouping algorithms
- [ ] Use sets for duplicate detection
- [ ] Optimize nested loops with hash storage
- [ ] Debug hash table edge cases

---

## 🚀 **Next Steps**

Excellent work! Hash tables are the **secret weapon** that transforms many O(n²) problems into O(n) solutions. You'll use them in **20+ Blind 75 problems**.

**Next Topic:** [Linked Lists](../04-linked-lists/) - Master dynamic data structures and pointer manipulation!

---

**Remember:**
- **Hash Tables** = Lightning-fast lookups ⚡
- **O(1) Access** = No searching required
- **Key-Value Pairs** = Perfect for mappings
- **Count Frequencies** = Use hash maps  
- **Find Duplicates** = Use hash sets
- **Practice** = Makes permanent! 🎯