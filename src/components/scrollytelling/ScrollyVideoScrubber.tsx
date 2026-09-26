"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollyVideoScrubber() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState("01. INTACT TREE-RIPENED STATE");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    let tl: gsap.core.Timeline | null = null;

    const setupScrubber = () => {
      // Ensure video duration is available
      const duration = video.duration || 10;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=2500",
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            setProgress(Math.round(p * 100));

            if (p < 0.3) {
              setCurrentStage("01. INTACT ORGANIC EQUILIBRIUM");
            } else if (p < 0.65) {
              setCurrentStage("02. KINETIC HIGH-SPEED SLICING");
            } else {
              setCurrentStage("03. ZERO-GRAVITY NECTAR EXPLOSION");
            }
          },
        },
      });

      tl.fromTo(
        video,
        { currentTime: 0 },
        { currentTime: duration - 0.05, ease: "none" }
      );
    };

    if (video.readyState >= 1) {
      setupScrubber();
    } else {
      video.addEventListener("loadedmetadata", setupScrubber);
    }

    return () => {
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      video.removeEventListener("loadedmetadata", setupScrubber);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#081C15] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,67,50,0.5),transparent_75%)] pointer-events-none" />

      {/* Top Scrollytelling Telemetry Bar */}
      <div className="absolute top-28 left-8 right-8 md:left-16 md:right-16 z-30 flex items-center justify-between border-b border-[#1B4332]/40 pb-4 font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#FFB703] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#FFB703]">
            {currentStage}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs tracking-widest text-[#F9F7F1]/60">
          <span>KINETIC TIMELINE</span>
          <span className="text-[#10B981] font-bold text-sm">{progress}%</span>
        </div>
      </div>

      {/* Center 3D Video Scrubbing Canvas */}
      <div className="relative w-full max-w-5xl aspect-[16/9] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/assets/videos/hero_mango_slice.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none select-none mix-blend-screen"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 65%, transparent 98%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 65%, transparent 98%)",
          }}
        />

        {/* Live HUD Floating Markers */}
        <div className="absolute bottom-6 left-6 z-30 font-mono text-[11px] text-[#F9F7F1]/70 bg-[#081C15]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#1B4332]/60">
          <div className="text-[#FFB703] font-semibold">ALPHONSO SUCROSE DENSITY</div>
          <div className="text-[10px] text-[#10B981]">19.2° BRIX PEAK CONCENTRATION</div>
        </div>

        <div className="absolute bottom-6 right-6 z-30 font-mono text-[11px] text-right text-[#F9F7F1]/70 bg-[#081C15]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#1B4332]/60">
          <div className="text-[#10B981] font-semibold">CHEMICAL SCREENING</div>
          <div className="text-[10px] text-[#FFB703]">0.00% FORMALIN / CARBIDE</div>
        </div>
      </div>

      {/* Bottom Progress Scrubber Track */}
      <div className="absolute bottom-10 left-16 right-16 z-30 flex items-center gap-4 font-mono text-[10px] text-[#F9F7F1]/40">
        <span>0.0s (SOLID)</span>
        <div className="flex-1 h-[2px] bg-[#1B4332] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#10B981] to-[#FFB703] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span>10.0s (BURST)</span>
      </div>
    </div>
  );
}
