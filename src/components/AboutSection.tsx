import React, { useState, useRef, useLayoutEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { SciFiButton } from './SciFiButton';

const CARDS_DATA = [
  { id: 1, image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800', title: 'MINT NFT' },
  { id: 2, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800', title: 'MCRT STAKING' },
  { id: 3, image: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=800', title: 'PLAY NOW' },
  { id: 4, image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800', title: 'WARRIOR' },
  { id: 5, image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&q=80&w=800', title: 'MAGE' },
  { id: 6, image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800', title: 'ASSASSIN' },
  { id: 7, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', title: 'HEALER' },
  { id: 8, image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800', title: 'TANK' },
  { id: 9, image: 'https://images.unsplash.com/photo-1542567455-cd733f23fbb1?auto=format&fit=crop&q=80&w=800', title: 'ARCHER' },
  { id: 10, image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800', title: 'BERSERKER' },
];

const Badge: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <button 
    className="relative inline-flex items-center justify-center font-rajdhani font-bold uppercase tracking-wider transition-all duration-300 bg-[#172033] text-gray-300 hover:text-white px-6 py-2 text-xs hover:bg-[#1e293b] cursor-pointer active:scale-95"
    style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
  >
    {children}
  </button>
);

export const AboutSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS_DATA.length) % CARDS_DATA.length);
  };

  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.children;

    Array.from(elements).forEach((el: Element, i: number) => {
      // +1 so that visualIndex === 1 is the active/front card
      const visualIndex = (i - activeIndex + 1 + CARDS_DATA.length) % CARDS_DATA.length;
      
      let left = '75%';
      let scale = 0.6;
      let opacity = 0;
      let zIndex = 0;
      let pointerEvents = 'none';

      if (visualIndex === 0) {
        // Left hidden (exiting or entering from left)
        left = '-35%';
        scale = 0.8;
        opacity = 0;
        zIndex = 10;
      } else if (visualIndex === 1) {
        // Front (active)
        left = '0%';
        scale = 1;
        opacity = 1;
        zIndex = 30;
        pointerEvents = 'auto';
      } else if (visualIndex === 2) {
        // Right 1
        left = '35%';
        scale = 0.9;
        opacity = 0.8;
        zIndex = 20;
      } else if (visualIndex === 3) {
        // Right 2
        left = '60%';
        scale = 0.8;
        opacity = 0.4;
        zIndex = 10;
      }

      if (isFirstRender.current) {
        gsap.set(el, {
          left,
          scale,
          opacity,
          zIndex,
          pointerEvents
        });
      } else {
        gsap.to(el, {
          left,
          scale,
          opacity,
          zIndex,
          duration: 0.7,
          ease: 'power2.inOut',
          roundProps: 'zIndex',
        });
        gsap.set(el, { pointerEvents });
      }
    });

    isFirstRender.current = false;
  }, [activeIndex]);

  return (
    <section className="w-full py-24 px-8 relative z-10 bg-[#0a0f16] overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000" 
          alt="Mystical Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f16] via-[#0a0f16]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-rajdhani font-bold italic text-white tracking-widest text-xl mb-2">ABOUT</h3>
            <h2 className="font-orbitron font-black italic text-white text-4xl md:text-5xl tracking-wide">THE MAGICCRAFT</h2>
          </div>
          
          <p className="text-gray-300 font-rajdhani font-medium leading-relaxed uppercase text-sm md:text-base max-w-xl tracking-wider">
            MAGICCRAFT IS A PVP WAR GAME, LEVEL UP WITH YOUR FRIENDS, FIGHT EACH OTHER, EARN REAL MONEY THROUGH $MCRT CRYPTOCURRENCY IN THE GAME. WHEN YOU DIE YOU CAN DROP REAL MONEY AND ITEMS WHICH MAKES THE STAKES MORE INTENSE. THE FIRST REAL PVP CASTLE SIEGE PLAY-TO-EARN GAME.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex flex-wrap gap-4">
              <SciFiButton variant="filled" className="w-48 h-12 text-sm">BETA TESTING</SciFiButton>
              <SciFiButton variant="outlined" className="w-48 h-12 text-sm">MARKETPLACE</SciFiButton>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <Badge>BUY $MCRT</Badge>
              <Badge>WHITEPAPER</Badge>
              <Badge>BECOME A PARTNER</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge>MINT NFT</Badge>
            </div>
          </div>
        </div>

        {/* Right Content - Cards Carousel */}
        <div className="relative h-[500px] w-full hidden md:flex flex-col justify-center">
          <div className="relative w-full h-full" ref={containerRef}>
            {CARDS_DATA.map((card, index) => {
              const visualIndex = (index - activeIndex + 1 + CARDS_DATA.length) % CARDS_DATA.length;
              const isFront = visualIndex === 1;
              
              return (
                <div 
                  key={card.id}
                  className="absolute top-0 bottom-0 w-80 shadow-2xl origin-center opacity-0"
                >
                  <div 
                    className={`w-full h-full relative overflow-hidden bg-[#0a0f16] transition-colors duration-700 ${
                      isFront ? 'border-2 border-[#38bdf8]' : 'border-2 border-transparent'
                    }`}
                    style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
                  >
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    
                    <div className={`absolute bottom-0 left-0 right-0 backdrop-blur-md flex justify-between items-center transition-colors duration-700 ${
                      isFront ? 'bg-white/20 p-5' : 'bg-black/40 p-4 border-t border-white/10'
                    }`}>
                      <span className={`font-rajdhani font-bold text-white tracking-wider ${isFront ? 'text-lg' : 'text-sm'}`}>
                        {card.title}
                      </span>
                      <ArrowRight className={`text-white ${isFront ? 'w-6 h-6' : 'w-5 h-5'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Controls */}
          <div className="absolute -bottom-12 right-0 flex gap-4 z-40">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black transition-colors cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-[#38bdf8]/50 flex items-center justify-center text-[#38bdf8] hover:bg-[#38bdf8] hover:text-black transition-colors cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
