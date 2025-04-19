"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
        shouldShow ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="p-6">
        <div
          className={`w-full px-[15px] pr-[25px] rounded-full overflow-hidden ${
            isScrolled
              ? "bg-[rgba(76,76,76,0.36)] backdrop-blur-md"
              : "bg-[rgba(76,76,76,0.36)] backdrop-blur-sm"
          }`}
        >
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

            {/* Desktop Navigation */}
            <ul className="hidden md:flex text-white justify-end gap-10 w-3/4">
              <Link href="/">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">
                  Home
                </li>
              </Link>
              <Link href="/autokriti">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">
                  Autokriti
                </li>
              </Link>
              <Link href="/accelerons">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">
                  Accelerons
                </li>
              </Link>
              <Link href="/nitrox">
                <li className="font-bold p-2.5 rounded-lg text-lg cursor-pointer hover:bg-gray-800 hover:text-white">
                  Nitrox
                </li>
              </Link>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <div className="w-7 h-6 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-white transition-all duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 z-40 bg-black bg-opacity-90 backdrop-blur-md transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden pt-24`}
        >
          <ul className="flex flex-col items-center justify-center gap-8 text-white h-full">
            <Link href="/" onClick={toggleMobileMenu}>
              <li className="font-bold text-2xl cursor-pointer hover:text-gray-300">
                Home
              </li>
            </Link>
            <Link href="/autokriti" onClick={toggleMobileMenu}>
              <li className="font-bold text-2xl cursor-pointer hover:text-gray-300">
                Autokriti
              </li>
            </Link>
            <Link href="/accelerons" onClick={toggleMobileMenu}>
              <li className="font-bold text-2xl cursor-pointer hover:text-gray-300">
                Accelerons
              </li>
            </Link>
            <Link href="/nitrox" onClick={toggleMobileMenu}>
              <li className="font-bold text-2xl cursor-pointer hover:text-gray-300">
                Nitrox
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
