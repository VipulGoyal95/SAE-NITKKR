// components/TeamShowcase.js
"use client";
import Image from "next/image";

const TeamShowcase = () => {
  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full p-4 md:p-8 max-w-7xl mx-auto">
      {/* Left Column - Nitrox */}
      <div className="flex flex-col h-full">
        <div className="flex-grow flex justify-center items-center mb-8">
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[500px] rounded-[35px] overflow-hidden">
            <Image
              src="/assets/images/homepage/acceleron.png"
              alt="Nitrox Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative w-full max-w-[700px] h-[80px] mb-6">
            {/* <Image
              src="/assets/images/homepage/Vector 39.svg"
              alt="Heading Capsule"
              fill
              className="object-contain"
              priority
            /> */}
            <div className="absolute inset-0 border  border-white border-l-0 rounded-[4rem] rounded-l-none flex items-center justify-end pr-12">
              <span className="text-white text-3xl md:text-4xl font-bold z-10">
                Nitrox
              </span>
            </div>
          </div>
          <p className="text-justify font-['Advent_Pro'] text-lg md:text-xl leading-tight tracking-[0.05em] text-white max-w-[90%] mx-auto">
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India,
            which is a wing of SAE International, on a national scale. The club
            is a platform for budding engineers to work together to arrive at
            solutions to the problems in the mobility field. It forms a link
            between naive talents and pioneers of the industry. Valuing the
            interdisciplinary nature of the automobile sector, undergraduate
            students from various branches strive to innovate better under the
            guidance of our professors here at NIT Kurukshetra. We bring our
            skills to many competitions.
          </p>
        </div>
      </div>

      {/* Right Column - Accelerons */}
      <div className="flex flex-col h-full">
        <div className="w-full mb-8">
          <div className="relative w-full max-w-[700px] h-[80px] mb-6">
            <Image
              src="/assets/images/homepage/Vector 38.svg"
              alt="Heading Capsule"
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-start pl-8">
              <span className="text-white text-3xl md:text-4xl font-bold z-10">
                Accelerons
              </span>
            </div>
          </div>
          <p className="text-justify font-['Advent_Pro'] text-lg md:text-xl leading-tight tracking-[0.05em] text-white max-w-[90%] mx-auto">
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India,
            which is a wing of SAE International, on a national scale. The club
            is a platform for budding engineers to work together to arrive at
            solutions to the problems in the mobility field. It forms a link
            between naive talents and pioneers of the industry. Valuing the
            interdisciplinary nature of the automobile sector, undergraduate
            students from various branches strive to innovate better under the
            guidance of our professors here at NIT Kurukshetra. We bring our
            skills to many competitions.
          </p>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[500px] rounded-[35px] overflow-hidden">
            <Image
              src="/assets/images/homepage/acceleron.png"
              alt="Acceleron Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamShowcase;
