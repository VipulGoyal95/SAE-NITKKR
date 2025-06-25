"use client";

import React, { useState, useRef } from "react";
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
import { usePathname } from 'next/navigation';
// Add custom styles at the top of the file after imports
const customStyles = `
  .testimonials-swiper .swiper-button-next,
  .testimonials-swiper .swiper-button-prev {
    background: none;
    width: auto;
    height: auto;
    position: static;
    margin: 0;
  }

  .testimonials-swiper .swiper-button-next::after,
  .testimonials-swiper .swiper-button-prev::after {
    display: none;
  }
`;

const testimonials = [
  {
    name: "Manish kumar",
    designation: "Alumnus, Batch of 2016",
    image: "/assets/images/saeunitydrive/Manish.webp",
    feedback:
      "Keep innovating keep building",
  },
  {
    name: "Ravinder Singh Bisht",
    designation: "Alumnus, Batch of 2016",
    image: "/assets/images/saeunitydrive/Ravinder Singh Bisht.webp",
    feedback:
      "Best of luck. Keep up the good work team!",
  },
  {
    name: "Nitin Ahlawat",
    designation: "Alumnus, Batch of 2016",
    image: "/assets/images/saeunitydrive/Nitin Alawat.webp",
    feedback:
      "This is an adventure. Have fun!",
  },
  {
    name: "Parv Sarin",
    designation: "Alumnus, Batch of 2024",
    image: "/assets/images/saeunitydrive/Parv sarin.webp",
    feedback:
      "keep striving for excellence and let your dedication continue to shine!",
  },
  {
    name: "Udit Tripathi",
    designation: "Alumnus, Batch of 2022",
    image: "/assets/images/saeunitydrive/Udit.webp",
    feedback:
      "I would like to believe that I am still a part of the family, baaki aacha kaam karo and make us come back to college to celebrate your achievements",
  },
  {
    name: "Tanishq Ameta",
    designation: "Alumnus, Batch of 2022",
    image: "/assets/images/saeunitydrive/Tanishq Ameta.webp",
    feedback:
      "Nothing much, but whatever you guys do, do it with heart. Learn from previous mistakes that your seniors and we have done, Build a good team and all the best for the competitions👍",
  },
  {
    name: "Kritika Agrawal",
    designation: "Alumnus, Batch of 2024",
    image: "/assets/images/saeunitydrive/Kritika agrawal.webp",
    feedback:
      "Keep it up team !! Stay strong, stay motivated.",
  },
];

const testimonialData2=[
  {
    name: "Ravinder Singh Bisht",
    designation: "Alumnus, Batch of 2016",
    image: "/assets/images/saeunitydrive/Ravinder Singh Bisht.webp",
    feedback:
      "Be curious, keep innovating, and learning. \n Best of luck for all milestones ahead.",
  },
  {
    name: "Anindya Agasty",
    designation: "Alumnus, Batch of 2002",
    image: "/assets/images/crowdfunding/ANINDYA.webp",
    feedback:
      "Best of Luck.",
  },
  // {
  //   name: "Tony Thomas Philip",
  //   designation: "Alumnus, Batch of 2003",
  //   image: "/assets/images/crowdfunding/Tony thomas.webp",
  //   feedback:
  //     "Good luck team NITK!! You all are doing a fantastic job! Proud of you! ",
  // },
  {
    name: "Prateek Kumar Singh",
    designation: "Alumnus, Batch of 2018",
    image: "/assets/images/crowdfunding/Prateek Kumar Singh.webp",
    feedback:
      "I know how much effort you guys make without taking care of your health or grades. In the long term, it all matters. So, keep working hard and enjoy the journey. \n Best of Luck",
  },
]
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const isCrowdfundingPage = pathname.includes('/crowdfunding');

  const testimonialsData = isCrowdfundingPage? testimonialData2: testimonials;


  const active =
    hoveredIndex !== null
      ? testimonialsData[hoveredIndex]
      : testimonialsData[activeIndex];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsAnimating(true);
      swiperRef.current.swiper.slidePrev(500);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setIsAnimating(true);
      swiperRef.current.swiper.slideNext(500);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };


  return (
    <section className="py-20 overflow-hidden bg-gray-900 relative">
      {/* Add the style tag for custom styles */}
      <style>{customStyles}</style>
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[55%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Section header */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Hear from our Contributors
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6 mx-auto"></div>
          <p className="text-gray-400 text-lg">
            We thank you from the bottom of our hearts for believing in us!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Featured Testimonial */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1 z-10">
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
                  {active.feedback.split('\n').map((line, index, arr) => (
                    <span key={index}>
                      {line}
                      {index < arr.length - 1 && <br />}
                    </span>
                  ))}
                  </p>
                </div>

                {/* Person Info */}
                <div className="mt-auto flex items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <Image
                      src={active.image}
                      alt={active.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl text-white">
                      {active.name}
                    </h4>
                    <p className="text-blue-400">{active.designation}</p>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="absolute bottom-8 right-10 flex space-x-4 z-10 max-[450px]:bottom-0 max-[450px]:top-8">
                <button
                  onClick={handlePrev}
                  className="custom-prev-btn w-12 h-12 bg-gray-800 text-blue-300 border border-gray-700 shadow-md rounded-full hover:bg-gray-700 flex items-center justify-center backdrop-blur-sm transition-colors"
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
                  onClick={handleNext}
                  className="custom-next-btn w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:from-blue-700 hover:to-indigo-800 flex items-center justify-center backdrop-blur-sm transition-colors"
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
          <div className="w-full lg:w-1/3 order-1 lg:order-2 z-10">
            <div className="relative">
              {/* Orbit Accent */}
              <div className="absolute -right-16 top-32 w-48 h-48 rounded-full border-4 border-dotted border-indigo-800/30 animate-[spin_35s_linear_infinite_reverse] hidden lg:block"></div>

              {/* Carousel */}
              <Swiper
                ref={swiperRef}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
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
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                navigation={{
                  nextEl: '.custom-next-btn',
                  prevEl: '.custom-prev-btn',
                }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="testimonials-swiper"
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide
                    key={index}
                    className="testimonial-slide w-[280px]"
                  >
                    <div
                      className={`cursor-pointer bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 shadow-lg transition-all duration-300 ${
                        index === activeIndex
                          ? "scale-100 border-blue-500/50"
                          : "scale-90 opacity-70 hover:opacity-100"
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <div className="aspect-square w-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="280px"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full p-4">
                          <h4 className="text-white font-semibold text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-300 text-sm">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
