"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonialsData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Former SAE President",
    batch: "2022",
    image: "/testimonials/person1.webp",
    quote:
      "Being part of SAE was a transformative experience that shaped my engineering career. The Unity Drive initiative truly embodies the collaborative spirit we need in technical education.",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Corporate Sponsor",
    batch: "Industry Partner",
    image: "/testimonials/person2.webp",
    quote:
      "Working with the SAE NIT Kurukshetra team has been exceptional. Their dedication to innovation and commitment to excellence makes them stand out among student organizations.",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Mechanical Engineering Faculty",
    batch: "NIT Kurukshetra",
    image: "/testimonials/person3.webp",
    quote:
      "The SAE Unity Drive demonstrates how students can bridge theoretical knowledge with practical applications. It's initiatives like these that prepare our students for real-world challenges.",
  },
  {
    id: 4,
    name: "Ananya Reddy",
    role: "SAE Competition Winner",
    batch: "2023",
    image: "/testimonials/person4.webp",
    quote:
      "The mentorship and resources provided through SAE helped our team excel in national competitions. The Unity Drive expands these opportunities to even more students.",
  },
  {
    id: 5,
    name: "Rajat Kapoor",
    role: "Industry Mentor",
    batch: "Automotive Industry",
    image: "/testimonials/person5.webp",
    quote:
      "The innovative thinking and technical skills of SAE NIT Kurukshetra students is impressive. The Unity Drive will further strengthen the industry-academia connection.",
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "SAE Alumni",
    batch: "2021",
    image: "/testimonials/person6.webp",
    quote:
      "The teamwork and practical skills I developed at SAE directly contributed to my career success. Unity Drive will take this impact to the next level.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const active =
    hoveredIndex !== null
      ? testimonialsData[hoveredIndex]
      : testimonialsData[activeIndex];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsAnimating(true);
      swiperRef.current.swiper.slidePrev();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsAnimating(true);
      swiperRef.current.swiper.slideNext();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="py-20 overflow-hidden bg-gray-900 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[55%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        {/* <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div> */}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Section header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            What People Say About Us
          </h2>
          <p className="text-gray-400 text-lg">
            Hear from our community members, partners, and supporters about
            their experiences with SAE and the Unity Drive initiative.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Featured Testimonial */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div
              className={`relative bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden h-full p-8 lg:p-10 backdrop-blur-sm border border-gray-700/50 
                         transition-all duration-700 ${
                           isAnimating
                             ? "scale-[0.98] opacity-90"
                             : "scale-100 opacity-100"
                         }`}
            >
              <div className="absolute top-0 right-0 w-full h-16 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20"></div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20"></div>

              <div className="flex flex-col h-full relative z-10">
                {/* Quote */}
                <div className="mb-8">
                  <svg
                    className="h-12 w-12 text-blue-800"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H10z M20,8c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7h1v-2h-1c-2.757,0-5-2.243-5-5c0-2.757,2.243-5,5-5h2V8H20z"></path>
                  </svg>
                  <p className="text-xl md:text-2xl font-light text-gray-300 italic mt-4 leading-relaxed">
                    {active.quote}
                  </p>
                </div>

                {/* Person Info */}
                <div className="mt-auto flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl text-white">
                      {active.name}
                    </h4>
                    <p className="text-blue-400">{active.role}</p>
                    <p className="text-gray-500 text-sm">{active.batch}</p>
                  </div>
                </div>
              </div>
              {/* Navigation buttons */}
              <div className="absolute bottom-[10%] right-[20%] transform -translate-y-[25%] z-40 -ml-5 top-20">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-gray-800 text-blue-300 border border-gray-700 shadow-md rounded-full hover:bg-gray-700 flex items-center justify-center backdrop-blur-sm transition-colors"
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
              </div>
              <div className="absolute bottom-[10%] right-[15%] transform -translate-y-[25%] z-40 -mr-5">
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 flex items-center justify-center backdrop-blur-sm transition-colors"
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
          </div>

          {/* Right: Carousel */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2">
            <div className="relative">
              

              {/* Carousel */}
              <Swiper
                ref={swiperRef}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="testimonials-swiper"
              >
                {testimonialsData.map((testimonial, idx) => (
                  <SwiperSlide
                    key={testimonial.id}
                    className="w-[240px] h-[320px] md:w-[280px] md:h-[380px]"
                  >
                    <div
                      className="relative w-full h-full cursor-pointer group"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500 z-30 opacity-0 group-hover:opacity-100 blur-sm"></div>

                      {/* Card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10 rounded-2xl opacity-80 group-hover:opacity-50 transition-opacity duration-300" />
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 240px, 280px"
                      />

                      {/* Content overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {testimonial.role}
                          </p>
                          <p className="text-xs text-gray-400">
                            {testimonial.batch}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Indicator badges */}
            <div className="flex justify-center mt-8 gap-2">
              <div className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium flex items-center backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                {testimonialsData.length} Testimonials
              </div>
            </div>

            {/* Additional decorative element */}
            <div className="mt-12 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="h-[2px] bg-gradient-to-r from-blue-500/80 to-transparent"></div>
                </div>
                <div className="px-4 py-2 text-gray-400 text-sm font-medium">
                  Community Voices
                </div>
                <div className="flex-1">
                  <div className="h-[2px] bg-gradient-to-l from-indigo-500/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
