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

  return (
    <div ref={ref} className="flex flex-col text-white lg:flex-row mt-[10vh] gap-[30px] justify-center min-h-screen px-4 md:px-8 max-[700px]:px-8 max-[500px]:px-4 overflow-hidden">

      {/* Removed the progress bars section */}

      {/* Text Section */}
      <motion.div
        className="w-full lg:w-[95%]"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="w-full text-center bg-red text-4xl sm:text-[70px] font-bold mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          About Auto
          {/* <span className="relative inline-block w-[60px] h-[60px] translate-y-3">
            <Image src="/tyre.png" alt="tyre" fill style={{ objectFit: 'contain' }} />
          </span> */}
          kriti
        </motion.h1>

        <motion.div
          className="bg-red text-justify text-base sm:text-lg leading-relaxed space-y-6 bg-white/20 rounded-3xl p-8"
          initial={{ opacity: 0, y: 20 }}
          style={{ backgroundImage: "url('/back2.webp')",
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backgroundBlendMode: 'darken',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
           }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.p className="text-lg sm:text-xl" transition={{ delay: 1 }}>
            Autokriti, established in 2010, is North India’s largest student-led automobile workshop, hosted annually by SAE NIT Kurukshetra. It has grown into a powerhouse event where hundreds of engineering enthusiasts gather to gain practical insights into the world of mobility and industrial vehicles.
          </motion.p>
          <motion.p className="text-lg sm:text-xl" transition={{ delay: 1.2 }}>
            From its humble beginnings with a two-stroke scooter engine in Autokriti 1.0 to the complete teardown of a 3.6L Turbocharged V6 Porsche Cayenne in Season 11.0, Autokriti has always evolved with technology—offering hands-on experiences that bridge the gap between textbooks and wrenches.
          </motion.p>
          <motion.p className="text-lg sm:text-xl" transition={{ delay: 1.4 }}>
            What sets Autokriti apart is its inclusive spirit. Whether you're a hardcore gearhead or just curious, there's always something to spark your curiosity—from IC engines and EV systems to simulation, design, and electronics.
          </motion.p>
          <motion.p className="text-lg sm:text-xl" transition={{ delay: 1.5 }}>
            In response to the pandemic, E-Autokriti was launched—a fully digital edition that brought the same depth of learning and excitement to students across the country. Now, with the latest editions pushing boundaries even further, Autokriti continues to redefine how automotive education meets innovation.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutAutokriti;
