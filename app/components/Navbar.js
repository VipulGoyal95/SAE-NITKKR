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

  function barClicked() {
    setToggle(!handleToggle);
  }

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        shouldShow ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="p-6">
        <div className={`w-full px-[15px] pr-[25px] rounded-full overflow-hidden ${
          isScrolled ? 'bg-[rgba(76,76,76,0.36)] backdrop-blur-md' : 'bg-[rgba(76,76,76,0.36)] backdrop-blur-sm'
        }`}>
          <nav className="w-full text-black py-2.5 text-center flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <Image 
                src="/assets/images/sae-logo.png" 
                alt="SAE Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div className="text-left text-white">
                <h3>SAE</h3>
                <h3>Nit Kurukshetra</h3>
              </div>
            </div>
            <ul className="flex text-white justify-end gap-10 w-3/4">
              <Link href="/">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">Home</li>
              </Link>
              <Link href="/autokriti">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">Autokriti</li>
              </Link>
              <Link href="/accelerons">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">Accelerons</li>
              </Link>
              <Link href="/nitrox">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">Nitrox</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="hidden absolute w-7 h-7 top-11 right-12 cursor-pointer z-50 pt-2">
          <span className="w-full h-1 bg-white absolute z-20"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
