"use client";

import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  EffectCards,
} from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";

const alumniData = [
  {
    id: 1,
    name: "Shubhayu",
    role: "Senior Automotive Engineer",
    batch: "2024",
    image: "/shubhayu.webp",
    portrait: "/shubhayu.webp",
    // quote: "Innovation is the driving force behind automotive evolution.",
    linkedin: "#",
    twitter: "#",
    achievements: [
      "Best Innovation Award 2023",
      "Published in Automotive Journal",
    ],
  },
  {
    id: 2,
    name: "Ankit Rathore",
    role: "AI Researcher",
    batch: "2024",
    image: "/ankit rathore.webp",
    portrait: "/ankit rathore.webp",
    // quote:
    //   "The future of mobility lies at the intersection of AI and engineering.",
    linkedin: "#",
    twitter: "#",
    achievements: ["ML Research Lead", "3 Patents Filed"],
  },
  {
    id: 3,
    name: "Lisha Garg",
    role: "Product Designer",
    batch: "2024",
    image: "/assets/images/homepage/lishagarg.svg",
    portrait: "/assets/images/homepage/lishagarg.svg",
    // quote:
    //   "Design thinking transforms good vehicles into extraordinary experiences.",
    linkedin: "#",
    twitter: "#",
    achievements: ["Design Excellence Award", "UX Conference Speaker"],
  },
  {
    id: 4,
    name: "Himanshu Khatri",
    role: "CTO, AutoTech Inc.",
    batch: "2024",
    image: "/assets/images/homepage/himanshu.svg",
    portrait: "/assets/images/homepage/himanshu.svg",
    // quote: "Technology should enhance human potential, not replace it.",
    linkedin: "#",
    twitter: "#",
    achievements: ["Forbes 30 Under 30", "Tech Innovator Award"],
  },
  {
    id: 5,
    name: "Shubhayu",
    role: "Mechanical Lead",
    batch: "2024",
    image: "/shubhayu.webp",
    portrait: "/shubhayu.webp",
    // quote:
    //   "Engineering excellence is built on precision, passion, and perseverance.",
    linkedin: "#",
    twitter: "#",
    achievements: ["SAE Technical Paper Author", "Formula Student Judge"],
  },
  {
    id: 6,
    name: "Ankit Rathore",
    role: "Research Head",
    batch: "2024",
    image: "/ankit rathore.webp",
    portrait: "/ankit rathore.webp",
    // quote:
    //   "Research is the foundation upon which tomorrow's innovations are built.",
    linkedin: "#",
    twitter: "#",
    achievements: ["PhD in Automotive Engineering", "Research Grant Recipient"],
  },
];

export default function AlumniCarousel() {
  const [prevIndex, setPrevIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const [yearFilter, setYearFilter] = useState("2024");
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter alumni based on selected year
  const filteredAlumni = alumniData.filter(
    (alumni) => alumni.batch === yearFilter
  );

  // Update indices when activeIndex changes
  useEffect(() => {
    if (filteredAlumni.length > 0) {
      setPrevIndex(activeIndex > 0 ? activeIndex - 1 : filteredAlumni.length - 1);
      setNextIndex(activeIndex < filteredAlumni.length - 1 ? activeIndex + 1 : 0);
    }
  }, [activeIndex, filteredAlumni.length]);

  const active =
    filteredAlumni.length > 0
      ? hoveredIndex !== null
        ? filteredAlumni[hoveredIndex]
        : filteredAlumni[activeIndex]
      : {
          name: "",
          role: "",
          batch: yearFilter,
          image: "",
          portrait: "",
          quote: "",
          linkedin: "#",
          twitter: "#",
          achievements: [],
        };

  const handlePrev = () => {
    if (filteredAlumni.length > 1) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredAlumni.length - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (filteredAlumni.length > 1) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev < filteredAlumni.length - 1 ? prev + 1 : 0));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Reset hovered index when autoplay changes slide
  useEffect(() => {
    setHoveredIndex(null);
  }, [activeIndex]);

  // Reset activeIndex when year filter changes
  useEffect(() => {
    setActiveIndex(0);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(0);
    }
  }, [yearFilter]);

  return (
    <div className="relative py-28 px-6 md:px-12 overflow-hidden bg-gray-900 text-gray-100">
      {/* Abstract Shapes - Dark Theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto relative">
        {/* Orbit Accent */}
        <div className="absolute -left-16 top-12 w-32 h-32 rounded-full border-4 border-dotted border-blue-800/30 animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute -right-16 bottom-12 w-48 h-48 rounded-full border-4 border-dotted border-indigo-800/30 animate-[spin_35s_linear_infinite_reverse]"></div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 z-10 relative">
          <div className="mb-8 md:mb-0">
            <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
              Our Network
            </div>
            <h2 className="inline-block text-5xl font-bold bg-gradient-to-r ml-8 from-blue-400 via-indigo-300 to-blue-300 bg-clip-text text-transparent pb-2">
              ALUMNI IMPACT
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3"></div>
            <p className="mt-6 text-gray-400 max-w-xl text-lg leading-relaxed">
              Meet the visionaries who have shaped our journey. Their wisdom,
              support, and mentorship continue to inspire the next generation of
              automotive engineers at SAE NIT Kurukshetra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 font-medium">BATCH</span>
              <div className="relative">
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="appearance-none bg-gray-800 border border-gray-700 rounded-full py-2 pl-6 pr-10 font-medium text-blue-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                  <svg
                    className="h-4 w-4 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-gray-700"></div>

            <button className="flex items-center px-4 py-2 text-blue-300 hover:text-blue-200 font-medium transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter Alumni
            </button>
          </div>
        </div>

        {/* Main Content - Three Container Layout */}
        <div className="flex items-center justify-center gap-8">
          {/* Left Container - Previous Alumni */}
          <div className="w-1/4 max-[1000px]:hidden">
            {filteredAlumni.length > 0 && (
              <div className="relative bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden p-6 backdrop-blur-sm border border-gray-700/50">
                
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={filteredAlumni[prevIndex].image}
                    alt={filteredAlumni[prevIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-bold text-white">
                      {filteredAlumni[prevIndex].name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {filteredAlumni[prevIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Center Container - Current Alumni */}
          <div className="w-1/2 max-[1000px]:w-[80%] max-[768px]:w-[90%] max-[550px]:w-[95%]">
            {filteredAlumni.length > 0 && (
              <div className="relative bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden p-8 backdrop-blur-sm border border-gray-700/50">
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

                  {/* Portrait and Info */}
                  <div className="mt-auto flex flex-col md:flex-row items-center md:items-end gap-8">
                    {/* Portrait */}
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-700 mix-blend-overlay z-10"></div>
                      {/* Decorative elements */}
                      <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-800/30 rounded-full blur-xl z-0"></div>
                      <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-800/30 rounded-full blur-xl z-0"></div>
                      <Image
                        src={active.portrait}
                        alt={active.name}
                        fill
                        className="object-cover z-0"
                        sizes="(max-width: 768px) 192px, 256px"
                        priority
                      />
                      {/* Overlay pattern */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-20"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px] z-30 opacity-30"></div>
                    </div>
                    {/* Info */}
                    <div className="flex flex-col items-center md:items-start">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
                        {active.name}
                      </h3>
                      <p className="text-lg mt-2 text-gray-300 font-medium">
                        {active.role}
                      </p>
                      <p className="text-md mt-1 text-gray-500">
                        Class of {active.batch}
                      </p>
                      {/* Achievements pills */}
                      <div className="flex flex-wrap max-[452px]:justify-center gap-2 mt-4">
                        {active.achievements?.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-blue-900/40 text-blue-200 rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                      {/* Social links */}
                      <div className="flex gap-3 mt-6">
                        <a
                          href={active.linkedin}
                          className="w-9 h-9 bg-gray-700 text-gray-400 hover:text-blue-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                          </svg>
                        </a>
                        <a
                          href={active.twitter}
                          className="w-9 h-9 bg-gray-700 text-gray-400 hover:text-blue-300 rounded-full flex items-center justify-center transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Container - Next Alumni */}
          <div className="w-1/4 max-[1000px]:hidden">
            {filteredAlumni.length > 0 && (
              <div className="relative bg-gray-800/80 rounded-3xl shadow-2xl overflow-hidden p-6 backdrop-blur-sm border border-gray-700/50">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={filteredAlumni[nextIndex].image}
                    alt={filteredAlumni[nextIndex].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-bold text-white">
                      {filteredAlumni[nextIndex].name}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {filteredAlumni[nextIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className={`w-12 h-12 bg-gray-800 text-blue-300 rounded-full flex items-center justify-center border border-gray-700 shadow-md ${
              filteredAlumni.length <= 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-700 transition-colors"
            }`}
            aria-label="Previous alumnus"
            disabled={filteredAlumni.length <= 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            onClick={handleNext}
            className={`w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full flex items-center justify-center shadow-md ${
              filteredAlumni.length <= 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-blue-700 hover:to-indigo-800 transition-colors"
            }`}
            aria-label="Next alumnus"
            disabled={filteredAlumni.length <= 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
  );
}
