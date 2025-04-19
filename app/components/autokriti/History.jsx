"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

const History = () => {
  const [mounted, setMounted] = useState(false);
  const [fontSizes, setFontSizes] = useState({
    5: 140,
    4: 140,
    3: 140
  });
  const [focusPosition, setFocusPosition] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateFontSizes = (currentYear) => {
    setFontSizes({
      5: currentYear === 5 ? 165 : 140,
      4: currentYear === 4 ? 165 : 140,
      3: currentYear === 3 ? 165 : 140
    });
  };

  const handleFocusChange = (direction) => {
    if (direction === 'left') {
      setFocusPosition(prev => (prev - 1 + 3) % 3);
    } else {
      setFocusPosition(prev => (prev + 1) % 3);
    }
  };

  useEffect(() => {
    if (mounted) {
      const currentYear = focusPosition === 0 ? 5 : focusPosition === 1 ? 4 : 3;
      updateFontSizes(currentYear);
    }
  }, [focusPosition, mounted]);

  const getFocusPosition = () => {
    switch (focusPosition) {
      case 0: return 'left-[-45px]';
      case 1: return 'left-1/2 transform -translate-x-1/2';
      case 2: return 'right-[-45px]';
      default: return 'left-1/2 transform -translate-x-1/2';
    }
  };

  return (
    <div className="min-h-screen px-16">
      <h1 className='text-[65px] mb-[20px] font-bold'>History <br/><span className='text-zinc-600'>Our</span> Story</h1>
      
      <div className="flex h-[20vh] flex-row items-center justify-between">
        <p className="text-[8.5rem] font-[600]">202<span style={{ fontSize: mounted ? `${fontSizes[5]}px` : '140px' }} className="ml-[2px] inline-block align-top">5</span></p>
        <p className='text-[8.5rem] font-[600]'>202<span style={{ fontSize: mounted ? `${fontSizes[4]}px` : '140px' }} className="ml-[2px] inline-block align-top">4</span></p>
        <p className='text-[8.5rem] font-[600]'>202<span style={{ fontSize: mounted ? `${fontSizes[3]}px` : '140px' }} className="ml-[2px] inline-block align-top">3</span></p>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative flex flex-row justify-center items-center w-full">
          <div className="flex flex-row justify-between items-center w-[100%]">
            <div className="relative right-[30px]">
              <Image
                src="/assets/images/autokriti/Ellipse 19.png"
                alt="Ellipse 19"
                width={120}
                height={120}
                className="p-[50px]"
                priority
              />
            </div>
            <div className="relative">
              <Image
                src="/assets/images/autokriti/Ellipse 20.png"
                alt="Ellipse 22"
                width={120}
                height={120}
                className="p-[50px] mx-[110px]"
                priority
              />
            </div>
            {/* <Image
              src={image20}
              alt="Ellipse 20"
              width={120}
              height={120}
              className="p-[50px] mx-[150px]"
              priority
            /> */}
            <div className="relative left-[30px]">
              <Image
                src="/assets/images/autokriti/Ellipse 26.png"
                alt="Ellipse 26"
                width={120}
                height={120}
                className="p-[50px]"
                priority
              />
            </div>
          </div>
          <div className={`absolute top-1/2 ${getFocusPosition()} transform -translate-y-1/2`}>
            <Image
              id="focus"
              src="/assets/images/autokriti/Ellipse 27.png"
              alt="Focus Ellipse"
              width={150}
              height={150}
              className="p-[50px]"
              priority
            />
          </div>
        </div>
        
        <div className="absolute top-1/2 w-full -translate-y-1/2">
          <Image
            src="/assets/images/autokriti/Line 4.png"
            alt="Line 4"
            width={1000}
            height={10}
            className="w-[97%] mx-auto"
            priority
          />
        </div>
      </div>
      {mounted && (
        <>
          {focusPosition === 0 && (
            <div id="data" className="text-justify text-white text-[24px] w-[70%]">
              In October 2025, Autokriti 15.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </div>
          )}
          {focusPosition === 1 && (
            <div id="data" className="text-justify text-white text-[24px] w-[70%]">
              In October 2024, Autokriti 14.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </div>
          )}
          {focusPosition === 2 && (
            <div id="data" className="text-justify text-white text-[24px] w-[70%]">
              In October 2023, Autokriti 13.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
            </div>
          )}
        </>
      )}
      <div className="flex flex-row gap-4">
        <button 
          id="btn1" 
          className="text-white p-[10px] rounded-[100%] bg-[#313131] my-[20px] hover:bg-white hover:text-black cursor-pointer"
          onClick={() => handleFocusChange('left')}
        >
          <Image src="/assets/images/autokriti/Arrow 2.png" alt="Arrow 2" width={30} height={30} />
        </button>
        <button 
          id="btn2" 
          className="text-white p-[10px] rounded-[100%] bg-[#313131] my-[20px] hover:bg-white hover:text-black cursor-pointer"
          onClick={() => handleFocusChange('right')}
        >
          <Image src="/assets/images/autokriti/Arrow 3.png" alt="Arrow 3" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default History;
