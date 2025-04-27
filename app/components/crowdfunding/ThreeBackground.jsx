"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Only append if mountRef is available and doesn't already have a renderer
    if (mountRef.current && !mountRef.current.querySelector("canvas")) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    // Materials
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    // Mesh
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // 3D objects - floating gears to represent engineering
    const createGear = (radius, teeth, height, color, position) => {
      const gearGeometry = new THREE.CylinderGeometry(
        radius,
        radius,
        height,
        teeth
      );
      const gearMaterial = new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      const gear = new THREE.Mesh(gearGeometry, gearMaterial);
      gear.position.set(position.x, position.y, position.z);
      return gear;
    };

    const gear1 = createGear(0.5, 16, 0.2, 0x4f46e5, { x: -2, y: 0, z: -3 });
    const gear2 = createGear(0.3, 12, 0.15, 0x3b82f6, { x: 2, y: 1, z: -2 });
    const gear3 = createGear(0.4, 14, 0.18, 0x818cf8, { x: 1, y: -1, z: -4 });

    scene.add(gear1, gear2, gear3);

    // Camera position
    camera.position.z = 5;

    // Mouse movement for interactive effects
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;

      // Subtle movement based on mouse position
      particlesMesh.position.x = mouseX * 0.1;
      particlesMesh.position.y = mouseY * 0.1;

      // Rotate gears
      gear1.rotation.z += 0.003;
      gear2.rotation.z -= 0.002;
      gear3.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", () => {});
      mountRef.current?.removeChild(renderer.domElement);

      scene.remove(particlesMesh, gear1, gear2, gear3);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ThreeBackground;
