'use client';

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const topImages = [
  "/img1.webp",
  "/img2.webp",
  "/img3.webp",
  "/img4.webp",
  "/img5.webp",
];

const bottomImages = [
  "/img5.webp",
  "/img6.webp",
  "/img7.webp",
  "/img8.webp",
  "/lowcar.webp",
];

export default function ScrollingGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="bg-black py-10 space-y-10 overflow-hidden my-16 max-[460px]:my-10"
    >
      {/* Top Row - Right to Left */}
      <motion.div variants={itemVariants} className="relative w-full h-[200px] overflow-hidden">
        {/* Gradient overlay for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        <Marquee
          direction="left"
          speed={50}
          pauseOnHover
          gradient={false}
          className="flex"
        >
          {topImages.map((src, index) => (
            <motion.div 
              key={index} 
              className="relative min-w-[300px] mx-2 cursor-pointer"
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-800">
                <Image
                  src={src}
                  alt={`Top image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-[200px] transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-500 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Bottom Row - Left to Right */}
      <motion.div variants={itemVariants} className="relative w-full h-[200px] overflow-hidden">
        {/* Gradient overlay for fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />
        
        <Marquee
          direction="right"
          speed={50}
          pauseOnHover
          gradient={false}
          className="flex"
        >
          {bottomImages.map((src, index) => (
            <motion.div 
              key={index} 
              className="relative min-w-[300px] mx-2 cursor-pointer"
              onClick={() => setSelectedImage(src)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg border border-gray-800">
                <Image
                  src={src}
                  alt={`Bottom image ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-[200px] transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors duration-500 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden"
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
