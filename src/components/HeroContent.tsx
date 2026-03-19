import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { SciFiButton } from './SciFiButton';

export const HeroContent: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={heroRef} className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10 relative mt-[-5vh] gsap-hero">
      <h2 className="font-orbitron font-black italic text-3xl md:text-5xl lg:text-6xl leading-none text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        THE NEXT
      </h2>
      <h1 className="font-orbitron font-black italic text-5xl md:text-7xl lg:text-8xl leading-none text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mt-2">
        GENERATION
      </h1>
      
      <p className="font-rajdhani font-medium text-gray-300 text-sm md:text-base tracking-widest mt-6 max-w-2xl">
        YOU CAN DOWNLOAD A COPY OF THE DATA SAVED IN YOUR GOOGLE ACCOUNT.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
        <SciFiButton variant="filled" icon={<Play className="w-4 h-4 fill-current" />} className="w-44 h-12 text-sm">
          PLAY NOW
        </SciFiButton>
        <SciFiButton variant="outlined" className="w-44 h-12 text-sm text-white">
          EXPLORE MORE
        </SciFiButton>
      </div>
    </div>
  );
};
