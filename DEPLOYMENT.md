# Raise Hive - Deployment Guide

## 🚀 Deploying to Netlify

This guide will help you deploy Raise Hive to Netlify with serverless functions.

### Prerequisites

- GitHub account
- Netlify account (free tier works)
- MongoDB Atlas account (for database)
- Ethereum RPC URL (Infura, Alchemy, or Ankr)
- Gmail account (for email functionality)

---

## Step 1: Prepare Your Repository

1. **Push your code to GitHub**:
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

---

## Step 2: Connect to Netlify

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your **raisehive** repository

---

## Step 3: Configure Build Settings

### Build Settings:
- **Base directory**: Leave empty
- **Build command**: `cd client && npm install && npm run build`
- **Publish directory**: `client/dist`
- **Functions directory**: `netlify/functions`

---

## Step 4: Set Environment Variables

Go to **Site settings** → **Build & deploy** → **Environment** → **Environment variables**

Add the following variables:

### MongoDB
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/raisehive
```

### Email (Gmail)
```
EMAIL_USER=hello@raisehive.io
EMAIL_PASS=your-gmail-app-password
```

**Note**: Generate Gmail App Password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"

### Blockchain
```
ETHEREUM_RPC_URL=https://rpc.ankr.com/eth
CONTRACT_ADDRESS=0xYourDeployedContractAddress
CONTRACT_ABI=["your","contract","abi","array"]
```

### Thirdweb
```
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
```

### API URL
```
VITE_API_URL=/.netlify/functions
```

---

## Step 5: Deploy

1. Click **"Deploy site"**
2. Wait for build to complete (3-5 minutes)
3. Your site will be live at: `https://random-name-123.netlify.app`

---

## Step 6: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `raisehive.io`
4. Follow DNS configuration instructions
5. Netlify will automatically provision SSL certificate

---

## 📁 Project Structure for Netlify

```
raisehive/
├── netlify/
│   └── functions/          # Serverless functions
│       ├── subscribe.js    # Email subscription
│       ├── send-email.js   # Contact form
│       ├── get-campaigns.js # Blockchain data
│       └── package.json    # Function dependencies
├── client/
│   ├── src/
│   ├── public/
│   ├── dist/              # Build output (generated)
│   └── package.json
├── netlify.toml           # Netlify configuration
└── .env.example           # Environment variables template
```

---

## 🔧 Serverless Functions

### Available Endpoints:

1. **Subscribe to Newsletter**
   - Endpoint: `/.netlify/functions/subscribe`
   - Method: POST
   - Body: `{ "email": "user@example.com" }`

2. **Send Contact Email**
   - Endpoint: `/.netlify/functions/send-email`
   - Method: POST
   - Body: `{ "subject": "...", "message": "..." }`

3. **Get Campaigns**
   - Endpoint: `/.netlify/functions/get-campaigns`
   - Method: GET
   - Returns: List of blockchain campaigns

### Usage in React:

```javascript
// Subscribe to newsletter
const response = await fetch('/.netlify/functions/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com' })
});

// Get campaigns
const campaigns = await fetch('/.netlify/functions/get-campaigns')
  .then(res => res.json());
```

---

## 🔍 Troubleshooting

### Build Fails

**Check build logs**:
- Go to **Deploys** → Click on failed deploy → View logs
- Common issues:
  - Missing dependencies: Add to `client/package.json`
  - Build command error: Check `netlify.toml`
  - Environment variables: Verify all are set

### Functions Not Working

**Check function logs**:
- Go to **Functions** → Click function → View logs
- Common issues:
  - Missing environment variables
  - MongoDB connection timeout (check IP whitelist)
  - Package dependencies: Add to `netlify/functions/package.json`

### 404 Errors on Routes

**Solution**: Already configured in `netlify.toml`
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### CORS Errors

**Solution**: Functions already include CORS headers
```javascript
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
};
```

---

## 📊 MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster
3. **Database Access**: Create user with password
4. **Network Access**: Add `0.0.0.0/0` (allow from anywhere)
5. Get connection string: **Connect** → **Connect your application**
6. Replace `<password>` and `<dbname>` in connection string

---

## 🔐 Security Best Practices

1. **Never commit `.env` files**
2. **Use environment variables** for all secrets
3. **Whitelist domains** in production (update CORS)
4. **Enable MongoDB IP whitelist** (optional, for extra security)
5. **Use Gmail App Passwords** (not your actual password)
6. **Keep dependencies updated**: `npm audit fix`

---

## 📈 Monitoring

### Netlify Analytics
- Go to **Analytics** tab
- View page views, bandwidth, forms

### Function Logs
- Go to **Functions** tab
- Click on function name
- View real-time logs

### MongoDB Monitoring
- MongoDB Atlas dashboard
- View connections, operations, storage

---

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

Netlify will:
1. Detect the push
2. Run build command
3. Deploy new version
4. Update live site (2-3 minutes)

---

## 💰 Cost Estimate

### Free Tier Includes:
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ 125k serverless function requests/month
- ✅ Automatic HTTPS
- ✅ Custom domain
- ✅ Continuous deployment

### Paid Plans (if needed):
- **Pro**: $19/month (1TB bandwidth, unlimited builds)
- **Business**: $99/month (team features)

---

## 🎉 Success!

Your Raise Hive platform is now live on Netlify!

**Next Steps**:
1. Test all functionality
2. Set up custom domain
3. Monitor function logs
4. Share with users

**Support**:
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Community](https://answers.netlify.com/)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)

---

**Made with ❤️ for creators worldwide**
