import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Navbar, RaiseHiveLogo } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import AllCampaigns from "./components/AllCampaigns";
import UpdateCampaign from "./pages/UpdateCampaign";
import About from "./pages/About";
import WhatWeDo from "./pages/WhatWeDo";
import TopFinds from "./pages/TopFinds";
import HowItWorks from "./pages/HowItWorks";
import HelpAndSupport from "./pages/HelpAndSupport";
import Contact from "./pages/Contact";
import CommunityGuidelines from "./pages/CommunityGuidelines";
import BlockFundVsKickstarter from "./pages/BlockFundVsKickstarter";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Crowdfunding from "./pages/Crowdfunding";
import TrustAndSafety from "./pages/TrustAndSafety";
import ExploreProjects from "./pages/ExploreProjects";
import Memorial from "./pages/Memorial";
import Competition from "./pages/Competition";
import PrototypingandProduction from "./pages/PrototypingandProduction";
import CreativeServices from "./pages/CreativeServices";
import Fulfillment from "./pages/Fulfillment";
import SearchCampaigns from "./pages/SearchCampaigns";
import {
  EducationCampaigns,
  TravelAndOutdoors,
  SocialImpact,
  HealthAndFitness,
  ArtsAndCulture,
} from "./pages";
import EducationCenter from "./pages/EducationCenter";
import PaymentsDetail from './pages/PaymentsDetail';
import TrustOperationsDetail from './pages/TrustOperationsDetail';
import CampaignNextStep from './pages/CampaignNextStep';
import LegalDetail from './pages/LegalDetail';
import BackersDetail from './pages/BackersDetail';
import Withdraw from './pages/Withdraw';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Friendly background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary-200 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-secondary-200 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Navbar */}
        <Navbar setSearchQuery={setSearchQuery} />

        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            <Route path="/campaign-update/:id" element={<UpdateCampaign />} />
            <Route path="/about" element={<About />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/topfinds" element={<TopFinds />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/communityGuidelines" element={<CommunityGuidelines />} />
            <Route path="/blockFundVskickstarter" element={<BlockFundVsKickstarter />} />
            <Route path="/TermsOfUse" element={<TermsOfUse />} />
            <Route path="/TrustAndSafety" element={<TrustAndSafety />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Crowdfunding" element={<Crowdfunding />} />
            <Route path="/EducationCampaigns" element={<EducationCampaigns />} />
            <Route path="/TravelAndOutdoors" element={<TravelAndOutdoors />} />
            <Route path="/SocialImpact" element={<SocialImpact />} />
            <Route path="/HealthAndFitness" element={<HealthAndFitness />} />
            <Route path="/ArtsAndCulture" element={<ArtsAndCulture />} />
            <Route path="/ExploreProjects" element={<ExploreProjects />} />
            <Route path="/AllCampaigns" element={<AllCampaigns />} />
            <Route path="/Memorial" element={<Memorial />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/PrototypingandProduction" element={<PrototypingandProduction />} />
            <Route path="/CreativeServices" element={<CreativeServices />} />
            <Route path="/Fulfillment" element={<Fulfillment />} />
            <Route path="/EducationCenter" element={<EducationCenter />} />
            <Route path="/SearchCampaigns" element={<SearchCampaigns searchQuery={searchQuery} />} />
            <Route path="/payments" element={<PaymentsDetail />} />
            <Route path="/CampaignNextStep" element={<CampaignNextStep />} />
            <Route path="/TrustOperationsDetail" element={<TrustOperationsDetail />} />
            <Route path="/LegalDetail" element={<LegalDetail />} />
            <Route path="/BackersDetail" element={<BackersDetail />} />
            <Route path="/Withdraw" element={<Withdraw />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <RaiseHiveLogo showText={true} />
                <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm max-w-md leading-relaxed">
                  Empowering creators to bring their dreams to life through community-powered funding on the blockchain.
                </p>

                {/* Social Media Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Platform Links */}
              <div>
                <h3 className="font-manrope font-bold text-gray-900 dark:text-white mb-4 text-sm">Platform</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Explore Projects</Link></li>
                  <li><Link to="/create-campaign" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Start Campaign</Link></li>
                  <li><Link to="/HowItWorks" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">How It Works</Link></li>
                  <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">About Us</Link></li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="font-manrope font-bold text-gray-900 dark:text-white mb-4 text-sm">Support</h3>
                <ul className="space-y-3">
                  <li><Link to="/HelpAndSupport" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Help Center</Link></li>
                  <li><Link to="/Contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Contact Us</Link></li>
                  <li><Link to="/TrustAndSafety" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Trust & Safety</Link></li>
                  <li><Link to="/communityGuidelines" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Community</Link></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h3 className="font-manrope font-bold text-gray-900 dark:text-white mb-4 text-sm">Legal</h3>
                <ul className="space-y-3">
                  <li><Link to="/PrivacyPolicy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/TermsOfUse" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Terms of Use</Link></li>
                  <li><a href="mailto:hello@raisehive.io" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors">Contact Legal</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200 dark:border-dark-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  © 2025 Raise Hive. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-gray-400 dark:text-gray-500">Made with ❤️ for creators</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
