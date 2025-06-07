# Replit Deployment Configuration Guide

## Current Issue
The application is configured for static deployment but contains:
- Express.js server (backend)
- React frontend with server-side routing
- Database connections
- Session management

This requires **Autoscale deployment** instead of static deployment.

## Required Changes

### 1. Deployment Target
Change from `static` to `autoscale` in .replit configuration

### 2. Build Process
The current build outputs to `dist/public` but deployment expects `dist/`. 
- Frontend builds to: `dist/public/`
- Server builds to: `dist/index.js`
- Deployment expects: `dist/index.html` and `dist/index.js`

### 3. File Structure After Build
```
dist/
├── index.html      (frontend entry - needs to be moved from dist/public/)
├── index.js        (server entry)
├── assets/         (frontend assets - needs to be moved from dist/public/)
└── other files...
```

### 4. Deployment Settings
```toml
[deployment]
deploymentTarget = "autoscale"
build = ["npm", "run", "build"]
publicDir = "dist"
run = ["npm", "start"]
```

## Manual Fix Instructions
1. Click "Deploy" in Replit
2. Change deployment type from "Static" to "Autoscale"
3. Set build command: `npm run build`
4. Set run command: `npm start`
5. Set public directory: `dist`

## Alternative Build Script
Use the custom build script that moves files correctly:
```bash
node build-for-deployment.js
```

This handles the file movement from `dist/public/` to `dist/` automatically.