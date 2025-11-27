import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navlinks } from '../constants';
import { MdWbSunny }  from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';
import RaiseHiveLogo from './RaiseHiveLogo';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <aside className="flex flex-col items-center sticky top-6 h-[92vh] w-20">
      {/* Logo - Friendly rounded */}
      <Link to="/" className="group mb-8">
        <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-primary group-hover:scale-110 group-hover:shadow-primary-lg transition-all duration-300">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 6 L18 9 L18 13 L14 16 L10 13 L10 9 Z" fill="white" opacity="0.9"/>
            <path d="M10 13 L14 16 L14 20 L10 23 L6 20 L6 16 Z" fill="white" opacity="0.6"/>
            <path d="M18 13 L22 16 L22 20 L18 23 L14 20 L14 16 Z" fill="white" opacity="0.6"/>
          </svg>
        </div>
      </Link>

      {/* Navigation - Friendly rounded */}
      <nav className="flex-1 flex flex-col items-center gap-2 py-6">
        {navlinks.map((link) => {
          const IconComponent = theme === 'light' ? link.iconLight : link.iconDark;
          const isLinkActive = isActive === link.name;
          
          return (
            <div
              key={link.name}
              className="relative group"
              onClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            >
              {/* Tooltip - Friendly style */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-inter font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
                {link.name}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-white"></div>
              </div>

              {/* Icon Button - Rounded friendly */}
              <button
                disabled={link.disabled}
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  !link.disabled && 'cursor-pointer'
                } ${
                  isLinkActive 
                    ? 'bg-gradient-to-br from-primary-500 to-secondary-500 shadow-primary scale-105' 
                    : 'hover:bg-gray-100 dark:hover:bg-dark-800 hover:scale-105'
                }`}
              >
                <IconComponent 
                  size={22} 
                  className={isLinkActive ? 'text-white' : 'text-gray-500 dark:text-gray-400'} 
                />
              </button>
            </div>
          );
        })}
      </nav>

      {/* Theme Toggle - Friendly rounded */}
      <button
        onClick={toggleTheme}
        className="relative group mb-4"
      >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-md ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-amber-400 to-orange-500' 
            : 'bg-gradient-to-br from-indigo-500 to-purple-600'
        }`}>
          {theme === 'light' ? (
            <MdWbSunny size={22} className="text-white" />
          ) : (
            <FaMoon size={18} className="text-white" />
          )}
        </div>
      </button>
    </aside>
  );
};

export default Sidebar;
