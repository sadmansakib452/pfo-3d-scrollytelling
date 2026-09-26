"use client";

import { Environment } from "@react-three/drei";
import FloatingCan from "../FloatingCan";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const bgColors = ["#FAF5EB", "#FFFBEB", "#F0FDF4"];

const AlternatingTextScene = () => {
  const mangoGroupRef = useRef(null);
  const honeyGroupRef = useRef(null);
  const nutsGroupRef = useRef(null);

  useGSAP(() => {
    if (!mangoGroupRef.current || !honeyGroupRef.current || !nutsGroupRef.current) return;

    // Initial state: Section 1 (Mango visible on the right, Honey and Nuts hidden)
    gsap.set(mangoGroupRef.current.position, { x: 1.1, y: 0, z: 0 });
    gsap.set(mangoGroupRef.current.scale, { x: 1, y: 1, z: 1 });

    gsap.set(honeyGroupRef.current.position, { x: -1.1, y: -4, z: 0 });
    gsap.set(honeyGroupRef.current.scale, { x: 0, y: 0, z: 0 });

    gsap.set(nutsGroupRef.current.position, { x: 1.1, y: -4, z: 0 });
    gsap.set(nutsGroupRef.current.scale, { x: 0, y: 0, z: 0 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".alternating-text-view",
        endTrigger: ".alternating-text-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    // Transition 1 -> 2: Scroll into Section 2 (Sundarban Honey)
    scrollTl
      // Mango exits
      .to(
        mangoGroupRef.current.position,
        { y: 3, x: 1.5, ease: "power2.inOut" },
        0.5
      )
      .to(
        mangoGroupRef.current.scale,
        { x: 0, y: 0, z: 0, ease: "power2.inOut" },
        0.5
      )
      // Honey enters on the left (x: -1.1)
      .to(
        honeyGroupRef.current.position,
        { y: 0, x: -1.1, ease: "back.out(1.4)" },
        0.7
      )
      .to(
        honeyGroupRef.current.scale,
        { x: 1, y: 1, z: 1, ease: "back.out(1.4)" },
        0.7
      )
      .to(
        honeyGroupRef.current.rotation,
        { y: Math.PI * 2, ease: "none" },
        0.7
      )
      .to(
        ".alternating-text-container",
        { backgroundColor: bgColors[1], ease: "power2.inOut" },
        0.6
      )

      // Transition 2 -> 3: Scroll into Section 3 (Mountain Nuts)
      .to(
        honeyGroupRef.current.position,
        { y: 3, x: -1.5, ease: "power2.inOut" },
        1.8
      )
      .to(
        honeyGroupRef.current.scale,
        { x: 0, y: 0, z: 0, ease: "power2.inOut" },
        1.8
      )
      // Nuts enter on the right (x: 1.1)
      .to(
        nutsGroupRef.current.position,
        { y: 0, x: 1.1, ease: "back.out(1.4)" },
        2.0
      )
      .to(
        nutsGroupRef.current.scale,
        { x: 1, y: 1, z: 1, ease: "back.out(1.4)" },
        2.0
      )
      .to(
        nutsGroupRef.current.rotation,
        { y: Math.PI * 2, ease: "none" },
        2.0
      )
      .to(
        ".alternating-text-container",
        { backgroundColor: bgColors[2], ease: "power2.inOut" },
        1.9
      );
  });

  return (
    <group>
      {/* 1. Real 3D Mango for Section 1 */}
      <group ref={mangoGroupRef}>
        <FloatingCan flavor="royalMango" floatIntensity={0.6} rotationIntensity={0.8} />
      </group>

      {/* 2. Real 3D Honey Jar with PFO Label for Section 2 */}
      <group ref={honeyGroupRef}>
        <FloatingCan flavor="sundarbanHoney" floatIntensity={0.6} rotationIntensity={0.8} />
      </group>

      {/* 3. Real 3D Reserve Jar for Section 3 */}
      <group ref={nutsGroupRef}>
        <FloatingCan flavor="mountainNuts" floatIntensity={0.6} rotationIntensity={0.8} />
      </group>

      <Environment files="/hdrs/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
};

export default AlternatingTextScene;
