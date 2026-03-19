import React, { useEffect } from 'react';

interface HeroCarouselProps {
  backgrounds: string[];
  currentIndex: number;
  onSlideChange: (index: number) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ 
  backgrounds, 
  currentIndex, 
  onSlideChange 
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onSlideChange((currentIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, backgrounds.length, onSlideChange]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {backgrounds.map((bg, index) => (
        <div
          key={bg}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-70 scale-100' 
              : 'opacity-0 scale-105'
          }`}
          style={{ 
            backgroundImage: `url("${bg}")`,
            filter: 'contrast(1.1) saturate(1.3)'
          }}
        />
      ))}
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/90 pointer-events-none" />
    </div>
  );
};
