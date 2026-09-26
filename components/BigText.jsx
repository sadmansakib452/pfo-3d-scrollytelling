const BigText = () => {
  return (
    <section className="w-full overflow-hidden bg-emerald-950 text-amber-400 py-16 md:py-24 px-4 border-t border-emerald-900/60 selection:bg-amber-400 selection:text-emerald-950">
      <div className="max-w-6xl mx-auto text-center">
        {/* Purity Creed Badge */}
        <div className="mb-6">
          <span className="inline-block font-mono text-xs uppercase tracking-widest text-emerald-300 border border-emerald-500/30 bg-emerald-900/50 px-4 py-1.5 rounded-full shadow-sm">
            100% ORGANIC & CHEMICAL-FREE GUARANTEE
          </span>
        </div>

        {/* Structured Editorial Display Hierarchy */}
        <h2 className="flex flex-col items-center justify-center leading-none">
          <span className="font-serif font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-300 drop-shadow">
            PURE
          </span>

          <span className="my-2 sm:my-4 flex items-center justify-center gap-3 sm:gap-6 font-sans text-lg sm:text-2xl md:text-3xl font-bold tracking-widest text-emerald-200 uppercase">
            <span>FRESH</span>
            <span className="text-amber-400">•</span>
            <span>HONEST</span>
          </span>

          <span className="font-serif font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-500 drop-shadow">
            ORGANIC
          </span>
        </h2>

        {/* Origin & Guarantee Meta */}
        <div className="mt-8 font-mono text-[11px] sm:text-xs text-stone-400 uppercase tracking-widest flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span>DIRECT FROM CERTIFIED FARMS</span>
          <span className="text-amber-400">•</span>
          <span>0.00% SYNTHETIC RESIDUE</span>
          <span className="text-amber-400">•</span>
          <span>NATIONWIDE HOME DELIVERY</span>
        </div>
      </div>
    </section>
  );
};

export default BigText;
