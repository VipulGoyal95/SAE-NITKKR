"use client"

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';

export default function Herosection() {
  const ref = useRef(null);
  const whoWeAreRef = useRef(null);
  const pathname = usePathname();
  const isNitroxPage = pathname.includes('/nitrox');

  const accelerons={
    urls: [
      "/assets/images/accelerons/img7.webp",
      "/assets/images/accelerons/img12.webp",
      "/assets/images/accelerons/img10.webp",
      "/assets/images/accelerons/img5.webp",
      "/assets/images/accelerons/img11.webp"
    ],
    title:"Team Accelerons Electric",
    about: "Team Accelerons Electric is the formula student team of SAE NIT Kurukshetra—fuelled by a passion for speed, precision, and the art of racing. It's the adrenaline of the first lap, the elegance in engineering, and the challenge of perfecting performance that drive us to design, build, and race formula-style cars for competitions like Formula Bharat and SUPRA SAEINDIA. From making our debut in SUPRA 2014 to emerging as the top-ranking NIT team in SUPRA 2018, our journey has been one of relentless growth and unyielding spirit. As Felipe Massa once said, \"When you give up your hunger for success, you are not racing full-heartedly anymore.\" And hunger is something we never run out of."
  }

  const nitrox={
    urls: [
      "/assets/images/nitrox/hero.webp",
      "/assets/images/nitrox/img1.webp",
      "/assets/images/nitrox/img2.webp",
      "/assets/images/nitrox/img3.webp",
      "/assets/images/nitrox/img4.webp"
    ],
    title: "Team Nitrox",
    about: "TEAM NITROX is a dedicated group of engineering enthusiasts united by a common goal: to build a high-performance ATV (All-Terrain Vehicle) that can dominate any terrain. Established in 2010 under the banner of SAE NIT Kurukshetra, the team has consistently evolved, excelling both technically and competitively. From being one of the few teams to design its own Continuously Variable Transmission (CVT) to representing India at BAJA SAE Illinois, and to even debuting our 4X4 ATV: Team Nitrox has consistently demonstrated exceptional growth and innovation in the field of off-road engineering."
  }

  const team = isNitroxPage ? nitrox : accelerons;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === team.urls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [team.urls.length]);

  return (
    <div className="text-white overflow-hidden">
      <div ref={ref} className="min-h-screen flex flex-col items-center justify-start relative">
        <motion.div className="relative w-full h-[100vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className="fixed inset-0 w-full h-screen -z-10"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
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
                  alt={`${team.title} Image ${index + 1}`}
                  fill
                  className="object-cover brightness-75"
                  priority
                />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute inset-0 flex items-end justify-center py-8 px-8 max-[450px]:mb-10 md:px-16">
            <div className="relative">
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-[460px]:text-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {team.title}
              </motion.h1>
              <motion.div className="h-1 bg-white mt-2 mb-6 origin-center max-[550px]:mb-12 max-[460px]:mb-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}              
              />
            </div>
          </div>
        </motion.div>

        {/* Who Are We Section */}
        <div 
          ref={whoWeAreRef}
          className="w-full bg-black px-4 py-16 md:py-20"
        >
          <motion.div className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Who Are We
            </h2>
            
            <motion.div className="space-y-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 ,delay: 0.5 }}
            >
              <p className="text-white text-lg md:text-xl leading-relaxed">
                {team.about}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
