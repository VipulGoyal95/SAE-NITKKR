"use client"
import React, { useState, useEffect } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Details4yr } from '../../data/members';
import { Users } from 'lucide-react';

const TeamMembers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-20 sm:px-6 lg:px-8">
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[700px] w-[700px] animate-pulse rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
       
        <div className="mb-20 text-center">
          <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
            <Users className="h-14 w-14 text-white" />
          </div>
          <h2 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl">
            Meet Our Team
          </h2>
          <div className="mt-8 flex justify-center">
            <p className="max-w-2xl text-lg text-gray-400">
              Talented individuals working together to create amazing products.
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {Details4yr.map((member, index) => (
            <div 
              key={member.id}
              className="transform transition-all duration-1000"
              style={{ 
                transitionDelay: `${index * 200}ms`,
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
    </div>
  );
};

export default TeamMembers;