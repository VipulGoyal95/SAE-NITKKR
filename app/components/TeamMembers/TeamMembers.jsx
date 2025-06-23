"use client"
import React, { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { alumni,Details3yr,Details4yr } from '../../data/members';
import { Users } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const TeamMembers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFull1, setShowFull1] = useState(false);
  const [showFull2, setShowFull2] = useState(false);
  const [showFull3, setShowFull3] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 max-[420px]:px-3 py-20 sm:px-6 lg:px-8">
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[700px] w-[700px] animate-pulse rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-8xl max-[420px]:max-w-[95vw]">
       
        <div className="mt-8 mb-20 text-center max-[450px]:mb-8">
          {/* <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
            <Users className="h-14 w-14 text-white" />
          </div> */}
          <h2 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            Meet Our Team
          </h2>
          {/* <div className="mt-8 flex justify-center">
            <p className="max-w-2xl text-lg text-gray-400">
              Talented individuals working together to create amazing products.
            </p>
          </div> */}
        </div>

        <div className="mb-10">
          <h3 className="text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            4th Year
          </h3>
          <div className="mb-10 mx-auto w-70 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 max-[500px]:w-50" />
          <div className="overflow-hidden transition-all duration-700 ease-in-out">
            <div className={`w-full px-10 grid max-[800px]:grid-cols-2 overflow-hidden gap-10 max-[650px]:gap-5 max-[420px]:gap-4 max-[650px]:px-0 max-[1300px]:grid-cols-3 min-[1300px]:grid-cols-4 ${showFull1 ? "max-h-[5050px] pb-10" : "max-h-[105vh] max-[650px]:max-h-[735px] max-[1300px]:max-h-[780px] max-[415px]:max-h-[550px] max-[420px]:max-h-[630px] max-[500px]:max-h-[636px]"} transition-all duration-700 ease-in-out`}>
              {Details4yr.map((member, index) => (
                <div 
                  key={member.id}
                  className="transform transition-all duration-1000"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateY(0) scale(1)' 
                      : 'translateY(100px) scale(0.8)'
                  }}
                >
                  <TeamMemberCard member={{
                    ...member,
                    imageUrl: member.img || 'https://placehold.co/600x400/1a1a1a/ffffff?text=Team+Member'
                  }} />
                </div>
              ))}
            </div>
          </div>
          {!showFull1 && (
            <IoIosArrowDown className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull1(true)} />
          )}
          {showFull1 && (
            <IoIosArrowUp className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull1(false)} />
          )}
        </div>
        
        <div className="mb-10">
          <h3 className="text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            3rd Year
          </h3>
          <div className="mb-10 mx-auto w-70 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 max-[500px]:w-50" />
          <div className="overflow-hidden transition-all duration-700 ease-in-out">
            <div className={`w-full px-10 grid max-[800px]:grid-cols-2 overflow-hidden gap-10 max-[650px]:gap-5 max-[420px]:gap-4 max-[650px]:px-0 max-[1300px]:grid-cols-3 min-[1300px]:grid-cols-4 ${showFull3 ? "max-h-[5050px] pb-10" : "max-h-[105vh] max-[650px]:max-h-[735px] max-[1300px]:max-h-[780px] max-[415px]:max-h-[550px] max-[420px]:max-h-[630px] max-[500px]:max-h-[636px]"} transition-all duration-700 ease-in-out`}>
              {Details3yr.map((member, index) => (
                <div 
                  key={member.id}
                  className="transform transition-all duration-1000"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateY(0) scale(1)' 
                      : 'translateY(100px) scale(0.8)'
                  }}
                >
                  <TeamMemberCard member={{
                    ...member,
                    imageUrl: member.img || 'https://placehold.co/600x400/1a1a1a/ffffff?text=Team+Member'
                  }} />
                </div>
              ))}
            </div>
          </div>
          {!showFull3 && (
            <IoIosArrowDown className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull3(true)} />
          )}
          {showFull3 && (
            <IoIosArrowUp className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull3(false)} />
          )}
        </div>

        <div className="mb-10">
          <h3 className="text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            Alumni
          </h3>
          <div className="mb-10 mx-auto w-70 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 max-[500px]:w-45" />
          <div className="overflow-hidden transition-all duration-700 ease-in-out">
            <div className={`w-full px-10 grid max-[800px]:grid-cols-2 overflow-hidden gap-10 max-[650px]:gap-5 max-[420px]:gap-4 max-[650px]:px-0 max-[1300px]:grid-cols-3 min-[1300px]:grid-cols-4 ${showFull2 ? "max-h-[3110px] pb-10" : "max-h-[105vh] max-[650px]:max-h-[735px] max-[1300px]:max-h-[780px] max-[415px]:max-h-[550px] max-[420px]:max-h-[630px] max-[500px]:max-h-[636px]"} transition-all duration-700 ease-in-out`}>
              {alumni.map((member, index) => (
                <div 
                  key={member.id}
                  className="transform transition-all duration-1000"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateY(0) scale(1)' 
                      : 'translateY(100px) scale(0.8)'
                  }}
                >
                  <TeamMemberCard member={{
                    ...member,
                    imageUrl: member.img || 'https://placehold.co/600x400/1a1a1a/ffffff?text=Team+Member'
                  }} />
                </div>
              ))}
            </div>
          </div>
          {!showFull2 && (
            <IoIosArrowDown className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull2(true)} />
          )}
          {showFull2 && (
            <IoIosArrowUp className="mx-auto text-900 text-[35px] text-gray-400 cursor-pointer animate-bounce transform transition-all duration-300 hover:scale-110" onClick={() => setShowFull2(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;