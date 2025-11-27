import React from 'react';

const RaiseHiveLogo = ({ className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Friendly rounded logo with heart/hive concept */}
      <div className="relative group">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00b4d8" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          
          {/* Rounded background circle */}
          <circle 
            cx="22" 
            cy="22" 
            r="20" 
            fill="url(#logoGradient)"
            className="group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Hexagon pattern (hive) */}
          <path 
            d="M22 10 L28 14 L28 20 L22 24 L16 20 L16 14 Z" 
            fill="white" 
            opacity="0.9"
          />
          <path 
            d="M16 20 L22 24 L22 30 L16 34 L10 30 L10 24 Z" 
            fill="white" 
            opacity="0.6"
          />
          <path 
            d="M28 20 L34 24 L34 30 L28 34 L22 30 L22 24 Z" 
            fill="white" 
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Text logo - Friendly style */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-2xl font-manrope font-bold text-gray-900 dark:text-white">
            Raise Hive
          </span>
          <span className="text-xs font-inter font-medium text-gray-500 dark:text-gray-400">
            Fund Your Dreams
          </span>
        </div>
      )}
    </div>
  );
};

export default RaiseHiveLogo;
