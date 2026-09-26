"use client";

import SceneContainer from "@/components/canvas/SceneContainer";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import { Sparkles, ShieldCheck, Award, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="relative min-h-[250vh] bg-[#081C15] text-[#F9F7F1] selection:bg-[#FFB703] selection:text-[#081C15]">
        {/* Background 3D WebGL Canvas Layer */}
        <SceneContainer />

        {/* Ambient Radial Gradient Overlay */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,183,3,0.08),transparent_65%)] pointer-events-none z-0" />

        {/* Minimalist Glass Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 glass-panel border-b border-[#1B4332]/40">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FFB703] shadow-lg shadow-[#FFB703]/50 animate-pulse" />
            <span className="font-extrabold text-xl tracking-tight text-[#F9F7F1]">
              PFO <span className="text-[#FFB703] font-light">Organic</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-[#F9F7F1]/70 font-medium">
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">The Orchard</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">Purity Scan</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">The Harvest</span>
            <span className="hover:text-[#FFB703] transition-colors cursor-pointer">Certifications</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full border border-[#10B981]/40 bg-[#1B4332]/40 text-[#10B981] text-xs font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Tree-Ripened</span>
            </div>
          </div>
        </nav>

        {/* Section 1: Hero Awakening */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFB703]/30 bg-[#FFB703]/10 text-[#FFB703] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB703]" />
              The King of Fruits — Rajshahi Heritage Orchards
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none bg-gradient-to-b from-[#F9F7F1] via-[#F9F7F1] to-[#FFB703] bg-clip-text text-transparent">
              PURE. FRESH. <br />
              <span className="italic font-light text-[#FFB703]">ORGANIC.</span>
            </h1>

            <p className="text-base md:text-xl text-[#F9F7F1]/70 font-light max-w-2xl mx-auto leading-relaxed">
              Untouched by carbide. Zero formalin. Handpicked at peak sugar maturity directly from certified organic orchards to your table.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="px-8 py-4 rounded-full bg-[#FFB703] text-[#081C15] font-bold text-sm tracking-wide shadow-xl shadow-[#FFB703]/20 hover:scale-105 transition-transform cursor-pointer">
                Experience Scrollytelling
              </div>
              <div className="px-8 py-4 rounded-full border border-[#1B4332] bg-[#081C15]/60 text-[#F9F7F1] text-sm font-medium hover:border-[#10B981] transition-colors cursor-pointer flex items-center gap-2">
                <Award className="w-4 h-4 text-[#10B981]" />
                View Lab Test Certificate
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F9F7F1]/40 text-xs uppercase tracking-widest animate-bounce">
            <span>Scroll to Explore</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </section>

        {/* Section 2: Product Showcase Preview */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#FFB703]/20 shadow-2xl shadow-[#FFB703]/10">
              <Image
                src="/assets/images/pfo_product_crate.png"
                alt="PFO Luxury Cold-Pressed Mango Nectar & Organic Crate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081C15] via-transparent to-transparent opacity-60" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10B981]/30 bg-[#1B4332]/30 text-[#10B981] text-xs font-semibold uppercase tracking-wider">
                Act 4 Preview: Farm Harvest
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#F9F7F1] leading-tight">
                Cold-Pressed <br />
                <span className="text-[#FFB703]">Raw Nectar.</span>
              </h2>
              <p className="text-[#F9F7F1]/70 leading-relaxed font-light">
                Extracted within 4 hours of harvest using hydraulic cold extraction. Preserving 100% of live enzymes, bioactive Vitamin C, and natural fruit pectin.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl glass-panel">
                  <div className="text-2xl font-black text-[#FFB703]">19.2°</div>
                  <div className="text-xs text-[#F9F7F1]/60 uppercase tracking-wider">Natural Brix Sweetness</div>
                </div>
                <div className="p-4 rounded-xl glass-panel">
                  <div className="text-2xl font-black text-[#10B981]">0.00%</div>
                  <div className="text-xs text-[#F9F7F1]/60 uppercase tracking-wider">Chemical Preservatives</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
