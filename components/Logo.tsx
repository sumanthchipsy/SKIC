import React from 'react';

interface LogoProps {
  isLight?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isLight = false, className = "" }) => {
  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* Arch SVG */}
      <svg 
        className="w-full max-w-[160px] h-5 mb-1" 
        viewBox="0 0 140 25" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M10 22 C 40 2, 100 2, 130 22" 
          stroke={isLight ? "#4ade80" : "#15803d"} 
          strokeWidth="3" 
          strokeLinecap="round" 
        />
      </svg>
      
      <div className={`text-center ${isLight ? 'text-white' : 'text-gray-900'}`}>
        <h1 className="font-sans text-2xl tracking-[0.15em] leading-none font-normal uppercase">
          Shree Krishna
        </h1>
        <div className={`w-full h-[1px] ${isLight ? 'bg-white/30' : 'bg-gray-300'} my-1`}></div>
        <p className={`text-[10px] tracking-[0.25em] uppercase ${isLight ? 'text-gray-200' : 'text-gray-600'}`}>
          Interiors & Constructions
        </p>
      </div>
    </div>
  );
};

export default Logo;