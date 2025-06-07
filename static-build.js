#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';

const execAsync = promisify(exec);

async function createStaticBuild() {
  console.log('Creating static build...');
  
  try {
    // Clean dist directory
    await fs.rm('dist', { recursive: true, force: true }).catch(() => {});
    
    // Run vite build from root (which builds client to dist/public)
    console.log('Building frontend...');
    const { stdout, stderr } = await execAsync('npx vite build');
    
    // Move files from dist/public to dist
    const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
    
    if (publicExists) {
      console.log('Moving files to deployment location...');
      
      // Copy all contents from dist/public to dist
      const items = await fs.readdir('dist/public', { withFileTypes: true });
      
      for (const item of items) {
        const src = `dist/public/${item.name}`;
        const dest = `dist/${item.name}`;
        
        if (item.isDirectory()) {
          await fs.cp(src, dest, { recursive: true });
        } else {
          await fs.copyFile(src, dest);
        }
      }
      
      // Remove the public directory
      await fs.rm('dist/public', { recursive: true });
    }
    
    // Create routing file for static deployment
    await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
    
    // Verify build
    const files = await fs.readdir('dist');
    const hasIndex = files.includes('index.html');
    
    if (hasIndex) {
      console.log('✅ Static deployment ready');
      console.log('Files:', files.join(', '));
    } else {
      throw new Error('index.html not found');
    }
    
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

createStaticBuild();