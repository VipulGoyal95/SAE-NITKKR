'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Headroom from "react-headroom";
import icon from "../../public/assets/images/sae-logo.png";

const Header = () => {
  const [handleToggle, setToggle] = useState(false);

  function barClicked() {
    setToggle(!handleToggle);
    console.log(handleToggle);
  }

  return (
    <Headroom style={{ zIndex: 300, transitionDuration: 0.3 }}>
      <div className="sticky top-0 left-0 z-300 p-6">
        <nav className="w-full bg-gray-700 bg-opacity-36 text-black py-2.5 text-center flex items-center justify-around rounded-full backdrop-blur-sm">
          <div className="flex gap-2 items-center">
            <Image src={icon} alt="logo" width={48} height={48} className="w-12 h-12" />
            <div className="text-left text-white">
              <h3>SAE</h3>
              <h3>Nit Kurukshetra</h3>
            </div>
          </div>
          <ul className="flex justify-end gap-10 w-3/4">
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
        <div className="hidden absolute w-7 h-7 top-11 right-12 cursor-pointer z-50 pt-2">
          <span className="w-full h-1 bg-white absolute z-20"></span>
        </div>
        <nav className="block absolute top-0 bottom-0 left-0 right-0 transition-all duration-2000 z-10 overflow-hidden opacity-100 w-screen h-screen">
          <ul>
            <li className="shape-circle circle-one">
              <Link href="/nitrox" className="nitrox-text">Nitrox</Link>
            </li>
            <li className="shape-circle circle-two">
              <Link href="/accelerons" className="accelerons-text">Accelerons</Link>
            </li>
            <li className="shape-circle circle-three">
              <Link href="/autokriti" className="autokriti-text">Autokriti</Link>
            </li>
            <li className="shape-circle circle-five">
              <Link href="/" className="home-text">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Headroom>
  );
};

export default Header; 