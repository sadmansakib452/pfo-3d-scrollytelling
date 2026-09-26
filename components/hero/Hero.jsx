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
            backgroundColor: "#FAF5EB",
          },
          {
            backgroundColor: "#FEF3C7",
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
          <Bubbles count={120} speed={1.5} opacity={0.25} />
        </View>
      )}
      <div className="grid">
        <div className="grid h-screen place-items-center">
          <div className="grid auto-rows-min place-items-center text-center max-w-4xl z-10 px-4">
            <h1 className="hero-header text-6xl font-black uppercase leading-[.85] text-amber-600 md:text-[8rem] lg:text-[11rem]">
              <TextSplitter
                text="PURE FRESH"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>
            <div className="hero-subheading mt-8 text-4xl sm:text-5xl font-serif font-bold text-emerald-950 lg:text-6xl">
              The Sovereign Harvest
            </div>
            <div className="hero-body text-base sm:text-xl font-mono text-emerald-900 mt-4">
              100% Tree-Ripened • Zero Synthetic Chemicals • 0.00% Formalin
            </div>
            <Button
              buttonLink="#reserves"
              buttonText="EXPLORE RESERVES"
              className="hero-button mt-8 bg-emerald-800 text-white hover:bg-emerald-900 shadow-xl"
            />

            {/* 3 Real Product Badges with actual photos */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="#reserves" className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-amber-900/10 shadow-md hover:scale-105 transition-transform">
                <Image src="/images/pfo_mango_crate.jpg" alt="Alphonso Mango" width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
                <div className="text-left font-mono">
                  <p className="text-xs font-bold text-stone-900">Alphonso Mango</p>
                  <p className="text-[10px] text-amber-800 font-semibold">Rajshahi • 19.2° Brix</p>
                </div>
              </a>

              <a href="#reserves" className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-amber-900/10 shadow-md hover:scale-105 transition-transform">
                <Image src="/images/pfo_sundarban_honey.jpg" alt="Sundarban Honey" width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
                <div className="text-left font-mono">
                  <p className="text-xs font-bold text-stone-900">Sundarban Honey</p>
                  <p className="text-[10px] text-amber-800 font-semibold">Raw • Bio-Active</p>
                </div>
              </a>

              <a href="#reserves" className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/70 backdrop-blur-md border border-amber-900/10 shadow-md hover:scale-105 transition-transform">
                <Image src="/images/pfo_mixed_nuts.jpg" alt="Mountain Nuts" width={40} height={40} className="w-10 h-10 rounded-lg object-cover" />
                <div className="text-left font-mono">
                  <p className="text-xs font-bold text-stone-900">Mountain Nuts</p>
                  <p className="text-[10px] text-amber-800 font-semibold">Clay Oven Roasted</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="text-side relative z-[80] max-w-6xl mx-auto w-full grid min-h-screen items-center gap-8 md:gap-14 md:grid-cols-2 py-20 px-6">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-amber-900/15 bg-white/40 p-2">
            <Image
              src="/images/pfo_mango_crate.jpg"
              alt="PFO Sovereign Organic Mango Crate"
              width={700}
              height={700}
              className="w-full h-[360px] md:h-[460px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-emerald-900 uppercase mb-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 font-bold border border-emerald-300">
                HARVEST LOT #089
              </span>
              <span className="opacity-75">RAJSHAHI & SUNDARBAN</span>
            </div>
            <h2 className="text-side-heading text-balance text-4xl sm:text-5xl lg:text-7xl font-serif font-black text-stone-900 mt-2 leading-[0.95]">
              <TextSplitter text="Three Pure Reserves" />
            </h2>
            <div className="text-side-body mt-6 max-w-lg text-stone-700 text-lg md:text-xl font-sans leading-relaxed">
              From certified heritage orchards in Rajshahi to the virgin mangrove canopies of the Sundarbans. 100% lab-verified organic integrity, zero formalin, zero synthetic ripeners, and natural bio-active goodness delivered directly to your doorstep.
            </div>
            <div className="mt-8 flex items-center gap-6 border-t border-stone-300/80 pt-6">
              <div>
                <p className="font-mono text-2xl font-bold text-amber-900">0.00%</p>
                <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wider">Formalin Tested</p>
              </div>
              <div className="w-[1px] h-8 bg-stone-300"></div>
              <div>
                <p className="font-mono text-2xl font-bold text-amber-900">19.2°</p>
                <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wider">Brix Sucrose</p>
              </div>
              <div className="w-[1px] h-8 bg-stone-300"></div>
              <div>
                <p className="font-mono text-2xl font-bold text-emerald-900">100%</p>
                <p className="font-mono text-[11px] text-stone-500 uppercase tracking-wider">Bio-Active Raw</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
