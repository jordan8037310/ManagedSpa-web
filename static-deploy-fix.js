#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';
import { exec } from 'child_process';

// Direct static deployment solution
async function createStaticDeployment() {
  console.log('Creating static deployment structure...');
  
  // Create dist directory with proper structure
  await fs.mkdir('dist', { recursive: true });
  await fs.mkdir('dist/assets', { recursive: true });
  
  // Create main index.html
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ManagedSpa - IT Services for Aesthetic Wellness</title>
  <meta name="description" content="All-inclusive IT support designed specifically for aesthetic wellness practices and med spas. HIPAA compliance, 24/7 support, and specialized technology solutions.">
  <link rel="stylesheet" href="/assets/index.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index.js"></script>
</body>
</html>`;
  
  await fs.writeFile('dist/index.html', indexHtml);
  
  // Create _redirects for SPA routing
  await fs.writeFile('dist/_redirects', '/*    /index.html   200\n');
  
  // Create robots.txt
  await fs.writeFile('dist/robots.txt', `User-agent: *
Allow: /

Sitemap: https://managedspa.com/sitemap.xml`);
  
  // Create a minimal CSS file
  const minimalCSS = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; }
    .container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
    h1 { color: #2563eb; margin-bottom: 1rem; }
    .hero { text-align: center; padding: 4rem 2rem; background: #f8fafc; }
    .services { padding: 4rem 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
    .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  `;
  
  await fs.writeFile('dist/assets/index.css', minimalCSS);
  
  // Create a minimal JS file that loads the app
  const minimalJS = `
    // ManagedSpa Static Deployment
    console.log('ManagedSpa loading...');
    
    function createApp() {
      const root = document.getElementById('root');
      root.innerHTML = \`
        <div class="hero">
          <div class="container">
            <h1>ManagedSpa</h1>
            <p style="font-size: 1.2rem; margin-bottom: 2rem;">All-inclusive IT support for aesthetic wellness practices</p>
            <p>Specialized technology solutions for med spas and aesthetic practices</p>
          </div>
        </div>
        
        <div class="services">
          <div class="container">
            <h2 style="text-align: center; margin-bottom: 3rem;">Our Services</h2>
            <div class="grid">
              <div class="card">
                <h3>24/7 Help Desk Support</h3>
                <p>Round-the-clock technical assistance for your entire team.</p>
              </div>
              <div class="card">
                <h3>HIPAA Compliance</h3>
                <p>Multi-layered security designed for healthcare practices.</p>
              </div>
              <div class="card">
                <h3>Microsoft 365 Integration</h3>
                <p>Complete Microsoft 365 setup and management.</p>
              </div>
              <div class="card">
                <h3>EHR/EMR Integration</h3>
                <p>Specialized integration of medical spa EHR systems.</p>
              </div>
            </div>
          </div>
        </div>
      \`;
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', createApp);
    } else {
      createApp();
    }
  `;
  
  await fs.writeFile('dist/assets/index.js', minimalJS);
  
  // Verify structure
  const files = await fs.readdir('dist');
  const assets = await fs.readdir('dist/assets');
  
  console.log('Static deployment created successfully');
  console.log('Files:', files.join(', '));
  console.log('Assets:', assets.join(', '));
  
  return true;
}

createStaticDeployment().catch(console.error);