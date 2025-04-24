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
import CountUp from 'react-countup';

const alumniData = [
  {
    id: 1,
    name: "Shubhayu",
    role: "Senior Automotive Engineer",
    batch: "2024",
    image: "/shubhayu.png",
    portrait: "/shubhayu.png",
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
    image: "/ankit rathore.png",
    portrait: "/ankit rathore.png",
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
    image: "/shubhayu.png",
    portrait: "/shubhayu.png",
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
    image: "/ankit rathore.png",
    portrait: "/ankit rathore.png",
    // quote:
    //   "Research is the foundation upon which tomorrow's innovations are built.",
    linkedin: "#",
    twitter: "#",
    achievements: ["PhD in Automotive Engineering", "Research Grant Recipient"],
  },
];

export default function AlumniCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const [yearFilter, setYearFilter] = useState("2024");
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter alumni based on selected year
  const filteredAlumni = alumniData.filter(
    (alumni) => alumni.batch === yearFilter
  );

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
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      filteredAlumni.length > 1
    ) {
      setIsAnimating(true);
      swiperRef.current.swiper.slidePrev();
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (
      swiperRef.current &&
      swiperRef.current.swiper &&
      filteredAlumni.length > 1
    ) {
      setIsAnimating(true);
      swiperRef.current.swiper.slideNext();
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

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Featured Alumni */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
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
                {filteredAlumni.length > 0 ? (
                  <>
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
                        <div className="flex flex-wrap gap-2 mt-4">
                          {active.achievements?.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium bg-blue-900/40 text-blue-200 rounded-full"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>

                        {/* Social links & navigation */}
                        <div className="flex items-center gap-6 mt-6">
                          {/* Social icons */}
                          <div className="flex gap-3">
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

                          <div className="w-px h-8 bg-gray-700"></div>

                          {/* Navigation controls */}
                          <div className="flex gap-3">
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
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-300 mb-3">
                      No Alumni Data
                    </h3>
                    <p className="text-gray-500 max-w-md mb-6">
                      We couldn't find any alumni records for the selected batch
                      year. Please try selecting a different year.
                    </p>
                    <div className="flex gap-3">
                      {["2022", "2023", "2024"].map((year) => (
                        <button
                          key={year}
                          onClick={() => setYearFilter(year)}
                          className={`px-5 py-2.5 rounded-full font-medium transition-colors ${
                            year === yearFilter
                              ? "bg-gray-700 text-gray-300"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 -z-10 w-full h-full rounded-3xl border-2 border-dashed border-blue-800/30"></div>
              <div className="absolute top-12 left-12 -z-20 w-full h-full rounded-3xl border-2 border-dashed border-indigo-900/20"></div>

              {/* Stats cards - positioned to the side of the carousel */}

              {/* Floating visual elements - repositioned */}
              <div className="absolute right-[-80px] bottom-[-40px] z-0 hidden xl:block pointer-events-none">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-600/10 to-indigo-600/5 blur-xl"></div>
              </div>
              <div className="absolute right-[-40px] top-[-20px] z-0 hidden xl:block pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-purple-600/10 to-blue-600/5 blur-xl"></div>
              </div>

              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 300,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                loop={filteredAlumni.length > 1}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false,
                  enabled: filteredAlumni.length > 1,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full p-8"
              >
                {filteredAlumni.length > 0 &&
                  filteredAlumni.map((alumnus, idx) => (
                    <SwiperSlide
                      key={alumnus.id}
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
                          src={alumnus.image}
                          alt={alumnus.name}
                          fill
                          className="object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 240px, 280px"
                        />

                        {/* Content overlay */}
                        <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="space-y-2">
                            <h4 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                              {alumnus.name}
                            </h4>
                            <p className="text-sm text-gray-300">
                              {alumnus.role}
                            </p>

                            {/* Hidden details that appear on hover */}
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 pt-2 opacity-0 group-hover:opacity-100">
                              <div className="flex gap-3 mt-3">
                                <a
                                  href={alumnus.linkedin}
                                  className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                  </svg>
                                </a>
                                <a
                                  href={alumnus.twitter}
                                  className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
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

                        {/* Active indicator */}
                        {idx === activeIndex && (
                          <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-400 z-30 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.7)]"></div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}

                {filteredAlumni.length === 0 && (
                  <SwiperSlide className="w-full h-[320px] md:h-[380px]">
                    <div className="h-full flex flex-col items-center justify-center bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-gray-500 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <h3 className="text-xl font-bold text-gray-300 mb-2">
                        No Alumni Found
                      </h3>
                      <p className="text-center text-gray-500">
                        No alumni records available for the selected batch year.
                      </p>
                      <button
                        onClick={() => setYearFilter("2024")}
                        className="mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
                      >
                        View 2024 Batch
                      </button>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>

            {/* Indicator badges */}
            <div className="flex justify-center mt-8 gap-2">
              <div className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-medium flex items-center backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
                {filteredAlumni.length} Alumni
              </div>
              <div className="px-4 py-2 bg-indigo-900/30 text-indigo-300 rounded-full text-sm font-medium flex items-center backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2"></span>
                Batch {yearFilter}
              </div>
            </div>

            {/* Additional content for right side - Redesigned to fit better */}
            <div className="mt-12 mb-8">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="h-[2px] bg-gradient-to-r from-blue-500/80 to-transparent"></div>
                </div>
                <div className="px-4 py-2 text-gray-400 text-sm font-medium">
                  Alumni Impact
                </div>
                <div className="flex-1">
                  <div className="h-[2px] bg-gradient-to-l from-indigo-500/80 to-transparent"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 text-center">
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-300 mb-1">
                    12+
                  </div>
                  <div className="text-gray-400 text-xs">Fortune 500</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-indigo-300 mb-1">
                    85%
                  </div>
                  <div className="text-gray-400 text-xs">Tech Industry</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-purple-300 mb-1">
                    20+
                  </div>
                  <div className="text-gray-400 text-xs">Patents Filed</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                  <div className="text-2xl font-bold text-blue-300 mb-1">
                    45+
                  </div>
                  <div className="text-gray-400 text-xs">Partnerships</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-full items-center">
              {/* <div className="space-y-4"> */}
              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-lg w-28 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-blue-300 text-sm mb-1">Projects</div>
                <div className="text-xl font-bold text-white">50+</div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-lg w-28 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-indigo-300 text-sm mb-1">Countries</div>
                <div className="text-xl font-bold text-white">12</div>
              </div>

              <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-700/50 shadow-lg w-28 flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-purple-300 text-sm mb-1">Awards</div>
                <div className="text-xl font-bold text-white">36</div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
