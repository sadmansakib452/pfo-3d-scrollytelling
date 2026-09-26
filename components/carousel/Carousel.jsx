"use client";

import Image from "next/image";
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

  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(null);

  const changeFlavor = (index) => {
    const newIndex = (index + flavors.length) % flavors.length;
    setQuantity(1);
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

  const handleAddToCart = () => {
    const item = flavors[currentFlavorIndex];
    setAddedToast(`Added ${quantity} × ${item.name} to Harvest Bag!`);
    setTimeout(() => {
      setAddedToast(null);
    }, 3500);
  };

  // Dynamic stock scarcity per flavor
  const stockMeta = [
    { lot: "LOT #089", stock: 14, tag: "Padma Basin Reserve" },
    { lot: "LOT #014", stock: 9, tag: "Sundarban Deep Canopy" },
    { lot: "LOT #402", stock: 22, tag: "Clay Oven Roasted" },
  ];

  const currentMeta = stockMeta[currentFlavorIndex] || stockMeta[0];

  return (
    <section id="reserves" className="carousel relative min-h-screen flex flex-col justify-between overflow-hidden bg-stone-950 py-12 md:py-16 text-white">
      <div className="background pointer-events-none absolute inset-0 bg-[#E59000] opacity-60 transition-colors duration-1000"></div>
      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#E59000] transition-colors duration-1000" />
      
      {/* Section Header */}
      <div className="relative text-center z-10 px-4">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-200 border border-amber-300/30 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Lab-Certified Organic Reserves</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
          Explore Our Heritage Reserves
        </h2>
        <p className="mt-1 font-mono text-xs text-stone-300 tracking-wider">
          Rotate through our 3 flagship pure organic harvests
        </p>
      </div>

      {/* 3D Model Stage with Carousel Nav */}
      <div className="relative grid grid-cols-[auto,1fr,auto] items-center max-w-4xl mx-auto w-full px-4 my-4 z-10">
        {/* Left */}
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex - 1)}
          direction="left"
          label="Previous Flavor"
        />
        
        {/* 3D Model View */}
        <View className="aspect-square h-[50vmin] max-h-[380px] min-h-[240px] w-full">
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
            environmentIntensity={0.8}
            environmentRotation={[0, 3, 0]}
          />
        </View>

        {/* Right */}
        <ArrowButton
          onClick={() => changeFlavor(currentFlavorIndex + 1)}
          direction="right"
          label="Next Flavor"
        />
      </div>

      {/* Interactive E-Commerce Reservation Area */}
      <div className="text-area relative mx-auto text-center px-4 max-w-2xl z-10">
        <div className="text-wrapper">
          {/* Scarcity Counter */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-md border border-amber-400/20 px-3 py-1 rounded-md mb-2">
            <span className="text-amber-400 font-bold">{currentMeta.lot}</span>
            <span>•</span>
            <span>Only {currentMeta.stock} Units Remaining Today</span>
            <span>•</span>
            <span className="text-emerald-300">{currentMeta.tag}</span>
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-white drop-shadow-md">
            {flavors[currentFlavorIndex].name}
          </p>
          <p className="mt-1 text-xs sm:text-sm font-mono uppercase tracking-widest text-amber-200">
            {flavors[currentFlavorIndex].subtitle}
          </p>

          <div className="mt-3 inline-block font-mono text-xl sm:text-2xl font-bold bg-white/10 backdrop-blur-md px-5 py-1.5 rounded-xl border border-white/20 shadow-inner">
            {flavors[currentFlavorIndex].price}
          </div>

          <p className="mt-3 text-xs sm:text-sm text-stone-100 font-sans leading-relaxed max-w-lg mx-auto opacity-95">
            {flavors[currentFlavorIndex].description}
          </p>

          {/* Interactive Quantity Selector & Add to Harvest Bag */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center bg-black/50 backdrop-blur-md rounded-xl border border-white/20 px-2 py-1 shadow-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center text-lg font-mono font-bold hover:text-amber-400 transition-colors"
                aria-label="Decrease Quantity"
              >
                −
              </button>
              <span className="font-mono text-sm font-bold px-4 text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-lg font-mono font-bold hover:text-amber-400 transition-colors"
                aria-label="Increase Quantity"
              >
                +
              </button>
            </div>

            {/* Direct Reserve Button */}
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/20 active:scale-95"
            >
              RESERVE HARVEST BATCH
            </button>
          </div>

          {/* Toast Notification */}
          {addedToast && (
            <div className="mt-3 font-mono text-xs text-emerald-300 bg-black/70 backdrop-blur-md border border-emerald-400/40 px-4 py-2 rounded-lg inline-block animate-bounce shadow-xl">
              ✓ {addedToast}
            </div>
          )}

          {/* Trust Guarantees */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-12 overflow-hidden rounded-xl border border-white/40 shadow-lg">
              <Image
                src={flavors[currentFlavorIndex].image}
                alt={flavors[currentFlavorIndex].name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left font-mono">
              <p className="text-xs uppercase tracking-wider text-amber-200 font-semibold">100% Organic Certified</p>
              <p className="text-[10px] text-white/80">Direct Orchard Cold-Chain Dispatch</p>
            </div>
          </div>
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
