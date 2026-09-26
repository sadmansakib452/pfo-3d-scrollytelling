import { flavorTextures } from "@/data/data";
import { Center, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

useGLTF.preload("/models/Soda-can.gltf");
useGLTF.preload("/models/mango.glb");

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.25,
  metalness: 0.85,
  color: "#cda042", // Luxury champagne gold rim & tab
});

export function Can({ flavor = "royalMango", scale = 2, ...props }) {
  const { nodes } = useGLTF("/models/Soda-can.gltf");
  const mangoGLTF = useGLTF("/models/mango.glb");
  const labels = useTexture(flavorTextures);

  // fixes upside down labels
  Object.values(labels).forEach((label) => {
    label.flipY = false;
  });

  const label = labels[flavor] || labels.sundarbanHoney;

  // Clone mango scene to prevent multi-instance graph conflicts
  const clonedMango = useMemo(() => mangoGLTF.scene.clone(), [mangoGLTF.scene]);

  // If Royal Mango, render the REAL 3D ALPHONSO MANGO model!
  if (flavor === "royalMango") {
    return (
      <group {...props} dispose={null} scale={scale}>
        <Center>
          <primitive object={clonedMango} scale={20} rotation={[0, Math.PI / 4, 0]} />
        </Center>
      </group>
    );
  }

  // Otherwise render the PFO reserve model with the custom user label
  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh.geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={nodes.Mesh_1.material}
      >
        <meshStandardMaterial roughness={0.2} metalness={0.4} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tab.geometry}
        material={metalMaterial}
      />
    </group>
  );
}
