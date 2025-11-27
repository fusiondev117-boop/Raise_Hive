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
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Nodemailer** - Email service
- **Node-cron** - Task scheduling

### Design System
- **Fonts**: Inter, Manrope
- **Colors**: Cyan (#00b4d8), Purple (#7c3aed), Orange (#f59e0b)
- **Components**: Rounded-full buttons, gradient cards, glassmorphism

## Installation

To get started with Raise Hive, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/raisehive.git
    cd raisehive
    ```

2. **Install client dependencies**:
    ```bash
    cd client
    npm install
    ```

3. **Install server dependencies**:
    ```bash
    cd ../server
    npm install
    ```

4. **Set up environment variables**:
    ```bash
    # In server directory
    cp .env.example .env
    # Edit .env with your MongoDB URI and email credentials
    ```

5. **Run the development servers**:
    ```bash
    # Terminal 1 - Client
    cd client
    npm run dev

    # Terminal 2 - Server
    cd server
    npm start
    ```

    The application will be available at `http://localhost:5173`

## Usage

1. **Connecting Wallet**: Users need to connect their Ethereum wallet (e.g., MetaMask) to interact with the platform.
2. **Creating a Campaign**: Users can create new crowdfunding campaigns by specifying the goal amount and deadline.
3. **Contributing to a Campaign**: Users can contribute to existing campaigns using their Ethereum wallet.
4. **Viewing Campaigns**: Users can view the list of all campaigns and their details, including the amount raised and time remaining.

## Project Structure

```
raisehive/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   └── package.json
├── server/
│   ├── src/
│   ├── models/
│   └── package.json
├── web3/
│   ├── contracts/
│   └── ...
└── README.md
```

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

Raise Hive features a modern, WhyDonate-inspired design:

- **Color Palette**: Friendly cyan, purple, and orange gradients
- **Typography**: Inter for body, Manrope for headings
- **Components**: Rounded corners (12-24px), pill-shaped buttons
- **Animations**: Smooth transitions, hover effects, loading states
- **Dark Mode**: Full support with optimized color schemes

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

## 📧 Contact

- **Email**: hello@raisehive.io
- **Website**: [raisehive.io](https://raisehive.io)
- **GitHub**: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Thirdweb](https://thirdweb.com/) - Web3 development framework
- [WhyDonate](https://whydonate.com/) - Design inspiration
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [NextUI](https://nextui.org/) - UI components

---

**Made with ❤️ for creators worldwide**
