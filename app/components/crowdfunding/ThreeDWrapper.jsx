"use client";

import React, { useEffect, useState } from "react";
import ThreeBackground from "./ThreeBackground";
import ThreeModel from "./ThreeModel";
import {
  ScrollAnimatedElement,
  ParallaxElement,
  RotatingElement,
  Tilt3DCard,
  FloatingElement,
  ScrollProgress,
} from "./ScrollAnimations";
import useScrollPosition from "./useScrollPosition";

const ThreeDWrapper = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [browserSupport, setBrowserSupport] = useState(true);
  const { scrollPosition, currentSection } = useScrollPosition();

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Check for WebGL support
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        const isWebGLSupported = !!gl;
        setBrowserSupport(isWebGLSupported);
      } catch (e) {
        setBrowserSupport(false);
      }

      setIsMounted(true);
    }
  }, []);

  // Only render Three.js elements if browser supports WebGL
  if (!isMounted || !browserSupport) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Fixed background with particles */}
      <ThreeBackground />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Floating 3D decorative elements */}
      <div className="fixed top-[15%] right-[10%] z-10 pointer-events-none opacity-70">
        <FloatingElement amplitude={15} period={8}>
          <ThreeModel
            modelType="gear"
            width={150}
            height={150}
            color={0x6366f1}
          />
        </FloatingElement>
      </div>

      <div className="fixed bottom-[20%] left-[8%] z-10 pointer-events-none opacity-70">
        <ParallaxElement factor={-0.2}>
          <RotatingElement factor={0.1}>
            <ThreeModel
              modelType="engine"
              width={120}
              height={120}
              color={0x3b82f6}
            />
          </RotatingElement>
        </ParallaxElement>
      </div>

      {/* Placing the car model that follows scroll */}
      <div
        className="fixed z-10 pointer-events-none opacity-70 transition-all duration-500"
        style={{
          bottom: `${5 + scrollPosition / 50}px`,
          right: `${5 + scrollPosition / 100}px`,
          transform: `scale(${0.7 + scrollPosition / 10000})`,
        }}
      >
        <ThreeModel modelType="car" width={200} height={200} color={0x818cf8} />
      </div>

      {/* Render the actual content */}
      {children}

      {/* Add subtle 3D accents to specific sections based on scroll position */}
      {scrollPosition > 300 && (
        <div className="fixed top-1/2 left-20 z-0 pointer-events-none opacity-30">
          <RotatingElement>
            <ThreeModel
              modelType="gear"
              width={100}
              height={100}
              color={0x4f46e5}
            />
          </RotatingElement>
        </div>
      )}

      {scrollPosition > 1000 && (
        <div className="fixed top-2/3 right-20 z-0 pointer-events-none opacity-30">
          <FloatingElement amplitude={10} period={5}>
            <ThreeModel
              modelType="gear"
              width={80}
              height={80}
              color={0x8b5cf6}
            />
          </FloatingElement>
        </div>
      )}
    </>
  );
};

export default ThreeDWrapper;
