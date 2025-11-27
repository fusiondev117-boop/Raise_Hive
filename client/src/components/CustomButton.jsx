import React from 'react'

const CustomButton = ({ btnType, title, handleClick, styles, variant = 'primary', disabled = false }) => {
  const baseStyles = "relative overflow-hidden font-inter font-semibold text-base px-6 py-3 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-primary-lg hover:-translate-y-0.5",
    secondary: "bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-secondary hover:-translate-y-0.5",
    outline: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "bg-transparent text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20",
    success: "bg-gradient-to-r from-success-500 to-success-600 text-white hover:shadow-success hover:-translate-y-0.5",
    white: "bg-white text-primary-600 hover:bg-gray-50 shadow-md hover:shadow-lg",
  };

  return (
    <button
      type={btnType}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${styles}`}
      onClick={handleClick}
    >
      <span className="relative z-10">{title}</span>
    </button>
  )
}

export default CustomButton