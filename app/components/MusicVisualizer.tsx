'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedCube({ 
  position, 
  color, 
  speed,
  bounceHeight
}: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
  bounceHeight: number;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];
  
  // Load the GLB model
  const { scene } = useGLTF('/musical_note.glb');
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  
  // Apply color to all meshes in the model
  useEffect(() => {
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const material = (mesh.material as THREE.MeshStandardMaterial).clone();
          material.color.set(color);
          material.metalness = 0.6;
          material.roughness = 0.3;
          material.emissive = new THREE.Color(color);
          material.emissiveIntensity = 0.2;
          mesh.material = material;
        }
      }
    });
  }, [clonedScene, color]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Bouncing motion
    const bounce = Math.abs(Math.sin(state.clock.elapsedTime * speed)) * bounceHeight;
    
    // Base horizontal drift
    const drift = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5;
    
    // Very subtle back and forth rotation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.08;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.03;
    
    // Apply positions
    meshRef.current.position.x = position[0] + drift;
    meshRef.current.position.y = initialY + bounce;
  });
  
  return (
    <group ref={meshRef} position={position}>
      <primitive object={clonedScene} scale={0.5} />
    </group>
  );
}

function Scene() {
  const cubes = useMemo(() => {
    const cubeArray = [];
    
    // Create 5 floating cubes side by side at slightly different heights
    const numCubes = 5;
    const spacing = 20 / (numCubes - 1); // Spread across 20 units (wider spacing)
    const heights = [2.2, 3.2, 2.7, 2.5, 2.9]; // Varied heights
    
    for (let i = 0; i < numCubes; i++) {
      const x = -14 + i * spacing; // Shifted further left, distributed from -14 to 6
      const y = heights[i]; // Different height for each cube
      const z = -1; // Same depth for all
      const speed = 0.5 + (i % 3) * 0.2; // Consistent speeds
      const bounceHeight = 0.6 + (i % 2) * 0.3; // Consistent bounce heights
      
      cubeArray.push({
        position: [x, y, z] as [number, number, number],
        color: '#22d3ee', // cyan-400 - matching site theme
        speed,
        bounceHeight
      });
    }
    
    return cubeArray;
  }, []);
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#22d3ee" />
      <pointLight position={[0, 10, -5]} intensity={0.8} color="#0ea5e9" />
      
      {cubes.map((cube, index) => (
        <AnimatedCube
          key={index}
          position={cube.position}
          color={cube.color}
          speed={cube.speed}
          bounceHeight={cube.bounceHeight}
        />
      ))}
    </>
  );
}

export default function MusicVisualizer() {
  return (
    <div className="fixed inset-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

// Preload the model for better performance
useGLTF.preload('/musical_note.glb');
