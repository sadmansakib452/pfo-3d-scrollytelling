"use client";

import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { flavors } from "@/data/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import FloatingCan from "../FloatingCan";
import ArrowButton from "./ArrowButton";
import { WavyCircles } from "./WavyCircles";

gsap.registerPlugin(useGSAP);

const SPIN_ON_CHANGE = 8;

const Carousel = () => {
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  const canRef = useRef(null);

  const changeFlavor = (index) => {
    const newIndex = (index + flavors.length) % flavors.length;

    setCurrentFlavorIndex(newIndex);

    const tl = gsap.timeline();

    tl.to(
      canRef.current.rotation,
      {
        y:
          index > currentFlavorIndex
            ? `-=${Math.PI * 2 * SPIN_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPIN_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: flavors[newIndex].color,
          fill: flavors[newIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(".text-wrapper", { duration: 0.2, y: -10, opacity: 0 }, 0)
      .to({}, { onStart: () => setCurrentFlavorIndex(newIndex) }, 0.5)
      .to(".text-wrapper", { duration: 0.2, y: 0, opacity: 1 }, 0.7);
  };

  return (
    <section id="reserves" className="carousel relative grid h-screen grid-rows-[auto, 4fr, auto] justify-center overflow-hidden bg-stone-900 py-12 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#E59000] opacity-60"></div>
      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#E59000]" />
      <div className="relative text-center z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-200 border border-amber-300/40 px-3 py-1 rounded-full">
          Lab-Tested Organic Selection
        </span>
        <h2 className="mt-2 text-3xl md:text-5xl font-serif font-bold">
          Explore Our Heritage Reserves
        </h2>
      </div>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        {/* Left */}
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="left"
          label="Next Flavor"
        />
        {/* Can */}
        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <group ref={canRef}>
              <FloatingCan
                floatIntensity={0.3}
                rotationIntensity={1}
                flavor={flavors[currentFlavorIndex].flavor}
              />
            </group>
          </Center>
          <directionalLight intensity={6} position={[0, 1, 1]} />
          <Environment
            files="/hdrs/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
        </View>
        {/* Right */}
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="right"
          label="Previous Flavor"
        />
      </div>

      <div className="text-area relative mx-auto text-center px-4 max-w-2xl z-10 pb-6">
        <div className="text-wrapper">
          <p className="text-2xl md:text-4xl font-serif font-bold tracking-tight text-white drop-shadow">
            {flavors[currentFlavorIndex].name}
          </p>
          <p className="mt-1 text-xs md:text-sm font-mono uppercase tracking-widest text-amber-200">
            {flavors[currentFlavorIndex].subtitle}
          </p>
          <div className="mt-2 inline-block font-mono text-lg md:text-xl font-bold bg-white/10 backdrop-blur-md px-4 py-1 rounded-lg border border-white/20">
            {flavors[currentFlavorIndex].price}
          </div>
          <p className="mt-2 text-xs md:text-sm text-stone-100 font-sans leading-relaxed max-w-lg mx-auto opacity-95">
            {flavors[currentFlavorIndex].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

// setCurrentFlavorIndex((prevIndex) => {
//   const newIndex =
//     arrow === "right"
//       ? (prevIndex + 1) % flavors.length
//       : (prevIndex - 1 + flavors.length) % flavors.length;

//   setCurrentFlavor(flavors[newIndex].flavor);

//   gsap.to(canRef.current.rotation, {
//     y:
//       arrow === "right"
//         ? canRef.current.rotation.y + Math.PI * 8
//         : canRef.current.rotation.y - Math.PI * 8,
//     z: 0.1,
//   });

//   return newIndex;
// });
