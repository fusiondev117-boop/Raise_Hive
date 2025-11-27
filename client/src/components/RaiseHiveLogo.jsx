import React from 'react';

const RaiseHiveLogo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 48, text: 'text-2xl' },
    lg: { icon: 64, text: 'text-3xl' },
    xl: { icon: 80, text: 'text-4xl' }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Hexagon/Hive Icon with Gradient */}
      <svg
        width={currentSize.icon}
        height={currentSize.icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        
        {/* Main Hexagon */}
        <path
          d="M50 5 L85 27.5 L85 72.5 L50 95 L15 72.5 L15 27.5 Z"
          fill="url(#logoGradient)"
          opacity="0.9"
        />
        
        {/* Inner Hexagons - Hive Pattern */}
        <path
          d="M50 25 L65 35 L65 55 L50 65 L35 55 L35 35 Z"
          fill="white"
          opacity="0.3"
        />
        
        {/* Small Hexagons */}
        <path
          d="M35 20 L42 24 L42 32 L35 36 L28 32 L28 24 Z"
          fill="white"
          opacity="0.2"
        />
        <path
          d="M65 20 L72 24 L72 32 L65 36 L58 32 L58 24 Z"
          fill="white"
          opacity="0.2"
        />
        <path
          d="M50 70 L57 74 L57 82 L50 86 L43 82 L43 74 Z"
          fill="white"
          opacity="0.2"
        />
      </svg>

      {/* Text Logo */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold ${currentSize.text} text-white`}>
            Raise<span className="text-gradient">Hive</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default RaiseHiveLogo;
