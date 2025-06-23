import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Mobile version component (completely different design)
function MobileAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div ref={ref} className="relative bg-black overflow-hidden">
      {/* Header with gradient */}
      <div className="w-full h-[200px] bg-gradient-to-t from-black/60 via-black/40 to-black/50 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/homepage/whoweare.webp"
            alt="SAE Background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-center"
          >
            <h1 className="text-3xl font-bold">WHO ARE WE?</h1>
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-2"></div>
          </motion.div>
        </div>
      </div>

      {/* Content cards */}
      <div className="px-5 -mt-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-5 mb-5 shadow-lg border border-white/10"
        >
          {/* <h2 className="text-white text-lg font-semibold mb-3">Our Chapter</h2> */}
          <p className="text-white/90 text-sm leading-relaxed">
            SAE NIT Kurukshetra is the official collegiate chapter affiliated
            with SAE India and SAE International—the global authority in
            mobility engineering. We bridge academic knowledge with real-world
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-5 mb-5 shadow-lg border border-white/10"
        >
          {/* <h2 className="text-white text-lg font-semibold mb-3">
            Our Philosophy
          </h2> */}
          <p className="text-white/90 text-sm leading-relaxed">
            At our core, engineering is not just learned, but lived. Through
            collaboration, hands-on experience, and innovation, we explore every
            facet of mobility—from design to fabrication and testing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-white text-lg font-semibold mb-3">
            We bring our skills to many competitions
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-900/50 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-500/30">
              Baja SAE India
            </span>
            <span className="bg-blue-900/50 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-500/30">
              SUPRA India
            </span>
            <span className="bg-blue-900/50 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-500/30">
              ATVC
            </span>
            <span className="bg-blue-900/50 text-white px-4 py-2 rounded-full text-xs font-medium backdrop-blur-sm border border-blue-500/30">
              Formula Bharat
            </span>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

// Desktop version (original component)
export default function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [firstpoint,setFirstpoint] = useState(false);
  const [secondpoint,setSecondpoint] = useState(false);
  // Detect if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 500);
      setFirstpoint(window.innerWidth < 1450 && window.innerWidth>1300);
      setSecondpoint(window.innerWidth < 1300);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
        rootMargin: "-50px",
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

  let photowidth = 1100;
  if(firstpoint){
    photowidth=980;
  }
  else if(secondpoint){
    photowidth=930;
  }
  else{
    photowidth=1100;
  }
  // Render mobile component if screen width is less than 500px
  if (isMobile) {
    return <MobileAbout />;
  }

  // Otherwise render the desktop version (original component)
  return (
    <div
      ref={ref}
      className="relative w-full h-screen max-[800px]:h-[90vh] max-[620px]:h-[80vh] overflow-hidden max-[451px]:h-[58vh] max-[392px]:h-[84vh]"
    >
      {/* Background Image */}
      <Image
        src="/assets/images/homepage/1.webp"
        alt="Car"
        width={photowidth}
        height={600}
        className="z-0 max-[881px]:h-full h-full block"
        priority
      />

      {/* Overlay with skewed background */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 clip-diagonal" />

      {/* Text Content */}
      <div className="absolute right-0 top-[41%] transform w-[60.5%] -translate-y-1/2 z-20 pr-0 p-6 max-[1421px]:top-[38%] max-[1320px]:w-[61.5%] max-[1220px]:w-[63%] max-[1100px]:w-[65%] max-[880px]:w-[68%] min-[1000px]:p-12 max-[1000px]:p-8 max-[700px]:p-6 md:pr-0 text-white">
        <motion.div
          className="relative w-[840px] h-[78px] mx-[31px] mb-2 max-[1496px]:h-[70px] max-[1496px]:mb-2 max-[800px]:mb-2 max-[750px]:mb-6 max-[620px]:mb-8"
          initial={{ opacity: 0, x: 100 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/assets/images/homepage/3.webp"
            alt="Heading Capsule"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 flex items-center pl-8 text-4xl font-bold max-[700px]:pl-6 max-[620px]:text-3xl">
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
          className="w-[80%] absolute right-8 bg-opacity-90 p-8 pt-0 rounded-md max-[1421px]:p-6 max-[1421px]:pt-0 max-[1421px]:pl-14 max-[1300px]:pr-0 max-[1300px]:pl-18 max-[1120px]:px-15 max-[1120px]:py-6 max-[1051px]:pr-8 max-[950px]:pr-6 max-[900px]:pr-4 max-[900px]:py-3 max-[900px]:pt-0 max-[760px]:pr-0 max-[1120px]:text-[18px] max-[900px]:text-[15px] max-[900px]:right-6 max-[751px]:text-[14px] max-[620px]:text-[13px]"
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
            SAE NIT Kurukshetra is the official NIT KKR collegiate chapter of
            SAE India, affiliated with SAE International—the global authority in
            mobility engineering. We are a community of aspiring engineers
            committed to bridging the gap between academic knowledge and
            real-world application.
            <br />
          </motion.p>
          <motion.p
            className="text-justify md:text-base leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            At our core, we believe engineering is not just learned, but lived.
            Through collaboration across disciplines, hands-on experience, and a
            relentless pursuit of innovation, we explore every facet of
            mobility—from design and simulation to fabrication and testing.
            Guided by our faculty and driven by purpose, we are industry-ready
            professionals with a strong foundation in teamwork, leadership, and
            technical excellence.
          </motion.p>

          <motion.p
            className="font-semibold mt-4 max-[900px]:mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            We bring our skills to many competitions
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-6 mt-2 text-sm md:text-base max-[1000px]:gap-4 max-[900px]:mt-[5px] max-[900px]:gap-3 max-[620px]:gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <span>Baja SAE India</span>
            <span>SUPRA India</span>
            <span>ATVC</span>
            <span>Formula Bharat</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
