import React from 'react';
import { daysLeft } from '../utils';
import { FiHeart, FiUser } from 'react-icons/fi';

const FundCardModern = ({ owner, title, category, description, target, deadline, amountCollected, image, handleClick }) => {
  const remainingDays = daysLeft(deadline);
  const progress = (parseFloat(amountCollected) / parseFloat(target)) * 100;

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer animate-fade-in-up card-fashion"
    >
      {/* Image Container */}
      <div className="image-container rounded-t-2xl mb-4 relative">
        <img 
          src={image[0]} 
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-fashion-accent">
            View Details
          </button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 bg-bg-card/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-gray-800">
            {category}
          </span>
        </div>

        {/* Like Button */}
        <button className="absolute top-4 right-4 p-2 bg-bg-card/90 backdrop-blur-sm rounded-full hover:scale-110 hover:bg-neon-pink transition-all border border-gray-800">
          <FiHeart className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Title */}
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 text-white group-hover:text-gradient transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 line-clamp-2">
          {description}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-accent transition-all duration-500 shadow-neon-pink"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="font-bold text-white">{amountCollected}</p>
              <p className="text-xs text-gray-500">raised of {target}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-white">{remainingDays}</p>
              <p className="text-xs text-gray-500">days left</p>
            </div>
          </div>
        </div>

        {/* Creator */}
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-800">
          <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center">
            <FiUser className="w-4 h-4 text-white" />
          </div>
          <p className="text-xs text-gray-500 truncate">
            by <span className="font-medium text-white">{owner.slice(0, 6)}...{owner.slice(-4)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCardModern;
