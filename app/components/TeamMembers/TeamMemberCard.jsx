import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative h-[350px] max-[600px]:h-[300px] max-[415px]:h-[260px] overflow-hidden rounded-[2.5rem] bg-white/20 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:shadow-blue-500/20 backdrop-blur-lg"
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

      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 max-[640px]:p-6 max-[640px]:pb-8 max-[600px]:pb-6 max-[580px]:p-5 max-[535px]:p-4 max-[460px]:pl-3 max-[410px]:pl-2.5 max-[465px]:pb-5 max-[420px]:pb-4">
       
        <div className={`transform transition-all duration-700 ease-out ${
          isHovered ? 'translate-y-0' : 'translate-y-24'
        }`}>
          <div className={`${!member.Department?"mb-10 max-[540px]:mb-6 max-[500px]:mb-4 max-[410px]:mb-1":"mb-2"}`}>
            <h3 className={`text-3xl max-[640px]:text-2xl max-[420px]:text-xl font-bold text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_30%)] ${isHovered? "max-[420px]:text-[1.1rem]": ""}`}>
              {member.name}
            </h3>
            <div className={`mt-3 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-700 max-[420px]:mt-2 ${
              isHovered ? 'w-40 max-[430px]:w-34' : 'w-20'
            }`} />
            {
              member.metadata? (<p className="mt-1 text-lg max-[640px]:text-[18px] max-[600px]:text-[17px] max-[420px]:text-[15px] font-medium text-blue-50/90">{member.metadata.position1}</p>):(<p className={`mt-3 text-lg max-[640px]:text-[18px] max-[600px]:text-[17px] max-[420px]:text-[15px] font-medium text-blue-50/90 ${!member.Team ? "mb-10":""}`}>{member.Department}</p>)
            }
            {
              member.metadata && member.metadata.position2 && (<p className="mt-1 text-lg max-[640px]:text-[18px] max-[600px]:text-[17px] max-[420px]:text-[15px] font-medium text-blue-50/90">{member.metadata.position2}</p>)
            }
            
          </div>
          
          <p className={`mb-6 text-sm leading-relaxed text-gray-200/90 max-[550px]:mb-4 max-[410px]:mb-2 transition-all duration-700 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {
              member.metadata && <p className="mt-1 text-lg max-[640px]:text-[18px] max-[600px]:text-[17px] max-[420px]:text-[15px] font-medium text-blue-50/90">{member.Team}</p>
            }
            {
              !member.metadata && <p className={`${!isHovered && "max-[420px]:h-8 max-[420px]:w-3"}`}></p>
            }
            {
              !member.Department && <p className={`${!isHovered && "max-[420px]:h-6 max-[420px]:w-3"}`}></p>
            }
            { member.metadata &&
              <p className="mt-1 text-sm font-medium text-blue-50/70">{member.Department}</p>
            }
            {
              !member.metadata && member.Team &&
              <p className="mt-1 text-sm font-medium text-blue-50/70">{member.Team}</p>
            }
          </p>
          
          <div className={`flex space-x-3 transition-all duration-700 max-[450px]:space-x-2 max-[400px]:space-x-1 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {member.Email && (
              <a 
                href={`mailto:${member.Email}`}
                className="group/link flex items-center space-x-2 max-[433px]:space-x-1 rounded-full bg-gradient-to-r from-white/10 to-white/20 px-5 max-[560px]:px-4 max-[525px]:px-3.5 max-[495px]:px-3 max-[441px]:px-2.5 max-[420px]:px-2 py-2.5 max-[495px]:py-2 max-[420px]:py-1.5 backdrop-blur-xl transition-all duration-300 hover:from-white/20 hover:to-white/30"
              >
                <Mail size={18} className="text-white transition-all max-[525px]:hidden duration-300 group-hover/link:scale-110" />
                <Mail size={14} className="text-white transition-all hidden max-[525px]:block max-[420px]:hidden duration-300 group-hover/link:scale-110" />
                <Mail size={13} className="text-white transition-all hidden max-[420px]:block duration-300 group-hover/link:scale-110" />
                <span className="text-sm max-[640px]:text-[13px] max-[480px]:text-[12px] font-medium text-white">Email</span>
              </a>
            )}
            {member.LinkedIn && (
              <a 
                href={member.LinkedIn} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link flex items-center space-x-2 max-[433px]:space-x-1 rounded-full bg-gradient-to-r from-white/10 to-white/20 px-5 max-[560px]:px-4 max-[525px]:px-3.5 max-[495px]:px-3 py-2.5 max-[495px]:py-2 max-[420px]:py-1.5  backdrop-blur-xl transition-all duration-300 hover:from-white/20 hover:to-white/30"
              >
               {member.id === 65 ? (<> <Github size={18} className="text-white transition-all max-[525px]:hidden duration-300 group-hover/link:scale-110" />
                <Github size={14} className="text-white transition-all hidden max-[525px]:block max-[420px]:hidden duration-300 group-hover/link:scale-110" />
                <Github size={13} className="text-white transition-all hidden max-[420px]:block duration-300 group-hover/link:scale-110" />
                <span className="text-sm max-[640px]:text-[13px] max-[480px]:text-[12px] font-medium text-white">Portfolio</span></>) : (<> <Linkedin size={18} className="text-white transition-all max-[525px]:hidden duration-300 group-hover/link:scale-110" />
                <Linkedin size={14} className="text-white transition-all hidden max-[525px]:block max-[420px]:hidden duration-300 group-hover/link:scale-110" />
                <Linkedin size={13} className="text-white transition-all hidden max-[420px]:block duration-300 group-hover/link:scale-110" />
                <span className="text-sm max-[640px]:text-[13px] max-[480px]:text-[12px] font-medium text-white">LinkedIn</span></>)}
              </a>
            )}
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;