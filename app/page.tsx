'use client';

import { useState, useEffect, useRef } from 'react';
import HeroSlideshow from './components/HeroSlideshow';

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryButtonVisible, setIsGalleryButtonVisible] = useState(true);
  const heroSectionRef = useRef<HTMLElement>(null);
  
  // Add your Stafford Music LLC images here
  const heroImages = [
    '/Gallery/1.jpg',
    '/Gallery/2.jpg',
    '/Gallery/3.jpg',
    // Add more images as needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide button when less than 50% of hero section is visible
        setIsGalleryButtonVisible(entry.intersectionRatio > 0.5);
      },
      {
        threshold: [0, 0.5, 1], // Check at key points
      }
    );

    const currentRef = heroSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative">
      {/* Fixed Gallery Button - follows scroll */}
      <button
        onClick={() => {
          setIsGalleryOpen(true);
          setCurrentImageIndex(0);
        }}
        className="fixed bottom-8 left-8 z-40 p-3 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg hover:bg-slate-800/90 hover:border-cyan-500/50 group transition-opacity duration-1000"
        style={{ 
          opacity: isGalleryButtonVisible ? 1 : 0,
          pointerEvents: isGalleryButtonVisible ? 'auto' : 'none'
        }}
        aria-label="View Gallery"
      >
        <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </button>
      
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative overflow-hidden">
        {/* Slideshow Background */}
        <HeroSlideshow images={heroImages} interval={5000} />
        
        {/* Gallery Modal */}
        {isGalleryOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Close Gallery"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 p-3 text-white hover:text-cyan-400 bg-slate-900/50 rounded-full transition-colors"
              aria-label="Previous Image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-6xl max-h-[90vh] px-16">
              <img
                src={heroImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />
              <p className="text-center text-slate-400 mt-4">
                {currentImageIndex + 1} / {heroImages.length}
              </p>
            </div>
            
            <button
              onClick={nextImage}
              className="absolute right-4 p-3 text-white hover:text-cyan-400 bg-slate-900/50 rounded-full transition-colors"
              aria-label="Next Image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40">
          <div className="text-center">
            {/* Epic title with glow */}
            <div className="flex justify-center mt-20 mb-10">
              <img 
                src="/StaffordMusic2.png" 
                alt="Stafford Music" 
                className="h-80 md:h-80 w-auto logo-glow select-none"
              />
            </div>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-6" />
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Experience sound that transcends boundaries. Immerse yourself in a world of epic compositions and cinematic soundscapes.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap items-center">
              <a
                href="/listen"
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold uppercase text-sm tracking-widest overflow-hidden angular-cut"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-cyan-500/30 blur-xl group-hover:bg-cyan-500/50 transition-all" />
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Start Listening
                </span>
              </a>
              <a
                href="/about"
                className="group relative px-10 py-4 border-2 border-cyan-500/50 text-cyan-400 font-bold uppercase text-sm tracking-widest hover:bg-cyan-500/10 transition-all angular-cut"
              >
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">Discover More</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-slate-950">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.03) 2px, rgba(0,212,255,0.03) 4px)',
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-4 uppercase tracking-tight">
              Experience The Power
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎵', title: 'Epic Compositions', desc: 'Cinematic soundscapes crafted with precision and passion' },
              { icon: '🎧', title: 'Immersive Audio', desc: 'High-fidelity tracks that transport you to another realm' },
              { icon: '🎸', title: 'Unique Vision', desc: 'A distinctive sound that defines a new era of music' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-slate-900 to-slate-950 p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 card-glow angular-cut"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative text-center">
                  <div className="text-5xl mb-6 filter drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
