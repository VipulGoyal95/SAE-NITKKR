"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutAutokriti = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="flex flex-col lg:flex-row mt-[10vh] gap-[30px] justify-center min-h-screen px-4 md:px-8 max-[700px]:px-8">
      <motion.div 
        className="w-full lg:w-[30%] mb-10 lg:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-row items-start justify-center gap-8 md:gap-12 h-[400px]">
          {/* First Progress Bar */}
          <motion.div 
            className="flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div 
                className="w-[3px] bg-white transition-all duration-500 ease-in-out group-hover:h-[300px]"
                initial={{ height: 0 }}
                animate={isInView ? { height: "200px" } : { height: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              15+
              <br />
              workshops
            </div>
          </motion.div>

          {/* Second Progress Bar */}
          <motion.div 
            className="flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div 
                className="w-[3px] bg-white transition-all duration-500 ease-in-out group-hover:h-[360px]"
                initial={{ height: 0 }}
                animate={isInView ? { height: "300px" } : { height: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              2500+
              <br />
              students
            </div>
          </motion.div>

          {/* Third Progress Bar */}
          <motion.div 
            className="flex flex-col items-center group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="w-[3px] bg-white transition-all duration-500 ease-in-out group-hover:h-[260px]"
                initial={{ height: 0 }}
                animate={isInView ? { height: "160px" } : { height: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />
            </div>
            <div className="text-2xl sm:text-[30px] font-bold whitespace-pre mt-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
              North India's
              <br />
              biggest
              <br />
              workshop
            </div>
          </motion.div>
        </div>
      </motion.div>

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Autokriti is north India's largest automobile workshop which began
            in 2010. Every year loads of students gets enrolled to gain
            firsthand knowledge of industrial vehicles. The last held physical
            autokriti in 2019 saw a participation of 700+ candidates.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            It involves overhauling of a star engine, which varied from a 2
            stroke engine of a scooter in Autokriti 1 to 3.6L turbocharged V6
            Porsche Cayenne in season 11.0; always in cahoots with technology.
            And not just the gearheads, but geeks from all branches of
            technology find here the stuffs of their interest.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            E- Autokriti is a digital edition of Autokriti, where this legacy of
            imparting knowledge continues amid the current covid crisis. And
            with many new surprises awaiting e-autokriti 2.0, we are expecting
            an even greater engagement
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutAutokriti;
