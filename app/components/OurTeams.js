"use client"
import Image from 'next/image';

export default function OurTeams() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-center mb-16">
        <span className="inline-block border-y-2 border-black py-4 px-6 text-4xl font-bold tracking-wide text-black">
          OUR TEAMS
        </span>
      </h2>

      <div className="flex flex-col gap-20">
        {/* ACCELERON */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[500px] rounded-[35px] overflow-hidden mx-5">
            <Image
              src="/assets/images/homepage/acceleron.png"
              alt="Acceleron Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
          <div className="max-w-xl">
            <div className="relative w-[850px] h-[100px] mb-8">
              <Image
                src="/assets/images/homepage/Vector 38.svg"
                alt="Heading Capsule"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-center pl-8 text-4xl font-bold">
                <span className="text-black mr-4 z-10">ACCELERONS</span>
              </div>
            </div>
            <p className="ml-[30px] text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E]">
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
            </p>
            {/* <div className="flex flex-row ml-[30px] gap-[40px]">
              <Image src="/Supra-sae-india.jpg" alt="supra" width={100} height={140} className="h-full w-[200px]" />
              <Image src="/formula-bharat.png" alt="fb" width={100} height={140} className="h-full w-[200px]" />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[500px] rounded-[35px] overflow-hidden mx-5">
            <Image
              src="/assets/images/homepage/nitrox.png"
              alt="Acceleron Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
          <div className="max-w-xl flex flex-col items-end">
            <div className="relative left-0 w-[850px] h-[100px] mb-8">
              <Image
                src="/assets/images/homepage/Vector 39.svg"
                alt="Heading Capsule"
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-end pl-8 text-4xl font-bold">
                <span className="text-black mr-10 z-10">Nitrox</span>
              </div>
            </div>
            <p className="mr-[30px] text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E]">
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
            </p>
            {/* <div className="flex flex-row mr-[30px] gap-[40px] mt-[20px]">
              <Image src="/baja-sae-india.jpg" alt="supra" width={100} height={140} className="h-[100px] w-[200px]" />
              <Image src="/ATVC.jpg" alt="fb" width={100} height={140} className="h-[100px] w-[200px]" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}