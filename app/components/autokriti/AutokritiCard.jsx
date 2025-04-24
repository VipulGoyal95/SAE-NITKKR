// components/AutokritiCard.jsx
"use client";

import { useState } from 'react';

export default function AutokritiCard() {
  const [currentPoster, setCurrentPoster] = useState('/assets/images/autokriti/cv-ev posters (2).webp');

  const handleHover = (posterPath) => {
    setCurrentPoster(posterPath);
  };

  const handleMouseLeave = () => {
    setCurrentPoster('/assets/images/autokriti/cv-ev posters (2).webp');
  };

  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-6 gap-6 items-center justify-center min-h-screen">
      {/* Left Poster Image */}
      <div className="w-full md:w-1/2 max-w-md">
        <img
          src={currentPoster}
          alt="Autokriti Poster"
          className="w-full rounded-lg shadow-lg transition-all duration-300"
        />
      </div>

      {/* Right Offer Box */}
      <div className="bg-[#0A0A26] text-white rounded-xl p-8 w-full md:w-1/2 max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">What we Offer?</h2>
        <ul className="space-y-4">
          <li 
            className="flex items-center text-lg font-semibold hover:text-red-500 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => handleHover('/assets/images/autokriti/cv-ev posters (2).webp')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-2xl mr-4">{'>'}</span> Combustion Vehicle
          </li>
          <li 
            className="flex items-center text-lg font-semibold hover:text-red-500 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => handleHover('/assets/images/autokriti/iot posters (1).webp')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-2xl mr-4">{'>'}</span> IOT
          </li>
          <li 
            className="flex items-center text-lg font-semibold hover:text-red-500 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => handleHover('/assets/images/autokriti/cv-ev posters (2).webp')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-2xl mr-4">{'>'}</span> Electric Vehicles
          </li>
          <li 
            className="flex items-center text-lg font-semibold hover:text-red-500 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => handleHover('/assets/images/autokriti/software posters (1).webp')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="text-2xl mr-4">{'>'}</span> Softwares
          </li>
        </ul>
        <div className="mt-8 flex justify-center">
          <button className="bg-red-600 text-white text-lg font-bold py-3 px-6 rounded-lg border-4 border-cyan-300 cursor-pointer hover:bg-red-700 transition duration-300">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
}
