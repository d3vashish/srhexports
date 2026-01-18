# Railway Direct Folder Upload Guide

You can deploy directly from your local folder without GitHub using Railway CLI.

## Method 1: Railway CLI (Recommended)

### Step 1: Install Railway CLI

```bash
# Using npm
npm install -g @railway/cli

# Or using bun
bun add -g @railway/cli
```

### Step 2: Login to Railway

```bash
railway login
```
This will open your browser to authenticate.

### Step 3: Create New Project

```bash
# Navigate to your project folder (if not already there)
cd C:\Users\nsonk\Downloads\srh

# Initialize Railway project
railway init
```

This will:
- Create a new project on Railway
- Link your local folder to Railway
- Create a `.railway` folder (don't commit this)

### Step 4: Add Environment Variables

```bash
railway variables set VITE_EMAILJS_SERVICE_ID=service_dnq358a
railway variables set VITE_EMAILJS_TEMPLATE_ID=template_tplyqzl
railway variables set VITE_EMAILJS_PUBLIC_KEY=LUskdloaMEE1IxgeM
```

Or add them via the Railway dashboard:
1. Go to railway.app
2. Open your project
3. Go to "Variables" tab
4. Add each variable manually

### Step 5: Deploy

```bash
railway up
```

This will:
- Upload your folder to Railway
- Build your application
- Deploy it
- Give you a live URL

### Step 6: View Your Site

```bash
railway open
```

Or check the URL in the Railway dashboard.

## Method 2: Railway Dashboard Upload

Railway doesn't support direct folder upload via the web dashboard, but you can:

1. **Create a ZIP file** of your project folder
2. **Use Railway CLI** to upload it (see Method 1)
3. **Or use GitHub** (easiest for future updates)

## Method 3: Using Railway's Web Interface (Alternative)

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Empty Project"
4. Railway will give you deployment options
5. Use the Railway CLI commands shown in the dashboard

## Quick Commands Reference

```bash
# Login
railway login

# Create/Initialize project
railway init

# Set environment variables
railway variables set KEY=value

# Deploy
railway up

# View logs
railway logs

# Open in browser
railway open

# View project info
railway status

# Link to existing project
railway link
```

## Important Notes

1. **Don't upload `.env` file**: Environment variables should be set in Railway dashboard/CLI, not uploaded
2. **Don't upload `node_modules`**: Railway will install dependencies automatically
3. **Make sure `.gitignore` is set up**: To avoid uploading unnecessary files
4. **First deploy might take 5-10 minutes**: Railway needs to build everything

## Troubleshooting

### CLI not found
```bash
# Make sure Railway CLI is installed globally
npm list -g @railway/cli

# If not installed, install it:
npm install -g @railway/cli
```

### Build fails
- Check logs: `railway logs`
- Make sure all dependencies are in `package.json`
- Verify `railway.json` exists and is correct

### Environment variables not working
- Verify variables are set: `railway variables`
- Make sure they're prefixed with `VITE_` for client-side access
- Redeploy after adding variables: `railway up`

## After First Deployment

- Railway will give you a URL like: `https://your-app.up.railway.app`
- You can set up a custom domain in Railway dashboard
- Future updates: Just run `railway up` again
