import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { Footer } from './components/Footer';
import { HeroCarousel } from './components/HeroCarousel';
import { AboutSection } from './components/AboutSection';

export const BACKGROUNDS = [
  'https://i.pinimg.com/1200x/3d/43/c5/3d43c58e706a03740fcb54d26c32313c.jpg',
  'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop'
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0f16] overflow-x-hidden selection:bg-neon-blue selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        <HeroCarousel 
          backgrounds={BACKGROUNDS} 
          currentIndex={currentSlide} 
          onSlideChange={setCurrentSlide} 
        />
        <Navbar />
        <HeroContent />
        <Footer 
          totalSlides={BACKGROUNDS.length} 
          currentSlide={currentSlide} 
          onSlideChange={setCurrentSlide} 
        />
      </section>

      {/* About Section */}
      <AboutSection />
    </div>
  );
}
