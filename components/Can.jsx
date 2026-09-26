import { Center, useGLTF } from "@react-three/drei";
import { useMemo } from "react";

useGLTF.preload("/models/mango.glb");
useGLTF.preload("/models/honey.glb");

export function Can({ flavor = "royalMango", scale = 2, ...props }) {
  const mangoGLTF = useGLTF("/models/mango.glb");
  const honeyGLTF = useGLTF("/models/honey.glb");

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

  // 2. Sundarban Raw Wild Honey (Realistic 3D Glass Jar)
  if (flavor === "sundarbanHoney") {
    return (
      <group {...props} dispose={null} scale={scale}>
        <Center>
          <primitive object={clonedHoney} scale={4.2} rotation={[0, Math.PI / 6, 0]} />
        </Center>
      </group>
    );
  }

  // 3. Fallback / Mountain Nuts (Realistic 3D Honey Jar with offset angle)
  return (
    <group {...props} dispose={null} scale={scale}>
      <Center>
        <primitive object={clonedHoney} scale={4.2} rotation={[0, -Math.PI / 4, 0]} />
      </Center>
    </group>
  );
}
