"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function OurTeams() {
  const acceleronRef = useRef(null);
  const nitroxRef = useRef(null);

  return (
    <section className="bg-white py-16 px-8 min-[1050px]:px-14 max-[48rem]:px-6 overflow-hidden z-10">
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
            className="max-w-[44vw] max-[1050px]:max-w-[40vw] max-[768px]:max-w-[75%] max-[541px]:max-w-[90%] max-[461px]:max-w-[95%] max-[420px]:max-w-[100%] "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[57vw] h-[100px] mb-8 max-[1050px]:mb-4 max-[852px]:w-[85vw] max-[541px]:w-[120vw] max-[420px]:w-[140vw]">
              <Image
                src="/assets/images/homepage/Vector 38.svg"
                alt="Heading Capsule"
                fill
                className="object-contain"
                priority
              />
              <motion.div
                className="absolute inset-0 flex items-center pl-8 text-4xl font-bold max-[420px]:text-[28px] max-[420px]:pl-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-black mr-4 z-10">ACCELERONS ELECTRIC</span>
              </motion.div>
            </div>
            <motion.p
              className="ml-[30px] mb-4 text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[1050px]:ml-[20px] max-[500px]:text-[17px] max-[441px]:ml-[10px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Meet Team Accelerons Electric, SAE NIT KKR’s formula student team. We design, build, and race high-performance electric formula-style vehicles for some of India’s most prestigious student motorsport events.<br/>
            </motion.p>
            <motion.p
              className="ml-[30px] mb-4 text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[1050px]:ml-[20px] max-[500px]:text-[17px] max-[441px]:ml-[10px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Born from a love for speed, design, and serious engineering, the team is a blend of members playing a role in transforming raw energy into refined motion. We don’t just build cars. We build them. 
            </motion.p>
            <motion.p
              className="ml-[30px] text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[1050px]:ml-[20px] max-[500px]:text-[17px] max-[441px]:ml-[10px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              We participate in competitions like Formula Bharat, Formula Imperial and SUPRA.
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
            className="max-w-[44vw] flex flex-col items-end max-[768px]:max-w-[75%] max-[541px]:max-w-[85%] max-[441px]:max-w-[95%] max-[420px]:max-w-[98%]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                  className="absolute inset-0 flex items-center justify-end pl-8 text-4xl font-bold max-[420px]:text-3xl"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1}}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="text-black mr-10 z-10">NITROX</span>
                </motion.div>
              </div>
            <div
              className="max-w-[44vw] flex flex-col items-start max-[768px]:max-w-[75%] max-[541px]:max-w-[85%] max-[441px]:max-w-[95%] max-[420px]:max-w-[98%]"
              
            >
              <motion.p
                className="mr-[30px] mb-4 text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[500px]:text-[17px] max-[1050px]:ml-[20px] max-[441px]:mr-[10px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Meet Team Nitrox, SAE NIT KKR’s very own all-terrain vehicle (ATV) team, where off-road engineering meets fearless innovation.

              </motion.p>
              <motion.p
                className="mr-[30px] mb-4 text-justify text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[500px]:text-[17px] max-[1050px]:ml-[20px] max-[441px]:mr-[10px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We design and fabricate single-seater, four-wheel-drive ATVs that are built to conquer everything from rugged trails to technical tracks. Whether it’s clearing obstacles, climbing grades, or outlasting endurance rounds, Team Nitrox thrives where the terrain gets tough and the challenge gets real.

              </motion.p>
              <motion.p
                className="mr-[30px] text-start text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E] max-[500px]:text-[17px] max-[1050px]:ml-[20px] max-[441px]:mr-[10px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                We participate in competitions such as eBAJA and ATVC.

              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
