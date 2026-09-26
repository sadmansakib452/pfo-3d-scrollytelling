"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollyVideoScrubber() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    let animationFrameId: number;
    let targetTime = 0;
    let isSeeking = false;

    // Smooth Lerp loop to prevent browser video decoder stutter
    const smoothPlaybackLoop = () => {
      if (video && video.duration) {
        const diff = targetTime - video.currentTime;
        // Damped interpolation to keep decoding smooth
        if (Math.abs(diff) > 0.02 && !isSeeking) {
          isSeeking = true;
          video.currentTime += diff * 0.12;
          isSeeking = false;
        }
      }
      animationFrameId = requestAnimationFrame(smoothPlaybackLoop);
    };

    animationFrameId = requestAnimationFrame(smoothPlaybackLoop);

    let scrollTriggerInstance: ScrollTrigger | null = null;

    const setupScrubber = () => {
      const duration = video.duration || 10;

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Map scroll progress to video duration safely
          targetTime = self.progress * (duration - 0.05);
        },
      });
    };

    if (video.readyState >= 1) {
      setupScrubber();
    } else {
      video.addEventListener("loadedmetadata", setupScrubber);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      video.removeEventListener("loadedmetadata", setupScrubber);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#081C15] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting matching the deep botanical palette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(27,67,50,0.35),transparent_75%)] pointer-events-none" />

      {/* Clean, Non-Cluttered Editorial Header */}
      <div className="absolute top-28 left-8 right-8 md:left-16 md:right-16 z-20 flex items-center justify-between border-b border-[#1B4332]/30 pb-4 font-mono text-[11px] text-[#F9F7F1]/60 tracking-[0.2em] uppercase">
        <span className="text-[#FFB703]">ACT 02 // Deconstructed Anatomy</span>
        <span>Scroll to Explore Architecture</span>
      </div>

      {/* Clean 1080p Video Stage with Seamless Edge Blending */}
      <div className="relative w-full max-w-5xl aspect-[16/9] flex items-center justify-center">
        <video
          ref={videoRef}
          src="/assets/videos/exploded_mango.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-contain pointer-events-none select-none mix-blend-screen"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, black 70%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Minimalist Editorial Footnote */}
      <div className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F9F7F1]/40">
        PFO Heritage Alphonso // Five Layer Organic Structure
      </div>
    </div>
  );
}
