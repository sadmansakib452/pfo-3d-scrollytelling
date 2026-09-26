"use client";

import SceneContainer from "@/components/canvas/SceneContainer";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import Image from "next/image";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-[300vh] bg-[#081C15] text-[#F9F7F1] selection:bg-[#FFB703] selection:text-[#081C15]">
        {/* Background 3D WebGL Canvas Layer */}
        <SceneContainer />

        {/* Ambient Subtle Studio Glow */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,183,3,0.06),transparent_70%)] pointer-events-none z-0" />

        {/* Bespoke Luxury Editorial Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 border-b border-[#1B4332]/30 backdrop-blur-md bg-[#081C15]/75">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#F9F7F1]">
              PFO
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#FFB703] uppercase">
              Pure Fresh Organic
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F9F7F1]/60">
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">01. Heritage</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">02. Bio-Purity</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">03. The Harvest</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">04. Crate Reserve</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#10B981] border border-[#10B981]/30 px-3.5 py-1.5 rounded-full bg-[#1B4332]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>LAB AUDIT: 0.00% CHEMICALS</span>
            </div>
          </div>
        </header>

        {/* ACT 1: Hero Section — Editorial Art Direction */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Authentic Heritage Coordinates */}
            <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB703]/80">
              <span>LAT 24.3745° N</span>
              <span className="text-[#1B4332]">•</span>
              <span>ORCHARD RESERVE NO. 04</span>
              <span className="text-[#1B4332]">•</span>
              <span>EST. 1924</span>
            </div>

            {/* Editorial Luxury Headline in Cormorant Garamond */}
            <h1 className="font-serif text-6xl md:text-9xl font-normal tracking-tight leading-[0.9] text-[#F9F7F1]">
              The Sovereign <br />
              <span className="italic font-light text-[#FFB703] font-serif">Alphonso.</span>
            </h1>

            <p className="font-sans text-base md:text-xl text-[#F9F7F1]/70 font-light max-w-xl mx-auto leading-relaxed">
              Tree-ripened under the sun. Untouched by synthetic ripening agents. Hand-harvested at the exact hour of peak natural sucrose.
            </p>

            {/* Minimalist Editorial Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-9 py-4 rounded-full bg-[#FFB703] text-[#081C15] font-sans font-bold text-xs uppercase tracking-[0.15em] shadow-xl shadow-[#FFB703]/15 hover:bg-[#FFA000] hover:scale-105 transition-all">
                Enter The Scrollytelling
              </button>
              <button className="font-mono text-xs uppercase tracking-[0.2em] text-[#F9F7F1]/70 hover:text-[#10B981] transition-colors flex items-center gap-2 border-b border-[#1B4332] pb-1">
                <span>View Purity Certificate</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Minimalist Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-[#F9F7F1]/40">
            <span>Scroll To Decouple</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#FFB703] to-transparent animate-pulse" />
          </div>
        </section>

        {/* ACT 2: Hero Video Showcase & Dynamic Macro Inspection */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-6xl mx-auto w-full space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#1B4332]/40 pb-6 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#FFB703]">
                  Act 02 // Precision Kinetic Capture
                </span>
                <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#F9F7F1] mt-2">
                  Zero-Gravity <span className="italic font-light text-[#FFB703]">Nectar Slicing.</span>
                </h2>
              </div>
              <div className="font-mono text-xs text-[#F9F7F1]/50 tracking-wider">
                1000 FPS PHANTOM HIGH-SPEED OPTICS
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#1B4332]/60 shadow-2xl bg-black">
              <video
                src="/assets/videos/hero_mango_slice.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[#10B981]">
                  PFO CINEMATICS // 8K RAW CAPTURE
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 text-[#FFB703]">
                  ZERO SYNTHETIC ADDITIVES
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ACT 3: Laboratory Bio-Purity & Harvest Reserve */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Product Image Frame */}
            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#FFB703]/20 shadow-2xl shadow-black/80">
              <Image
                src="/assets/images/pfo_product_crate.png"
                alt="PFO Luxury Cold-Pressed Mango Nectar & Organic Crate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent opacity-40" />
            </div>

            {/* Editorial Narrative & Bio-Metrics */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#10B981]">
                  Act 04 // Artisanal Cold Extraction
                </span>
                <h3 className="font-serif text-3xl md:text-5xl font-normal text-[#F9F7F1] mt-2 leading-tight">
                  Cold-Pressed <br />
                  <span className="italic font-light text-[#FFB703]">Live Enzymes.</span>
                </h3>
              </div>

              <p className="font-sans text-sm md:text-base text-[#F9F7F1]/70 leading-relaxed font-light">
                Extracted within four hours of tree departure using hydraulic non-thermal press. Zero oxygen exposure, zero heat degradation, safeguarding natural bioflavonoids.
              </p>

              {/* Scientific Bio-HUD Grid in JetBrains Mono */}
              <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
                <div className="p-4 rounded-xl border border-[#1B4332]/60 bg-[#081C15]/80 backdrop-blur-md">
                  <div className="text-3xl font-normal text-[#FFB703] tracking-tight">19.2°</div>
                  <div className="text-[10px] text-[#F9F7F1]/50 uppercase tracking-widest mt-1">Refractometer Brix</div>
                </div>
                <div className="p-4 rounded-xl border border-[#1B4332]/60 bg-[#081C15]/80 backdrop-blur-md">
                  <div className="text-3xl font-normal text-[#10B981] tracking-tight">0.00%</div>
                  <div className="text-[10px] text-[#F9F7F1]/50 uppercase tracking-widest mt-1">Formalin & Carbide</div>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full py-4 rounded-full border border-[#FFB703]/50 bg-[#FFB703]/10 text-[#FFB703] font-mono text-xs uppercase tracking-[0.2em] hover:bg-[#FFB703] hover:text-[#081C15] transition-all">
                  Reserve Handcrafted Crate
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
