// components/CrowdfundingHeroSection.tsx
"use client";

import React, { useEffect, useRef, useState  } from "react";
import Image from "next/image";
import { useCountUp } from 'react-countup';
import { motion } from "framer-motion";
import {
  ScrollAnimatedElement,
  Tilt3DCard,
  FloatingElement,
} from "./ScrollAnimations";
import Brochure from "./Brochure";
import MuxPlayer from '@mux/mux-player-react';
import db from "../../firebase";
import {
  updateDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const HeroSection = () => {

  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);
  const counterRef4 = useRef(null);
  const [raisedAmount,setRaisedAmount] = useState(0);
  const [days,setDays] = useState(0);
  const [contributors,setContributors] = useState(0);
  const [amountsymbol,setAmountSymbol] = useState("");
  
  const { update: updateRaisedAmount } = useCountUp({
    ref: counterRef2,
    start: 0,
    end: raisedAmount,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
    decimals: 2,
  });

  const { update: updateContributors } = useCountUp({
    ref:counterRef3,
    start: 0,
    end: contributors,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  const { update: updateDays } = useCountUp({
    ref:counterRef4,
    start: 0,
    end: days,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
  
  useCountUp({
    ref: counterRef1,
    start: 0,
    end: 8,
    duration: 1,
    delay: 0.3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  useEffect(() => {
    const fetchCurrentData = async () => {
      try {
        // Reference to the "CurrentData" document in the "DonationForm" collection
        const docRef = doc(db, "CrowdFunding2025", "CurrentData");

        // Retrieve the document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Document data exists, set it to state
          const data = docSnap.data();
          setRaisedAmount(data.Amount);
          setContributors(data.Contributors);
          setDays(data.Days);
          setAmountSymbol(data.AmountSymbol);
          // Manually update the counters
          updateRaisedAmount(data.Amount);
          updateContributors(data.Contributors);
          updateDays(data.Days);

          // console.log(days);
          // console.log("CurrentData:", data);
        } else {
          // Document does not exist
          toast.error('Something went wrong')
          console.log("No such document!");
        }
      } catch (error) {
        toast.error('Something went wrong')
        console.error("Error fetching document:", error);
      } finally {
        // setLoading(false)
      }
    };

    fetchCurrentData();
  }, []);
  // Only render CountUp components when the component is mounted on the client
  // This prevents hydration errors with server-side rendering
  return (
    <section className="relative overflow-hidden bg-gray-900 text-gray-100">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1e1e2f",
            color: "#f5f5f5",
            border: "1px solid #333",
            borderRadius: "10px",
          },
          success: {
            iconTheme: {
              primary: "#4ade80", // green
              secondary: "#1e1e2f",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171", // red
              secondary: "#1e1e2f",
            },
          },
        }}
      />
      {/* Abstract Shapes Background with SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-blue-900/30 to-indigo-900/20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-purple-900/30 to-blue-900/20 blur-xl"></div>
        <div className="absolute bottom-0 left-[20%] w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-900/30 to-blue-900/20 blur-xl"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Decorative SVG Elements */}
        <motion.svg
          className="absolute top-[15%] right-[15%] w-24 h-24 text-blue-500/30"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            fill="currentColor"
          />
        </motion.svg>

        <motion.svg
          className="absolute bottom-[20%] left-[10%] w-20 h-20 text-indigo-500/30"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.svg>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-6 md:px-10 relative z-10">
        <div className="text-center md:text-left mb-10 md:mb-0 md:mr-8 relative mt-8">
          {/* Orbit Accent */}
          <motion.div
            className="absolute -left-16 top-12 w-32 h-32 rounded-full border-4 border-dotted border-blue-800/30 hidden md:block"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>

          <ScrollAnimatedElement
            direction="y"
            distance={20}
            className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            Crowdfunding
          </ScrollAnimatedElement>

          <ScrollAnimatedElement direction="x" distance={-50} delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-[800] mb-6 uppercase bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200 bg-clip-text text-transparent">
              SUPPORT
              <br />
              OUR
              <br />
              MISSION
            </h1>
          </ScrollAnimatedElement>

          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>

          <ScrollAnimatedElement direction="y" distance={20} delay={0.4}>
            <p className="text-lg opacity-80 tracking-wider leading-relaxed max-w-xl">
            Welcome to the official crowdfunding campaign of SAE NIT Kurukshetra! We're not just building vehicles: we are building the future of mobility. 
            <br/>
With your support, we aim to gather the funds required to build our vehicles and participate in competitions such as SUPRA, Formula Bharat, eBAJA and ATVC.
  
            </p>
          </ScrollAnimatedElement>

          {/* <ScrollAnimatedElement direction="y" distance={20} delay={0.6}>
            <div className="mt-6">
              <motion.a
                href="/crowdfunding/form"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium transition-all duration-300 shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contribute Now
              </motion.a>
            </div>
          </ScrollAnimatedElement> */}
        </div>

        <div className="w-full md:w-[45%]">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-indigo-700/30 mix-blend-overlay z-10"></div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-800/30 rounded-full blur-xl z-0 pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-indigo-800/30 rounded-full blur-xl z-0 pointer-events-none"></div>

              {/* Video or Image */}
              <div className="relative aspect-video h-full">
                <div className="relative z-40 h-full">
                  <MuxPlayer
                    playbackId="A3nZBzfdzGxA3LlkE46FPAErJI027rx5xoIYINyfSjVI"
                    streamType="on-demand"
                    controls
                    metadata={{
                      video_title: 'CrowdFunding 2025',
                      viewer_user_id: 'Placeholder (optional)',
                    }}
                  />
                </div>
                {/* Overlays with pointer-events-none */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 -z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:12px_12px] -z-20 opacity-30 pointer-events-none"></div>
              </div>
            </div>
        </div>
      </section>
      <Brochure />
      {/* Funding Stats Section */}
      <section className="relative text-white py-24 px-6 md:px-16 flex flex-col md:flex-row justify-between gap-12 z-10 border-t border-gray-800/50">
        <div className="md:w-1/2">
          <ScrollAnimatedElement direction="y" distance={30}>
            <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
              Fund Allocation
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              DRIVEN BY PASSION <br/> FUELED BY YOU.

            </h2>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6"></div>

            <p className="text-base md:text-lg leading-relaxed opacity-80 mb-8 max-w-xl text-gray-300">
            Designing and building high performance vehicles is exhilarating, but it's not easy nor cheap. Our team is entirely student-run, and we rely on the generosity of sponsors, alumni, and well-wishers to keep us on the track.
            </p>

            <motion.a
              href="/crowdfunding/form"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium transition-all duration-300 shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contribute Now
            </motion.a>
          </ScrollAnimatedElement>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-8">
          {/* Stats Cards with modern styling */}
          <ScrollAnimatedElement direction="y" distance={30} delay={0.1}>
            <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 max-[500px]:p-4">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class" ref={counterRef1}></span>
              <span className="text-3xl">L</span>
              </div>
              <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
                TARGET
              </div>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement direction="y" distance={30} delay={0.2}>
            <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 max-[500px]:p-4">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class max-[500px]:text-[40px]" ref={counterRef2}></span>
                <span className="text-3xl max-[500px]:text-[30px]">{amountsymbol}</span>
              </div>
              <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
                RAISED
              </div>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement direction="y" distance={30} delay={0.3}>
            <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 max-[500px]:p-4">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class" ref={counterRef3}></span>
                {/* <span className="text-3xl">L</span> */}
              </div>
              <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
                CONTRIBUTORS
              </div>
            </div>
          </ScrollAnimatedElement>

          <ScrollAnimatedElement direction="y" distance={30} delay={0.4}>
            <div className="bg-gray-800/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 max-[500px]:p-4">
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              <span className="counter-class" ref={counterRef4}></span>
              </div>
              <div className="text-sm opacity-70 uppercase tracking-wider text-blue-300">
                DAYS LEFT
              </div>
            </div>
          </ScrollAnimatedElement>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
