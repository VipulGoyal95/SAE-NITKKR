"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";

function Model({ scrollYProgress }) {
  const { scene } = useGLTF("/audi-etron.glb");
  const modelRef = useRef();

  useFrame(() => {
    if (!modelRef.current) return;
    const progress = scrollYProgress.get();
    let scale = 0;
    if (progress >= 0.1 && progress <= 0.2) {
      scale = ((progress - 0.1) / 0.1) * 100.5;
    } else if (progress > 0.2) {
      scale = 100.5;
    }
    modelRef.current.scale.set(scale, scale, scale);
  });

  return <primitive ref={modelRef} object={scene} scale={0} />;
}

function Scene({ scrollYProgress }) {
  const { camera } = useThree();

  const px = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [3, -5, 0, 4, 5]
  );
  const py = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 2, 5]
  );
  const pz = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [5, 5, 1, 6, 5]
  );

  const lookX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, -0.8, 0, 0]
  );
  const lookY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 0, 0]
  );
  const lookZ = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0, 0, 0, 0]
  );

  useFrame(() => {
    camera.position.set(px.get(), py.get(), pz.get());
    camera.lookAt(lookX.get(), lookY.get(), lookZ.get());
  });

  return null;
}

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0, 0]);

  return (
    <div ref={targetRef} className="relative w-full h-[800vh]">
      <div className="fixed top-0 left-0 -z-2 h-full w-full bg-black" />
      <div className="w-full h-full fixed top-0 left-0 z-[-1]">
        <Canvas camera={{ fov: 25 }} className="w-full h-full">
          <ambientLight intensity={2.5} />
          <directionalLight position={[10, 10, 5]} intensity={4.5} />
          <Suspense fallback={null}>
            <Model scrollYProgress={scrollYProgress} />
            <Scene scrollYProgress={scrollYProgress} />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        style={{ opacity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full max-w-[90%] md:max-w-[650px] text-center"
      >
        {/* Main Title */}
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Welcome To
        </motion.h1>
        <motion.div
          className="relative group"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            SAE NIT Kurukshetra
          </h1>

          {/* Animated Underline */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-white group-hover:bg-gradient-to-r hover:bg-white transition-all duration-300"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
