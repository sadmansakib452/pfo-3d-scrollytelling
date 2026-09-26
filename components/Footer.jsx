"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer id="contact" className="bg-stone-950 text-stone-300 border-t border-stone-800/80 pt-16 pb-12 font-sans selection:bg-amber-400 selection:text-stone-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-stone-800">
          
          {/* Column 1: Brand Story & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900/60 border border-amber-400/40 flex items-center justify-center font-serif text-amber-400 text-xl font-bold">
                P
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-stone-100">
                  PFO ORGANIC
                </span>
                <p className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 -mt-1 font-bold">
                  Pure Fresh Organic • Est. 2024
                </p>
              </div>
            </div>

            <p className="font-sans text-xs text-stone-400 leading-relaxed pr-2">
              Bangladesh&apos;s sovereign organic harvest reserve. Delivering tree-ripened Rajshahi mangoes, wild bio-active Sundarban honey, and clay-oven roasted nuts untouched by industrial chemicals.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>BCSIR Formalin Tested • 0.00% Residue</span>
            </div>
          </div>

          {/* Column 2: Sovereign Reserves */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-300 tracking-wide">
              Heritage Reserves
            </h4>
            <ul className="space-y-2 font-mono text-xs text-stone-400">
              <li>
                <a href="#reserves" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Royal Alphonso Mango (Lot #089)</span>
                  <span className="text-[10px] text-amber-500/80">৳1,450</span>
                </a>
              </li>
              <li>
                <a href="#reserves" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Sundarban Raw Wild Honey (500g)</span>
                  <span className="text-[10px] text-amber-500/80">৳1,200</span>
                </a>
              </li>
              <li>
                <a href="#reserves" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Mountain Roasted Nuts (450g)</span>
                  <span className="text-[10px] text-amber-500/80">৳980</span>
                </a>
              </li>
              <li className="pt-2 border-t border-stone-800/80">
                <a href="#guarantee" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  <span>↓ Download Lab Purity Certificate</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quality Guarantees */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-300 tracking-wide">
              Harvest Guarantees
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>100% Tree-Ripened:</strong> Naturally matured in rice straw beds, zero calcium carbide.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Raw & Unheated:</strong> Live honey enzymes & pollen intact from Sundarban canopies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span><strong>Cold-Chain Express:</strong> Dispatched from cold storage directly to Dhaka within 24 hours.</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Orchard Dispatch & Concierge */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-amber-300 tracking-wide">
              Farm Dispatch Hub
            </h4>
            <div className="font-mono text-xs text-stone-400 space-y-1.5">
              <p className="text-stone-300 font-semibold">Direct Concierge Hotline:</p>
              <p className="text-amber-400 font-bold text-sm">+880 1700-000000</p>
              <p className="text-stone-400">WhatsApp Dispatch Support: 24/7</p>
              <p className="text-[11px] text-stone-500 pt-1">
                Central Cold Hub: Plot 42, Tejgaon Industrial Area, Dhaka 1208
              </p>
            </div>

            {/* VIP Harvest Drop Signup */}
            <div className="pt-3">
              <label htmlFor="harvest-email" className="font-mono text-[10px] uppercase tracking-wider text-stone-400 block mb-1.5">
                Join VIP Harvest Drop Alerts:
              </label>
              <div className="flex gap-2">
                <input
                  id="harvest-email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-400 w-full font-mono"
                />
                <button
                  onClick={() => alert("Thank you! You are on the VIP Harvest Priority Registry.")}
                  className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap"
                >
                  JOIN
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: Trust & Payment Gateway Badges */}
        <div className="py-8 border-b border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 text-stone-400 font-mono text-xs">
            <span className="text-stone-500 uppercase tracking-widest text-[10px]">Secured Payments:</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-pink-400">bKash</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-orange-400">Nagad</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-purple-400">Rocket</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-blue-400">Visa</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-amber-400">Mastercard</span>
            <span className="px-2.5 py-1 rounded bg-stone-900 border border-stone-800 text-[11px] font-bold text-emerald-400">Cash on Delivery</span>
          </div>

          <div className="font-mono text-xs text-stone-500 text-center md:text-right">
            <span>ORCHARD ORIGIN: RAJSHAHI LAT 24.37° N • SUNDARBANS LAT 21.94° N</span>
          </div>
        </div>

        {/* Bottom Section: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-stone-500">
          <p>© 2026 PFO (Pure Fresh Organic) Bangladesh. All Sovereign Harvest Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Purity Manifesto</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Dispatch</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
