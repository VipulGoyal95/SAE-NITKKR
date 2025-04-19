"use client"

import Image from 'next/image';

const teamMembers = [
    {
      name: 'SHUBHAYU SINHA',
      role: 'Vice-President',
      image: '/shubhayu2.png',
      gradient: 'from-[#454545] to-[#FFFFFF]',
      height: 'h-[450px]',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
  {
    name: 'VINAY SAINI',
    role: 'Secretary',
    image: '/assets/images/homepage/vinaysaini.svg',
    gradient: 'from-[#FFFFFF] to-[#454545]',
    height: 'h-[420px]',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'LISHA GARG',
    role: 'Secretary',
    image: '/assets/images/homepage/lishagarg.svg',
    gradient: 'from-[#454545] to-[#FFFFFF]',
    height: 'h-[450px]',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'HIMANSHU KHATRI',
    role: 'Vice President',
    image: '/assets/images/homepage/himanshu.svg',
    gradient: 'from-[#FFFFFF] to-[#454545]',
    height: 'h-[400px]',
    social: {
      linkedin: '#',
      github: '#'
    }
  }
];

const Teammembers = () => {
  return (
    <div className="bg-black py-16 px-4 pb-0 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 mb-16">
        <h2 className="text-white text-4xl font-bold text-center">
          TEAM MEMBERS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white/0 via-white to-white/0 mx-auto mt-4"></div>
      </div>

      {/* Team Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="group relative flex items-end justify-center"
          >
            <div className={`${member.height} w-full max-w-[230px] rounded-t-[150px] overflow-hidden 
              bg-gradient-to-bl ${member.gradient} 
              transform transition-all duration-500 ease-out
              group-hover:scale-105 group-hover:shadow-2xl`}
            >
              {/* Content Container */}
              <div className="h-full flex flex-col items-center relative">
                {/* Image Container - Reduced height to make room for overlay */}
                <div className="absolute bottom-0 w-full h-[65%] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name.toLowerCase()}
                    width={300}
                    height={400}
                    className="object-cover object-top w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay with Name, Role, and Social Icons */}
                <div className="absolute inset-0 flex flex-col items-center justify-start bg-gradient-to-b from-black/80 via-black/50 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="w-full h-[35%] flex flex-col items-center justify-center space-y-2.5 pt-8">
                    <h3 className="text-white text-xl font-bold transform translate-y-4 transition-transform duration-500 group-hover:translate-y-4">
                      {member.name}
                    </h3>
                    <p className="text-white/90 italic transform translate-y-0 transition-transform duration-500 group-hover:translate-y-0">
                      ~{member.role.toLowerCase()}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex gap-4 transform translate-y-0 transition-transform duration-500 group-hover:translate-y-0">
                      <a 
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/10 shadow-lg flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-[#0A66C2]/50"
                      >
                        <svg className="w-4 h-4 text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-8 h-8 rounded-full bg-white/10 shadow-lg flex items-center justify-center hover:bg-[#2D333B] transition-all duration-300 hover:scale-110 hover:shadow-[#2D333B]/50"
                      >
                        <svg className="w-4 h-4 text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teammembers;
