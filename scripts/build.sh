#!/bin/bash

echo "🚀 Building ManagedSpa application..."

# Run the standard build process
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Move frontend files from dist/public to dist root for deployment
if [ -d "dist/public" ]; then
    echo "📁 Moving frontend files to correct location..."
    cp -r dist/public/* dist/
    rm -rf dist/public
    echo "✅ Frontend files moved successfully"
else
    echo "⚠️  Warning: dist/public directory not found"
fi

# Verify index.html exists in the correct location
if [ -f "dist/index.html" ]; then
    echo "✅ index.html found in dist/"
else
    echo "❌ index.html not found in dist/"
    exit 1
fi

echo "🎉 Build complete! Ready for deployment."