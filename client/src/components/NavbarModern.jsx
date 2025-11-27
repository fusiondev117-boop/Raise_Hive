import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { FiSearch, FiMenu, FiX, FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import RaiseHiveLogo from "./RaiseHiveLogo";

const NavbarModern = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { connect, address, getCampaigns } = useStateContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestedCampaigns, setSuggestedCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch campaigns
  useEffect(() => {
    const fetchCampaigns = async () => {
      const data = await getCampaigns();
      setAllCampaigns(data || []);
    };
    fetchCampaigns();
  }, [getCampaigns]);

  // Filter suggestions
  useEffect(() => {
    if (searchInput) {
      const filtered = allCampaigns.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          campaign.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestedCampaigns(filtered.slice(0, 5));
    } else {
      setSuggestedCampaigns([]);
    }
  }, [searchInput, allCampaigns]);

  const handleSearch = () => {
    setSearchQuery(searchInput.trim());
    setSearchInput("");
    setSuggestedCampaigns([]);
    setIsSearchOpen(false);
    navigate("/SearchCampaigns");
  };

  const navLinks = [
    { name: "Explore", path: "/AllCampaigns" },
    { name: "Categories", path: "/ExploreProjects" },
    { name: "How it Works", path: "/howitworks" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-soft border-b border-gray-800' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <RaiseHiveLogo size="sm" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 hover:bg-bg-hover rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <FiSearch className="w-5 h-5" />
              </button>

              {/* Profile/Connect */}
              {address ? (
                <Link
                  to="/profile"
                  className="hidden sm:flex p-2 hover:bg-bg-hover rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <FiUser className="w-5 h-5" />
                </Link>
              ) : (
                <button
                  onClick={() => connect()}
                  className="hidden sm:block btn-fashion text-xs sm:text-sm"
                >
                  Connect Wallet
                </button>
              )}

              {/* Create Campaign Button */}
              <Link
                to="/create-campaign"
                className="hidden md:block btn-fashion-accent text-xs sm:text-sm"
              >
                Start Campaign
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-bg-hover rounded-full transition-colors text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-bg-elevated border-t border-gray-800 shadow-hard">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full px-6 py-4 text-lg bg-bg-card text-white placeholder-gray-500 rounded-full outline-none focus:ring-2 focus:ring-neon-pink transition-all border border-gray-800"
                  autoFocus
                />
                {suggestedCampaigns.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-bg-card rounded-2xl shadow-hard overflow-hidden border border-gray-800">
                    {suggestedCampaigns.map((campaign) => (
                      <div
                        key={campaign.id}
                        onClick={() => {
                          navigate(`/campaign-details/${campaign.id}`, { state: campaign });
                          setSearchInput("");
                          setIsSearchOpen(false);
                        }}
                        className="px-6 py-4 hover:bg-bg-hover cursor-pointer transition-colors border-b border-gray-800 last:border-0"
                      >
                        <p className="font-medium text-white">{campaign.title}</p>
                        <p className="text-sm text-gray-400 mt-1">{campaign.category}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-elevated border-t border-gray-800 shadow-hard">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 text-base font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800 space-y-3">
                {!address && (
                  <button
                    onClick={() => {
                      connect();
                      setIsMenuOpen(false);
                    }}
                    className="w-full btn-fashion"
                  >
                    Connect Wallet
                  </button>
                )}
                <Link
                  to="/create-campaign"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center btn-fashion-accent"
                >
                  Start Campaign
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default NavbarModern;
