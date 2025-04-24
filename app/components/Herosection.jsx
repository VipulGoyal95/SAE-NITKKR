"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Herosection() {
  const ref = useRef(null);
  const whoWeAreRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isWhoWeAreInView = useInView(whoWeAreRef, { once: true, amount: 0.3 });
  const pathname = usePathname();
  const isNitroxPage = pathname.includes('/nitrox');

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const accelerons={
    url:"/img7.jpg",
    title:"Team Accelerons Electric",
    about: "TEAM ACCELERONS is a student-led engineering team of SAE NIT Kurukshetra. The feeling of speed and precision, the tactical aspects, the way car looks, the way it behaves, that first lap excitement and the intrigues that surround it, are the things that drives the team to DESIGN, BUILD and RACE formula-style cars for the Formula Bharat and SUPRA competitions. From being a first-timer in SUPRA 2014 to standing on top among all NITS in SUPRA 2018, the Team has come a long way, upgrading itself with each passing season.. After all Felipe Massa rightly said, \"When you give up your hunger for success you are not racing full heartedly anymore.\""
  }

  const nitrox={
    url: "/assets/images/nitrox/hero.jpg",
    title: "Team Nitrox",
    about: "TEAM NITROX is a group of junkies with a shared objective to create a fierce beast of an ATV (All-terrain vehicle). The team was founded back in 2010 under SAE NIT KURUKSHETRA. Since its foundation, the team has grown in all aspects, be its technical or competitive. From one of the few teams that design its own CVT to representing the country in BAJA SAE Illinois, the team has repeatedly provided evidence of its exceptional growth."
  }
  const team = isNitroxPage ? nitrox : accelerons;
  return (
    <div className="bg-black text-white overflow-hidden">
      <div ref={ref} className="min-h-screen flex flex-col items-center justify-start relative">
        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-[100vh] overflow-hidden"
        >
          <Image
            src={team.url}
            alt="Team Accelorons Car"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute inset-0 flex items-end justify-center py-8 px-8 md:px-16"
          >
            <div className="relative">
              <motion.h1 
                variants={titleVariants}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center"
              >
                {team.title}
              </motion.h1>
              <motion.div
                variants={lineVariants}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="h-1 bg-white mt-2 mb-6 origin-center"
                style={{ transformOrigin: "center" }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Who Are We Section */}
        <div 
          ref={whoWeAreRef}
          className="w-full bg-black px-4 py-16 md:py-20"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial="hidden"
              animate={isWhoWeAreInView ? "visible" : "hidden"}
              variants={contentVariants}
              custom={0}
              className="text-4xl md:text-5xl font-bold text-white text-center mb-8"
            >
              Who Are We
            </motion.h2>
            
            <div className="space-y-6 text-center">
              <motion.p 
                initial="hidden"
                animate={isWhoWeAreInView ? "visible" : "hidden"}
                variants={contentVariants}
                custom={1}
                className="text-white text-lg md:text-xl leading-relaxed"
              >
                {team.about}
              </motion.p>
              
              {/* <motion.p 
                initial="hidden"
                animate={isWhoWeAreInView ? "visible" : "hidden"}
                variants={contentVariants}
                custom={2}
                className="text-white text-lg md:text-xl leading-relaxed"
              >
                From a rookie debut in SUPRA 2014 to dominating as the top NIT in 2018,
                our journey is fueled by grit, late nights, and the thrill of that first
                green flag.
              </motion.p> */}
              
              {/* <motion.p 
                initial="hidden"
                animate={isWhoWeAreInView ? "visible" : "hidden"}
                variants={contentVariants}
                custom={3}
                className="text-white text-2xl md:text-3xl font-bold mt-8"
              >
                "We don't chase podiums — we build towards them."
              </motion.p> */}
              
              {/* <motion.p 
                initial="hidden"
                animate={isWhoWeAreInView ? "visible" : "hidden"}
                variants={contentVariants}
                custom={4}
                className="text-white text-xl md:text-2xl font-semibold"
              >
                Driven by passion. Engineered with purpose.
              </motion.p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
