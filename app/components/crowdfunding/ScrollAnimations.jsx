"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Custom component for elements that animate on scroll
export const ScrollAnimatedElement = ({
  children,
  threshold = 0.1,
  duration = 0.5,
  delay = 0,
  direction = "y", // 'y' for vertical, 'x' for horizontal
  distance = 50,
  className = "",
  ...props
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "x" ? distance : 0,
      y: direction === "y" ? distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Parallax element that moves at different speeds based on scroll
export const ParallaxElement = ({
  children,
  factor = 0.2,
  className = "",
  ...props
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 500 * factor]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div style={{ y: springY }} className={`${className}`} {...props}>
      {children}
    </motion.div>
  );
};

// Rotating element that spins based on scroll position
export const RotatingElement = ({
  children,
  factor = 0.2,
  className = "",
  ...props
}) => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360 * factor]);
  const springRotate = useSpring(rotate, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{ rotate: springRotate }}
      className={`${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 3D Card that tilts on mouse move
export const Tilt3DCard = ({ children, className = "", ...props }) => {
  return (
    <motion.div
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        opacity: { duration: 0.6 },
      }}
      {...props}
    >
      <motion.div
        className="w-full h-full"
        whileHover={{ rotateX: 10, rotateY: 10 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Float animation that makes elements appear to hover or float
export const FloatingElement = ({
  children,
  amplitude = 10,
  period = 4,
  className = "",
  ...props
}) => {
  return (
    <motion.div
      className={`${className}`}
      animate={{
        y: [0, amplitude, 0, -amplitude, 0],
      }}
      transition={{
        duration: period,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scroll-activated progress bar
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

export default {
  ScrollAnimatedElement,
  ParallaxElement,
  RotatingElement,
  Tilt3DCard,
  FloatingElement,
  ScrollProgress,
};
