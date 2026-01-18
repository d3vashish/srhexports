# Render Deployment Guide for SRH Global Export

Render is a cloud platform that makes it easy to deploy web applications. Here's a complete guide for deploying your TanStack Start app.

## Why Render?

✅ **Free Tier Available**: Free tier for static sites and web services  
✅ **Easy Setup**: Simple deployment from GitHub or direct upload  
✅ **Automatic SSL**: Free SSL certificates  
✅ **Custom Domains**: Easy domain setup  
✅ **Auto-Deploy**: Deploys on every git push  
✅ **Environment Variables**: Easy to manage  

## Step-by-Step Deployment

### Step 1: Prepare Your Code

**Option A: Using GitHub (Recommended)**
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Ready for Render deployment"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

**Option B: Direct Upload**
- Render supports direct GitHub connection (no manual upload needed)
- Just connect your GitHub account

### Step 2: Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub (recommended) or email
3. Verify your email if needed

### Step 3: Create New Web Service

1. **Click "New +"** in the dashboard
2. **Select "Web Service"**
3. **Connect Repository**:
   - If using GitHub: Click "Connect account" → Select your repository
   - Render will auto-detect your project

### Step 4: Configure Build Settings

**For TanStack Start with Bun:**

1. **Basic Settings**:
   - **Name**: `srh-global-export` (or your preferred name)
   - **Region**: Choose closest to your users (e.g., `Oregon (US West)`)
   - **Branch**: `main` (or your default branch)
   - **Root Directory**: `/` (leave empty if root)

2. **Build & Deploy**:
   - **Environment**: `Bun` (Render supports Bun!)
   - **Build Command**: `bun install && bun run build:node`
   - **Start Command**: `bun run serve` (for static site) or `bun run start` (for web service)

**Important**: Since Render uses Node.js (not Bun), we need to:

**Option 1: Use Node.js build** (Recommended)
- Change build command to use Node.js compatible commands
- Update start command to use Node.js

**Option 2: Use Static Site** (Easier)
- Deploy as a static site
- Use `build:node` command
- Serve static files only

### Step 5: Add Environment Variables

1. In your Render service dashboard
2. Go to **"Environment"** tab
3. Click **"Add Environment Variable"**
4. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID = service_dnq358a
   VITE_EMAILJS_TEMPLATE_ID = template_tplyqzl
   VITE_EMAILJS_PUBLIC_KEY = LUskdloaMEE1IxgeM
   NODE_ENV = production
   PORT = 10000
   ```
   (Render sets PORT automatically, but you can override)

### Step 6: Deploy

1. Click **"Create Web Service"**
2. Render will start building
3. Watch the build logs in real-time
4. Once deployed, you'll get a URL like: `https://srh-global-export.onrender.com`

## Configuration Files

### Create `render.yaml` (Optional but Recommended)

Create this file in your project root:

```yaml
services:
  - type: web
    name: srh-global-export
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm run start
    envVars:
      - key: VITE_EMAILJS_SERVICE_ID
        value: service_dnq358a
      - key: VITE_EMAILJS_TEMPLATE_ID
        value: template_tplyqzl
      - key: VITE_EMAILJS_PUBLIC_KEY
        value: LUskdloaMEE1IxgeM
      - key: NODE_ENV
        value: production
```

### Update `package.json` for Node.js Compatibility

Since Render uses Node.js (not Bun), you may need to add Node.js start script:

```json
{
  "scripts": {
    "start:node": "node dist/server/server.js",
    "start": "bun run server.ts"
  }
}
```

## Deployment Options

### Option 1: Static Site Deployment (Easier)

If you want a simpler deployment:

1. **Create Static Site**:
   - Click "New +" → "Static Site"
   - Connect your repository
   - **Build Command**: `npm install && npm run build:node`
   - **Publish Directory**: `dist/client`

2. **Add Environment Variables**:
   - Static sites can use environment variables
   - Add your EmailJS variables

3. **Deploy**:
   - Render will build and deploy
   - Faster and simpler than web service

### Option 2: Web Service (Full SSR)

For full server-side rendering:

1. **Create Web Service** (as described above)
2. **Use Node.js runtime**:
   - Build: `npm install && npm run build`
   - Start: Need to create a Node.js compatible server

## Important Notes for TanStack Start

### Since Render Uses Node.js (Not Bun)

You have two options:

**Option A: Use Bun (Recommended)**
- Render supports Bun natively!
- Use `bun install && bun run build:node`
- No conversion needed

**Option B: Use Static Build**
- Use `build:node` command
- Deploy as static site
- Simpler and works perfectly for your contact form

### Recommended: Static Site Deployment

For your use case (contact form with EmailJS), static site is perfect:

1. **Create Static Site** in Render
2. **Build Command**: `npm install && npm run build:node`
3. **Publish Directory**: `dist/client`
4. **Environment Variables**: Add EmailJS variables
5. **Deploy**

The contact form will work perfectly because EmailJS runs client-side!

## Environment Variables Setup

In Render dashboard:

1. Go to your service
2. Click **"Environment"** tab
3. Add variables:
   - `VITE_EMAILJS_SERVICE_ID` = `service_dnq358a`
   - `VITE_EMAILJS_TEMPLATE_ID` = `template_tplyqzl`
   - `VITE_EMAILJS_PUBLIC_KEY` = `LUskdloaMEE1IxgeM`

**Important**: Variables prefixed with `VITE_` are available in the browser.

## Custom Domain Setup

1. Go to your service → **"Settings"**
2. Scroll to **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Enter your domain (e.g., `srhglobalexport.com`)
5. Update DNS records as instructed:
   - Add CNAME record pointing to Render's URL
6. Render provides free SSL automatically

## Monitoring & Logs

- **View Logs**: Service → "Logs" tab
- **Metrics**: CPU, Memory, Network usage
- **Deployments**: View deployment history
- **Alerts**: Set up email alerts for failures

## Render Pricing

- **Free Tier**:
  - Static sites: Free forever
  - Web services: Free tier available (spins down after inactivity)
  - 750 hours/month free

- **Starter Plan**: $7/month
  - Always-on web services
  - Better performance

## Troubleshooting

### Build Fails

1. **Check Build Logs**:
   - Service → Logs tab
   - Look for error messages

2. **Common Issues**:
   - **Bun not found**: Use Node.js commands instead
   - **Build command fails**: Test locally first: `npm run build`
   - **Missing dependencies**: Check `package.json`

### Environment Variables Not Working

1. **Verify Variables**:
   - Check Environment tab
   - Make sure `VITE_` prefix is included
   - Redeploy after adding variables

2. **Redeploy**:
   - After changing variables, trigger manual deploy
   - Or push a new commit

### App Not Loading

1. **Check Start Command**:
   - Verify start command is correct
   - Check logs for errors

2. **Check Port**:
   - Render sets PORT automatically
   - Make sure your app uses `process.env.PORT`

## Quick Deployment Checklist

- [ ] Code pushed to GitHub (or ready to connect)
- [ ] Render account created
- [ ] New Web Service or Static Site created
- [ ] Build command configured
- [ ] Start command configured (for web service)
- [ ] Environment variables added
- [ ] Deployed successfully
- [ ] Tested contact form
- [ ] Custom domain configured (optional)

## Recommended Setup for Your Project

**Best Option: Static Site**

1. **Create Static Site** in Render
2. **Build Command**: `npm install && npm run build:node`
3. **Publish Directory**: `dist/client`
4. **Environment Variables**: Add EmailJS variables
5. **Deploy**

This is the simplest and works perfectly for your contact form!

## Support

- Render Docs: https://render.com/docs
- Render Status: https://status.render.com
- Render Community: https://community.render.com
