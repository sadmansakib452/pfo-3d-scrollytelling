import { useRef } from "react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FloatingCan from "../FloatingCan";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroScene = () => {
  const mangoRef = useRef();
  const honeyRef = useRef();
  const mangoGroupRef = useRef();
  const honeyGroupRef = useRef();
  const groupRef = useRef();

  const FLOAT_SPEED = 1.2;
  const isReady = useStore((state) => state.isReady);

  useGSAP(() => {
    if (
      !mangoRef.current ||
      !honeyRef.current ||
      !mangoGroupRef.current ||
      !honeyGroupRef.current ||
      !groupRef.current
    )
      return;

    isReady(true);

    // Initial positioning: Left for 3D Mango, Right for 3D Honey Jar
    gsap.set(mangoRef.current.position, { x: -1.35, y: -0.1, z: 0 });
    gsap.set(mangoRef.current.rotation, { z: -0.2, y: 0.3 });

    gsap.set(honeyRef.current.position, { x: 1.35, y: -0.1, z: 0 });
    gsap.set(honeyRef.current.rotation, { z: 0.15, y: -0.3 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 2.2,
        ease: "back.out(1.2)",
      },
    });

    if (window.scrollY < 20) {
      introTl
        .from(mangoGroupRef.current.position, { y: -4, x: -1 }, 0)
        .from(honeyGroupRef.current.position, { y: 4, x: 1 }, 0);
    }

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    // When scrolling down Hero to "Three Pure Reserves", gracefully float models out of the way!
    scrollTl
      // Rotate group naturally
      .to(groupRef.current.rotation, { y: Math.PI * 0.8 }, 0)
      // Mango floats up and outwards to the left
      .to(
        mangoRef.current.position,
        { x: -2.4, y: 3.5, z: -1, ease: "power2.inOut" },
        0
      )
      .to(
        mangoRef.current.rotation,
        { z: 0.8, y: Math.PI, ease: "power2.inOut" },
        0
      )
      // Honey floats up and outwards to the right, CLEARING the text completely!
      .to(
        honeyRef.current.position,
        { x: 2.4, y: 3.5, z: -1, ease: "power2.inOut" },
        0
      )
      .to(
        honeyRef.current.rotation,
        { z: -0.6, y: -Math.PI, ease: "power2.inOut" },
        0
      );
  });

  return (
    <group ref={groupRef}>
      {/* Flagship Product 1: The Sovereign Alphonso Mango on the Left */}
      <group ref={mangoGroupRef}>
        <FloatingCan
          ref={mangoRef}
          flavor="royalMango"
          floatSpeed={FLOAT_SPEED}
          floatIntensity={0.8}
        />
      </group>

      {/* Flagship Product 2: Sundarban Raw Honey on the Right */}
      <group ref={honeyGroupRef}>
        <FloatingCan
          ref={honeyRef}
          flavor="sundarbanHoney"
          floatSpeed={FLOAT_SPEED}
          floatIntensity={0.8}
        />
      </group>

      <Environment files="/hdrs/field.hdr" environmentIntensity={1.4} />
    </group>
  );
};

export default HeroScene;
