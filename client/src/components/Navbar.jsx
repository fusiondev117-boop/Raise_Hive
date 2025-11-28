import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useStateContext } from "../context";
import { CustomButton } from "./";
import { menu, search } from "../assets";
import { navlinks } from "../constants";
import RaiseHiveLogo from "./RaiseHiveLogo";

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { connect, address, getCampaigns } = useStateContext();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestedCampaigns, setSuggestedCampaigns] = useState([]);
  const [allCampaigns, setAllCampaigns] = useState([]);

  const handleUserAccount = () => {
    return <ConnectWallet />;
  };

  const handleSearch = () => {
    setSearchQuery(searchInput.trim());
    setSearchInput(""); // Clear search input
    setSuggestedCampaigns([]); // Clear suggested campaigns
    navigate("/SearchCampaigns");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Fetch campaigns for suggestions
  useEffect(() => {
    const fetchCampaigns = async () => {
      const data = await getCampaigns();
      setAllCampaigns(data || []);
    };

    fetchCampaigns();
  }, [getCampaigns]);

  // Clear the search input when the route changes, except on the SearchCampaigns page
  useEffect(() => {
    if (location.pathname !== "/SearchCampaigns") {
      setSearchInput("");
    }
  }, [location.pathname]);

  // Filter suggested campaigns based on search input
  useEffect(() => {
    if (searchInput) {
      const filtered = allCampaigns.filter(
        (campaign) =>
          campaign.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          campaign.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSuggestedCampaigns(filtered);
    } else {
      setSuggestedCampaigns([]);
    }
  }, [searchInput, allCampaigns]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-dark-900 shadow-sm border-b border-gray-100 dark:border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover-scale-sm transition-smooth">
            <RaiseHiveLogo showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-inter font-medium transition-smooth hover-scale-sm">
              Explore
            </Link>
            <Link to="/create-campaign" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-inter font-medium transition-smooth hover-scale-sm">
              Start Campaign
            </Link>
            <Link to="/HowItWorks" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-inter font-medium transition-smooth hover-scale-sm">
              How It Works
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setToggleDrawer((prev) => !prev)}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800 transition-smooth hover-scale-sm"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Connect/Disconnect Wallet Button */}
            {address ? (
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                  <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-inter font-medium text-gray-700 dark:text-gray-300">
                    {address.slice(0, 6)}...{address.slice(-4)}
                  </span>
                </div>
                <CustomButton
                  btnType="button"
                  title="Disconnect"
                  variant="outline"
                  handleClick={() => {
                    // Clear local storage and session
                    localStorage.clear();
                    sessionStorage.clear();
                    // Reload to disconnect
                    window.location.href = '/';
                  }}
                />
              </div>
            ) : (
              <CustomButton
                btnType="button"
                title="Connect Wallet"
                styles="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-inter font-semibold px-6 py-3 rounded-full hover:shadow-primary-lg transition-smooth hover-scale-sm hover-shine"
                handleClick={() => {
                  if (window.ethereum && window.ethereum.isMetaMask) {
                    console.log("MetaMask is installed!");
                    connect();
                  } else {
                    alert("MetaMask extension is not installed!");
                  }
                }}
              />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
            onClick={() => setToggleDrawer((prev) => !prev)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {toggleDrawer ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Search Overlay - Desktop */}
      {toggleDrawer && (
        <div className="hidden lg:block absolute top-full left-0 right-0 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800 shadow-lg animate-slideInUp">
          <div className="max-w-3xl mx-auto px-4 py-6">
            <div className="relative">
              <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 transition-all">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for campaigns..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  className="flex-1 bg-transparent outline-none text-lg font-inter text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                />
                {searchInput && (
                  <button
                    onClick={handleSearch}
                    className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-semibold hover:shadow-primary transition-all"
                  >
                    Search
                  </button>
                )}
              </div>
              
              {/* Search Suggestions */}
              {searchInput && suggestedCampaigns.length > 0 && (
                <div className="mt-4 bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
                  {suggestedCampaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="p-4 hover:bg-primary-50 dark:hover:bg-primary-900/20 cursor-pointer transition-all border-b border-gray-100 dark:border-dark-700 last:border-0"
                      onClick={() => {
                        navigate(`/campaign-details/${campaign.id}`, { state: campaign });
                        setSearchInput("");
                        setToggleDrawer(false);
                      }}
                    >
                      <p className="font-inter font-semibold text-gray-800 dark:text-white">{campaign.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                          {campaign.category}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-800 shadow-lg transition-all duration-300 ${
          toggleDrawer ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {/* Mobile Search */}
        <div className="p-4 border-b border-gray-200 dark:border-dark-800">
          <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-dark-800 rounded-2xl">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search campaigns..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-sm font-inter text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="py-2">
          <Link
            to="/"
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-inter font-medium transition-colors"
            onClick={() => setToggleDrawer(false)}
          >
            Explore
          </Link>
          <Link
            to="/create-campaign"
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-inter font-medium transition-colors"
            onClick={() => setToggleDrawer(false)}
          >
            Start Campaign
          </Link>
          <Link
            to="/HowItWorks"
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-inter font-medium transition-colors"
            onClick={() => setToggleDrawer(false)}
          >
            How It Works
          </Link>
          <Link
            to="/profile"
            className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-inter font-medium transition-colors"
            onClick={() => setToggleDrawer(false)}
          >
            My Profile
          </Link>
        </div>

        {/* Mobile Connect/Disconnect Button */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-800">
          {address ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-inter font-medium text-gray-700 dark:text-gray-300">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </span>
              </div>
              <CustomButton
                btnType="button"
                title="Disconnect Wallet"
                variant="outline"
                styles="w-full"
                handleClick={() => {
                  // Clear all storage and logout
                  localStorage.clear();
                  sessionStorage.clear();
                  setToggleDrawer(false);
                  window.location.href = '/';
                }}
              />
            </div>
          ) : (
            <CustomButton
              btnType="button"
              title="Connect Wallet"
              styles="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-inter font-semibold px-6 py-3 rounded-full"
              handleClick={() => {
                if (window.ethereum && window.ethereum.isMetaMask) {
                  console.log("MetaMask is installed!");
                  connect();
                } else {
                  alert("MetaMask extension is not installed!");
                }
                setToggleDrawer(false);
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
