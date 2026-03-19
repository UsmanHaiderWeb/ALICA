import React, { useRef } from 'react';
import { Gamepad2, Play } from 'lucide-react';
import { SciFiButton } from './SciFiButton';
import { playHoverSound } from '../utils/sounds';

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);

  const navLinks = ['GAME', 'TEAM', 'ROADMAP', 'STAKING', 'MARKETPLACE'];

  return (
    <nav ref={navRef} className="w-full flex items-center justify-between px-8 py-6 z-50 relative gsap-nav">
      <div className="flex items-center gap-2 text-neon-blue cursor-pointer" onMouseEnter={playHoverSound}>
        <Gamepad2 className="w-6 h-6" />
        <span className="font-orbitron font-bold text-xl tracking-widest">ALICA</span>
      </div>

      <div className="hidden md:flex items-center gap-8 font-rajdhani font-semibold text-gray-300 tracking-widest text-sm">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="hover:text-neon-blue transition-colors duration-300"
            onMouseEnter={playHoverSound}
          >
            {link}
          </a>
        ))}
      </div>

      <SciFiButton variant="filled" icon={<Play className="w-3 h-3 fill-current" />} className="text-sm px-6 py-2">
        PLAY NOW
      </SciFiButton>
    </nav>
  );
};
