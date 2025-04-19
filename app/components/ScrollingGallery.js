'use client';

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const topImages = [
  "/img1.png",
  "/img2.png",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

const bottomImages = [
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/lowcar.png",
];

export default function ScrollingGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="bg-black py-10 space-y-10 overflow-hidden">
        {/* Top Row - Right to Left */}
        <div className="relative w-full h-[200px] overflow-hidden group">
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
              <div 
                key={index} 
                className="relative min-w-[300px] mx-2 group/image cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg border border-gray-800">
                  <Image
                    src={src}
                    alt={`Top image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-[200px] transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-500 rounded-lg" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Bottom Row - Left to Right */}
        <div className="relative w-full h-[200px] overflow-hidden group">
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
              <div 
                key={index} 
                className="relative min-w-[300px] mx-2 group/image cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg border border-gray-800">
                  <Image
                    src={src}
                    alt={`Bottom image ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover w-full h-[200px] transition-transform duration-500 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-colors duration-500 rounded-lg" />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] rounded-lg overflow-hidden">
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
          </div>
        </div>
      )}
    </>
  );
}
