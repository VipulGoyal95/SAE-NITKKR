"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { usePathname } from 'next/navigation';

export default function MeetTheTeam() {
  const pathname = usePathname();
  const isNitroxPage = pathname.includes('/nitrox');

  const acceleronsTeam = [
    {
      src: '/assets/images/accelerons/jatin.jpg',
      alt: 'Jatin',
      name: 'Jatin Yadav',
      role: 'Vice-Captain Electrical',
      linkedin: 'https://www.linkedin.com/in/jatin-yadav-63b4ba257/',
      email: 'mailto:jatinkhairwal2003@gmail.com',
      rotate: '-rotate-6',
    },
    {
      src: '/assets/images/accelerons/hemant.jpeg',
      alt: 'Hemant',
      name: 'Hemant',
      role: 'Captain',
      linkedin: 'https://www.linkedin.com/in/hemant-rao-34217a263/',
      email: 'mailto:raohemant801@gmail.com',
      rotate: 'rotate-0',
    },
    {
      src: '/assets/images/accelerons/priyanshu.jpg',
      alt: 'Priyanshu',
      name: 'Priyanshu',
      role: 'Vice-Captain Mechanical',
      linkedin: 'https://www.linkedin.com/in/priyanshu-priyanshu-879377293/',
      email: 'mailto:12216052@nitkkr.ac.in',
      rotate: 'rotate-6',
    },
  ];

  const nitroxTeam = [
    {
      src: '/assets/images/nitrox/danish.jpg',
      alt: 'Danish Goyal',
      name: 'Danish Goyal',
      role: 'Vice-Captain',
      linkedin: 'https://www.linkedin.com/in/danish-goyal-94bb80269/',
      email: 'mailto:danishgoyaljind15@gmail.com',
      rotate: '-rotate-6',
    },
    {
      src: '/assets/images/nitrox/pritam.jpg',
      alt: 'Pritam Beriwal',
      name: 'Pritam Beriwal',
      role: 'Captain',
      linkedin: 'https://www.linkedin.com/in/pritam-beriwal/',
      email: 'mailto:pritamberiwal91@gmail.com',
      rotate: 'rotate-0',
    },
    {
      src: '/assets/images/nitrox/chirag.jpeg',
      alt: 'Chirag jangra',
      name: 'Chirag jangra',
      role: 'Electrical Head',
      linkedin: '#',
      email: 'mailto:chiragjangra268@gmail.com',
      rotate: 'rotate-6',
    },
  ];

  const team = isNitroxPage ? nitroxTeam : acceleronsTeam;

  return (
    <div className="bg-black text-white py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet The Team</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`w-64 h-80 overflow-hidden rounded-xl border-2 border-[#66FCF1] shadow-lg transform ${member.rotate} transition-transform duration-500 group-hover:scale-105`}>
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={256}
                  height={320}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6">
                  <h3 className="text-2xl font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#66FCF1] font-semibold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {member.role}
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#66FCF1] transition-colors duration-300"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a 
                      href={member.email}
                      className="text-white hover:text-[#66FCF1] transition-colors duration-300"
                    >
                      <MdEmail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
