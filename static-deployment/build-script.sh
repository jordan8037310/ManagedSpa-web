#!/bin/bash

# ManagedSpa Static Deployment Build Script
echo "🚀 Building ManagedSpa for static deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
rm -rf .vite/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Run type checking
echo "🔍 Running type checks..."
npm run check

# Build the application
echo "🏗️ Building application..."
npm run build

# Copy static deployment files to dist
echo "📋 Copying deployment configuration..."
cp static-deployment/_redirects dist/_redirects 2>/dev/null || true
cp static-deployment/robots.txt dist/robots.txt 2>/dev/null || true
cp static-deployment/sitemap.xml dist/sitemap.xml 2>/dev/null || true

# Create favicon if not exists
echo "🎨 Ensuring favicon exists..."
if [ ! -f "dist/favicon.ico" ]; then
  echo "Creating default favicon..."
  # This would typically copy a real favicon file
  touch dist/favicon.ico
fi

# Verify build output
echo "✅ Verifying build output..."
if [ -f "dist/index.html" ]; then
  echo "✅ Build successful! Output directory: dist/"
  echo "📊 Build statistics:"
  du -sh dist/
  echo "📁 Files created:"
  find dist/ -type f -name "*.html" -o -name "*.js" -o -name "*.css" | head -10
else
  echo "❌ Build failed! index.html not found in dist/"
  exit 1
fi

echo "🎉 Static deployment build complete!"
echo "📖 See static-deployment/deployment-guide.md for deployment instructions"