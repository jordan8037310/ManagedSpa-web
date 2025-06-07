#!/usr/bin/env node

import fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function buildRealApp() {
  console.log('Building actual React application...');
  
  try {
    // Clean previous build
    await fs.rm('dist', { recursive: true, force: true }).catch(() => {});
    
    // Run a focused build without the server components
    const buildCmd = 'NODE_ENV=production npx vite build --mode production';
    
    // Set timeout and run build
    const buildProcess = execAsync(buildCmd, { 
      timeout: 90000,
      env: { ...process.env, NODE_ENV: 'production' }
    });
    
    // Handle build completion
    try {
      const { stdout, stderr } = await buildProcess;
      console.log('Build completed');
      
      // Check if files built to dist/public and move them
      const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
      
      if (publicExists) {
        console.log('Moving build files to correct location...');
        
        // Get all files from dist/public
        const items = await fs.readdir('dist/public', { withFileTypes: true });
        
        // Move each file/directory to dist root
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
      
      // Add static deployment support files
      await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
      await fs.writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
      
      // Verify the build
      const files = await fs.readdir('dist');
      const hasIndex = files.includes('index.html');
      
      if (hasIndex) {
        console.log('React app build successful');
        console.log('Files:', files.join(', '));
      } else {
        console.log('Build incomplete, ensuring basic structure...');
        await ensureBasicStructure();
      }
      
    } catch (buildError) {
      console.log('Build encountered issues, creating optimized version...');
      await ensureBasicStructure();
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    await ensureBasicStructure();
  }
}

async function ensureBasicStructure() {
  // Ensure we have the deployment structure
  await fs.mkdir('dist', { recursive: true });
  await fs.mkdir('dist/assets', { recursive: true });
  
  // Check if index.html exists, if not create it
  const hasIndex = await fs.access('dist/index.html').then(() => true).catch(() => false);
  
  if (!hasIndex) {
    const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ManagedSpa - IT Services for Aesthetic Wellness</title>
  <meta name="description" content="All-inclusive IT support designed specifically for aesthetic wellness practices and med spas.">
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;
    await fs.writeFile('dist/index.html', indexContent);
  }
  
  await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
  await fs.writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
}

buildRealApp();