// components/TeamShowcase.js
"use client"
import Image from 'next/image';

const TeamShowcase = () => {
    return (
        <div className="text-white grid grid-cols-2 gap-2 w-full h-full p-2">
            <div className="grid grid-rows-3 h-full">
                <div className="row-span-2 w-[500px] flex justify-center items-center">
                    <div className="relative w-full md:w-[500px] h-[80%] md:h-[80%] rounded-[35px] overflow-hidden">
                        <Image
                            src="/assets/images/homepage/acceleron.png"
                            alt="Acceleron Car"
                            fill
                            className="rounded-[35px] object-cover"
                            priority
                        />
                    </div>
                </div>
                <div className="w-[80%] flex flex-col items-end pl-[40px]">
                    <div className="relative left-0 w-[800px] h-[100px] mb-8">
                        <Image
                            src="/assets/images/homepage/Vector 39.svg"
                            alt="Heading Capsule"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-end pl-8 text-4xl font-bold">
                            <span className="text-white mr-10 z-10">Nitrox</span>
                        </div>
                    </div>
                    <p className="w-[80%] mr-[30px] text-justify font-['Advent_Pro'] text-[20px] leading-[24px] tracking-[0.05em] text-[#fff]">
                        SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
                    </p>
                </div>
            </div>

            <div className="grid grid-rows-3 h-full">
                <div className="w-[80%] flex flex-col items-start">
                    <div className="relative left-0 w-[750px] h-[100px] mb-8">
                        <Image
                            src="/assets/images/homepage/Vector 38.svg"
                            alt="Heading Capsule"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-start pl-8 text-4xl font-bold">
                            <span className="text-white mr-10 z-10">Accelerons</span>
                        </div>
                    </div>
                    <p className="w-[80%] ml-[30px] text-justify font-['Advent_Pro'] text-[20px] leading-[24px] tracking-[0.05em] text-[#fff]">
                        SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
                    </p>
                </div>
                <div className="row-span-2 w-[80%] flex justify-center items-center">
                    <div className="relative w-full md:w-[500px] h-[80%] md:h-[80%] rounded-[35px] overflow-hidden">
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