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

          {products.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid min-h-[85vh] md:h-screen place-items-center gap-x-12 md:grid-cols-2 py-12"
            >
              <div
                className={`z-10 max-w-xl ${
                  !isDesktop
                    ? "col-start-1"
                    : index % 2 === 0
                      ? "col-start-1"
                      : "col-start-2"
                }`}
              >
                {/* Mobile & Tablet Product Visual Preview */}
                <div className="mb-6 overflow-hidden rounded-2xl shadow-xl md:hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Laboratory / Origin HUD Metadata */}
                <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-emerald-800 uppercase mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 font-semibold border border-emerald-300">
                    {item.badge}
                  </span>
                  <span className="hidden sm:inline opacity-75">{item.hud}</span>
                </div>

                <h2 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight">
                  {item.heading}
                </h2>

                <div className="mt-2 text-emerald-900 font-medium text-lg">
                  {item.subtitle}
                </div>

                <div className="mt-4 text-stone-700 text-base sm:text-lg leading-relaxed font-sans">
                  <p>{item.body}</p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-stone-300/60 pt-4">
                  <span className="font-mono text-xl font-bold text-amber-900">
                    {item.price}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-wider text-stone-500">
                    Direct Farm Dispatch
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
