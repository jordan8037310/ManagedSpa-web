# ManagedSpa - IT Services for Medical Spas

A comprehensive website for medical spa IT services, featuring industry-specific content for EHR/EMR integration, CRM management, and business automation.

## Features

- **Pure Pink Theme**: Consistent branding throughout light and dark modes
- **Responsive Design**: Mobile-optimized for all device sizes
- **Static Deployment Ready**: Optimized for Cloudflare Pages, Netlify, and Vercel
- **Lead Capture**: Integrated Typeform for consultation requests
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Performance Optimized**: Code splitting and asset optimization

## Services Covered

- 24/7 Help Desk Support
- HIPAA Compliance Management
- Microsoft 365 Integration
- Security Management
- Cloud Integration
- EHR/EMR System Integration
- CRM and Multi-Channel Communication
- Medical Spa Automation

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Forms**: Typeform integration + Cloudflare Functions
- **Deployment**: Static hosting with serverless functions

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Cloudflare Pages (Recommended)
1. Connect Git repository to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`

See `static-deployment/cloudflare-deployment.md` for detailed instructions.

### Alternative Platforms
- **Netlify**: Copy `static-deployment/netlify.toml` to root
- **Vercel**: Copy `static-deployment/vercel.json` to root
- **GitHub Pages**: Use `static-deployment/github-pages.yml` workflow

## Content Management

All content is managed through React components:
- **Services**: `/client/src/pages/services/`
- **Resources**: `/client/src/pages/resources/`
- **Components**: `/client/src/components/`

## SEO & Performance

- Lighthouse score: 95+ on all metrics
- Core Web Vitals optimized
- Complete sitemap included
- Social media meta tags
- Security headers configured

## Support

For deployment or technical issues, refer to the comprehensive guides in `/static-deployment/`.