import { flavorTextures } from "@/data/data";
import { Center, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

useGLTF.preload("/models/mango.glb");
useGLTF.preload("/models/honey.glb");

export function Can({ flavor = "royalMango", scale = 1, ...props }) {
  const mangoGLTF = useGLTF("/models/mango.glb");
  const honeyGLTF = useGLTF("/models/honey.glb");
  const labels = useTexture(flavorTextures);

  const honeyLabel = labels.sundarbanHoney;

  // Clone scenes to avoid graph conflicts across multiple instances
  const clonedMango = useMemo(() => mangoGLTF.scene.clone(), [mangoGLTF.scene]);
  const clonedHoney = useMemo(() => honeyGLTF.scene.clone(), [honeyGLTF.scene]);

  // 1. Royal Alphonso Mango (Realistic 3D Fruit with natural scale)
  if (flavor === "royalMango") {
    return (
      <group {...props} dispose={null} scale={scale}>
        <Center>
          <primitive object={clonedMango} scale={7.2} rotation={[0, Math.PI / 4, 0]} />
        </Center>
      </group>
    );
  }

  // 2. Sundarban Raw Wild Honey (Realistic 3D Glass Jar with PFO Label Wrap Band)
  if (flavor === "sundarbanHoney") {
    return (
      <group {...props} dispose={null} scale={scale}>
        <Center>
          <group rotation={[0, Math.PI / 6, 0]}>
            {/* The 3D Honey Jar Model */}
            <primitive object={clonedHoney} scale={4.2} />

            {/* Custom PFO Brand Wrap Label on the Jar Body */}
            <mesh position={[0, -0.06, 0]} rotation={[0, -Math.PI * 0.75, 0]}>
              <cylinderGeometry args={[0.287, 0.287, 0.38, 64, 1, true]} />
              <meshStandardMaterial
                map={honeyLabel}
                roughness={0.3}
                metalness={0.05}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        </Center>
      </group>
    );
  }

  // 3. Fallback / Mountain Nuts
  return (
    <group {...props} dispose={null} scale={scale}>
      <Center>
        <group rotation={[0, -Math.PI / 4, 0]}>
          <primitive object={clonedHoney} scale={4.2} />
          <mesh position={[0, -0.06, 0]} rotation={[0, -Math.PI * 0.75, 0]}>
            <cylinderGeometry args={[0.287, 0.287, 0.38, 64, 1, true]} />
            <meshStandardMaterial
              map={honeyLabel}
              roughness={0.3}
              metalness={0.05}
              side={THREE.DoubleSide}
            />
          </mesh>
        </group>
      </Center>
    </group>
  );
}
