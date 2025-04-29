"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function OurTeams() {
  const acceleronRef = useRef(null);
  const nitroxRef = useRef(null);
  const [isAcceleronVisible, setIsAcceleronVisible] = useState(false);
  const [isNitroxVisible, setIsNitroxVisible] = useState(false);

  useEffect(() => {
    const acceleronObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAcceleronVisible(true);
          acceleronObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    const nitroxObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNitroxVisible(true);
          nitroxObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      }
    );

    if (acceleronRef.current) {
      acceleronObserver.observe(acceleronRef.current);
    }
    if (nitroxRef.current) {
      nitroxObserver.observe(nitroxRef.current);
    }

    return () => {
      if (acceleronRef.current) {
        acceleronObserver.unobserve(acceleronRef.current);
      }
      if (nitroxRef.current) {
        nitroxObserver.unobserve(nitroxRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 px-8 min-[1050px]:px-14 max-[48rem]:px-6 overflow-hidden">
      <h2 className="text-center mb-16">
        <span className="inline-block border-y-2 border-black py-4 px-6 text-4xl font-bold tracking-wide text-black">
          OUR TEAMS
        </span>
      </h2>

      <div className="flex flex-col gap-20">
        {/* ACCELERON */}
        <div
          ref={acceleronRef}
          className="flex flex-col md:flex-row items-center gap-12 max-[1050px]:gap-8"
        >
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[500px] rounded-[35px] overflow-hidden mx-5 max-[768px]:w-[80%] max-[541px]:w-[90%]">
            <Image
              src="/assets/images/homepage/acceleron.webp"
              alt="Acceleron Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
          <motion.div
            className="max-w-[44vw] max-[1050px]:max-w-[40vw] max-[768px]:max-w-[75%] max-[541px]:max-w-[90%] max-[461px]:max-w-[95%]"
            initial={{ opacity: 0, x: 100 }}
            animate={
              isAcceleronVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[57vw] h-[100px] mb-8 max-[1050px]:mb-4 max-[852px]:w-[85vw] max-[541px]:w-[120vw]">
              <Image
                src="/assets/images/homepage/Vector 38.svg"
                alt="Heading Capsule"
                fill
                className="object-contain"
                priority
              />
              <motion.div
                className="absolute inset-0 flex items-center pl-8 text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={isAcceleronVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-black mr-4 z-10">ACCELERONS</span>
              </motion.div>
            </div>
            <motion.p
              className="ml-[30px] text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[1050px]:ml-[20px] max-[500px]:text-[17px] max-[441px]:ml-[10px]"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isAcceleronVisible
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE
              India, which is a wing of SAE International, on a national scale.
              The club is a platform for budding engineers to work together to
              arrive at solutions to the problems in the mobility field. It
              forms a link between naive talents and pioneers of the industry.
              Valuing the interdisciplinary nature of the automobile sector,
              undergraduate students from various branches strive to innovate
              better under the guidance of our professors here at NIT
              Kurukshetra. We bring our skills to many competitions.
            </motion.p>
          </motion.div>
        </div>

        <div
          ref={nitroxRef}
          className="flex flex-col md:flex-row-reverse items-center gap-12 max-[1050px]:gap-8"
        >
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[500px] rounded-[35px] overflow-hidden mx-5 max-[768px]:w-[80%] max-[541px]:w-[90%]">
            <Image
              src="/assets/images/homepage/nitrox.webp"
              alt="Nitrox Car"
              fill
              className="rounded-[35px] object-cover"
              priority
            />
          </div>
          <motion.div
            className="max-w-[44vw] flex flex-col items-end max-[768px]:max-w-[75%] max-[541px]:max-w-[85%] max-[441px]:max-w-[95%]"
            initial={{ opacity: 0, x: -100 }}
            animate={
              isNitroxVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative left-0 w-[57vw] h-[100px] mb-8 max-[1050px]:mb-4 max-[852px]:w-[85vw] max-[541px]:w-[120vw]">
              <Image
                src="/assets/images/homepage/Vector 39.svg"
                alt="Heading Capsule"
                fill
                className="object-contain"
                priority
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-end pl-8 text-4xl font-bold"
                initial={{ opacity: 0 }}
                animate={isNitroxVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="text-black mr-10 z-10">Nitrox</span>
              </motion.div>
            </div>
            <motion.p
              className="mr-[30px] text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[500px]:text-[17px] max-[1050px]:ml-[20px] max-[441px]:mr-[10px]"
              initial={{ opacity: 0, y: 30 }}
              animate={
                isNitroxVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE
              India, which is a wing of SAE International, on a national scale.
              The club is a platform for budding engineers to work together to
              arrive at solutions to the problems in the mobility field. It
              forms a link between naive talents and pioneers of the industry.
              Valuing the interdisciplinary nature of the automobile sector,
              undergraduate students from various branches strive to innovate
              better under the guidance of our professors here at NIT
              Kurukshetra. We bring our skills to many competitions.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
