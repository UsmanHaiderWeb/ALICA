import React from 'react';
import { playHoverSound, playClickSound } from '../utils/sounds';

interface SciFiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
  icon?: React.ReactNode;
  className?: string;
}

export const SciFiButton: React.FC<SciFiButtonProps> = ({ 
  children, 
  variant = 'filled', 
  icon,
  className = '',
  ...props 
}) => {
  const isFilled = variant === 'filled';

  return (
    <button
      className={`relative group flex items-center justify-center font-rajdhani font-bold tracking-wider uppercase transition-all duration-300 ${
        isFilled ? 'text-white' : 'text-neon-blue'
      } ${className}`}
      onMouseEnter={(e) => {
        playHoverSound();
        props.onMouseEnter?.(e);
      }}
      onClick={(e) => {
        playClickSound();
        props.onClick?.(e);
      }}
      {...props}
    >
      {/* 1. Outer Border (1px thick, with cuts) */}
      <div className="absolute inset-0 sci-fi-cuts pointer-events-none">
        <div className="absolute inset-0 clip-sci-fi bg-neon-blue/50 hollow-border-1"></div>
      </div>

      {/* 2. The Gap + Traveling Light (3px thick, inset by 1px) */}
      {/* The light travels ALONG the outside of the inner border. */}
      <div className="absolute inset-[1px] clip-sci-fi hollow-border-3 pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,rgba(0,240,255,0.6)_80%,var(--color-neon-blue)_100%)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* 3. Inner Button (inset by 4px) */}
      <div 
        className={`absolute inset-[4px] clip-sci-fi-inner transition-colors duration-300 ${
          isFilled 
            ? 'bg-gradient-to-r from-neon-blue-dark to-neon-blue group-hover:from-blue-600 group-hover:to-neon-blue-dark' 
            : 'bg-black/40 backdrop-blur-sm group-hover:bg-black/60'
        }`}
      ></div>

      {/* 4. Button Content */}
      <div className="relative z-10 flex items-center justify-center gap-2 px-6 py-2">
        {icon && <span className="w-3 h-3 md:w-4 md:h-4">{icon}</span>}
        {children}
      </div>
    </button>
  );
};
