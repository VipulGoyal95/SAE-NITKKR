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
      <div className="w-full h-24 bg-[rgba(76,76,76,0.36)] backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/sae-logo.png"
              alt="SAE Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <div className="text-white">
              <h3 className="font-bold">SAE</h3>
              <h3 className="font-bold">Nit Kurukshetra</h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-white">
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
          </ul>

          {/* Mobile Menu Button */}
          <div
            className={`md:hidden cursor-pointer ${handleToggle ? "active" : ""}`}
            onClick={barClicked}
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-transform"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5 transition-opacity"></span>
            <span className="block w-6 h-0.5 bg-white transition-transform"></span>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`md:hidden fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md transition-transform duration-300 ${handleToggle ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="h-full flex flex-col items-center justify-center gap-8 text-white">
            <li className="transform hover:scale-110 transition-transform">
              <Link href="/" className="text-2xl font-bold">Home</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform">
              <Link href="/autokriti" className="text-2xl font-bold">Autokriti</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform">
              <Link href="/accelerons" className="text-2xl font-bold">Accelerons</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform">
              <Link href="/nitrox" className="text-2xl font-bold">Nitrox</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
