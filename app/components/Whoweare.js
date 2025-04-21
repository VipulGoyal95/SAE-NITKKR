import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.2, // Start animation when 20% of component is visible
        rootMargin: "-50px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full h-screen max-[800px]:h-[90vh] max-[620px]:h-[80vh] overflow-hidden max-[451px]:h-[60vh] max-[392px]:h-[64vh]">
      {/* Background Image */}
      <Image
        src="/assets/images/homepage/1.png"
        alt="Car"
        width={1100}
        height={600}
        className="z-0 max-[881px]:h-full"
        priority
      />

      {/* Overlay with skewed background */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 clip-diagonal" />

      {/* Text Content */}
      <div className="absolute right-0 top-[41%] transform w-[60%] -translate-y-1/2 z-20 pr-0 p-6 max-[1421px]:top-[38%] max-[620px]:top-[35%] max-[450px]:top-[40%] max-[1320px]:w-[61.5%] max-[1220px]:w-[63%] max-[1100px]:w-[65%] max-[880px]:w-[68%] max-[451px]:w-[78%] max-[431px]:w-[79%] min-[1000px]:p-12 max-[1000px]:p-8 max-[700px]:p-6 max-[450px]:p-2 max-[431px]:p-0 md:pr-0 text-white">
        <motion.div 
          className="relative w-[820px] h-[100px] mx-[31px] mb-8 max-[900px]:mb-6 max-[800px]:mb-2 max-[750px]:mb-6 max-[620px]:mb-8 max-[451px]:h-[70px] max-[450px]:w-[700px] max-[450px]:mb-2 max-[416px]:mb-0 max-[416px]:h-[64px]"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/assets/images/homepage/3.png"
            alt="Heading Capsule"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 flex items-center pl-8 text-4xl font-bold max-[700px]:pl-6 max-[620px]:text-3xl max-[450px]:text-2xl">
            <motion.span 
              className="text-black mr-4 z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              WHO 
            </motion.span>
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              ARE WE?
            </motion.span>
          </div>
        </motion.div>
        <motion.div 
          className="w-[80%] absolute right-8 bg-opacity-90 p-8 rounded-md max-[1120px]:px-15 max-[1120px]:py-6 max-[1051px]:pr-8 max-[950px]:pr-6 max-[900px]:pr-4 max-[900px]:py-3 max-[900px]:pt-0 max-[760px]:pr-0 max-[1120px]:text-[18px] max-[900px]:text-[16px] max-[900px]:right-6 max-[751px]:text-[14px] max-[620px]:text-[13px] max-[451px]:text-[11px] max-[451px]:w-[85%] max-[451px]:right-4 max-[620px]:pl-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p 
            className="text-justify md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            SAE NIT Kurukshetra is a collegiate club affiliated with SAE India,
            which is a wing of SAE International, on a national scale. The club
            is a platform for budding engineers to work together to drive at
            solutions to the problems in the mobility field. It forms a link
            between naive talents and pioneers of the industry...
          </motion.p>
          <motion.p 
            className="font-semibold mt-4 max-[900px]:mt-2 max-[416px]:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            We bring our skills to many competitions
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-6 mt-2 text-sm md:text-base max-[1000px]:gap-4 max-[900px]:mt-[5px] max-[900px]:gap-3 max-[620px]:gap-2 max-[451px]:text-[11px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span>Baja SAE <span className="max-[451px]:hidden">India</span></span>
            <span>SUPRA <span className="max-[431px]:hidden">India</span></span>
            <span>ATVC</span>
            <span>Formula Bharat</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
