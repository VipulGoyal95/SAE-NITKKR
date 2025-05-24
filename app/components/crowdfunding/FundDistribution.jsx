// components/FundDistribution.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ScrollAnimatedElement, Tilt3DCard } from "./ScrollAnimations";

const FundDistribution = () => {
  const sectionRef = useRef(null);
  const isInViewport = useInView(sectionRef);
  const [isInView, setIsInView] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);

  // Update state when section comes into view
  useEffect(() => {
    if (isInViewport) {
      setIsInView(true);
    }
  }, [isInViewport]);

  const funds = [
    {
      department: "Vehicle Components",
      icon: "🛠️",
      raised: 320000,
      target: 450000,
      description: "Suspension, steering, chassis, and drivetrain components",
    },
    {
      department: "Electronics & Controls",
      icon: "⚡",
      raised: 180000,
      target: 300000,
      description: "ECU, sensors, wiring harness, and control systems",
    },
    {
      department: "Manufacturing & Fabrication",
      icon: "🏭",
      raised: 220000,
      target: 350000,
      description: "Material procurement, machining, welding, and assembly",
    },
    {
      department: "Transportation & Logistics",
      icon: "🚚",
      raised: 80000,
      target: 400000,
      description: "Event registration, team travel, and equipment shipping",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-gray-900 py-24 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-purple-900/20 to-indigo-900/10 blur-xl"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        <motion.div
          className="absolute bottom-[5%] left-[5%] w-96 h-96 rounded-full bg-gradient-to-l from-blue-900/20 to-indigo-900/10 blur-xl"
          initial={{ scale: 0.9, opacity: 0.6 }}
          animate={{ scale: 1.1, opacity: 0.9 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        {/* Hexagon Pattern SVG */}
        <motion.svg
          className="absolute top-[10%] left-[8%] w-16 h-16 text-indigo-500/20"
          viewBox="0 0 24 24"
          fill="none"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            d="M21 16.0002V8.00024C20.9999 7.6466 20.9156 7.29752 20.7539 6.9824C20.5921 6.66728 20.3577 6.39463 20.07 6.18824L13.07 2.18824C12.7827 1.98121 12.4436 1.87158 12.095 1.87158C11.7464 1.87158 11.4073 1.98121 11.12 2.18824L4.12 6.18824C3.83225 6.39463 3.59781 6.66728 3.4361 6.9824C3.27439 7.29752 3.19008 7.6466 3.19 8.00024V16.0002C3.19008 16.3539 3.27439 16.703 3.4361 17.0181C3.59781 17.3332 3.83225 17.6059 4.12 17.8122L11.12 21.8122C11.4073 22.0193 11.7464 22.1289 12.095 22.1289C12.4436 22.1289 12.7827 22.0193 13.07 21.8122L20.07 17.8122C20.3577 17.6059 20.5921 17.3332 20.7539 17.0181C20.9156 16.703 20.9999 16.3539 21 16.0002Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#6366f1_1px,transparent_1px),linear-gradient(to_right,#6366f1_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <ScrollAnimatedElement threshold={0.1} direction="y" distance={30}>
            <div className="inline-flex items-center mb-3 px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium backdrop-blur-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
              Transparent Funding
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">
              WHERE YOUR SUPPORT GOES
            </h2>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-3 mb-6 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            ></motion.div>

            <p className="text-lg opacity-80 tracking-wider max-w-2xl mx-auto text-gray-300">
              We believe in complete transparency. See exactly how your
              contributions will be used to bring our engineering projects to
              life.
            </p>
          </ScrollAnimatedElement>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {funds.map((fund, idx) => {
            const percentage = Math.min(
              (fund.raised / fund.target) * 100,
              100
            ).toFixed(0);

            return (
              <ScrollAnimatedElement
                key={idx}
                direction="y"
                distance={50}
                delay={idx * 0.1}
                threshold={0.1}
              >
                <Tilt3DCard>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
                    <div className="mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.span
                            className="text-2xl"
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: idx + 1,
                            }}
                          >
                            {fund.icon}
                          </motion.span>
                          <h3 className="text-xl font-bold text-white">
                            {fund.department}
                          </h3>
                        </div>
                        <span className="px-3 py-1 text-xs font-medium bg-blue-900/50 text-blue-300 rounded-full">
                          {percentage}% Complete
                        </span>
                      </div>
                      <p className="text-gray-400 mt-2 text-sm">
                        {fund.description}
                      </p>
                    </div>

                    <div className="relative mt-6">
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-medium text-blue-300">
                          ₹{fund.raised.toLocaleString()}
                        </span>
                        <span className="font-medium text-gray-400">
                          ₹{fund.target.toLocaleString()}
                        </span>
                      </div>

                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${percentage}%` }}
                          transition={{
                            duration: 1.5,
                            delay: 0.2,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              </ScrollAnimatedElement>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <ScrollAnimatedElement direction="y" distance={30} delay={0.6}>
            <motion.a
              href="/donation"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-medium transition-all duration-300 shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Projects
            </motion.a>
          </ScrollAnimatedElement>
        </div>
      </div>
    </motion.section>
  );
};

export default FundDistribution;
