// components/CrowdfundingHeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/sae-crowdfunding.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Drive Innovation with SAE NIT Kurukshetra
        </h1>
        <p className="text-lg md:text-xl mb-6">
          SAE NIT Kurukshetra is a student-run society passionate about automotive engineering and innovation. We design, build, and race high-performance vehicles for prestigious national and international competitions like BAJA and SUPRA.
        </p>
        <p className="text-md md:text-lg mb-6">
          Your support helps us turn our ideas into reality—funding crucial components, prototyping, and transportation. Every rupee brings us closer to pushing the boundaries of engineering and representing our institute on a global stage.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 text-lg rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
          Contribute to the Mission 🚀
        </button>
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-0" />
    </section>
  );
};

export default HeroSection;
