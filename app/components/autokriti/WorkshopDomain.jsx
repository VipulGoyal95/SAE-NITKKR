"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const workshops = [
  {
    title: "Combustion Vehicle",
    price: "INR 1999/-",
    icon: "/assets/images/autokriti/cv.webp",
    gradient: "from-[#ff512f]/40 via-[#dd2476]/20 to-transparent",
  },
  {
    title: "Electric Vehicle",
    price: "INR 1999/-",
    icon: "/assets/images/autokriti/ev.webp",
    gradient: "from-[#00c6ff]/40 via-[#0072ff]/20 to-transparent",
  },
  {
    title: "IOT with AI/ML",
    price: "INR 2499/-",
    icon: "/assets/images/autokriti/iot.webp",
    gradient: "from-[#a8ff78]/40 via-[#78ffd6]/20 to-transparent",
  },
  {
    title: "Software",
    price: "INR 1999/-",
    icon: "/assets/images/autokriti/sw.webp",
    gradient: "from-[#f7971e]/40 via-[#ffd200]/20 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
};

const WorkshopDomain = () => {
  const router = useRouter();
  return (
    <div className="relative w-full h-full py-10 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#dd2476]/20 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[#0072ff]/20 blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center"
      >
        {workshops.map((w, idx) => (
          <motion.div
            key={w.title}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <div
              className={`relative rounded-2xl p-[2px] bg-gradient-to-b ${w.gradient} hover:from-white/30 hover:via-white/10 transition-colors duration-300`}
            >
              <div className="relative h-[260px] w-[240px] rounded-[1rem] bg-[#0b0b0f]/80 hover:bg-[#101014]/90 transition-colors duration-300 backdrop-blur-sm border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)] overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full bg-white/5 blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
                </div>

                <div className="flex flex-col items-center justify-center h-full gap-4 relative z-10">
                  <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-white/5 ring-1 ring-white/10 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={w.icon}
                      alt={w.title}
                      width={72}
                      height={72}
                      className="invert brightness-200 saturate-0 drop-shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold tracking-wide text-zinc-100">
                    {w.title}
                  </h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 text-zinc-200">
                    {w.price}
                  </span>
                </div>

                <motion.div
                  aria-hidden
                  className="absolute inset-x-0 -bottom-10 mx-auto h-20 w-[85%] rounded-full bg-gradient-to-t from-white/10 to-transparent blur-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button
          onClick={() => router.push("/autokriti/registrationform")}
          className="relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-red-700 
             text-white text-lg font-bold py-3 px-8 rounded-xl 
             border border-red-400 shadow-[0_4px_15px_rgba(255,0,0,0.5)] 
             cursor-pointer transition-all duration-300 ease-out
             hover:shadow-[0_8px_25px_rgba(255,0,0,0.7)] hover:scale-105"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Register Now 🚀</span>

          {/* Shine effect */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                   translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
          />

          {/* Glow pulse */}
          <span className="absolute inset-0 rounded-xl animate-pulse bg-red-500/10" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WorkshopDomain;
