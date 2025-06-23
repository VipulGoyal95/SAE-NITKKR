"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [handleToggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShouldShow(false);
      } else {
        setShouldShow(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (handleToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [handleToggle]);

  function barClicked() {
    setToggle(!handleToggle);
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        shouldShow ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="p-4 md:p-6">
        <div className={`w-full px-[15px] pr-[25px] rounded-full overflow-hidden ${
          isScrolled ? 'bg-[rgba(76,76,76,0.36)] backdrop-blur-md' : 'bg-[rgba(76,76,76,0.36)] backdrop-blur-sm'
        }`}>
          <nav className="w-full text-black py-2.5 text-center flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image 
                src="/assets/images/sae-logo.webp" 
                alt="SAE Logo" 
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
              <div className="text-left text-white">
                <h3 className="text-sm sm:text-base md:text-lg font-bold">SAE</h3>
                <h3 className="text-xs sm:text-sm md:text-base font-bold">Nit Kurukshetra</h3>
              </div>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex text-white justify-end gap-6 lg:gap-10 w-3/4 max-[1237px]:w-[80%] max-[1160px]:gap-4">
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/">Home</Link>
              </li>
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/autokriti">Autokriti</Link>
              </li>
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/accelerons">Accelerons</Link>
              </li>
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/nitrox">Nitrox</Link>
              </li>
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/saeunitydrive">SAE Unity Drive</Link>
              </li>
              <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white transition-all duration-300">
                <Link href="/crowdfunding">CrowdFunding</Link>
              </li>
            </ul>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group z-50"
              onClick={barClicked}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  handleToggle ? "rotate-45 translate-y-2" : ""
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  handleToggle ? "opacity-0" : ""
                }`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  handleToggle ? "-rotate-45 -translate-y-2" : ""
                }`}></span>
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-0 transition-all duration-500 ease-in-out ${
            handleToggle ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={barClicked}
            className="z-100 absolute top-6 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6 text-white transform transition-transform duration-300 hover:rotate-90"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div style={{ 
            background: 'linear-gradient(145deg, rgba(0,0,0,0.97), rgba(17,24,39,0.95))',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
           className="min-h-screen flex flex-col items-center justify-center px-4">
            <ul className="flex flex-col items-center justify-center gap-8 w-full max-w-md mx-auto">
              <li className="w-full text-center">
                <Link 
                  href="/" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  href="/autokriti" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  Autokriti
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  href="/accelerons" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  Accelerons
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  href="/nitrox" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  Nitrox
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  href="/saeunitydrive" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  SAE Unity Drive
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  href="/crowdfunding" 
                  className="text-3xl font-bold text-white block py-4 px-8 rounded-xl hover:bg-white/10 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-white/5" 
                  onClick={barClicked}
                >
                  CrowdFunding
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
