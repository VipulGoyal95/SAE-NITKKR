"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Abhishek",
    role: "President",
    image: "/abhishek.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/abhi-badgujar-882bb124b/",
      email: "abhi.abhishek.badgujar@gmail.com",
    },
  },
  {
    name: "Shubhayu Sinha",
    role: "Vice-President",
    image: "/shubhayu2.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/shubhayu-sinha-9a5053264",
      email: "shubhayu.sinha@gmail.com",
    },
  },
  {
    name: "Ankit Rathore",
    role: "Secretary",
    image: "/ankit rathore.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/ankit-rathore-19031a284",
      email: "gamrathore018@gmail.com",
    },
  },
  {
    name: "Sarthak Anand",
    role: "Secretary",
    image: "/sarthak.webp",
    social: {
      linkedin: "https://www.linkedin.com/in/sarthak-anand-614985285/",
      email: "sarthakanand2003@gmail.com",
    },
  },
];

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      className="relative group w-full h-96 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        <p className="text-gray-300">{member.role}</p>
        <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${member.social.email}`}
            className="text-white hover:text-red-500"
          >
            Email
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const TeamMembers = () => {
  return (
    <div className=" py-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            MEET THE TEAM
          </h2>
          <Link
            href="/teammembers"
            className="text-lg text-gray-400 hover:text-white transition-colors duration-300 mt-2 inline-block"
          >
            View all members
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
