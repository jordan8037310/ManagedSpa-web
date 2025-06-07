#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function buildForStaticDeployment() {
  console.log('Building for static deployment...');
  
  try {
    // Clean previous builds
    await fs.rm('dist', { recursive: true, force: true }).catch(() => {});
    
    // Build the frontend from the client directory with correct paths
    console.log('Building frontend...');
    const buildCmd = 'cd client && npx vite build --outDir ../dist --emptyOutDir';
    const { stdout, stderr } = await execAsync(buildCmd);
    
    if (stderr && !stderr.includes('Browserslist')) {
      console.warn('Build warnings:', stderr);
    }
    
    // Verify the build
    const distFiles = await fs.readdir('dist').catch(() => []);
    const hasIndex = distFiles.includes('index.html');
    
    if (hasIndex) {
      console.log('✓ Static build successful');
      console.log('Files created:', distFiles.join(', '));
      
      // Create _redirects file for SPA routing
      await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
      console.log('✓ Created _redirects for SPA routing');
      
    } else {
      throw new Error('Build failed - index.html not found');
    }
    
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

buildForStaticDeployment();