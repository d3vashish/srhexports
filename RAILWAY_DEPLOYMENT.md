# Railway Deployment Guide for SRH Global Export

Railway is a great platform for deploying applications with Bun support. Here's a complete guide.

## Why Railway?

✅ **Bun Support**: Railway supports Bun runtime natively  
✅ **Easy Setup**: Simple deployment from GitHub  
✅ **Automatic Deploys**: Deploys on every git push  
✅ **Environment Variables**: Easy to manage  
✅ **Free Tier**: Generous free tier for testing  
✅ **Custom Domains**: Free SSL certificates  

## Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Make sure your code is on GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Create a `.railwayignore` file** (optional, similar to .gitignore):
   ```
   node_modules
   .DS_Store
   dist
   .env
   .nitro
   .tanstack
   .output
   ```

### Step 2: Deploy on Railway

1. **Sign up/Login**:
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub (recommended for easy repo access)

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect the configuration

3. **Configure Build Settings**:
   - Railway will use `railway.json` automatically
   - Or manually set:
     - **Build Command**: `bun install && bun run build`
     - **Start Command**: `bun run start`
     - **Root Directory**: `/` (default)

4. **Add Environment Variables**:
   - Go to your project → "Variables" tab
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID=service_dnq358a
     VITE_EMAILJS_TEMPLATE_ID=template_tplyqzl
     VITE_EMAILJS_PUBLIC_KEY=LUskdloaMEE1IxgeM
     PORT=3000
     ```
   - Railway will automatically set `PORT`, but you can override it

5. **Deploy**:
   - Railway will automatically start building
   - Watch the build logs in real-time
   - Once deployed, you'll get a URL like: `https://your-app.up.railway.app`

### Step 3: Configure Custom Domain (Optional)

1. Go to your project → "Settings" → "Domains"
2. Click "Generate Domain" or "Add Custom Domain"
3. For custom domain:
   - Add your domain (e.g., `srhglobalexport.com`)
   - Update DNS records as instructed
   - Railway provides free SSL certificates

## Railway Configuration Files

### `railway.json` (Already Created)

This file tells Railway how to build and run your app:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "bun run build"
  },
  "deploy": {
    "startCommand": "bun run start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Alternative: Use `railway.toml` (if needed)

If `railway.json` doesn't work, create `railway.toml`:

```toml
[build]
builder = "NIXPACKS"
buildCommand = "bun install && bun run build"

[deploy]
startCommand = "bun run start"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

## Environment Variables in Railway

Railway makes it easy to manage environment variables:

1. **Via Dashboard**:
   - Project → Variables tab
   - Click "New Variable"
   - Add name and value
   - Variables are automatically available to your app

2. **Via CLI** (optional):
   ```bash
   npm install -g @railway/cli
   railway login
   railway variables set VITE_EMAILJS_SERVICE_ID=service_dnq358a
   railway variables set VITE_EMAILJS_TEMPLATE_ID=template_tplyqzl
   railway variables set VITE_EMAILJS_PUBLIC_KEY=LUskdloaMEE1IxgeM
   ```

## Monitoring & Logs

- **View Logs**: Project → Deployments → Click on deployment → View logs
- **Metrics**: Railway provides CPU, Memory, and Network metrics
- **Alerts**: Set up alerts for deployment failures

## Troubleshooting

### Build Fails

1. **Check Build Logs**:
   - Go to your deployment → View logs
   - Look for error messages

2. **Common Issues**:
   - **Bun not found**: Railway should auto-detect Bun, but if not:
     - Add `BUN_VERSION=1.3.6` to environment variables
   - **Build command fails**: Check that `bun run build` works locally
   - **Missing dependencies**: Ensure all dependencies are in `package.json`

### App Crashes After Deploy

1. **Check Runtime Logs**:
   - View logs in Railway dashboard
   - Look for error messages

2. **Common Issues**:
   - **Port binding**: Railway sets `PORT` automatically, make sure your app uses `process.env.PORT`
   - **Environment variables**: Verify all variables are set correctly
   - **Memory limits**: Free tier has limits, check if you're hitting them

### Environment Variables Not Working

1. **Verify Variables**:
   - Check Variables tab in Railway
   - Make sure they're spelled correctly (case-sensitive)
   - Ensure `VITE_` prefix is included for client-side variables

2. **Redeploy**:
   - After adding/changing variables, Railway auto-redeploys
   - Or manually trigger redeploy

## Railway Pricing

- **Free Tier**: 
  - $5 credit/month
  - 500 hours of usage
  - Perfect for small projects
  
- **Pro Plan**: 
  - $20/month
  - More resources
  - Better performance

## Best Practices

1. **Use Railway's GitHub Integration**: Automatic deploys on push
2. **Set up Preview Deployments**: Test before production
3. **Monitor Usage**: Keep an eye on your usage in the dashboard
4. **Use Environment Variables**: Never commit secrets to Git
5. **Set up Custom Domain**: Looks more professional

## Quick Commands

```bash
# Install Railway CLI (optional)
npm install -g @railway/cli

# Login
railway login

# Link to project
railway link

# View logs
railway logs

# Open in browser
railway open

# Deploy
railway up
```

## Next Steps After Deployment

1. ✅ Test your deployed site
2. ✅ Verify contact form works
3. ✅ Set up custom domain (optional)
4. ✅ Configure monitoring/alerts
5. ✅ Share your live URL!

## Support

- Railway Docs: https://docs.railway.app
- Railway Discord: https://discord.gg/railway
- Railway Status: https://status.railway.app
