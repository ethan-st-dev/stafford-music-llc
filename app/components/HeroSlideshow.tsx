'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

export default function HeroSlideshow({ images, interval = 5000 }: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt="Stafford Music"
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,212,255,0.1)_0%,_transparent_70%)]" />
    </div>
  );
}
