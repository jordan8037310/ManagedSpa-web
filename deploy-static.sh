#!/bin/bash

echo "Building static deployment..."

# Clean and create dist directory
rm -rf dist
mkdir -p dist

# Build frontend with timeout
timeout 60 npx vite build

# Check if build was successful and move files
if [ -d "dist/public" ]; then
    echo "Moving files from dist/public to dist..."
    mv dist/public/* dist/
    rmdir dist/public
    
    # Create SPA routing file
    echo "/*    /index.html   200" > dist/_redirects
    
    echo "Static build complete!"
    echo "Files in dist:"
    ls -la dist/
else
    echo "Build may have timed out or failed"
    echo "Checking current dist structure:"
    ls -la dist/ 2>/dev/null || echo "No dist directory found"
fi