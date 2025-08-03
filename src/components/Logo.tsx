import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-16 h-24',
    medium: 'w-24 h-36',
    large: 'w-32 h-48'
  };

  return (
    <div className="flex items-center justify-center">
      <img 
        src="/logo.png" 
        alt="E-umrlice Portal" 
        className={`${sizeClasses[size]} object-contain`}
      />
    </div>
  );
};

export default Logo;