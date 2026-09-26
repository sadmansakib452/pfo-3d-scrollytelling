const BigText = () => {
  return (
    <section className="w-screen min-h-screen overflow-hidden bg-emerald-950 text-amber-400">
      <h2 className="grid w-full gap-[2vw] py-16 text-center font-serif font-black uppercase leading-[0.8]">
        <div className="text-[28vw] tracking-tighter">PURE</div>
        <div className="grid gap-[2vw] text-[20vw] md:flex md:justify-center md:gap-8 md:text-[8vw] font-sans font-bold tracking-widest text-emerald-200">
          <span className="inline-block">FRESH</span>
          <span className="inline-block">•</span>
          <span className="inline-block">HONEST</span>
        </div>
        <div className="text-[24vw] tracking-tighter text-amber-500">ORGANIC</div>
      </h2>
    </section>
  );
};

export default BigText;
