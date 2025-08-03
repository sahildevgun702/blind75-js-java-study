#!/usr/bin/env python3
"""
Simple HTTP server for testing the CodeQuest Academy web app locally.
This allows the fetch requests to work properly.

Usage:
    python test-server.py
    
Then open: http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import os
import sys

# Change to the web-app directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers to allow fetch requests
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    print("🚀 Starting CodeQuest Academy Test Server...")
    print(f"📁 Serving from: {os.getcwd()}")
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"🌐 Server running at: http://localhost:{PORT}")
        print("📖 Open this URL in your browser to test the web app")
        print("🛑 Press Ctrl+C to stop the server")
        
        # Try to open browser automatically
        try:
            webbrowser.open(f'http://localhost:{PORT}')
            print("🎯 Browser should open automatically")
        except:
            print("💡 Please manually open http://localhost:{PORT} in your browser")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped. Goodbye!")

if __name__ == "__main__":
    main()