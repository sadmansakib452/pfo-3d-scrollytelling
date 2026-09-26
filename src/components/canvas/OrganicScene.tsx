"use client";

import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingPollenParticles({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#FFB703"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function OrganicScene() {
  return (
    <div className="w-full h-full relative pointer-events-none">
      <Canvas
        className="w-full h-full"
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
        
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.4} color="#E8F5E9" />
        <directionalLight position={[4, 5, 3]} intensity={1.8} color="#FFE082" castShadow />
        <directionalLight position={[-4, 2, -2]} intensity={2.5} color="#E0F2FE" />
        <pointLight position={[0, -2, 2]} intensity={0.8} color="#FFB703" />

        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <FloatingPollenParticles count={100} />
        </Float>
      </Canvas>
    </div>
  );
}
