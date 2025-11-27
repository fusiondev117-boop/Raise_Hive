# Raise Hive - Client

> Modern React frontend for the Raise Hive crowdfunding platform

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, SVGs
│   ├── components/     # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── RaiseHiveLogo.jsx
│   │   ├── DisplayCampaigns.jsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── CreateCampaign.jsx
│   │   ├── CampaignDetails.jsx
│   │   └── ...
│   ├── context/        # React Context providers
│   ├── utils/          # Utility functions
│   ├── constants/      # Constants and config
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Cyan (#00b4d8) - Trust, innovation
- **Secondary**: Purple (#7c3aed) - Creativity
- **Accent**: Orange (#f59e0b) - Energy
- **Success**: Green (#10b981) - Positive actions
- **Danger**: Red (#ef4444) - Warnings

### Typography
- **Headings**: Manrope (bold, 700-800)
- **Body**: Inter (regular, 400-600)
- **Buttons**: Inter (semibold, 600)

### Components
- Rounded corners: 12px, 16px, 24px
- Buttons: rounded-full (pill shape)
- Cards: rounded-2xl with shadows
- Inputs: rounded-full with focus rings

## 🔧 Key Features

### Navigation
- Sticky navbar with search overlay
- Mobile-responsive hamburger menu
- Wallet connection with disconnect
- Theme toggle (dark/light mode)

### Campaign Display
- Grid layout with 8 campaigns per page
- Modern pagination with page numbers
- Loading states with spinners
- Empty states with icons

### Forms
- Campaign creation wizard
- Email subscription
- Comment system integration
- File upload for images

### Animations
- Smooth transitions (300ms)
- Hover effects on cards
- Loading spinners
- Fade-in animations

## 🌐 Environment Variables

Create a `.env` file in the client directory:

```env
VITE_THIRDWEB_CLIENT_ID=your_thirdweb_client_id
VITE_CONTRACT_ADDRESS=your_contract_address
VITE_API_URL=http://localhost:3001
```

## 📦 Dependencies

### Core
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.21.1

### UI & Styling
- @nextui-org/react: ^2.3.6
- tailwindcss: ^3.4.1
- framer-motion: ^10.18.0

### Web3
- @thirdweb-dev/react: ^4
- @thirdweb-dev/sdk: ^4
- ethers: ^5

### Utilities
- react-icons: ^5.0.1
- react-toastify: ^10.0.5
- replyke: ^2.0.21

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to IPFS via Thirdweb

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1400px

## 🔗 Learn More

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Thirdweb Docs](https://portal.thirdweb.com/)
- [NextUI](https://nextui.org/)

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

---

**Part of the Raise Hive ecosystem** 🚀
