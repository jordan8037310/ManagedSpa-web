#!/bin/bash

echo "Fixing deployment file structure..."

# Run the standard build
npm run build

# Check if dist/public exists and move files
if [ -d "dist/public" ]; then
    echo "Moving frontend files from dist/public to dist..."
    
    # Copy all files from dist/public to dist
    cp -r dist/public/* dist/
    
    # Remove the public directory
    rm -rf dist/public
    
    echo "Files moved successfully"
else
    echo "dist/public not found - checking current structure..."
    ls -la dist/ 2>/dev/null || echo "dist directory does not exist"
fi

# Verify the deployment structure
if [ -f "dist/index.html" ] && [ -f "dist/index.js" ]; then
    echo "Deployment structure is correct:"
    echo "✓ Frontend: dist/index.html"
    echo "✓ Server: dist/index.js"
else
    echo "Deployment structure needs attention:"
    [ ! -f "dist/index.html" ] && echo "✗ Missing dist/index.html"
    [ ! -f "dist/index.js" ] && echo "✗ Missing dist/index.js"
fi