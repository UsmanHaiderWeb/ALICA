import React, { useRef } from 'react';
import { Twitter, Linkedin, MessageCircle, Disc } from 'lucide-react';
import { playHoverSound } from '../utils/sounds';
import { LightPlate } from './LightPlate';

interface FooterProps {
  totalSlides?: number;
  currentSlide?: number;
  onSlideChange?: (index: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  totalSlides = 4, 
  currentSlide = 0,
  onSlideChange
}) => {
  const footerRef = useRef<HTMLDivElement>(null);

  const socials = [
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn' },
    { icon: <MessageCircle className="w-5 h-5" />, name: 'WhatsApp' },
    { icon: <Disc className="w-5 h-5" />, name: 'Discord' },
  ];

  return (
    <footer ref={footerRef} className="w-full flex flex-col sm:flex-row items-center sm:items-end justify-between px-8 py-8 z-50 relative gap-6 sm:gap-0 gsap-footer">
      <div className="flex items-center gap-4">
        <div className="relative inline-block px-2 py-1">
          <span className="inline-block font-rajdhani font-bold text-white tracking-widest uppercase text-base scale-y-[1.35] origin-bottom relative z-10 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]">
            FOLLOW ME
          </span>
          <LightPlate direction="up" color="#38bdf8" intensity="35px" width="104%" beamOpacity={0.3} spread="8px" />
        </div>
        <div className="flex items-center gap-3">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href="#"
              className="w-8 h-8 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 cursor-pointer active:scale-95"
              onMouseEnter={playHoverSound}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div 
            key={i} 
            onClick={() => onSlideChange?.(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-neon-blue shadow-[0_0_8px_var(--color-neon-blue)]' : 'w-4 bg-gray-600 hover:bg-gray-400 cursor-pointer'
            }`}
            onMouseEnter={i !== currentSlide ? playHoverSound : undefined}
          />
        ))}
      </div>
    </footer>
  );
};
