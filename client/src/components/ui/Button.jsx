import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-[#347928] text-white hover:bg-[#285e20] px-3 py-2',
    ghost: 'bg-transparent text-[#347928] hover:bg-gray-100 px-2 py-1',
    subtle: 'bg-gray-100 text-gray-800 px-3 py-2',
  };

  return (
    <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
