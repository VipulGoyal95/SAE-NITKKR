"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const teamsData = [
  {
    name: "Accelerons Electric",
    image: "/assets/images/homepage/acceleron.webp",
    description: [
      "Meet Team Accelerons Electric, SAE NIT KKR’s formula student team. We design, build, and race high-performance electric formula-style vehicles for some of India’s most prestigious student motorsport events.",
      "Born from a love for speed, design, and serious engineering, the team is a blend of members playing a role in transforming raw energy into refined motion. We don’t just build cars. We build them.",
      "We participate in competitions like Formula Bharat, Formula Imperial and SUPRA.",
    ],
  },
  {
    name: "Nitrox",
    image: "/assets/images/homepage/nitrox.webp",
    description: [
      "Meet Team Nitrox, SAE NIT KKR’s very own all-terrain vehicle (ATV) team, where off-road engineering meets fearless innovation.",
      "We design and fabricate single-seater, four-wheel-drive ATVs that are built to conquer everything from rugged trails to technical tracks. Whether it’s clearing obstacles, climbing grades, or outlasting endurance rounds, Team Nitrox thrives where the terrain gets tough and the challenge gets real.",
      "We participate in competitions such as eBAJA and ATVC.",
    ],
  },
];

const TeamSection = ({ team, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        isEven ? "" : "md:grid-flow-col-dense"
      }`}
    >
      <motion.div
        className={`relative w-full h-96 rounded-lg overflow-hidden ${
          isEven ? "" : "md:col-start-2"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image src={team.image} alt={team.name} fill className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`${isEven ? "" : "md:col-start-1"}`}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">{team.name}</h3>
        {team.description.map((paragraph, i) => (
          <p key={i} className="mb-4 text-lg text-gray-300">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

const Teams = () => {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          OUR TEAMS
        </motion.h2>
        <div className="flex flex-col gap-20">
          {teamsData.map((team, index) => (
            <TeamSection key={index} team={team} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
