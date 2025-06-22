"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useEffect } from "react";

import { ArrowLeft, ArrowRight, SkipBack, SkipForward } from "lucide-react";

const images = [
  "/assets/images/crowdfunding/Brochure/1.webp",
  "/assets/images/crowdfunding/Brochure/2.webp",
  "/assets/images/crowdfunding/Brochure/3.webp",
  "/assets/images/crowdfunding/Brochure/4.webp",
  "/assets/images/crowdfunding/Brochure/5.webp",
  "/assets/images/crowdfunding/Brochure/6.webp",
  "/assets/images/crowdfunding/Brochure/7.webp",
  "/assets/images/crowdfunding/Brochure/8.webp",
  "/assets/images/crowdfunding/Brochure/9.webp",
  "/assets/images/crowdfunding/Brochure/10.webp",
  "/assets/images/crowdfunding/Brochure/11.webp",
  "/assets/images/crowdfunding/Brochure/12.webp",
  "/assets/images/crowdfunding/Brochure/13.webp",
  "/assets/images/crowdfunding/Brochure/14.webp",
  "/assets/images/crowdfunding/Brochure/15.webp",
  "/assets/images/crowdfunding/Brochure/16.webp",
  "/assets/images/crowdfunding/Brochure/17.webp",
  "/assets/images/crowdfunding/Brochure/18.webp",
  "/assets/images/crowdfunding/Brochure/19.webp",
  "/assets/images/crowdfunding/Brochure/20.webp",
  "/assets/images/crowdfunding/Brochure/21.webp",
  "/assets/images/crowdfunding/Brochure/22.webp",
  "/assets/images/crowdfunding/Brochure/23.webp",
  "/assets/images/crowdfunding/Brochure/24.webp",
  "/assets/images/crowdfunding/Brochure/25.webp",
  "/assets/images/crowdfunding/Brochure/26.webp",
  "/assets/images/crowdfunding/Brochure/27.webp",
  "/assets/images/crowdfunding/Brochure/28.webp",
  // Add your image paths
];

export default function Brochure() {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      
      // Add event listeners to custom buttons
      if (prevButtonRef.current) {
        prevButtonRef.current.addEventListener('click', () => {
          swiper.slidePrev();
        });
      }
      
      if (nextButtonRef.current) {
        nextButtonRef.current.addEventListener('click', () => {
          swiper.slideNext();
        });
      }
    }
  }, []);

  return (
    <div className="relative w-[90%] mx-auto mb-18 z-10">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-300 to-indigo-300">
            View Our Vision
          </h2>
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        loop={true}
        className="rounded-2xl overflow-hidden mx-auto"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} width={1200} height={100} className="object-cover mx-auto rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 flex space-x-6 z-10">
        <button 
          ref={prevButtonRef}
          className="group relative w-12 h-12 bg-gray-800 text-blue-300 border border-gray-700 shadow-md rounded-full hover:bg-gray-700 flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button 
          ref={nextButtonRef}
          className="group relative w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
