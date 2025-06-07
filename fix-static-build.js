#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function fixStaticBuild() {
  console.log('Fixing static build structure...');
  
  try {
    // Check if dist/public exists
    const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
    
    if (publicExists) {
      console.log('Moving files from dist/public to dist...');
      
      // Get all files and directories in dist/public
      const items = await fs.readdir('dist/public', { withFileTypes: true });
      
      for (const item of items) {
        const sourcePath = path.join('dist/public', item.name);
        const destPath = path.join('dist', item.name);
        
        if (item.isDirectory()) {
          // Copy directory recursively
          await fs.cp(sourcePath, destPath, { recursive: true });
        } else {
          // Copy file
          await fs.copyFile(sourcePath, destPath);
        }
      }
      
      // Remove the public directory
      await fs.rm('dist/public', { recursive: true });
      
      console.log('Static build structure fixed successfully');
      
      // Verify the result
      const distFiles = await fs.readdir('dist');
      console.log('Files in dist:', distFiles.join(', '));
      
      // Check for index.html
      const hasIndex = distFiles.includes('index.html');
      if (hasIndex) {
        console.log('✓ index.html found in dist/');
      } else {
        console.log('✗ index.html not found in dist/');
      }
      
    } else {
      console.log('dist/public not found - checking if files are already in correct location...');
      
      const distExists = await fs.access('dist').then(() => true).catch(() => false);
      if (distExists) {
        const distFiles = await fs.readdir('dist');
        console.log('Files in dist:', distFiles.join(', '));
        
        if (distFiles.includes('index.html')) {
          console.log('✓ Build structure is already correct');
        } else {
          console.log('✗ index.html not found in dist/');
        }
      } else {
        console.log('✗ dist directory not found');
      }
    }
    
  } catch (error) {
    console.error('Error fixing static build:', error.message);
    process.exit(1);
  }
}

fixStaticBuild();