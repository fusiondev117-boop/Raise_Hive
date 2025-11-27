import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';

const HeroModern = () => {
  const stats = [
    { icon: FiDollarSign, value: '$2.5M+', label: 'Raised' },
    { icon: FiUsers, value: '10K+', label: 'Backers' },
    { icon: FiTrendingUp, value: '500+', label: 'Projects' },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-bg-base">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-base via-bg-elevated to-bg-base" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-bg-card border border-gray-800 rounded-full shadow-neon-pink">
              <span className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white">Live Campaigns</span>
            </div>

            {/* Heading */}
            <h1 className="text-display font-bold leading-tight text-white">
              Fund Your
              <span className="block text-gradient">Dreams Together</span>
            </h1>

            {/* Description */}
            <p className="text-body text-gray-400 max-w-xl">
              Join the decentralized crowdfunding revolution. Create campaigns, 
              back projects, and be part of a community that makes dreams come true.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/create-campaign" className="btn-fashion-accent">
                Start Your Campaign
                <FiArrowRight className="inline-block ml-2" />
              </Link>
              <Link to="/AllCampaigns" className="btn-fashion-outline">
                Explore Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <stat.icon className="w-5 h-5 text-neon-pink" />
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Featured Image Grid */}
          <div className="relative hidden lg:block" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-hard">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80"
                  alt="Featured Campaign"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Small Images */}
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80"
                  alt="Campaign"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80"
                  alt="Campaign"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-bg-card border border-gray-800 rounded-2xl shadow-neon-pink p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                  <FiTrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-white">87%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-pink rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
