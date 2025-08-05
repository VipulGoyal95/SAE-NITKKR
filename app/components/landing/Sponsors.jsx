"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const sponsorImages = [
  { src: "/assets/images/sponsors/Altium2.webp", alt: "Altium" },
  {
    src: "/assets/images/sponsors/pankaj_potentiometer.webp",
    alt: "Pankaj Potentiometer",
  },
  { src: "/assets/images/sponsors/bender.webp", alt: "Bender" },
  {
    src: "/assets/images/sponsors/bare metal comp.webp",
    alt: "Bare Metal Comp",
  },
  { src: "/assets/images/sponsors/solidworks.webp", alt: "SolidWorks" },
];

const Sponsors = () => {
  return (
    <div className=" py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          OUR SPONSORS
        </motion.h2>
        <Marquee
          pauseOnHover
          speed={50}
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={100}
        >
          {sponsorImages.map((sponsor, index) => (
            <div
              key={index}
              className="mx-12 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={200}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
