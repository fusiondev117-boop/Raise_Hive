# Raise Hive 🚀

> Where Creative Projects Take Flight

A blockchain-powered crowdfunding platform connecting creators with backers through secure, transparent, and community-driven funding.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-3.0-646CFF)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![Neon](https://img.shields.io/badge/Neon-PostgreSQL-00E699)](https://neon.tech/)

## ✨ Features

- 🔐 **Blockchain Powered** - Secure Web3 transactions via Ethereum & smart contracts
- 🎨 **Modern UI/UX** - Gradient designs, smooth animations, dark/light mode
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 💬 **Comment System** - Campaign discussions with nested replies
- 🔍 **Smart Search** - Real-time campaign filtering and suggestions
- 📧 **Newsletter** - Automated email subscription system
- 🗄️ **Serverless Database** - Neon PostgreSQL with 3 GB free storage

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ and npm
- [Neon account](https://neon.tech) (free, no credit card required)
- MetaMask browser extension

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/raisehive.git
cd raisehive

# Install dependencies
cd server && npm install
cd ../client && npm install
```

### 2. Start Application

```bash
# Terminal 1 - Backend
cd server
npm start

# Terminal 2 - Frontend
cd client
npm run dev
```

**Access:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

✅ You should see "Connected to Neon PostgreSQL database" in the backend terminal.

## 🛠️ Tech Stack

**Frontend**: React 18.2 • Vite 3.0 • Tailwind CSS 3.4 • NextUI • Framer Motion

**Backend**: Node.js • Express.js • Neon PostgreSQL • Nodemailer • Node-cron

**Blockchain**: Ethereum • Solidity • Thirdweb SDK • Ethers.js • MetaMask

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
    └── contracts/
        └── RaiseHive.sol

## 🎨 Design System

**Colors**: Cyan (#00b4d8) • Purple (#7c3aed) • Orange (#f59e0b)

**Fonts**: Inter, Manrope

**Components**: Rounded buttons, gradient cards, glassmorphism effects

**Animations**: Hover effects, smooth transitions, loading states

## 📖 Usage

### For Users

1. **Connect Wallet** - Click "Connect Wallet" and approve MetaMask
2. **Browse Campaigns** - Explore featured campaigns on homepage
3. **Support Campaign** - Enter contribution amount and confirm transaction
4. **Create Campaign** - Fill in details and submit via smart contract

### For Developers

Detailed guides available:
- [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) - Step-by-step setup checklist
- [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md) - Complete database configuration
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Production deployment guide

## 🔧 Why Neon PostgreSQL?

- ✅ **3 GB free storage** (6x more than MongoDB Atlas)
- ✅ **Serverless** - auto-scales and auto-suspends when idle
- ✅ **Database branching** - test features without affecting production
- ✅ **Instant setup** - 2 minutes vs 5+ minutes for alternatives
- ✅ **No credit card required** - completely free tier

See [`WHY_NEON.md`](WHY_NEON.md) for detailed comparison with MongoDB.

## 🆘 Troubleshooting

### Database connection error
- Verify `DATABASE_URL` in `server/.env`
- Ensure connection string ends with `?sslmode=require`
- Check Neon dashboard for project status

### Port already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Migration failed
- Run `npm run migrate` again
- Check Neon SQL Editor for table status
- See [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md) for detailed help

## 📚 Documentation

**Setup Guides**:
- [`SETUP_CHECKLIST.md`](SETUP_CHECKLIST.md) - Complete setup checklist
- [`NEON_SETUP_GUIDE.md`](NEON_SETUP_GUIDE.md) - Database setup guide
- [`NEON_MIGRATION_SUMMARY.md`](NEON_MIGRATION_SUMMARY.md) - Technical migration details

**Development**:
- [`WHY_NEON.md`](WHY_NEON.md) - Neon vs MongoDB comparison
- [`MIGRATION_MONGODB_TO_NEON.md`](MIGRATION_MONGODB_TO_NEON.md) - Migration guide for existing users

**Deployment**:
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Deploy to Netlify

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

**Development Guidelines**:
- Follow existing code style
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple devices
- Update documentation

## � CLicense

MIT License - see [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: hello@raisehive.io
- **Website**: [raisehive.io](https://raisehive.io)
- **GitHub**: [@fusiondev117-boop](https://github.com/fusiondev117-boop)

## 🙏 Acknowledgments

[Thirdweb](https://thirdweb.com/) • [Tailwind CSS](https://tailwindcss.com/) • [NextUI](https://nextui.org/) • [Neon](https://neon.tech/) • [Vite](https://vitejs.dev/) • [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ for creators worldwide**

*Empowering innovation through community-powered funding* 🚀
