"use client"

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const [mounted, setMounted] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [focusPosition, setFocusPosition] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  const handleFocusChange = (direction) => {
    if (direction === 'left') {
      setFocusPosition(prev => (prev - 1 + 3) % 3);
    } else {
      setFocusPosition(prev => (prev + 1) % 3);
    }
  };

  const getFocusPosition = () => {
    switch (focusPosition) {
      case 0: return 'left-[-45px]';
      case 1: return 'left-1/2 transform -translate-x-1/2';
      case 2: return 'right-[-45px]';
      default: return 'left-1/2 transform -translate-x-1/2';
    }
  };

  const getFontSize = (year) => {
    const isFocused = focusPosition === (year === 5 ? 0 : year === 4 ? 1 : 2);
    
    // Default laptop view
    let fontSize = isFocused ? 155 : 136;
    
    // Tablet view (1165px)
    if (typeof window !== 'undefined' && window.innerWidth <= 1165) {
      fontSize = isFocused ? 135 : 115;
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 980) {
      fontSize = isFocused ? 115 : 95;
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 860) {
      fontSize = isFocused ? 93 : 75;
    }
    
    // Mobile view
    // if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    //   fontSize = isFocused ? 85 : 64;
    // }

    if (typeof window !== 'undefined' && window.innerWidth <= 693) {
      fontSize = isFocused ? 85 : 64;
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 560) {
      fontSize = isFocused ? 60 : 46;
    }

    if (typeof window !== 'undefined' && window.innerWidth <= 420) {
      fontSize = isFocused ? 53 : 43;
    }

    console.log(window.innerWidth);
    return fontSize;
  };

  const getColor = (year) =>{
    if(focusPosition===year && year==0){
      return "#EE6B46"; 
    }
    if(focusPosition===year && year==1){
      return "#403CB280"
    }
    if(focusPosition===year && year==2){
      return "#243365C7"
    }
    return "white"
  }

  return (
    <div ref={componentRef} className="min-h-screen px-16 max-[1025px]:px-8 max-[700px]:px-8 max-[500px]:px-4 max-[560px]:mx-auto overflow-hidden max-[1025px]:mt-8">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='text-[65px] font-bold max-[1050px]:text-[55px] max-[900px]:text-[45px] max-[560px]:text-[38px] max-[440px]:text-[42px] max-[420px]:text-[50px]'
      >
        History <br/>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-zinc-600'
        >
          Our
        </motion.span> Story
      </motion.h1>
      
      <div className="flex h-[20vh] flex-row items-start justify-between max-[860px]:h-[14vh]">
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[8.5rem] font-[600] max-[1165px]:text-[7rem] max-[980px]:text-[6rem] max-[860px]:text-[4.68rem] max-[693px]:text-[4rem] max-[560px]:text-[46px] max-[420px]:text-[43px]"
        >
          202<span style={{ fontSize: mounted ? `${getFontSize(5)}px` : '130px' ,color : getColor(0)}} className="ml-[2px] inline-block align-top transition-all duration-300">5</span>
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-[8.5rem] font-[600] max-[1165px]:text-[7rem] max-[980px]:text-[6rem] max-[860px]:text-[4.68rem] max-[693px]:text-[4rem] max-[560px]:text-[46px] max-[420px]:text-[43px]'
        >
          202<span style={{ fontSize: mounted ? `${getFontSize(4)}px` : '130px' ,color : getColor(1) }} className="ml-[2px] inline-block align-top transition-all duration-300">4</span>
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-[8.5rem] font-[600] max-[1165px]:text-[7rem] max-[980px]:text-[6rem] max-[860px]:text-[4.68rem] max-[693px]:text-[4rem] max-[560px]:text-[46px] max-[420px]:text-[43px]'
        >
          202<span style={{ fontSize: mounted ? `${getFontSize(3)}px` : '130px' ,color : getColor(2)}} className="ml-[2px] inline-block align-top transition-all duration-300">3</span>
        </motion.p>
      </div>

      <div className="relative flex flex-col items-center mt-[55px] mb-[30px] max-[700px]:mt-[40px] max-[560px]:mt-[25px] max-[420px]:mt-[15px]">
        <div className="relative flex flex-row justify-center items-center w-full">
          <div className="flex flex-row justify-between items-center w-[100%]">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={hasAnimated ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative left-[20px]"
            >
              <Image
                src="/assets/images/autokriti/Ellipse 19.png"
                alt="Ellipse 19"
                width={20}
                height={20}
                priority
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={hasAnimated ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <Image
                src="/assets/images/autokriti/Ellipse 20.png"
                alt="Ellipse 22"
                width={20}
                height={20}
                priority
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={hasAnimated ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative right-[20px]"
            >
              <Image
                src="/assets/images/autokriti/Ellipse 26.png"
                alt="Ellipse 26"
                width={20}
                height={20}
                priority
              />
            </motion.div>
          </div>
          <motion.div 
            className={`absolute top-1/2 ${getFocusPosition()} transform -translate-y-1/2`}
            initial={{ scale: 0 }}
            animate={hasAnimated ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Image
              id="focus"
              src="/assets/images/autokriti/Ellipse 27.png"
              alt="Focus Ellipse"
              width={150}
              height={150}
              className="p-[50px]"
              priority
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute top-1/2 w-full -translate-y-1/2"
          initial={{ scaleX: 0 }}
          animate={hasAnimated ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image
            src="/assets/images/autokriti/Line 4.png"
            alt="Line 4"
            width={1000}
            height={10}
            className="w-[97%] mx-auto max-[720px]:w-[90%] max-[420px]:w-[88%]"
            priority
          />
        </motion.div>
      </div>
      {mounted && hasAnimated && (
        <>
          {focusPosition === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              id="data" 
              className="text-justify text-white text-[22px] w-[70%] max-[1050px]:text-[20px] max-[700px]:text-[18px] max-[560px]:w-[80%] max-[560px]:text-[16px] max-[440px]:w-[85%]"
            >
              In October 2025, Autokriti 15.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </motion.div>
          )}
          {focusPosition === 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              id="data" 
              className="text-justify text-white text-[22px] w-[70%] max-[1050px]:text-[20px] max-[700px]:text-[18px] max-[560px]:w-[80%] max-[560px]:text-[16px] max-[440px]:w-[85%]"
            >
              In October 2024, Autokriti 14.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </motion.div>
          )}
          {focusPosition === 2 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              id="data" 
              className="text-justify text-white text-[22px] w-[70%] max-[1050px]:text-[20px] max-[700px]:text-[18px] max-[560px]:w-[80%] max-[560px]:text-[16px] max-[440px]:w-[85%]"
            >
              In October 2023, Autokriti 13.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </motion.div>
          )}
        </>
      )}
      <div className="flex flex-row gap-4">
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="btn1" 
          className="text-white p-[10px] rounded-[100%] bg-[#313131] my-[20px] hover:bg-white group cursor-pointer"
          onClick={() => handleFocusChange('left')}
        >
          <div className="group-hover:invert">
            <Image src="/assets/images/autokriti/Arrow 2.png" alt="Arrow 2" width={30} height={30} />
          </div>
        </motion.button>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          id="btn2" 
          className="text-white p-[10px] rounded-[100%] bg-[#313131] my-[20px] hover:bg-white group cursor-pointer"
          onClick={() => handleFocusChange('right')}
        >
          <div className="group-hover:invert">
            <Image src="/assets/images/autokriti/Arrow 3.png" alt="Arrow 3" width={30} height={30} />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default History;
