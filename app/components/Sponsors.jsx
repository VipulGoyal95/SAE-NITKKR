'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { useEffect, useRef, useState } from 'react';

const sponsorImages = [
  {
    src: '/assets/images/sponsors/altium2.webp',
    alt: 'Sponsor 1',
    width: 200,
    height: 150
  },
  {
    src: '/assets/images/sponsors/pankaj_potentiometer.webp',
    alt: 'Sponsor 2',
    width: 200,
    height: 150
  },
  {
    src: '/assets/images/sponsors/bender.webp',
    alt: 'Sponsor 3',
    width: 200,
    height: 150
  },
  {
    src: '/assets/images/sponsors/bare metal comp.webp',
    alt: 'Sponsor 4',
    width: 200,
    height: 150
  },
  {
    src: '/assets/images/sponsors/solidworks.webp',
    alt: 'Sponsor 5',
    width: 250,
    height: 150
  },
  // Add more sponsor images as needed
];

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="bg-black py-16 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 pattern-grid opacity-10"></div>
      </div>

      {/* Title */}
      <div className={`relative z-10 mb-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-white text-4xl font-bold text-center">
          OUR SPONSORS
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-white/0 via-white to-white/0 mx-auto mt-4"></div>
      </div>

      {/* Sponsors Marquee */}
      <div className="max-w-7xl mx-auto">
        <div className="no-scrollbar">
          <Marquee
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            {sponsorImages.map((sponsor, index) => (
              <div key={index} className="mx-8">
                <div className={`bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'animate-float' : ''}`}>
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="h-[150px]"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
        .pattern-grid {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Sponsors;
