# Raise Hive 🚀

> Where Creative Projects Take Flight

A blockchain-powered crowdfunding platform connecting creators with backers through secure, transparent, and community-driven funding.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-3.0-646CFF)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)](https://www.mongodb.com/)

## ✨ Features

- 🔐 **Blockchain Powered** - Secure Web3 transactions via Ethereum & smart contracts
- 🎨 **Modern UI/UX** - Gradient designs, smooth animations, dark/light mode
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 💬 **Comment System** - Campaign discussions with nested replies
- 🔍 **Smart Search** - Real-time campaign filtering and suggestions
- 📧 **Newsletter** - Automated email subscription system
- 🗄️ **Cloud Database** - MongoDB Atlas with 512 MB free storage

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ and npm
- [MongoDB Atlas account](https://www.mongodb.com/cloud/atlas/register) (free, no credit card required)
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
npm start
```

**Access:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

✅ You should see "Connected to MongoDB successfully" in the backend terminal.

## 🛠️ Tech Stack

**Frontend**: React 18.2 • Vite 3.0 • Tailwind CSS 3.4 • NextUI • Framer Motion

**Backend**: Node.js • Express.js • MongoDB Atlas • Mongoose • Nodemailer • Node-cron

**Blockchain**: Ethereum • Solidity • Thirdweb SDK • Ethers.js • MetaMask

**Database**: MongoDB Atlas (512 MB free, cloud-hosted, VPN compatible)

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
│   │   └── server.js    # Main server
│   ├── models/          # Mongoose schemas
│   │   ├── emailSchema.js
│   │   ├── articleSchema.js
│   │   └── commentSchema.js
│   └── .env
│
└── web3/                # Smart contracts
    └── contracts/
        └── RaiseHive.sol
```

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

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📧 Contact

- **Email**: hello@raisehive.io
- **Website**: [raisehive.io](https://raisehive.io)
- **GitHub**: [@fusiondev117-boop](https://github.com/fusiondev117-boop)

**Made with ❤️ for creators worldwide**

*Empowering innovation through community-powered funding* 🚀
