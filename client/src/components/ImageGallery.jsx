import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const ImageGallery = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-manrope font-bold text-gray-900 dark:text-white mb-6">
          Discover First on <span className="text-gradient">Raise Hive</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-inter leading-relaxed">
          Where early adopters and innovation seekers discover groundbreaking projects before they hit the mainstream.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div 
          className="group relative overflow-hidden rounded-3xl cursor-pointer h-72 hover-lift"
          onClick={() => navigate("/TopFinds")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4">
              10 Cool & Clever Finds
            </h3>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <HiArrowRight className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className="group relative overflow-hidden rounded-3xl cursor-pointer h-72 hover-lift"
          onClick={() => navigate("/Competition")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-accent-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4">
              Non Profit
            </h3>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <HiArrowRight className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div 
          className="group relative overflow-hidden rounded-3xl cursor-pointer h-72 hover-lift"
          onClick={() => navigate("/WhatWeDo")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-success-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4">
              What We Do
            </h3>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <HiArrowRight className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div 
          className="group relative overflow-hidden rounded-3xl cursor-pointer h-72 hover-lift"
          onClick={() => navigate("/Memorial")}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-success-500 to-primary-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <h3 className="font-manrope font-bold text-3xl md:text-4xl text-white mb-4">
              Memorial
            </h3>
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
              <HiArrowRight className="w-6 h-6 text-white transform -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
