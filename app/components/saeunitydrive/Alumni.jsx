"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const alumniData = [
  {
    id: 1,
    name: "Shubhayu",
    role: "Senior Automotive Engineer",
    batch: "2024",
    image: "/shubhayu.png",
    portrait: "/shubhayu.png",
  },
  {
    id: 2,
    name: "Ankit Rathore",
    role: "AI Researcher",
    batch: "2024",
    image: "/ankit rathore.png",
    portrait: "/ankit rathore.png",
  },
  {
    id: 3,
    name: "Lisha Garg",
    role: "Product Designer",
    batch: "2024",
    image: "/assets/images/homepage/lishagarg.svg",
    portrait: "/assets/images/homepage/lishagarg.svg",
  },
  {
    id: 4,
    name: "Himanshu Khatri",
    role: "CTO, AutoTech Inc.",
    batch: "2024",
    image: "/assets/images/homepage/himanshu.svg",
    portrait: "/assets/images/homepage/himanshu.svg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Mechanical Lead",
    batch: "2024",
    image: "/shubhayu.png",
    portrait: "/shubhayu.png",
  },
  {
    id: 6,
    name: "Neha Sharma",
    role: "Research Head",
    batch: "2024",
    image: "/ankit rathore.png",
    portrait: "/ankit rathore.png",
  }
];

export default function AlumniCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const active = hoveredIndex !== null ? alumniData[hoveredIndex] : alumniData[activeIndex];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Reset hovered index when autoplay changes slide
  useEffect(() => {
    setHoveredIndex(null);
  }, [activeIndex]);

  return (
    <div className="px-8 py-16">
      <div className="flex justify-between items-center mb-8 ml-9">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">OUR PROUD ALUMNI <br/>SPONSORS</h2>
          <p className="mt-4 text-gray-500 max-w-xl">
            Meet the trailblazers who have fueled our journey. Their support
            has been instrumental in driving innovation at SAE NIT Kurukshetra
          </p>
        </div>
        <div>
          <button className="bg-gray-100 mr-2 px-4 py-2 rounded-md font-semibold text-blue-600 shadow-sm">
            YEAR : 2024
          </button>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap items-end gap-6">
        {/* Left: Thumbnail images carousel */}
        <div className="w-full lg:w-[55%]">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full"
          >
            {alumniData.map((alumnus, idx) => (
              <SwiperSlide key={alumnus.id}>
                <div 
                  className="relative w-full h-[300px] cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Image
                    src={alumnus.image}
                    alt={alumnus.name}
                    fill
                    className={`object-cover transition-all duration-300 rounded-md ${
                      idx === activeIndex ? "" : "opacity-70 group-hover:opacity-100"
                    }`}
                    sizes="(max-width: 200px) 100vw, 200px"
                  />
                  <div className={`absolute inset-0 rounded-md transition-opacity duration-300 ${
                    idx === activeIndex || idx === hoveredIndex ? "opacity-100" : "opacity-0"
                  }`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Center: Info section */}
        <div className="flex flex-col lg:flex-row items-end gap-10 mt-6 lg:mt-0">
          <div className="transition-all duration-300 w-[250px]">
            <h3 className="text-3xl font-bold">{active.name}</h3>
            <p className="text-lg mt-2 text-gray-600">{active.role}</p>
            <p className="text-md mt-1 text-gray-500">Batch {active.batch}</p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative bg-blue-700 rounded-lg p-6 overflow-hidden">
            <div className="relative w-72 h-96 transition-transform duration-500">
              <Image
                src={active.portrait}
                alt={active.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 288px) 100vw, 288px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
