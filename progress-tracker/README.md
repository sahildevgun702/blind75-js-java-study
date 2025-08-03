# 📊 Blind 75 Progress Tracker

**Your Personal Study Companion for Mastering Coding Interviews**

The Progress Tracker is a command-line tool that helps you systematically work through all 75 essential coding interview problems. It provides personalized recommendations, visual progress tracking, and study planning guidance.

**⚡ In a hurry?** Check out the **[Quick Start Guide](./QUICK-START.md)** for the 4 essential commands!

---

## 🚀 Quick Start

```bash
# Navigate to the progress tracker folder
cd progress-tracker/

# See all available commands
node progress-tracker.js help

# Set up your study plan
node progress-tracker.js setup

# Get your next recommended problem
node progress-tracker.js next

# Check your overall progress
node progress-tracker.js stats
```

---

## 📋 Complete Command Reference

### 🎯 **Essential Commands (Start Here!)**

| Command | Description | Example |
|---------|-------------|---------|
| `help` | Show detailed help with examples | `node progress-tracker.js help` |
| `setup` | Interactive study planning guide | `node progress-tracker.js setup` |
| `next` | Get your next recommended problem | `node progress-tracker.js next` |
| `stats` | Show visual progress overview | `node progress-tracker.js stats` |

### ✅ **Progress Tracking Commands**

| Command | Description | Example |
|---------|-------------|---------|
| `mark <id> <lang>` | Mark problem as completed | `node progress-tracker.js mark 1 js` |
| `unmark <id> <lang>` | Remove completion status | `node progress-tracker.js unmark 1 java` |
| `scan` | Auto-detect completed problems from files | `node progress-tracker.js scan` |

**Language Options:**
- `js` or `javascript` for JavaScript
- `java` for Java

### 📝 **Problem Browsing Commands**

| Command | Description | Example |
|---------|-------------|---------|
| `list` | Show all problems by category | `node progress-tracker.js list` |
| `list <category>` | Show problems in specific category | `node progress-tracker.js list Array` |
| `quick` | Quick reference with all problem IDs | `node progress-tracker.js quick` |

### 🔧 **Advanced Commands**

| Command | Description | Example |
|---------|-------------|---------|
| `export` | Export progress and update README | `node progress-tracker.js export` |
| `reset` | Reset all progress (with confirmation) | `node progress-tracker.js reset` |

---

## 🎓 Step-by-Step Study Guide

### 👶 **For Complete Beginners**

1. **Start with setup:**
   ```bash
   node progress-tracker.js setup
   ```
   This will help you choose your timeline and focus language.

2. **Get your first problem:**
   ```bash
   node progress-tracker.js next
   ```
   The tracker will recommend easy Array or String problems to begin with.

3. **Mark problems as you complete them:**
   ```bash
   node progress-tracker.js mark 1 js  # When you finish Two Sum in JavaScript
   ```

4. **Check your progress regularly:**
   ```bash
   node progress-tracker.js stats
   ```
   See beautiful progress bars and get motivated!

### 🎯 **For Focused Practice**

1. **Target specific categories:**
   ```bash
   node progress-tracker.js list Array    # See all Array problems
   node progress-tracker.js list Graph    # See all Graph problems
   ```

2. **Use the personalized recommendations:**
   ```bash
   node progress-tracker.js next
   ```
   The tracker adapts suggestions based on your current skill level.

3. **Practice in both languages for deeper understanding:**
   ```bash
   node progress-tracker.js mark 5 js      # Mark Maximum Subarray in JavaScript
   node progress-tracker.js mark 5 java    # Mark Maximum Subarray in Java
   ```

---

## 🎨 Features That Make Learning Fun

### 📊 **Visual Progress Tracking**
- **Colorful progress bars** showing completion percentage
- **Category-wise breakdown** to identify weak areas
- **Study insights** with personalized recommendations

### 🧠 **Smart Recommendations**
- **Beginner-friendly**: Starts with easy Array/String problems
- **Skill-adaptive**: Adjusts difficulty based on your progress
- **Pattern-focused**: Suggests problems that teach complementary concepts

### ⚡ **Time-Saving Features**
- **Auto-detection**: Scans your solution files to update progress
- **Quick reference**: Fast problem lookup with `quick` command
- **Export functionality**: Automatically updates your README with progress

---

## 🗂️ Understanding the Categories

| Category | Count | What You'll Learn | Difficulty Level |
|----------|--------|-------------------|------------------|
| **Array** | 12 | Core manipulation, two pointers, sliding window | 🟢 Start here |
| **String** | 9 | Pattern matching, parsing, validation | 🟢 Beginner-friendly |
| **Linked List** | 6 | Pointer manipulation, traversal patterns | 🟡 Good second step |
| **Tree** | 11 | Recursion, traversal, binary search trees | 🟡 Building complexity |
| **Dynamic Programming** | 12 | Optimization, memoization, bottom-up thinking | 🔴 Advanced |
| **Graph** | 7 | BFS, DFS, complex algorithms | 🔴 Advanced |
| **Binary** | 5 | Bit manipulation, efficient operations | 🟠 Specialized |
| **Heap** | 2 | Priority queues, k-largest problems | 🟠 Specialized |
| **Trie** | 3 | Prefix trees, string processing | 🟠 Specialized |
| **Matrix** | 4 | 2D array manipulation, path finding | 🟡 Intermediate |
| **Interval** | 2 | Range problems, scheduling | 🟡 Intermediate |
| **Design** | 2 | System design, data structure implementation | 🔴 Advanced |

---

## 🔧 Troubleshooting

### Common Issues

**Q: "Language must be 'javascript' or 'java'" error**  
A: Use short forms: `js` for JavaScript, `java` for Java
```bash
# ✅ Correct
node progress-tracker.js mark 1 js
node progress-tracker.js mark 1 java

# ❌ Won't work
node progress-tracker.js mark 1 javascript
```

**Q: Progress not saving**  
A: Make sure you're in the progress-tracker folder:
```bash
cd progress-tracker/
node progress-tracker.js mark 1 js
```

**Q: Want to reset everything**  
A: Use the reset command with confirmation:
```bash
node progress-tracker.js reset
```

**Q: Can't find problem by ID**  
A: Use the quick reference to see all IDs:
```bash
node progress-tracker.js quick
```

---

## 📈 Study Tips

### 🎯 **Effective Study Strategies**

1. **Start with your strength language** to build confidence
2. **Focus on patterns, not memorization** - understand the "why"
3. **Use the category system** to practice related problems together
4. **Check stats regularly** to stay motivated
5. **Try problems in both languages** for deeper understanding

### ⏰ **Recommended Study Schedule**

**Intensive (4 weeks):**
- 3-4 hours daily
- Complete 3-4 problems per day
- Use `next` command for optimal progression

**Steady (8 weeks):**
- 1-2 hours daily  
- Complete 1-2 problems per day
- Mix easy and medium difficulty

**Gradual (12+ weeks):**
- 30-60 minutes daily
- Complete 1 problem per day
- Focus on understanding over speed

---

## 🎉 Getting Help

1. **Built-in help:** `node progress-tracker.js help`
2. **Study guidance:** `node progress-tracker.js setup`
3. **Smart recommendations:** `node progress-tracker.js next`
4. **Progress insights:** `node progress-tracker.js stats`

Remember: This tool is designed to make your learning journey enjoyable and systematic. Don't rush - focus on understanding each problem deeply!

---

**Happy coding! 🚀** You've got this! 💪
