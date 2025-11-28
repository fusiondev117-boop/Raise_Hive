# Raise Hive 🚀

> Where Creative Projects Take Flight

Raise Hive is a next-generation creative crowdfunding platform built on blockchain technology. We empower creators, artists, designers, and innovators to bring their bold ideas to life through community-powered funding. Built with React and cutting-edge web3 technologies, Raise Hive provides a secure, transparent, and beautifully designed platform for creative innovation.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-3.0-646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

## ✨ Key Features

- 🎨 **Modern UI/UX** - WhyDonate-inspired design with rounded elements and vibrant gradients
- 🔐 **Blockchain Powered** - Secure, transparent transactions via Web3 & Ethereum
- 🌓 **Dark/Light Mode** - Seamless theme switching with beautiful color schemes
- 📱 **Fully Responsive** - Perfect experience on all devices (mobile, tablet, desktop)
- ⚡ **Lightning Fast** - Optimized performance with React & Vite
- 🎯 **Smart Contracts** - Automated, trustless campaign management
- 💬 **Comment System** - Integrated Replyke for campaign discussions
- 📧 **Newsletter** - Email subscription with MongoDB backend
- 🔍 **Smart Search** - Real-time campaign search with suggestions
- 📊 **Modern Pagination** - Elegant page navigation with 8 campaigns per page

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Project Structure](#project-structure)
7. [Smart Contract](#smart-contract)
8. [Contributing](#contributing)
9. [License](#license)

## 🚀 Introduction

Raise Hive is where creative projects take flight. We connect visionary creators with passionate backers who believe in bringing innovative ideas to life. By leveraging blockchain technology, we ensure that all transactions are immutable and transparent, building trust between creators and supporters while revolutionizing how creative projects get funded.

### Why Raise Hive?

- **Community Powered** - Your success is backed by a community that believes in you
- **Transparent** - Every transaction is recorded on the blockchain
- **Secure** - Smart contracts ensure funds are handled safely
- **Global Reach** - Connect with backers from around the world
- **Creator Friendly** - Intuitive tools to launch and manage campaigns

## Features

- **Decentralized**: Operates on a blockchain network, ensuring security and transparency.
- **Smart Contracts**: Utilizes smart contracts to handle campaign creation and contributions.
- **User Authentication**: Secure user authentication via blockchain wallets.
- **Responsive Design**: Fully responsive design, compatible with various devices.
- **Real-time Updates**: Real-time updates on campaign status and contributions.

## 🛠️ Technologies Used

### Frontend
- **React 18.2** - Modern UI library
- **Vite 3.0** - Next-generation frontend tooling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **NextUI** - Beautiful React UI library
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library

### Blockchain
- **Ethereum** - Blockchain platform
- **Solidity** - Smart contract language
- **Thirdweb SDK** - Web3 development framework
- **Ethers.js 5** - Ethereum library
- **MetaMask** - Wallet integration

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud NoSQL database (VPN-compatible)
- **Mongoose** - MongoDB ODM
- **Nodemailer** - Email service
- **Node-cron** - Task scheduling
- **CORS** - Cross-origin resource sharing

### Design System
- **Fonts**: Inter, Manrope
- **Colors**: Cyan (#00b4d8), Purple (#7c3aed), Orange (#f59e0b)
- **Components**: Rounded-full buttons, gradient cards, glassmorphism

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB Atlas account** (free)
- **MetaMask** browser extension

### Quick Start

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/raisehive.git
    cd raisehive
    ```

2. **Install dependencies**:
    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3. **Setup MongoDB Atlas** (5 minutes):
   
   See detailed guide: [`MONGODB_ATLAS_SETUP.md`](MONGODB_ATLAS_SETUP.md)
   
   Quick steps:
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Create free cluster (M0 Sandbox)
   - Create database user
   - Whitelist IP: `0.0.0.0/0` (for VPN compatibility)
   - Get connection string

4. **Configure environment variables**:
    ```bash
    # In server directory
    cd server
    cp .env.example .env
    ```
    
    Edit `server/.env`:
    ```env
    PORT=3001
    MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/raisehive?retryWrites=true&w=majority
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-gmail-app-password
    ```

5. **Run the application**:
    ```bash
    # Terminal 1 - Start Backend (Port 3001)
    cd server
    npm start

    # Terminal 2 - Start Frontend (Port 3000)
    cd client
    npm run dev
    ```

6. **Access the application**:
   - **Frontend**: `http://localhost:3000`
   - **Backend API**: `http://localhost:3001`

### ✅ Verification

You should see:
- ✅ Backend: "✅ Connected to MongoDB successfully"
- ✅ Frontend: Vite dev server running on port 3000
- ✅ Browser: App loads without errors

### 🔧 VPN Compatibility

This project is **fully VPN-compatible**! 

- ✅ Works with VPN ON or OFF
- ✅ Uses MongoDB Atlas (cloud database)
- ✅ Configured for all network interfaces

See [`VPN_SETUP_GUIDE.md`](VPN_SETUP_GUIDE.md) for details.

## 📖 Usage

### For Users

1. **Connect Wallet**: 
   - Click "Connect Wallet" in the navbar
   - Approve MetaMask connection
   - Your wallet address will be displayed

2. **Browse Campaigns**: 
   - Explore featured campaigns on the homepage
   - Use search to find specific projects
   - Filter by categories

3. **Support a Campaign**: 
   - Click on a campaign card
   - Review campaign details
   - Enter contribution amount
   - Confirm transaction in MetaMask

4. **Create a Campaign**: 
   - Connect your wallet
   - Click "Start Campaign"
   - Fill in campaign details (title, description, goal, deadline)
   - Upload campaign images
   - Submit and confirm transaction

### For Developers

See detailed documentation:
- [`QUICK_START.md`](QUICK_START.md) - Quick setup guide
- [`MONGODB_ATLAS_SETUP.md`](MONGODB_ATLAS_SETUP.md) - Database setup
- [`VPN_SETUP_GUIDE.md`](VPN_SETUP_GUIDE.md) - VPN compatibility
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Deploy to Netlify
- [`ENV_SETUP_GUIDE.md`](ENV_SETUP_GUIDE.md) - Environment variables

## 📁 Project Structure

```
raisehive/
├── client/                          # Frontend (React + Vite)
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── Navbar.jsx          # Navigation with search
│   │   │   ├── DisplayCampaigns.jsx # Campaign grid with pagination
│   │   │   ├── FundCard.jsx        # Campaign card component
│   │   │   ├── CustomButton.jsx    # Reusable button component
│   │   │   └── RaiseHiveLogo.jsx   # Brand logo component
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx            # Homepage
│   │   │   ├── CreateCampaign.jsx  # Campaign creation
│   │   │   ├── CampaignDetails.jsx # Campaign details
│   │   │   └── Profile.jsx         # User profile
│   │   ├── context/                 # React context
│   │   ├── assets/                  # Images, icons
│   │   ├── index.css               # Global styles + animations
│   │   └── App.jsx                 # Main app component
│   ├── vite.config.js              # Vite configuration (Port 3000)
│   └── package.json
│
├── server/                          # Backend (Express + MongoDB)
│   ├── src/
│   │   └── server.js               # Express server (Port 3001)
│   ├── models/                      # Mongoose schemas
│   │   ├── articleSchema.js
│   │   └── commentSchema.js
│   ├── .env                        # Environment variables (not committed)
│   ├── .env.example                # Environment template
│   └── package.json
│
├── web3/                            # Smart contracts
│   ├── contracts/
│   │   └── RaiseHive.sol           # Main crowdfunding contract
│   └── hardhat.config.js
│
├── netlify/                         # Serverless functions
│   └── functions/
│       ├── subscribe.js            # Newsletter subscription
│       ├── send-email.js           # Contact form
│       └── get-campaigns.js        # Blockchain data
│
├── netlify.toml                     # Netlify configuration
├── MONGODB_ATLAS_SETUP.md          # Database setup guide
├── VPN_SETUP_GUIDE.md              # VPN compatibility guide
├── QUICK_START.md                  # Quick start guide
├── DEPLOYMENT.md                   # Deployment guide
└── README.md                        # This file
```

## 🌐 Port Configuration

- **Frontend (Vite)**: `http://localhost:3000`
- **Backend (Express)**: `http://localhost:3001`
- **Database**: MongoDB Atlas (cloud-based)

This configuration ensures:
- ✅ No port conflicts
- ✅ VPN compatibility
- ✅ Standard development setup

## Smart Contract

The smart contract is written in Solidity and handles the core functionality of the platform, including:

- Campaign creation
- Contribution management
- Fund withdrawal by campaign creators

### Example Contract

```solidity
pragma solidity ^0.8.0;

contract RaiseHive {
    struct Campaign {
        address payable creator;
        uint goal;
        uint raisedAmount;
        uint deadline;
        bool completed;
        string category;
        string title;
    }

    mapping(uint => Campaign) public campaigns;
    uint public campaignCount;

    function createCampaign(
        uint _goal, 
        uint _duration, 
        string memory _category,
        string memory _title
    ) public {
        campaignCount++;
        campaigns[campaignCount] = Campaign(
            payable(msg.sender),
            _goal,
            0,
            block.timestamp + _duration,
            false,
            _category,
            _title
        );
    }

    function contribute(uint _campaignId) public payable {
        Campaign storage campaign = campaigns[_campaignId];
        require(block.timestamp < campaign.deadline, "Campaign ended");
        require(!campaign.completed, "Campaign completed");

        campaign.raisedAmount += msg.value;
        if (campaign.raisedAmount >= campaign.goal) {
            campaign.completed = true;
        }
    }

    function withdrawFunds(uint _campaignId) public {
        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.creator, "Not campaign creator");
        require(block.timestamp > campaign.deadline, "Campaign not ended");

        campaign.creator.transfer(campaign.raisedAmount);
    }
}
```

## 🎨 Design System

Raise Hive features a modern, fashion-forward design with dramatic effects:

### Color Palette
- **Primary**: Cyan (#00b4d8) - Trust and innovation
- **Secondary**: Purple (#7c3aed) - Creativity and ambition
- **Accent**: Orange (#f59e0b) - Energy and warmth
- **Success**: Green (#10b981) - Achievement
- **Gradients**: Multi-layered with smooth transitions

### Typography
- **Headings**: Manrope (700-800 weight)
- **Body**: Inter (400-600 weight)
- **Sizes**: Responsive with clamp() for fluid scaling

### Components
- **Buttons**: Rounded-full (9999px), gradient backgrounds, shine effects
- **Cards**: 16px border-radius, hover-float animations, multi-shadow effects
- **Inputs**: Rounded-2xl, focus rings, smooth transitions
- **Modals**: Glassmorphism with backdrop blur

### Animations & Effects
- **Hover Effects**: Lift, scale, rotate, glow
- **Shadows**: Multi-layered with color gradients (cyan, purple, orange)
- **Transitions**: Smooth cubic-bezier (0.4, 0, 0.2, 1)
- **Loading**: Skeleton screens, shimmer effects
- **Entrance**: Slide-in, fade-in, staggered delays

### Dark Mode
- Full support with optimized color schemes
- Automatic theme detection
- Smooth theme transitions
- Accessible contrast ratios

## 📱 Screenshots

- Modern navbar with search overlay
- Gradient hero sections
- Campaign cards with progress bars
- Newsletter subscription with gradient background
- Professional footer with social links

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Use Tailwind CSS for styling
- Ensure responsive design
- Test on multiple devices
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**"Error connecting to the database"**
- Check `server/.env` has correct `MONGODB_URI`
- Verify MongoDB Atlas IP whitelist: `0.0.0.0/0`
- See [`MONGODB_ATLAS_SETUP.md`](MONGODB_ATLAS_SETUP.md)

**"Port already in use"**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**"MetaMask not connecting"**
- Ensure MetaMask is installed and unlocked
- Check you're on the correct network
- Clear browser cache and try again

**VPN Issues**
- See [`VPN_SETUP_GUIDE.md`](VPN_SETUP_GUIDE.md)
- MongoDB Atlas works with any VPN
- Ensure IP `0.0.0.0/0` is whitelisted

## 📚 Documentation

- **Setup Guides**:
  - [`QUICK_START.md`](QUICK_START.md) - Get started in 5 minutes
  - [`MONGODB_ATLAS_SETUP.md`](MONGODB_ATLAS_SETUP.md) - Database setup
  - [`ENV_SETUP_GUIDE.md`](ENV_SETUP_GUIDE.md) - Environment variables

- **Development**:
  - [`VPN_SETUP_GUIDE.md`](VPN_SETUP_GUIDE.md) - VPN compatibility
  - [`ANIMATION_GUIDE.md`](ANIMATION_GUIDE.md) - Animation classes
  - [`ENHANCED_EFFECTS_SUMMARY.md`](ENHANCED_EFFECTS_SUMMARY.md) - UI effects

- **Deployment**:
  - [`DEPLOYMENT.md`](DEPLOYMENT.md) - Deploy to Netlify
  - [`PORT_CHANGES_SUMMARY.md`](PORT_CHANGES_SUMMARY.md) - Port configuration

## 📧 Contact

- **Email**: hello@raisehive.io
- **Website**: [raisehive.io](https://raisehive.io)
- **GitHub**: [@fusiondev117-boop](https://github.com/fusiondev117-boop)

## 🙏 Acknowledgments

- [Thirdweb](https://thirdweb.com/) - Web3 development framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [NextUI](https://nextui.org/) - UI components
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database
- [Vite](https://vitejs.dev/) - Build tool
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🌟 Features Highlights

- ✅ **VPN Compatible** - Works with any VPN enabled
- ✅ **Cloud Database** - MongoDB Atlas (no local setup)
- ✅ **Modern Animations** - Dramatic hover effects and transitions
- ✅ **Responsive Design** - Perfect on all devices
- ✅ **Dark Mode** - Full theme support
- ✅ **Smart Contracts** - Secure blockchain transactions
- ✅ **Real-time Search** - Instant campaign suggestions
- ✅ **Newsletter** - Email subscription system
- ✅ **Comment System** - Integrated discussions
- ✅ **Pagination** - Elegant page navigation

## 📈 Project Status

- ✅ Frontend: Complete with modern UI/UX
- ✅ Backend: Express + MongoDB Atlas
- ✅ Smart Contracts: Solidity contracts ready
- ✅ VPN Support: Fully compatible
- ✅ Deployment: Netlify-ready
- 🚧 Production: Ready for deployment

## 🚀 Deployment

Ready to deploy? See [`DEPLOYMENT.md`](DEPLOYMENT.md) for:
- Netlify deployment guide
- Environment variable setup
- Serverless functions configuration
- Custom domain setup

---

**Made with ❤️ for creators worldwide**

*Empowering innovation through community-powered funding* 🚀
