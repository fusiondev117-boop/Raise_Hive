# Raise Hive 🚀

> Where Creative Projects Take Flight

A next-generation blockchain crowdfunding platform empowering creators to bring bold ideas to life through community-powered funding.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-3.0-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![Neon](https://img.shields.io/badge/Neon-PostgreSQL-00E699)](https://neon.tech/)

## ✨ Features

- 🔐 **Blockchain Powered** - Secure, transparent transactions via Web3 & Ethereum
- 🎨 **Modern UI/UX** - Beautiful design with gradients and smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Perfect on all devices
- 🎯 **Smart Contracts** - Automated, trustless campaign management
- 💬 **Comment System** - Integrated discussions for campaigns
- 📧 **Newsletter** - Email subscription system
- 🔍 **Smart Search** - Real-time campaign search
- 🗄️ **Neon PostgreSQL** - 3 GB free serverless database

## 🚀 Quick Start

### Prerequisites

- Node.js v16+
- npm or yarn
- [Neon account](https://neon.tech) (free, no credit card)
- MetaMask browser extension

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/raisehive.git
cd raisehive

# Install dependencies
cd server && npm install
cd ../client && npm install
```

### Database Setup (2 minutes)

1. **Create Neon database**:
   - Sign up at [neon.tech](https://neon.tech)
   - Create project named "raisehive"
   - Copy connection string

2. **Configure environment**:
   ```bash
   cd server
   cp .env.example .env
   ```
   
   Edit `server/.env`:
   ```env
   DATABASE_URL=postgresql://user:pass@ep-xxx.region.aws.neon.tech/raisehive?sslmode=require
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NODE_ENV=development
   ```

3. **Run migration**:
   ```bash
   cd server
   npm run migrate
   ```

### Start Application

```bash
# Terminal 1 - Backend (Port 3001)
cd server
npm start

# Terminal 2 - Frontend (Port 3000)
cd client
npm run dev
```

Access at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3001`

## 🛠️ Tech Stack

**Frontend**: React 18.2, Vite 3.0, Tailwind CSS 3.4, NextUI, Framer Motion

**Backend**: Node.js, Express.js, Neon PostgreSQL, Nodemailer, Node-cron

**Blockchain**: Ethereum, Solidity, Thirdweb SDK, Ethers.js, MetaMask

**Database**: Neon PostgreSQL (3 GB free, serverless, auto-scaling)

## 📁 Project Structure

```
raisehive/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── context/     # React context
│   └── vite.config.js
│
├── server/              # Express backend
│   ├── src/
│   │   ├── server.js    # Main server
│   │   ├── db.js        # PostgreSQL connection
│   │   └── migrate.js   # Database migration
│   └── .env
│
├── web3/                # Smart contracts
│   └── contracts/
│       └── RaiseHive.sol
│
└── netlify/             # Serverless functions
    └── functions/
```

## 🎨 Design System

**Colors**: Cyan (#00b4d8), Purple (#7c3aed), Orange (#f59e0b)

**Fonts**: Inter, Manrope

**Components**: Rounded buttons, gradient cards, glassmorphism effects

**Animations**: Hover effects, smooth transitions, loading states

## 📖 Usage

### For Users

1. **Connect Wallet** → Click "Connect Wallet" and approve MetaMask
2. **Browse Campaigns** → Explore featured campaigns
3. **Support Campaign** → Enter amount and confirm transaction
4. **Create Campaign** → Fill details and submit via smart contract

### For Developers

See detailed guides:
- [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) - Step-by-step setup
- [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md) - Database configuration
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Production deployment

## 🔧 Database Features

**Why Neon PostgreSQL?**

- ✅ **3 GB free storage** (6x more than MongoDB Atlas)
- ✅ **Serverless** - auto-scales and auto-suspends
- ✅ **Database branching** - test features safely
- ✅ **Instant setup** - 2 minutes vs 5+ minutes
- ✅ **No credit card required**

See [`WHY_NEON.md`](WHY_NEON.md) for comparison.

## 🆘 Troubleshooting

**Database connection error**
- Verify `DATABASE_URL` in `server/.env`
- Ensure connection string ends with `?sslmode=require`
- Check Neon dashboard for project status

**Port already in use**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Migration failed**
- Run `npm run migrate` again
- Check Neon SQL Editor for table status
- See [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md)

## 📚 Documentation

**Setup**:
- [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) - Complete setup checklist
- [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md) - Database setup
- [`NEON_MIGRATION_SUMMARY.md`](NEON_MIGRATION_SUMMARY.md) - Technical details

**Development**:
- [`WHY_NEON.md`](WHY_NEON.md) - Why Neon vs MongoDB
- [`MIGRATION_MONGODB_TO_NEON.md`](MIGRATION_MONGODB_TO_NEON.md) - Migration guide

**Deployment**:
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Deploy to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file

## 📧 Contact

- Email: hello@raisehive.io
- Website: [raisehive.io](https://raisehive.io)
- GitHub: [@fusiondev117-boop](https://github.com/fusiondev117-boop)

## 🙏 Acknowledgments

[Thirdweb](https://thirdweb.com/) • [Tailwind CSS](https://tailwindcss.com/) • [NextUI](https://nextui.org/) • [Neon](https://neon.tech/) • [Vite](https://vitejs.dev/) • [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for creators worldwide**

*Empowering innovation through community-powered funding* 🚀
