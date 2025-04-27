"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeModel = ({
  modelType = "gear",
  width = 300,
  height = 300,
  color = 0x4f46e5,
  rotationSpeed = 0.005,
  className = "",
}) => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Only append if mountRef is available and doesn't already have a renderer
    if (mountRef.current && !mountRef.current.querySelector("canvas")) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Model creation based on type
    let object;

    switch (modelType) {
      case "gear":
        // Create a gear
        const gearGeometry = new THREE.CylinderGeometry(1, 1, 0.3, 16, 1);
        const gearMaterial = new THREE.MeshPhongMaterial({
          color,
          wireframe: false,
          transparent: true,
          opacity: 0.9,
          metalness: 0.8,
          roughness: 0.2,
        });
        object = new THREE.Mesh(gearGeometry, gearMaterial);

        // Add teeth to the gear
        const teethCount = 16;
        for (let i = 0; i < teethCount; i++) {
          const angle = (i / teethCount) * Math.PI * 2;
          const toothGeometry = new THREE.BoxGeometry(0.2, 0.4, 0.3);
          const tooth = new THREE.Mesh(toothGeometry, gearMaterial);
          tooth.position.x = Math.cos(angle) * 1.2;
          tooth.position.y = Math.sin(angle) * 1.2;
          tooth.rotation.z = angle;
          object.add(tooth);
        }
        break;

      case "engine":
        // Simple engine block
        const blockGeometry = new THREE.BoxGeometry(2, 1, 1);
        const engineMaterial = new THREE.MeshPhongMaterial({
          color,
          transparent: true,
          opacity: 0.9,
        });
        object = new THREE.Mesh(blockGeometry, engineMaterial);

        // Add cylinders
        for (let i = 0; i < 4; i++) {
          const cylinderGeometry = new THREE.CylinderGeometry(
            0.2,
            0.2,
            0.8,
            16
          );
          const cylinder = new THREE.Mesh(cylinderGeometry, engineMaterial);
          cylinder.position.x = -0.75 + i * 0.5;
          cylinder.position.y = 0.5;
          cylinder.rotation.x = Math.PI / 2;
          object.add(cylinder);
        }
        break;

      case "car":
        // Simple car body
        const bodyGeometry = new THREE.BoxGeometry(3, 0.75, 1.5);
        const carMaterial = new THREE.MeshPhongMaterial({
          color,
          transparent: true,
          opacity: 0.9,
        });
        object = new THREE.Mesh(bodyGeometry, carMaterial);

        // Add cabin
        const cabinGeometry = new THREE.BoxGeometry(1.5, 0.6, 1.4);
        const cabinMaterial = new THREE.MeshPhongMaterial({
          color: 0x222222,
          transparent: true,
          opacity: 0.8,
        });
        const cabin = new THREE.Mesh(cabinGeometry, cabinMaterial);
        cabin.position.x = -0.3;
        cabin.position.y = 0.7;
        object.add(cabin);

        // Add wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
        const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });

        const wheelPositions = [
          { x: -1, y: -0.4, z: 0.8 },
          { x: 1, y: -0.4, z: 0.8 },
          { x: -1, y: -0.4, z: -0.8 },
          { x: 1, y: -0.4, z: -0.8 },
        ];

        wheelPositions.forEach((pos) => {
          const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
          wheel.position.set(pos.x, pos.y, pos.z);
          wheel.rotation.z = Math.PI / 2;
          object.add(wheel);
        });
        break;

      default:
        // Simple sphere as fallback
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshPhongMaterial({
          color,
          transparent: true,
          opacity: 0.9,
        });
        object = new THREE.Mesh(geometry, material);
    }

    scene.add(object);

    // Position camera
    camera.position.z = 5;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Animation loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      if (object) {
        object.rotation.y += rotationSpeed;
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      mountRef.current?.removeChild(renderer.domElement);

      // Dispose of geometries and materials
      scene.remove(object);
      // Add proper cleanup for the specific model types
    };
  }, [modelType, width, height, color, rotationSpeed]);

  return (
    <div ref={mountRef} className={`${className}`} style={{ width, height }} />
  );
};

export default ThreeModel;
