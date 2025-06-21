// import './Hero.css';
"use client";

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { useCountUp } from 'react-countup';

export default function Herosection() {
  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);
  const counterRef4 = useRef(null);

  useCountUp({
    ref: counterRef2,
    start: 0,
    end: 20.4,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    decimals: 1
  })

  useCountUp({
    ref:counterRef3,
    start: 0,
    end: 100,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })
  useCountUp({
    ref:counterRef4,
    start: 0,
    end: 50,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  })
  
  useCountUp({
    ref: counterRef1,
    start: 0,
    end: 30,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <section className="relative overflow-hidden bg-gray-900 text-gray-100">
      {/* Abstract Shapes Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col pt-[105px] md:flex-row items-center justify-center min-h-screen py-16 px-6 md:px-10 relative z-10">
        <div className="text-center md:text-left mb-10 md:mb-0 md:mr-8 relative">
          {/* Orbit Accent */}
          <div className="absolute -left-16 top-12 w-32 h-32 rounded-full border-4 border-dotted border-blue-800/30 animate-[spin_25s_linear_infinite] hidden md:block"></div>

          <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Unity Drive
          </div>

          <h1 className="text-6xl md:text-6xl max-[525px]:text-5xl max-[450px]:text-4xl font-[800] mb-6 uppercase bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
            Once a part
            <br />
            of GOLE,
            <br />
            always part
            <br/>
            of the legacy.
          </h1>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6"></div>

          <p className="text-lg opacity-80 tracking-wider leading-relaxed max-w-xl">
          The Unity Drive is our heartfelt call to all alumni of SAE NIT Kurukshetra to come together, reconnect, and reinvest in the future of the very teams you helped build.

          </p>
        </div>

        <div className="w-full md:w-[55%]">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-700/30 mix-blend-overlay z-10"></div>

            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-800/30 rounded-full blur-xl z-0"></div>
            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-800/30 rounded-full blur-xl z-0"></div>

            {/* Image */}
            <div className="relative h-[550px] max-[767px]:aspect-[4/3] max-[767px]:h-max">
              <Image
                src="/assets/images/saeunitydrive/Sae unity drive.webp"
                alt="Thank You Seniors"
                fill
                className="object-cover z-0"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Overlay pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px] z-30 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative text-white py-24 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-12 z-10 border-t border-gray-800/50">
        <div className="md:w-1/2">
          <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Alumni Funding
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
            POWERING INNOVATION, DRIVEN BY ALUMNI
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6"></div>

          <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8 max-w-xl text-gray-300">
          Whether you once welded the chassis, fine-tuned vehicle dynamics systems, drafted sponsorship decks and reports, or stood by your team at sunrise before events: you know the hustle. Now it’s time to pass the baton and enable the next face of SAE NIT KKR to continue your legacy.
          </p>

          {/* <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
          >
            Fund Now
          </a> */}
        </div>

        <div className="md:w-1/2 grid items-center grid-cols-2 gap-8">
          {/* Stats Cards with modern styling */}
          <div className="bg-gray-800/80 h-[150px] rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
            <span className="counter-class" ref={counterRef1}></span>+
            </div>
            <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
              TOTAL CONTRIBUTORS
            </div>
          </div>

          <div className="bg-gray-800/80 h-[150px] rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class" ref={counterRef2}></span><span className="text-3xl">K</span>
            </div>
            <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
              RAISED
            </div>
          </div>

          {/* <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
            <span className="counter-class" ref={counterRef3}></span>
            </div>
            <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
              ALL ALUMNI
            </div>
          </div>

          <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
            <span className="counter-class" ref={counterRef4}></span>
            </div>
            <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
              TEAM MEMBERS
            </div>
          </div> */}
        </div>
        {/* <div>
            <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class" ref={counterRef4}></span>
              </div>
              <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
                TEAM MEMBERS
              </div>
            </div>
        </div> */}
      </section>
    </section>
  );
}