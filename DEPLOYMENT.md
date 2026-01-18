# Deployment Guide for SRH Global Export Website

This guide covers deploying your TanStack Start application to various platforms.

## Environment Variables Required

Make sure to set these environment variables in your deployment platform:

- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS Service ID (e.g., `service_dnq358a`)
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS Template ID (e.g., `template_tplyqzl`)
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS Public Key (e.g., `LUskdloaMEE1IxgeM`)

## Deployment Options

### Option 1: Vercel (Recommended for SSR)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Configure:
     - **Framework Preset:** Other
     - **Build Command:** `bun run build`
     - **Output Directory:** `dist/client`
     - **Install Command:** `bun install`
   - Add environment variables:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```

### Option 2: Netlify

1. **Via Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings (auto-detected from `netlify.toml`):
     - Build command: `bun run build`
     - Publish directory: `dist/client`
   - Add environment variables in Site settings → Environment variables
   - Deploy

2. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect the configuration from `railway.json`
5. Add environment variables in the Variables tab
6. Deploy

### Option 4: Render

1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your Git repository
4. Configure:
   - **Build Command:** `bun install && bun run build`
   - **Start Command:** `bun run start`
   - **Environment:** Node
5. Add environment variables
6. Deploy

### Option 5: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Build settings:
   - **Build command:** `bun run build`
   - **Build output directory:** `dist/client`
4. Add environment variables in Settings → Environment variables
5. Deploy

## Building Locally Before Deployment

Test the production build locally:

```bash
# Install dependencies
bun install

# Build for production
bun run build

# Preview the build
bun run serve
```

## Important Notes

1. **Environment Variables**: Make sure all EmailJS credentials are set in your deployment platform's environment variables section.

2. **Build Output**: The build creates a `dist/client` directory with static files and a `dist/server` directory for SSR.

3. **Bun Runtime**: Some platforms may not support Bun natively. You may need to:
   - Use Node.js instead (change `bun` commands to `npm` or `node`)
   - Or use a platform that supports Bun (like Railway)

4. **Custom Domain**: After deployment, you can add a custom domain in your platform's settings.

## Troubleshooting

- **Build fails**: Check that all dependencies are in `package.json`
- **Environment variables not working**: Ensure they're prefixed with `VITE_` for client-side access
- **404 errors**: Check that redirect rules are configured correctly for SPA routing
