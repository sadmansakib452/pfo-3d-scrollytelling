"use client";

import Image from "next/image";
import { View } from "@react-three/drei";
import Bounded from "../Bounded";
import AlternatingTextScene from "./AlternatingTextScene";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const products = [
  {
    heading: "Royal Alphonso Mango",
    subtitle: "100% Tree-Ripened • Zero Synthetic Ripeners",
    hud: "ORIGIN: RAJSHAHI (LAT 24.37° N) • 19.2° BRIX SUCROSE • 0.00% FORMALIN",
    body: "Harvested at sunrise from century-old heirloom orchards along the Padma basin. Naturally cured in authentic rice straw, delivering intense floral aroma and sweet, fiberless golden pulp untouched by calcium carbide.",
    price: "৳1,450 / Heritage Wooden Crate",
    image: "/images/pfo_mango_crate.jpg",
    alt: "PFO Sovereign Organic Mango Crate",
    badge: "RESERVE LOT #089",
  },
  {
    heading: "Sundarban Raw Wild Honey",
    subtitle: "Unheated • 100% Bio-Active Mangrove Nectar",
    hud: "ORIGIN: SUNDARBANS (LAT 21.94° N) • UNPASTEURIZED • WILD APIS DORSATA",
    body: "Deep mangrove wild honey gathered directly from virgin tidal forest canopies by traditional Mouwals. Unheated, raw, and gravity-strained to preserve living royal enzymes, natural pollen, and antioxidant propolis.",
    price: "৳1,200 / Artisanal Hex Jar (500g)",
    image: "/images/pfo_sundarban_honey.jpg",
    alt: "PFO Sundarban Raw Wild Honey Jar",
    badge: "BIO-ACTIVE RAW",
  },
  {
    heading: "Mountain Roasted Nuts & Seeds",
    subtitle: "Slow Clay-Oven Roasted • Zero Preservatives",
    hud: "HAND-ROASTED • 0% CHOLESTEROL • ZERO TRANS-FATS • BATCH #402",
    body: "An artisanal symphony of whole California almonds, king cashews, walnuts, and sun-dried pumpkin seeds. Slow-baked in earthen clay ovens without a drop of industrial oil, imparting an authentic woody crispness.",
    price: "৳980 / Amber Glass Canister (450g)",
    image: "/images/pfo_mixed_nuts.jpg",
    alt: "PFO Mountain Roasted Nuts and Seeds Canister",
    badge: "SLOW CLAY BAKED",
  },
];

const AlternatingText = () => {
  const isDesktop = useMediaQuery("(min-width:768px)", true);

  return (
    <Bounded className="alternating-text-container relative text-stone-900 bg-amber-50 transition-colors duration-700">
      <div>
        <div className="grid relative">
          {isDesktop && (
            <View className="alternating-text-view absolute left-0 top-0 h-screen w-full pointer-events-none">
              <AlternatingTextScene />
            </View>
          )}

          {products.map((item, index) => {
            const isTextLeft = index % 2 === 0;
            return (
              <div
                key={item.heading}
                className="alternating-section grid min-h-[90vh] md:h-screen items-center gap-8 md:gap-16 md:grid-cols-2 py-16 px-4 md:px-12"
              >
                {/* Text Content Column */}
                <div
                  className={`z-10 max-w-xl ${
                    !isDesktop
                      ? "order-2"
                      : isTextLeft
                        ? "md:col-start-1 md:order-1"
                        : "md:col-start-2 md:order-2"
                  }`}
                >
                  {/* Laboratory / Origin HUD Metadata */}
                  <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-emerald-800 uppercase mb-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 font-bold border border-emerald-300">
                      {item.badge}
                    </span>
                    <span className="hidden sm:inline opacity-80">{item.hud}</span>
                  </div>

                  <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight">
                    {item.heading}
                  </h2>

                  <div className="mt-2 text-emerald-900 font-semibold text-lg sm:text-xl">
                    {item.subtitle}
                  </div>

                  <div className="mt-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                    <p>{item.body}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-stone-300/80 pt-4">
                    <span className="font-mono text-2xl font-bold text-amber-900">
                      {item.price}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-wider text-stone-600 bg-stone-200/60 px-3 py-1 rounded-md">
                      Farm Direct
                    </span>
                  </div>
                </div>

                {/* Mobile-Only Product Photography Preview (Desktop displays the live 3D Model) */}
                <div className="z-10 order-1 md:hidden">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl border border-amber-900/15 bg-white/40 backdrop-blur-sm p-2">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={700}
                      height={500}
                      className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      {item.badge} • 100% ORGANIC
                    </div>
                  </div>
                </div>

                {/* Desktop 3D Model Spatial Buffer */}
                <div
                  className={`hidden md:block pointer-events-none ${
                    isTextLeft ? "md:col-start-2" : "md:col-start-1"
                  }`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
