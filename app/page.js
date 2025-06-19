"use client";
import Image from "next/image";
import { useEffect, useState} from 'react';
import { motion } from "framer-motion";
import Whoweare from "./components/Whoweare";
import OurTeams from "./components/OurTeams";
import Teammembers from "./components/Teammembers";
import Sponsors from "./components/Sponsors";

export default function Home() {

  const team = {
    urls: [
     "/heroimg.webp",
     "/hero2.webp",
     "/hero3.webp",
     "/hero4.webp",
   ]
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === team.urls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [team.urls.length]);


  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div className="min-h-screen relative">
      {/* Abstract SVG Background Patterns */}
      {/* <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute top-0 left-0 opacity-10"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,30 Q80,40 60,30 Q40,20 20,30 L0,20 Z"
            fill="url(#headerGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="headerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute bottom-0 right-0 opacity-10"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M100,100 L0,100 L0,70 Q20,60 40,70 Q60,80 80,70 L100,80 Z"
            fill="url(#footerGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="footerGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      {/* Hero Section */}
      <motion.div
        className="relative text-center w-full h-screen overflow-hidden max-[460px]:h-[42vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Dynamic Background Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Animated Particles Background */}
        {/* <div className="absolute inset-0 z-5">
          <svg
            className="w-full h-full opacity-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={Math.random() * 100}
                cy={Math.random() * 100}
                r={Math.random() * 0.5 + 0.1}
                fill="white"
                initial={{ opacity: 0.1 }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: Math.random() * 3 + 2,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </svg>
        </div> */}

        {/* Hero Image with Fixed Background Effect */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed inset-0 w-full h-screen -z-10 max-[460px]:h-[42vh]"
        >
          {team.urls.map((url, index) => (
              <div
                key={url}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={url}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover brightness-75"
                  priority
                />
              </div>
            ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[90%] md:max-w-[650px] max-[460px]:-translate-y-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Decorative SVG Lines */}
          {/* <motion.svg
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[150%] w-[100px] h-[100px] max-[460px]:w-[60px] max-[460px]:h-[60px] opacity-80"
            viewBox="0 0 100 100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.path
              d="M50,10 L50,90"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.4 }}
            />
            <motion.path
              d="M20,50 L80,50"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 1.6 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="white"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.8 }}
            />
          </motion.svg> */}

          {/* Main Title */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-[460px]:text-2xl max-[460px]:mb-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome To
          </motion.h1>
          <motion.div
            className="relative group"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-[460px]:text-2xl max-[460px]:mb-2">
              SAE NIT Kurukshetra
            </h2>

            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-white group-hover:bg-gradient-to-r hover:bg-white transition-all duration-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>

          {/* CTA Button */}
          {/* <motion.button
            className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white rounded-full font-medium shadow-lg transform transition-all hover:scale-105 hover:shadow-xl max-[460px]:mt-3 max-[460px]:px-4 max-[460px]:py-1 max-[460px]:text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore
          </motion.button> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 max-[460px]:bottom-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.svg
            width="30"
            height="50"
            viewBox="0 0 30 50"
            className="max-[460px]:w-5 max-[460px]:h-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <rect
              x="12"
              y="5"
              width="6"
              height="15"
              rx="3"
              fill="white"
              opacity="0.6"
            />
            <motion.circle
              cx="15"
              cy="12"
              r="3"
              fill="white"
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Section Divider */}
      {/* <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute w-full h-24"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M0,0 L100,0 L100,20 C75,40 25,40 0,20 Z"
            fill="white"
            opacity="0.05"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            d="M0,0 L100,0 L100,15 C75,35 25,35 0,15 Z"
            fill="white"
            opacity="0.05"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          />
          <motion.path
            d="M0,0 L100,0 L100,10 C75,30 25,30 0,10 Z"
            fill="white"
            opacity="0.05"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </svg>
      </div> */}

      {/* Content Sections with Section Transitions */}
      <Whoweare />

      {/* Section Divider */}
      {/* <div className="relative h-24 overflow-hidden transform rotate-180">
        <svg
          className="absolute w-full h-24"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 L100,0 L100,20 C75,40 25,40 0,20 Z"
            fill="white"
            opacity="0.05"
          />
        </svg>
      </div> */}

      <OurTeams />
      <Sponsors />

      {/* Section Divider */}
      {/* <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute w-full h-24"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,0 L100,0 L100,20 C50,0 50,40 0,20 Z"
            fill="white"
            opacity="0.05"
          />
        </svg>
      </div> */}

      <Teammembers />
    </div>
  );
}
