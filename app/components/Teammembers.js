'use client'

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Abhishek',
    role: 'President',
    image: '/abhishek.webp',
    gradient: 'from-[#FFFFFF] to-[#454545]',
    height: 'h-[450px]',
    social: {
      linkedin: 'https://www.linkedin.com/in/abhi-badgujar-882bb124b/',
      email: 'abhi.abhishek.badgujar@gmail.com'
    }
  },
  {
    name: 'Shubhayu Sinha',
    role: 'Vice-President',
    image: '/shubhayu2.webp',
    gradient: 'from-[#454545] to-[#FFFFFF]',
    height: 'h-[450px]',
    social: {
      linkedin: 'https://www.linkedin.com/in/shubhayu-sinha-9a5053264',
      email: 'shubhayu.sinha@gmail.com'
    }
  },
  {
    name: 'Ankit Rathore',
    role: 'Secretary',
    image: '/ankit rathore.webp',
    gradient: 'from-[#FFFFFF] to-[#454545]',
    height: 'h-[450px]',
    social: {
      linkedin: 'https://www.linkedin.com/in/ankit-rathore-19031a284',
      email: 'gamrathore018@gmail.com'
    }
  },
  {
    name: 'Sarthak Anand',
    role: 'Secretary',
    image: '/sarthak.webp',
    gradient: 'from-[#454545] to-[#FFFFFF]',
    height: 'h-[450px]',
    social: {
      linkedin: 'https://www.linkedin.com/in/sarthak-anand-614985285/',
      email: 'sarthakanand2003@gmail.com'
    }
  }
];

const Teammembers = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [titleHovered, setTitleHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  return (
    <div className="bg-black py-16 px-4 pb-0 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000),linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000)] bg-[length:60px_60px] bg-[0_0,30px_30px] opacity-20"></div>
      </div>

      {/* Title */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/teammembers" passHref legacyBehavior>
          <a
            onMouseEnter={() => setTitleHovered(true)}
            onMouseLeave={() => setTitleHovered(false)}
            className="block w-fit mx-auto cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <h2 className="text-white text-4xl font-bold text-center select-none">
              TEAM MEMBERS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white/0 via-white to-white/0 mx-auto mt-4"></div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={titleHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-white text-lg font-medium text-center mt-2"
              style={{ pointerEvents: 'none' }}
            >
              Know more about our team
            </motion.div>
          </a>
        </Link>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div 
            key={index}
            className="group relative flex items-end justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: isMobile ? 0 : 0.3 + index * 0.1 }}
            onClick={() => handleCardClick(index)}
          >
            <div className={`${member.height} w-full max-w-[230px] rounded-t-[150px] overflow-hidden 
              bg-gradient-to-bl ${member.gradient} 
              transform transition-all duration-500 ease-out
              hover:scale-105 hover:shadow-2xl`}
            >
              <div className="h-full flex flex-col items-center relative">
                <div className="absolute bottom-0 w-full h-[65%] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name.toLowerCase()}
                    width={300}
                    height={400}
                    className="object-cover object-top w-full h-full transform transition-transform duration-500 hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className={`
                  absolute inset-0 flex flex-col items-center justify-start 
                  bg-gradient-to-b from-black/80 via-black/50 to-transparent 
                  transition-all duration-500 
                  ${isMobile ? (clickedIndex === index ? 'opacity-100' : 'opacity-0') : 'group-hover:opacity-100 opacity-0'}
                `}>
                  <div className="w-full h-[35%] flex flex-col items-center justify-center space-y-2.5 pt-8">
                    <h3 className="text-white text-xl font-bold">{member.name}</h3>
                    <p className="text-white/90">{member.role}</p>
                    <div className="flex gap-4">
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/10 shadow-lg flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-[#0A66C2]/50"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/10 shadow-lg flex items-center justify-center hover:bg-[#EA4335] transition-all duration-300 hover:scale-110 hover:shadow-[#EA4335]/50"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teammembers;
