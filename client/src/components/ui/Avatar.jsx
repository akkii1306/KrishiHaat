import React from 'react';

const Avatar = ({ name, size = 36, className = '' }) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const s = `${size}px`;
  return (
    <div className={`rounded-full bg-yellow-400 text-[#1f3d14] font-semibold flex items-center justify-center ${className}`} style={{ width: s, height: s }}>
      {initial}
    </div>
  );
};

export default Avatar;
