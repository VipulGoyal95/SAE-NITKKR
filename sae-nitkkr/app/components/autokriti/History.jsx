"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
// import image25 from '../../../../public/assets/images/autokriti/23.png';
// import image24 from '../../../../public/assets/images/autokriti/24.png';
// import image23 from '../../../../public/assets/images/autokriti/25.png';
// import image19 from '../../../../public/assets/images/autokriti/Ellipse 19.png';
// import image22 from '../../../../public/assets/images/autokriti/Ellipse 20.png';
// import image20 from '../../../../public/assets/images/autokriti/Ellipse 22.png';
// import image26 from '../../../../public/assets/images/autokriti/Ellipse 26.png';
// import image27 from '../../../../public/assets/images/autokriti/Ellipse 27.png';
// import image4 from '../../../../public/assets/images/autokriti/Line 4.png';
// import arrow2 from '../../../../public/assets/images/autokriti/Arrow 2.png';
// import arrow3 from '../../../../public/assets/images/autokriti/Arrow 3.png';

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

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen px-16">
      <h1 className='text-[70px] font-bold'>History <br/><span className='text-zinc-600'>Our</span> Story</h1>
      
      <div className="flex flex-row justify-between">
        <h1 className="text-[140px] font-[600]">202<span style={{ fontSize: `${fontSizes[5]}px` }} className="ml-[2px] inline-block align-top">5</span></h1>
        <h1 className='text-[140px] font-[600]'>202<span style={{ fontSize: `${fontSizes[4]}px` }} className="ml-[2px] inline-block align-top">4</span></h1>
        <h1 className='text-[140px] font-[600]'>202<span style={{ fontSize: `${fontSizes[3]}px` }} className="ml-[2px] inline-block align-top">3</span></h1>
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
      {focusPosition==0 && 
        <div id="data" className="text-white mt-[30px] text-[25px] w-[70%]">
          In October 2025, Autokriti 15.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
        </div>
      }
      {focusPosition==1 && 
        <div id="data" className="text-white mt-[30px] text-[25px] w-[70%]">
          In October 2024, Autokriti 14.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
        </div>
      }
      {focusPosition==2 && 
        <div id="data" className="text-white mt-[30px] text-[25px] w-[70%]">
          In October 2023, Autokriti 13.0 will mark a new milestone, expecting 1,500+ students from various disciplines. This edition introduces a diverse range of new workshops, expanding the learning experience. Get ready to be a part of this exciting journey—registrations open soon
        </div>
      }
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
