# 🚀 CodeQuest Academy Web App

An interactive, gamified web application for mastering the Blind 75 coding interview questions.

## 🎯 Features

- **Interactive Problem Browser**: Click on any problem to open the challenge modal
- **Dual Language Support**: Practice in both JavaScript and Java
- **Progress Tracking**: Visual progress bars and achievement system
- **Gamified Learning**: XP system, levels, and streaks
- **Smart Hints**: Get contextual hints for each problem
- **Code Editor**: Built-in code editor with syntax highlighting
- **Sample Solutions**: View example solutions when needed

## 🛠️ How to Run

### Option 1: Simple Local Server (Recommended)

```bash
# Navigate to the web-app directory
cd web-app/

# Start the test server (Python 3 required)
python test-server.py

# Open http://localhost:8000 in your browser
```

### Option 2: Node.js Server

```bash
# Install a simple HTTP server
npm install -g http-server

# Navigate to web-app directory
cd web-app/

# Start the server
http-server -p 8000

# Open http://localhost:8000 in your browser
```

### Option 3: Direct File Opening (Limited)

You can open `index.html` directly in your browser, but some features may be limited due to CORS restrictions. The app will automatically fall back to sample data.

## 🎮 How to Use

1. **Start Your Quest**: Click "Start Your Quest!" to scroll to the problems
2. **Choose Your Path**: Select Beginner, Warrior, or Master path
3. **Click on Problems**: Click on any available problem (🎯) to open the challenge
4. **Write Code**: Use the built-in code editor to write your solution
5. **Test & Submit**: Run your code and submit when ready
6. **Track Progress**: Watch your XP and level grow as you complete problems

## 🔧 Troubleshooting

### Problems Not Clickable?

1. **Check Browser Console**: Open Developer Tools (F12) and look for errors
2. **Verify Server**: Make sure you're using a local server, not opening the file directly
3. **Check Availability**: Only the first 3 problems are available initially
4. **Clear Cache**: Try refreshing the page or clearing browser cache

### Common Console Messages

- `✅ Progress tracker data loaded successfully` - Data loaded from JSON file
- `⚠️ Could not load progress tracker data` - Using sample data (normal when opening file directly)
- `✅ Rendered X quest nodes` - Problems displayed successfully
- `Problem X: completed=false, available=true` - Problem availability status

### Data Loading

The app tries to load real progress data from `../progress-tracker/progress-tracker.json`. If this fails (e.g., when opening the file directly), it automatically falls back to sample data with all the core functionality.

## 🎯 Problem Availability

- **Problems 1-3**: Always available
- **Problems 4-6**: Unlock after completing 1 problem
- **Problems 7+**: Unlock after completing 3 problems

## 📱 Browser Compatibility

- Modern Chrome, Firefox, Safari, Edge
- Requires JavaScript enabled
- Best experience on desktop/laptop
- Mobile responsive design

## 🐛 Known Issues

- Direct file opening has CORS limitations
- Some animations may not work in older browsers
- Progress is stored in localStorage (per browser)

---

**Tip**: For the best experience, use the test server option to enable all features including progress tracking integration!