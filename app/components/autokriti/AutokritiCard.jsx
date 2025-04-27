// components/AutokritiCard.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function AutokritiCard() {
  const [currentPoster, setCurrentPoster] = useState('/assets/images/autokriti/cv-ev posters (2).webp');
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleHover = (posterPath, index) => {
    setCurrentPoster(posterPath);
    setActiveItem(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setCurrentPoster('/assets/images/autokriti/cv-ev posters (2).webp');
    setActiveItem(null);
    setIsHovered(false);
  };

  const items = [
    {
      title: 'Combustion Vehicle',
      poster: '/assets/images/autokriti/cv-ev posters (2).webp',
      description: 'Learn about traditional combustion engines and their mechanics'
    },
    {
      title: 'IOT',
      poster: '/assets/images/autokriti/iot posters (1).webp',
      description: 'Explore the world of Internet of Things in automotive technology'
    },
    {
      title: 'Electric Vehicles',
      poster: '/assets/images/autokriti/cv-ev posters (2).webp',
      description: 'Dive into the future of electric mobility and sustainable transportation'
    },
    {
      title: 'Softwares',
      poster: '/assets/images/autokriti/software posters (1).webp',
      description: 'Discover automotive software solutions and programming'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-6 gap-6 items-center justify-center min-h-screen">
      {/* Left Poster Image */}
      <motion.div 
        className="w-full md:w-1/2 max-w-md relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPoster}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={currentPoster}
              alt="Autokriti Poster"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg transition-all duration-300"
              priority
            />
            {isHovered && activeItem !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-lg"
              >
                <p className="text-white text-center">{items[activeItem].description}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Right Offer Box */}
      <motion.div 
        className="bg-[#0A0A26] text-white rounded-xl p-8 w-full md:w-1/2 max-w-md shadow-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          What we Offer?
        </motion.h2>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <motion.li 
              key={index}
              className={`flex items-center text-lg font-semibold transition-all duration-300 cursor-pointer p-2 rounded-lg ${
                activeItem === index 
                  ? 'bg-red-500 text-white transform scale-105' 
                  : 'hover:bg-red-500/20 hover:text-red-500'
              }`}
              onMouseEnter={() => handleHover(item.poster, index)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <span className="text-2xl mr-4">{'>'}</span>
              {item.title}
            </motion.li>
          ))}
        </ul>
        <motion.div 
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button 
            className="bg-red-600 text-white text-lg font-bold py-3 px-6 rounded-lg border-4 border-cyan-300 cursor-pointer hover:bg-red-700 transition duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
