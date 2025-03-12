"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Background images for carousel with exact filenames from your directory
const backgroundImages = [
  '/images/ship-containers-birdseye.jpg',
  '/images/ship-dock-loading.jpg',
  '/images/ship-docked.jpg',
  '/images/trucks-birdseye.jpg',
  '/images/warehouse.jpg',
  '/images/warehouse (2).jpg',
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % backgroundImages.length
        );
        setIsTransitioning(false);
      }, 1000); // Duration of fade transition
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt="Background"
            fill
            className="object-cover" 
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Header with Logo */}
        <header className="p-4 md:p-6">
          <div className="logo-container">
            <Image 
              src="/images/logo.svg" 
              alt="Barta Logistics Logo" 
              width={200}
              height={67}
              className="w-auto h-12 md:h-16 filter drop-shadow-md"
              style={{
                filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.3))",
                WebkitFilter: "drop-shadow(0 2px 5px rgba(0,0,0,0.3))"
              }}
            />
            {/* Contained glow effect beneath logo */}
            <div className="logo-glow" aria-hidden="true"></div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-md">
            Our website is under construction.
          </p>
          
          {/* Contact Button */}
          <button 
            className="bg-[#5a0505] hover:bg-[#6a0606] text-gray-100 font-medium py-3 px-6 transition-colors duration-300 shadow-lg"
            onClick={() => window.location.href = 'mailto:info@bartalogistics.com'}
          >
            Contact Us
          </button>
        </main>
        
        {/* Footer */}
        <footer className="p-4 text-center text-white text-sm">
          &copy; 2025 Barta Logistics. All rights reserved.
        </footer>
      </div>
    </div>
  );
}