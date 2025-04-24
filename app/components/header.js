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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  function barClicked() {
    setToggle(!handleToggle);
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        shouldShow ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full h-16 sm:h-20 md:h-24 bg-[rgba(76,76,76,0.36)] backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4 flex items-center justify-between h-full">
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/assets/images/sae-logo.png"
              alt="SAE Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <div className="text-white">
              <h3 className="text-sm sm:text-base md:text-lg font-bold">SAE</h3>
              <h3 className="text-xs sm:text-sm md:text-base font-bold">Nit Kurukshetra</h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-white">
            <Link href="/">
              <li className="font-bold hover:text-gray-300 transition-colors">Home</li>
            </Link>
            <Link href="/autokriti">
              <li className="font-bold hover:text-gray-300 transition-colors">Autokriti</li>
            </Link>
            <Link href="/accelerons">
              <li className="font-bold hover:text-gray-300 transition-colors">Accelerons</li>
            </Link>
            <Link href="/nitrox">
              <li className="font-bold hover:text-gray-300 transition-colors">Nitrox</li>
            </Link>
            <Link href="/saeunitydrive">
              <li className="font-bold hover:text-gray-300 transition-colors">SAE Unity Drive</li>
            </Link>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
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

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            handleToggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="h-full flex flex-col items-center justify-center gap-8 text-white relative">
            <button 
              onClick={barClicked}
              className="absolute top-6 right-9 text-white text-2xl hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              ×
            </button>
            <ul className="flex flex-col items-center gap-8">
              <li className="transform hover:scale-110 transition-transform">
                <Link 
                  href="/" 
                  className="text-2xl font-bold block py-2" 
                  onClick={barClicked}
                >
                  Home
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform">
                <Link 
                  href="/autokriti" 
                  className="text-2xl font-bold block py-2" 
                  onClick={barClicked}
                >
                  Autokriti
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform">
                <Link 
                  href="/accelerons" 
                  className="text-2xl font-bold block py-2" 
                  onClick={barClicked}
                >
                  Accelerons
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform">
                <Link 
                  href="/nitrox" 
                  className="text-2xl font-bold block py-2" 
                  onClick={barClicked}
                >
                  Nitrox
                </Link>
              </li>
              <li className="transform hover:scale-110 transition-transform">
                <Link 
                  href="/saeunitydrive" 
                  className="text-2xl font-bold block py-2" 
                  onClick={barClicked}
                >
                  SAE Unity Drive
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
