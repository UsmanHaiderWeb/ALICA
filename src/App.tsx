import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroContent } from './components/HeroContent';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col selection:bg-neon-blue selection:text-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ 
          // Using a high-quality DBZ wallpaper as a placeholder for the provided image
          backgroundImage: 'url("https://i.pinimg.com/1200x/3d/43/c5/3d43c58e706a03740fcb54d26c32313c.jpg")',
          filter: 'contrast(1.1) saturate(1.3)'
        }}
      />
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Main Content */}
      <Navbar />
      <HeroContent />
      <Footer />
    </div>
  );
}
