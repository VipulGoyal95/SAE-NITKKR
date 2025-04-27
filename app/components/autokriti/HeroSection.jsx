'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useGesture } from '@use-gesture/react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastSwipeTime = useRef(0);
  
  const images = [
    {
      src: '/assets/images/autokriti/Autokriti1.jpeg',
    },
    {
      src: '/assets/images/autokriti/Autokriti2.jpeg',
    },
    {
      src: '/assets/images/autokriti/Autokriti3.jpeg',
    },
    {
      src: '/assets/images/autokriti/Autokriti4.jpeg',
    },
    {
      src: '/assets/images/autokriti/Autokriti5.jpeg',
    }
  ];

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      nextImage();
    }, 5000);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };

  const goToImage = (index) => {
    setCurrentImage(index);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    }
  };

  const handleImageChange = (direction) => {
    const now = Date.now();
    if (now - lastSwipeTime.current < 1000) return;
    
    setIsTransitioning(true);
    if (direction === 'next') {
      nextImage();
    } else {
      prevImage();
    }
    lastSwipeTime.current = now;
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const bind = useGesture({
    onDrag: ({ movement: [x], direction: [xDir], velocity: [xVel], cancel }) => {
      if (!isTransitioning && (Math.abs(x) > 100 || Math.abs(xVel) > 0.5)) {
        setSwipeDirection(xDir > 0 ? 'left' : 'right');
        if (xDir > 0) {
          handleImageChange('prev');
        } else {
          handleImageChange('next');
        }
        cancel();
      }
    },
    onDragEnd: () => {
      setSwipeDirection(null);
    }
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
      {...bind()}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1, x: swipeDirection === 'left' ? -100 : swipeDirection === 'right' ? 100 : 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9, x: swipeDirection === 'left' ? 100 : swipeDirection === 'right' ? -100 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image
            src={images[currentImage].src}
            alt={`Autokriti Event ${currentImage + 1}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className="group"
          >
            <div className="relative">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-white scale-125'
                    : 'bg-white/50 group-hover:bg-white/75'
                }`}
              />
              {index === currentImage && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-full border-2 border-white"
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection; 