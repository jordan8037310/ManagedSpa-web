#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function buildStatic() {
  console.log('Building static deployment...');
  
  try {
    // Clean previous builds
    try {
      await fs.rm('dist', { recursive: true, force: true });
    } catch (e) {
      // Directory might not exist
    }

    // Build frontend only (no server for static deployment)
    console.log('Building frontend...');
    const { stdout, stderr } = await execAsync('npx vite build');
    console.log(stdout);
    if (stderr) console.warn(stderr);

    // Check if frontend built to dist/public and move files
    const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
    
    if (publicExists) {
      console.log('Moving files from dist/public to dist...');
      
      // Get all files and directories in dist/public
      const items = await fs.readdir('dist/public', { withFileTypes: true });
      
      for (const item of items) {
        const sourcePath = path.join('dist/public', item.name);
        const destPath = path.join('dist', item.name);
        
        if (item.isDirectory()) {
          await fs.cp(sourcePath, destPath, { recursive: true });
        } else {
          await fs.copyFile(sourcePath, destPath);
        }
      }
      
      // Remove the public directory
      await fs.rm('dist/public', { recursive: true });
    }

    // Verify static build
    const distFiles = await fs.readdir('dist');
    const hasIndex = distFiles.includes('index.html');
    
    if (hasIndex) {
      console.log('✓ Static build successful');
      console.log('Files:', distFiles.join(', '));
    } else {
      throw new Error('index.html not found in dist/');
    }

  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

buildStatic();