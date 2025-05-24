'use client'
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AboutAutokriti = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [isMobile, setIsMobile] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const handleClick = (index) => {
    if (isMobile) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  const progressData = [
    { height: "200px", hoverHeight: "300px", label: "15+\nworkshops" },
    { height: "300px", hoverHeight: "360px", label: "2500+\nstudents" },
    { height: "160px", hoverHeight: "260px", label: "North India's\nbiggest\nworkshop" },
  ];

  return (
    <div ref={ref} className="flex flex-col text-white lg:flex-row mt-[10vh] gap-[30px] justify-center min-h-screen px-4 md:px-8 max-[700px]:px-8 max-[500px]:px-4 overflow-hidden">
      {/* Progress Bars Section */}
      <motion.div
        className="w-full lg:w-[30%] mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-row items-start justify-center gap-8 md:gap-12 h-[400px] max-[440px]:gap-4 max-[410px]:gap-2">
          {progressData.map((bar, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              onClick={() => handleClick(index)}
            >
              <div className="relative">
                <motion.div
                  className={`w-[3px] bg-white transition-all duration-500 ease-in-out 
                    ${isMobile && clickedIndex === index ? 'h-[' + bar.hoverHeight + ']' : ''}`}
                  initial={{ height: 0 }}
                  animate={isInView ? { height: bar.height } : { height: 0 }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                  style={{
                    height: isMobile
                      ? clickedIndex === index
                        ? bar.hoverHeight
                        : bar.height
                      : bar.height
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                />
              </div>
              <div className={`
                text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center 
                transition-all duration-500 -translate-y-4
                ${isMobile ? (clickedIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0') : 'opacity-0 group-hover:opacity-100 group-hover:translate-y-0'}
              `}>
                {bar.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-[50%] lg:pl-16"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="text-4xl sm:text-[70px] font-bold mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          About Autokriti
        </motion.h1>
        <motion.div
          className="text-justify text-base sm:text-lg leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.p transition={{ delay: 1 }}>
            Autokriti, established in 2010, is North India’s largest student-led automobile workshop, hosted annually by SAE NIT Kurukshetra. It has grown into a powerhouse event where hundreds of engineering enthusiasts gather to gain practical insights into the world of mobility and industrial vehicles.
          </motion.p>
          <motion.p transition={{ delay: 1.2 }}>
            From its humble beginnings with a two-stroke scooter engine in Autokriti 1.0 to the complete teardown of a 3.6L Turbocharged V6 Porsche Cayenne in Season 11.0, Autokriti has always evolved with technology—offering hands-on experiences that bridge the gap between textbooks and wrenches.
          </motion.p>
          <motion.p transition={{ delay: 1.4 }}>
            What sets Autokriti apart is its inclusive spirit. Whether you're a hardcore gearhead or just curious, there's always something to spark your curiosity—from IC engines and EV systems to simulation, design, and electronics.
          </motion.p>
          <motion.p transition={{ delay: 1.5 }}>
            In response to the pandemic, E-Autokriti was launched—a fully digital edition that brought the same depth of learning and excitement to students across the country
            Now, with the latest editions pushing boundaries even further, Autokriti continues to redefine how automotive education meets innovation.

          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutAutokriti;
