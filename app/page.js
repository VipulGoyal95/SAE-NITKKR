'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import Whoweare from "./components/Whoweare";
import OurTeams from "./components/OurTeams";
import TabbedCards from "./components/TabbedCards";
import Participation from "./components/Participation";
import ScrollingGallery from "./components/ScrollingGallery";
import Teammembers from "./components/Teammembers";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
    <div>
      <motion.div 
        className="relative text-center w-full h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/img9.png"
            alt="SAE NIT Kurukshetra"
            fill
            className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            priority
          />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full mt-4 max-w-[90%] md:max-w-[550px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              SAE NIT Kurukshetra
            </h2>
            <motion.div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/50 group-hover:bg-white transition-colors duration-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <Whoweare />
      <OurTeams />
      <Sponsors />
      <Teammembers />
    </div>
  );
}
