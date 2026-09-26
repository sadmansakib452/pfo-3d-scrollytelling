const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-white/40 border-b border-emerald-900/10">
      <div className="flex items-center gap-3">
        <span className="font-serif text-2xl md:text-3xl font-black tracking-tight text-emerald-950">
          PFO
        </span>
        <span className="hidden sm:inline-block h-4 w-[1px] bg-emerald-900/30"></span>
        <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.2em] text-emerald-900 uppercase font-bold">
          Pure Fresh Organic • Est. 1924
        </span>
      </div>
      <nav className="flex items-center gap-6 font-mono text-xs tracking-wider text-emerald-950 font-semibold">
        <a href="#reserves" className="hover:text-amber-700 transition-colors uppercase">
          Reserves
        </a>
        <a
          href="#reserves"
          className="px-4 py-2 rounded-full bg-emerald-900 text-white text-[11px] font-semibold tracking-wider hover:bg-emerald-800 transition-all shadow-sm"
        >
          ORDER HARVEST
        </a>
      </nav>
    </header>
  );
};

export default Header;
