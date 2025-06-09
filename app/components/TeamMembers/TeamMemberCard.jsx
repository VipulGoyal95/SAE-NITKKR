import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-[420px] overflow-hidden rounded-[2.5rem] bg-white/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/20 backdrop-blur-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-200/30 via-purple-200/30 to-pink-200/30 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      
      
      <div className="absolute inset-0 z-10">
        <div 
          className={`relative h-full w-full transition-all duration-1000 ease-out will-change-transform ${
            isHovered ? 'scale-110 blur-sm brightness-40' : 'scale-100'
          }`}
        >
          <img 
            src={member.imageUrl} 
            alt={member.name} 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />
        </div>
      </div>

      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
       
        <div className={`transform transition-all duration-700 ease-out ${
          isHovered ? 'translate-y-0' : 'translate-y-24'
        }`}>
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_30%)]">
              {member.name}
            </h3>
            <div className={`mt-3 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 ${
              isHovered ? 'w-40' : 'w-20'
            }`} />
            <p className="mt-3 text-lg font-medium text-blue-50/90">{member.Team}</p>
            <p className="mt-1 text-sm font-medium text-blue-50/70">{member.Department}</p>
          </div>
          
          <p className={`mb-6 text-sm leading-relaxed text-gray-200/90 transition-all duration-700 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {member.Email}
          </p>
          
          <div className={`flex space-x-3 transition-all duration-700 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {member.Email && (
              <a 
                href={`mailto:${member.Email}`}
                className="group/link flex items-center space-x-2 rounded-full bg-gradient-to-r from-white/10 to-white/20 px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:from-white/20 hover:to-white/30"
              >
                <Mail size={18} className="text-white transition-all duration-300 group-hover/link:scale-110" />
                <span className="text-sm font-medium text-white">Email</span>
              </a>
            )}
            {member.LinkedIn && (
              <a 
                href={member.LinkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center space-x-2 rounded-full bg-gradient-to-r from-white/10 to-white/20 px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:from-white/20 hover:to-white/30"
              >
                <Linkedin size={18} className="text-white transition-all duration-300 group-hover/link:scale-110" />
                <span className="text-sm font-medium text-white">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;