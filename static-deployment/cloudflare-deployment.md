# Cloudflare Pages Deployment - Quick Setup

## Step 1: Connect Repository
1. Go to Cloudflare Dashboard → Pages
2. Click "Connect to Git"
3. Select your ManagedSpa repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

## Step 2: Environment Configuration
No environment variables required for basic deployment.

## Step 3: Custom Domain (Optional)
1. Add your domain in Pages settings
2. Configure DNS records as shown
3. SSL certificate will be automatically provisioned

## Step 4: Form Handling
The contact form will work automatically using the included Cloudflare Function at `/functions/api/consultation.js`.

## Build Optimization
The application includes:
- Code splitting for faster loading
- Asset optimization
- SPA routing support via `_redirects`
- SEO-friendly sitemap and robots.txt

## Post-Deployment
- Forms submit to `/api/consultation` endpoint
- Typeform integration works independently
- All static assets served via Cloudflare CDN
- Automatic HTTPS and global distribution

## Performance Features
- Brotli compression enabled
- Asset caching (1 year for static files)
- HTTP/2 and HTTP/3 support
- Global edge network distribution