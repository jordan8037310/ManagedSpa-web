#!/usr/bin/env node

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function buildForDeployment() {
  console.log('🚀 Building ManagedSpa for deployment...');
  
  try {
    // Clean previous builds
    console.log('🧹 Cleaning previous builds...');
    try {
      await fs.rm('dist', { recursive: true, force: true });
    } catch (e) {
      // Directory might not exist
    }

    // Build frontend only first
    console.log('🏗️ Building frontend...');
    const { stdout, stderr } = await execAsync('npx vite build');
    console.log(stdout);
    if (stderr) console.warn(stderr);

    // Check if frontend built to dist/public
    const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
    
    if (publicExists) {
      console.log('📁 Moving frontend files to deployment location...');
      // Copy files from dist/public to dist root
      const files = await fs.readdir('dist/public');
      for (const file of files) {
        await fs.copyFile(
          path.join('dist/public', file),
          path.join('dist', file)
        );
      }
      // Remove the public directory
      await fs.rm('dist/public', { recursive: true });
    }

    // Build server
    console.log('🔧 Building server...');
    const serverBuild = await execAsync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist');
    console.log(serverBuild.stdout);
    if (serverBuild.stderr) console.warn(serverBuild.stderr);

    // Verify build output
    const indexExists = await fs.access('dist/index.html').then(() => true).catch(() => false);
    const serverExists = await fs.access('dist/index.js').then(() => true).catch(() => false);

    if (indexExists && serverExists) {
      console.log('✅ Build successful!');
      console.log('📊 Deployment files ready in dist/');
      
      const files = await fs.readdir('dist');
      console.log('📁 Files created:', files.join(', '));
    } else {
      console.log('❌ Build verification failed!');
      if (!indexExists) console.log('  - Missing index.html');
      if (!serverExists) console.log('  - Missing server index.js');
    }

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

buildForDeployment();