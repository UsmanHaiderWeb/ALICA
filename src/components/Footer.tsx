import React, { useRef } from 'react';
import { Twitter, Linkedin, MessageCircle, Disc } from 'lucide-react';
import { playHoverSound } from '../utils/sounds';

export const Footer: React.FC = () => {
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
        <span className="font-rajdhani font-bold text-white tracking-widest uppercase text-lg">
          FOLLOW ME
        </span>
        <div className="flex items-center gap-3">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href="#"
              className="w-8 h-8 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
              onMouseEnter={playHoverSound}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-300 ${
              i === 0 ? 'w-8 bg-neon-blue' : 'w-4 bg-gray-600 hover:bg-gray-400 cursor-pointer'
            }`}
            onMouseEnter={i !== 0 ? playHoverSound : undefined}
          />
        ))}
      </div>
    </footer>
  );
};
