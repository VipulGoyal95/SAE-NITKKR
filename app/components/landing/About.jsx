"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">WHO ARE WE?</h2>
            <p className="mb-6 text-lg text-gray-300">
              SAE NIT Kurukshetra is the official NIT KKR collegiate chapter of
              SAE India, affiliated with SAE International—the global authority
              in mobility engineering. We are a community of aspiring engineers
              committed to bridging the gap between academic knowledge and
              real-world application.
            </p>
            <p className="text-lg text-gray-300">
              At our core, we believe engineering is not just learned, but
              lived. Through collaboration across disciplines, hands-on
              experience, and a relentless pursuit of innovation, we explore
              every facet of mobility—from design and simulation to fabrication
              and testing.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Competitions</h3>
              <div className="flex flex-wrap gap-4">
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Baja SAE India
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  SUPRA India
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  ATVC
                </span>
                <span className="bg-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  Formula Bharat
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative w-full h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Image
              src="/assets/images/homepage/whoweare.webp"
              alt="SAE Team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
