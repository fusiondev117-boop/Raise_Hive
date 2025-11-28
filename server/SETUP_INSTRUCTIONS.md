# Quick Setup Instructions

## 🚀 Get Started in 3 Steps

### Step 1: Get Your Neon Database (2 minutes)

1. Go to [https://neon.tech](https://neon.tech)
2. Sign up (free, no credit card)
3. Create a project named "raisehive"
4. Copy your connection string (looks like):
   ```
   postgresql://user:pass@ep-xxx.region.aws.neon.tech/raisehive?sslmode=require
   ```

### Step 2: Configure Environment

1. Open `server/.env`
2. Replace the `DATABASE_URL` with your Neon connection string:
   ```env
   DATABASE_URL=postgresql://your-actual-connection-string
   ```

### Step 3: Install & Run

```bash
# Install dependencies
npm install

# Create database tables
npm run migrate

# Start the server
npm start
```

## ✅ You're Done!

You should see:
```
✅ Connected to Neon PostgreSQL database
Server is running on PORT: 3001
```

## Need Help?

See the full guide: [`NEON_SETUP_GUIDE.md`](../NEON_SETUP_GUIDE.md)

## Test Your Setup

```bash
# Health check
curl http://localhost:3001/health

# Test newsletter subscription
curl -X POST http://localhost:3001/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

---

**Next**: Start the frontend with `cd ../client && npm run dev`
