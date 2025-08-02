# Stacks & Queues: Ordered Processing Masters 📚🚶‍♂️

## 🥞 Stack: Last In, First Out (LIFO)

**Stack = Pile of Dinner Plates**
```
🍽️ Restaurant Kitchen Stack

Adding plates (PUSH):
Step 1: [Plate 1]                    ← Bottom plate
Step 2: [Plate 1][Plate 2]           ← Stack growing up
Step 3: [Plate 1][Plate 2][Plate 3]  ← Top plate (most recent)

Removing plates (POP):
Step 1: [Plate 1][Plate 2][Plate 3]  ← Remove Plate 3 (top)
Step 2: [Plate 1][Plate 2]           ← Remove Plate 2 (now top)
Step 3: [Plate 1]                    ← Remove Plate 1 (last one)

Key Rule: You can ONLY add or remove from the TOP!
- Last plate added = First plate removed
- No reaching into the middle!
- Always work with the most recent item
```

## 🚶‍♂️ Queue: First In, First Out (FIFO)

**Queue = Line at Coffee Shop**
```
☕ Coffee Shop Line

People joining (ENQUEUE):
Step 1: [Alice] ← Front of line
Step 2: [Alice][Bob] ← Bob joins back of line  
Step 3: [Alice][Bob][Charlie] ← Charlie joins back

People getting served (DEQUEUE):
Step 1: [Alice][Bob][Charlie] ← Alice gets served (front)
Step 2: [Bob][Charlie] ← Bob gets served (now front)
Step 3: [Charlie] ← Charlie gets served (last person)

Key Rule: First person in line = First person served!
- New people join the BACK
- Service happens at the FRONT
- Fair ordering - no cutting in line!
```

---

## 📚 Stack Deep Dive

### What Is a Stack?
A **Stack** is a linear data structure that follows **LIFO** (Last In, First Out) principle. Think of it as a container where you can only access the top item.

### 🔍 Visual Representation
```
Stack Operations:

Empty Stack:     After push(10):    After push(20):    After push(30):
┌─────────┐      ┌─────────┐        ┌─────────┐        ┌─────────┐
│         │      │   10    │ ← top  │   20    │ ← top  │   30    │ ← top
│         │      └─────────┘        │   10    │        │   20    │
│         │                         └─────────┘        │   10    │
└─────────┘                                           └─────────┘

After pop():     After pop():       After pop():
┌─────────┐      ┌─────────┐        ┌─────────┐
│   20    │ ← top │   10    │ ← top  │         │
│   10    │      └─────────┘        │         │
└─────────┘                         │         │
                                   └─────────┘

Stack Properties:
- Only top element is accessible
- Size changes dynamically
- Perfect for "undo" operations
- Great for tracking nested operations
```

### ⚡ JavaScript Stack Implementation

#### **Using Arrays (Built-in Methods):**
```javascript
// JavaScript arrays have built-in stack methods!
const stack = [];

// Push operations (add to top)
stack.push(10);     // [10]
stack.push(20);     // [10, 20]
stack.push(30);     // [10, 20, 30]

// Pop operations (remove from top)
console.log(stack.pop());   // 30, stack becomes [10, 20]
console.log(stack.pop());   // 20, stack becomes [10]

// Peek at top without removing
console.log(stack[stack.length - 1]);  // 10

// Check if empty
console.log(stack.length === 0);       // false

// Stack size
console.log(stack.length);             // 1
```

#### **Custom Stack Class:**
```javascript
class Stack {
    constructor() {
        this.items = [];
    }
    
    // Add element to top
    push(element) {
        this.items.push(element);
    }
    
    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }
    
    // Look at top element without removing
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }
    
    // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }
    
    // Get stack size
    size() {
        return this.items.length;
    }
    
    // Display stack contents
    display() {
        console.log("Top:", this.items.slice().reverse().join(' '));
    }
}

// Usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.display();          // Top: 3 2 1
console.log(myStack.pop()); // 3
```

### ☕ Java Stack Implementation

#### **Using Built-in Stack Class:**
```java
import java.util.Stack;

// Java has a built-in Stack class
Stack<Integer> stack = new Stack<>();

// Push operations (add to top)
stack.push(10);     // [10]
stack.push(20);     // [10, 20]
stack.push(30);     // [10, 20, 30]

// Pop operations (remove from top)
System.out.println(stack.pop());    // 30, stack becomes [10, 20]
System.out.println(stack.pop());    // 20, stack becomes [10]

// Peek at top without removing
System.out.println(stack.peek());   // 10

// Check if empty
System.out.println(stack.isEmpty()); // false

// Stack size
System.out.println(stack.size());   // 1

// Search for element (returns 1-based position from top)
stack.push(20);
stack.push(30);
System.out.println(stack.search(20)); // 2 (second from top)
```

#### **Using ArrayList (More Modern):**
```java
import java.util.ArrayList;
import java.util.List;

public class CustomStack<T> {
    private List<T> items;
    
    public CustomStack() {
        items = new ArrayList<>();
    }
    
    public void push(T element) {
        items.add(element);
    }
    
    public T pop() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return items.remove(items.size() - 1);
    }
    
    public T peek() {
        if (isEmpty()) {
            throw new IllegalStateException("Stack is empty");
        }
        return items.get(items.size() - 1);
    }
    
    public boolean isEmpty() {
        return items.isEmpty();
    }
    
    public int size() {
        return items.size();
    }
}
```

---

## 🚶‍♂️ Queue Deep Dive

### What Is a Queue?
A **Queue** is a linear data structure that follows **FIFO** (First In, First Out) principle. Think of it as a line where people are served in the order they arrived.

### 🔍 Visual Representation
```
Queue Operations:

Empty Queue:
┌─────────────────────────────────┐
│                                 │
└─────────────────────────────────┘
Front                         Back

After enqueue(10):
┌─────────────────────────────────┐
│  10                             │
└─────────────────────────────────┘
Front                         Back

After enqueue(20):
┌─────────────────────────────────┐
│  10    20                       │
└─────────────────────────────────┘
Front                         Back

After enqueue(30):
┌─────────────────────────────────┐
│  10    20    30                 │
└─────────────────────────────────┘
Front                         Back

After dequeue():
┌─────────────────────────────────┐
│         20    30                │
└─────────────────────────────────┘
Front                         Back

Queue Properties:
- Add to back (enqueue)
- Remove from front (dequeue)
- Maintains order of arrival
- Perfect for scheduling and processing
```

### ⚡ JavaScript Queue Implementation

#### **Using Arrays (Simple but Inefficient):**
```javascript
// Simple queue using array methods
const queue = [];

// Enqueue (add to back)
queue.push(10);     // [10]
queue.push(20);     // [10, 20] 
queue.push(30);     // [10, 20, 30]

// Dequeue (remove from front)
console.log(queue.shift());  // 10, queue becomes [20, 30]
console.log(queue.shift());  // 20, queue becomes [30]

// Peek at front
console.log(queue[0]);       // 30

// Check if empty
console.log(queue.length === 0);  // false

// Note: shift() is O(n) operation - inefficient for large queues!
```

#### **Efficient Queue Using Two Stacks:**
```javascript
class Queue {
    constructor() {
        this.enqueueStack = [];  // For adding elements
        this.dequeueStack = [];  // For removing elements
    }
    
    enqueue(element) {
        this.enqueueStack.push(element);
    }
    
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        // If dequeue stack is empty, transfer all elements from enqueue stack
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        
        return this.dequeueStack.pop();
    }
    
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        
        if (this.dequeueStack.length === 0) {
            while (this.enqueueStack.length > 0) {
                this.dequeueStack.push(this.enqueueStack.pop());
            }
        }
        
        return this.dequeueStack[this.dequeueStack.length - 1];
    }
    
    isEmpty() {
        return this.enqueueStack.length === 0 && this.dequeueStack.length === 0;
    }
    
    size() {
        return this.enqueueStack.length + this.dequeueStack.length;
    }
}
```

### ☕ Java Queue Implementation

#### **Using Built-in Queue Interface:**
```java
import java.util.Queue;
import java.util.LinkedList;
import java.util.ArrayDeque;

// LinkedList implements Queue interface
Queue<Integer> queue1 = new LinkedList<>();

// ArrayDeque is more efficient
Queue<Integer> queue2 = new ArrayDeque<>();

// Queue operations
queue1.offer(10);        // Add to back (enqueue)
queue1.offer(20);
queue1.offer(30);

System.out.println(queue1.poll());  // Remove from front: 10
System.out.println(queue1.peek());  // Look at front: 20

System.out.println(queue1.isEmpty()); // false
System.out.println(queue1.size());    // 2

// Alternative methods (throw exceptions instead of returning null)
queue1.add(40);          // Same as offer()
queue1.remove();         // Same as poll() but throws exception if empty
queue1.element();        // Same as peek() but throws exception if empty
```

#### **Custom Queue Using Linked List:**
```java
public class CustomQueue<T> {
    private Node<T> front;
    private Node<T> back;
    private int size;
    
    private static class Node<T> {
        T data;
        Node<T> next;
        
        Node(T data) {
            this.data = data;
        }
    }
    
    public CustomQueue() {
        front = null;
        back = null;
        size = 0;
    }
    
    public void enqueue(T element) {
        Node<T> newNode = new Node<>(element);
        
        if (back == null) {
            front = back = newNode;
        } else {
            back.next = newNode;
            back = newNode;
        }
        size++;
    }
    
    public T dequeue() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        
        T data = front.data;
        front = front.next;
        
        if (front == null) {
            back = null;
        }
        
        size--;
        return data;
    }
    
    public T front() {
        if (isEmpty()) {
            throw new IllegalStateException("Queue is empty");
        }
        return front.data;
    }
    
    public boolean isEmpty() {
        return front == null;
    }
    
    public int size() {
        return size;
    }
}
```

---

## 🎯 Essential Stack Patterns

### Pattern 1: **Parentheses Matching**
**When to Use:** Validate nested structures, balanced brackets

```
Problem: Check if parentheses are balanced
Examples:
"()" → true
"()[]{}" → true
"(]" → false
"([)]" → false

Algorithm:
1. For each opening bracket: push to stack
2. For each closing bracket: 
   - If stack empty → unmatched closing bracket
   - If top doesn't match → mismatched brackets
   - Otherwise → pop the matching opening bracket
3. At end: stack should be empty
```

```javascript
function isValidParentheses(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);           // Opening bracket
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;           // Unmatched or mismatched
            }
        }
    }
    
    return stack.length === 0;          // All brackets should be matched
}
```

### Pattern 2: **Function Call Stack Simulation**
**When to Use:** Evaluate expressions, simulate recursion

```javascript
// Evaluate postfix notation: "2 3 + 4 *" = (2+3)*4 = 20
function evaluatePostfix(expression) {
    const stack = [];
    const tokens = expression.split(' ');
    
    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));    // Number: push to stack
        } else {
            const b = stack.pop();        // Second operand
            const a = stack.pop();        // First operand
            
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
    }
    
    return stack.pop();  // Final result
}
```

### Pattern 3: **Undo/Redo Operations**
```javascript
class TextEditor {
    constructor() {
        this.content = "";
        this.undoStack = [];
        this.redoStack = [];
    }
    
    type(text) {
        this.undoStack.push(this.content);  // Save current state
        this.content += text;
        this.redoStack = [];                // Clear redo history
    }
    
    undo() {
        if (this.undoStack.length > 0) {
            this.redoStack.push(this.content);
            this.content = this.undoStack.pop();
        }
    }
    
    redo() {
        if (this.redoStack.length > 0) {
            this.undoStack.push(this.content);
            this.content = this.redoStack.pop();
        }
    }
}
```

---

## 🎯 Essential Queue Patterns

### Pattern 1: **Level Order Traversal**
**When to Use:** Process data level by level, BFS in trees/graphs

```javascript
// Process binary tree level by level
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();     // Dequeue front node
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);   // Enqueue children
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}
```

### Pattern 2: **Sliding Window Maximum**
**When to Use:** Find maximum in all subarrays of size k

```javascript
function slidingWindowMaximum(nums, k) {
    const result = [];
    const deque = [];  // Store indices
    
    for (let i = 0; i < nums.length; i++) {
        // Remove indices outside current window
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        
        // Remove indices of smaller elements (they can't be maximum)
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // Window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);  // Front of deque is maximum
        }
    }
    
    return result;
}
```

---

## 🚀 Practice Exercises

### 🟢 **Beginner Level**

#### Exercise 1: Stack Implementation
```javascript
// Implement a stack using only queue operations
class StackFromQueue {
    constructor() {
        this.queue = [];
    }
    
    push(x) {
        // Your implementation here
        // Hint: Use queue rotation
    }
    
    pop() {
        // Your implementation here
    }
    
    top() {
        // Your implementation here
    }
}
```

#### Exercise 2: Queue Implementation  
```javascript
// Implement a queue using only stack operations
class QueueFromStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(x) {
        // Your implementation here
    }
    
    dequeue() {
        // Your implementation here
        // Hint: Transfer between stacks when needed
    }
}
```

### 🟡 **Intermediate Level**

#### Exercise 3: Daily Temperatures
```javascript
// Find next warmer temperature for each day
function dailyTemperatures(temperatures) {
    // Your implementation here
    // Hint: Use stack to track indices of unresolved days
}

// Example: [73,74,75,71,69,72,76,73] → [1,1,4,2,1,1,0,0]
```

#### Exercise 4: Design Circular Queue
```javascript
// Design a circular queue with fixed capacity
class CircularQueue {
    constructor(k) {
        // Your implementation here
    }
    
    enQueue(value) {
        // Your implementation here
    }
    
    deQueue() {
        // Your implementation here
    }
    
    isEmpty() {
        // Your implementation here
    }
    
    isFull() {
        // Your implementation here
    }
}
```

---

## 🎯 Connection to Blind 75 Problems

### **Direct Stack/Queue Problems:**

1. **Valid Parentheses** → Stack for bracket matching
2. **Binary Tree Level Order Traversal** → Queue for BFS
3. **Implement Queue using Stacks** → Stack manipulation
4. **Implement Stack using Queues** → Queue manipulation
5. **Daily Temperatures** → Monotonic stack pattern
6. **Largest Rectangle in Histogram** → Stack for area calculation

### **Indirect Usage:**
- **DFS/BFS in graphs** → Stack/Queue for traversal
- **Expression evaluation** → Stack for operators
- **Backtracking** → Stack for state management
- **Tree traversal** → Stack (DFS) or Queue (BFS)

---

## ⚙️ **Time & Space Complexity**

### **Stack Operations:**
| Operation | Array Implementation | Linked List Implementation |
|-----------|---------------------|---------------------------|
| **Push** | O(1) amortized | O(1) |
| **Pop** | O(1) | O(1) |
| **Peek** | O(1) | O(1) |
| **Space** | O(n) | O(n) |

### **Queue Operations:**
| Operation | Array Implementation | Linked List Implementation |
|-----------|---------------------|---------------------------|
| **Enqueue** | O(1) amortized | O(1) |
| **Dequeue** | O(n) with shift() | O(1) |
| **Front** | O(1) | O(1) |
| **Space** | O(n) | O(n) |

**Note:** Use ArrayDeque in Java or two-stack implementation in JavaScript for efficient queues!

---

## ✅ **Mastery Checklist**

### **Stack Mastery:**
- [ ] Understand LIFO principle with real-world analogies
- [ ] Implement stack using arrays and linked lists
- [ ] Use stack for parentheses matching
- [ ] Apply stack for expression evaluation
- [ ] Implement undo/redo functionality
- [ ] Recognize when problems need LIFO processing

### **Queue Mastery:**
- [ ] Understand FIFO principle with real-world analogies
- [ ] Implement queue using linked lists
- [ ] Avoid inefficient array-based queue operations
- [ ] Use queue for level-order traversal
- [ ] Implement queue using two stacks
- [ ] Design circular queue with fixed capacity

### **Pattern Recognition:**
- [ ] Identify when to use stack vs queue
- [ ] Apply appropriate data structure for ordering requirements
- [ ] Optimize algorithms using monotonic stack/queue
- [ ] Debug stack overflow and queue underflow
- [ ] Choose efficient implementations for your language

---

## 🚀 **Next Steps**

Excellent! You've mastered the fundamental ordering patterns. Stacks and queues are the building blocks for many advanced algorithms and appear in **10+ Blind 75 problems**.

**Next Topic:** [Trees](../07-trees/) - Explore hierarchical data structures and recursive thinking!

---

**Remember:**
- **Stack** = Last In, First Out (dinner plates) 🥞
- **Queue** = First In, First Out (coffee shop line) ☕
- **LIFO** = Perfect for nested/recursive operations
- **FIFO** = Perfect for fair processing and BFS
- **Practice** = Stack up your skills! 📚