import React from 'react';

const RaiseHiveLogo = ({ className = "w-32 h-auto", isDark = false }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Elegant S monogram */}
      <path 
        d="M15 10 Q20 5, 25 10 T35 20 Q35 25, 30 30 T20 40 Q15 45, 10 40" 
        stroke={isDark ? "#d4a574" : "#2d2d2d"} 
        strokeWidth="2" 
        fill="none"
        strokeLinecap="round"
      />
      
      {/* RaiseHive text */}
      <text 
        x="45" 
        y="32" 
        fontFamily="Playfair Display, serif" 
        fontSize="24" 
        fontWeight="600"
        fill={isDark ? "#faf9f7" : "#1a1a1a"}
        letterSpacing="1"
      >
        RaiseHive
      </text>
      
      {/* Decorative line */}
      <line 
        x1="45" 
        y1="38" 
        x2="195" 
        y2="38" 
        stroke={isDark ? "#d4a574" : "#d4a574"} 
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
};

export default RaiseHiveLogo;
