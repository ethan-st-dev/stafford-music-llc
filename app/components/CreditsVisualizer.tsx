'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedVinyl({ 
  position, 
  color, 
  speed,
  rotationSpeed
}: { 
  position: [number, number, number]; 
  color: string; 
  speed: number;
  rotationSpeed: number;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const initialY = position[1];

  const { scene } = useGLTF('/vinyl_record.glb');

  // Clone the scene and add cyan emissive glow to materials
  const clonedScene = useMemo(() => {
    const cloned = scene.clone();
    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          // Clone the original material and add emissive glow
          const material = (mesh.material as THREE.MeshStandardMaterial).clone();
          material.emissive = new THREE.Color('#22d3ee');
          material.emissiveIntensity = 0.5;
          mesh.material = material;
        }
      }
    });
    return cloned;
  }, [scene]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Vertical floating motion
    const float = Math.sin(state.clock.elapsedTime * speed) * 0.3;
    
    // Constant spin like a record player
    meshRef.current.rotation.y += rotationSpeed;
    
    // Slight tilt for visual interest
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.05;
    
    // Apply positions
    meshRef.current.position.y = initialY + float;
  });

  return (
    <group ref={meshRef} position={position}>
      <primitive object={clonedScene} scale={11.0} />
    </group>
  );
}

function Scene() {
  const vinyls = useMemo(() => {
    const vinylArray = [];
    
    // Create 5 floating vinyl records at varied positions
    const numVinyls = 5;
    const positions = [
      [2, 6, -4],
      [5, 7, 2],
      [13, 5.5, -3],
      [21, 6.5, -5],
      [16, 7.5, 1]
    ];
    
    for (let i = 0; i < numVinyls; i++) {
      const speed = 0.4 + (i % 3) * 0.15;
      const rotationSpeed = 0.005 + (i % 2) * 0.003;
      
      vinylArray.push({
        position: positions[i] as [number, number, number],
        color: '#22d3ee', // cyan-400
        speed,
        rotationSpeed
      });
    }
    
    return vinylArray;
  }, []);

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#3b82f6" />
      <pointLight position={[0, 10, -10]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[0, -5, 5]} intensity={0.8} color="#60a5fa" />
      
      {vinyls.map((vinyl, index) => (
        <AnimatedVinyl
          key={index}
          position={vinyl.position}
          color={vinyl.color}
          speed={vinyl.speed}
          rotationSpeed={vinyl.rotationSpeed}
        />
      ))}
    </>
  );
}

export default function CreditsVisualizer() {
  return (
    <div className="fixed inset-0 opacity-70 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

// Preload the model for better performance
useGLTF.preload('/vinyl_record.glb');
