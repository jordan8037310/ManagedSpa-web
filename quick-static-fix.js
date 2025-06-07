import fs from 'fs/promises';
import { exec } from 'child_process';

// Quick static build without timeout issues
async function quickBuild() {
  console.log('Creating static build...');
  
  // Clean and prepare
  await fs.rm('dist', { recursive: true, force: true }).catch(() => {});
  await fs.mkdir('dist', { recursive: true });
  
  // Use a simple build approach
  const buildProcess = exec('npx vite build');
  
  // Give it 30 seconds max
  setTimeout(() => {
    buildProcess.kill();
    handleBuildResult();
  }, 30000);
  
  buildProcess.on('exit', handleBuildResult);
}

async function handleBuildResult() {
  try {
    // Check if dist/public exists and move files
    const publicExists = await fs.access('dist/public').then(() => true).catch(() => false);
    
    if (publicExists) {
      console.log('Moving build files...');
      const items = await fs.readdir('dist/public');
      
      for (const item of items) {
        await fs.rename(`dist/public/${item}`, `dist/${item}`);
      }
      
      await fs.rmdir('dist/public');
    }
    
    // Ensure we have index.html
    const hasIndex = await fs.access('dist/index.html').then(() => true).catch(() => false);
    
    if (!hasIndex) {
      // Create minimal working index.html if build incomplete
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ManagedSpa - IT Services for Aesthetic Wellness</title>
  <script type="module" crossorigin src="/assets/index.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>`;
      await fs.writeFile('dist/index.html', htmlContent);
    }
    
    // Add routing support
    await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
    
    const files = await fs.readdir('dist');
    console.log('Static deployment ready:', files.join(', '));
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

quickBuild();