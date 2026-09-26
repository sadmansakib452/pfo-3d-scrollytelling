"use client";

import Image from "next/image";
import Bounded from "../Bounded";
import Button from "../Button";
import TextSplitter from "../TextSplitter";

import { View } from "@react-three/drei";
import { Bubbles } from "../Bubbles";
import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import HeroScene from "./HeroScene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width:768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTl = gsap.timeline();

      introTl
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 3,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 1,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8"
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#FDE047",
          },
          {
            backgroundColor: "#D9F99D",
            overwrite: "auto",
          },
          1
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] }
  );

  return (
    <Bounded className="hero opacity-0">
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <HeroScene />
          <Bubbles count={300} speed={2} opacity={0.3} />
        </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-amber-600 md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="PURE FRESH"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-12 text-5xl font-semibold text-emerald-950 lg:text-6xl">
              The Sovereign Harvest
            </div>
            <div className="hero-body text-xl md:text-2xl font-mono text-emerald-900 mt-4">
              100% Tree-Ripened • Zero Synthetic Chemicals • 0.00% Formalin
            </div>
            <Button
              buttonLink="#reserves"
              buttonText="EXPLORE RESERVES"
              className="hero-button mt-12 bg-emerald-800 text-white hover:bg-emerald-900"
            />
          </div>
        </div>

        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <Image
            src="/images/pfo_mango_crate.jpg"
            alt="PFO Sovereign Organic Mango Crate"
            width={600}
            height={600}
            className="w-full rounded-2xl shadow-2xl object-cover max-h-[450px] md:hidden"
          />
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-bold uppercase text-emerald-950 lg:text-8xl">
              <TextSplitter text="Three Pure Reserves" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-emerald-900">
              From certified heritage orchards in Rajshahi to the virgin mangrove forests of the Sundarbans. 100% lab-verified organic integrity, zero formalin, and natural bio-active goodness delivered directly to your table.
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
