"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Royal Alphonso Mango (Crate)", price: 1450, qty: 1, img: "/images/pfo_mango_crate.jpg" }
  ]);

  // Lock body scroll when drawers are open
  useEffect(() => {
    if (isMobileMenuOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen, isCartOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const addItem = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-8 md:px-12 py-3.5 backdrop-blur-md bg-stone-50/80 border-b border-stone-200/70 transition-all duration-300">
        {/* Brand Logo & Heritage Tagline */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-emerald-950 group-hover:text-amber-800 transition-colors">
              PFO
            </span>
            <span className="font-mono text-[8px] tracking-[0.25em] text-emerald-800 uppercase font-bold -mt-1">
              EST. 1924
            </span>
          </div>
          <span className="hidden lg:inline-block h-6 w-[1px] bg-stone-300"></span>
          <div className="hidden lg:flex flex-col text-left font-mono">
            <span className="text-[10px] tracking-wider text-stone-800 uppercase font-bold">
              Pure Fresh Organic
            </span>
            <span className="text-[9px] tracking-widest text-emerald-800">
              Rajshahi & Sundarban Reserve
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-stone-800 font-semibold">
          <a href="#reserves" className="hover:text-amber-700 transition-colors uppercase">
            Reserves
          </a>
          <a href="#heritage" className="hover:text-amber-700 transition-colors uppercase">
            Heritage
          </a>
          <a href="#guarantee" className="hover:text-amber-700 transition-colors uppercase">
            0.00% Formalin
          </a>
          <a href="#contact" className="hover:text-amber-700 transition-colors uppercase">
            Farm Dispatch
          </a>
        </nav>

        {/* Actions: Currency, Cart, and Order CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Currency Indicator */}
          <span className="hidden sm:inline-flex items-center font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-stone-200/70 text-stone-700 border border-stone-300/80">
            ৳ BDT
          </span>

          {/* Cart Bag Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-stone-300 shadow-sm hover:border-amber-600 transition-all font-mono text-xs font-bold text-stone-900"
            aria-label="View Shopping Basket"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Bag</span>
            <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-900 text-[10px] flex items-center justify-center font-black">
              {cartItems.reduce((acc, i) => acc + i.qty, 0)}
            </span>
          </button>

          {/* Order CTA (Desktop) */}
          <a
            href="#reserves"
            className="hidden sm:inline-block px-4 py-2 rounded-full bg-emerald-950 text-white font-mono text-xs font-bold tracking-wider hover:bg-emerald-900 transition-all shadow-md hover:shadow-lg"
          >
            ORDER HARVEST
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-200/60 transition-colors"
            aria-label="Toggle Mobile Navigation Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Slide-Over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <aside className="relative z-10 w-full max-w-md bg-stone-50 h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Your Harvest Bag</h3>
                  <p className="font-mono text-xs text-emerald-800">Fresh Dispatch from Rajshahi Orchards</p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items List */}
              <div className="mt-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="font-mono text-sm text-stone-500">Your bag is currently empty.</p>
                    <p className="text-xs text-stone-400 mt-1">Select from our 3 pure reserves below.</p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-stone-200/80 shadow-sm">
                      <Image src={item.img} alt={item.name} width={56} height={56} className="w-14 h-14 rounded-xl object-cover" />
                      <div className="flex-1 font-mono">
                        <h4 className="text-xs font-bold text-stone-900">{item.name}</h4>
                        <p className="text-xs text-amber-800 font-bold mt-1">৳{item.price} × {item.qty}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-stone-400 hover:text-rose-600 text-xs font-mono p-1"
                      >
                        Remove
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Quick Add Presets */}
              <div className="mt-8 border-t border-stone-200 pt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold mb-3">
                  Quick Add Reserves:
                </h4>
                <div className="space-y-2">
                  <button
                    onClick={() => addItem({ id: 2, name: "Sundarban Raw Honey (500g)", price: 1200, img: "/images/pfo_sundarban_honey.jpg" })}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-amber-600 font-mono text-xs font-semibold text-left transition-colors"
                  >
                    <span>+ Sundarban Raw Wild Honey</span>
                    <span className="font-bold text-amber-900">৳1,200</span>
                  </button>
                  <button
                    onClick={() => addItem({ id: 3, name: "Mountain Roasted Nuts (450g)", price: 980, img: "/images/pfo_mixed_nuts.jpg" })}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200 hover:border-amber-600 font-mono text-xs font-semibold text-left transition-colors"
                  >
                    <span>+ Mountain Roasted Nuts</span>
                    <span className="font-bold text-amber-900">৳980</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer & Checkout */}
            <div className="border-t border-stone-200 pt-4 mt-6">
              <div className="flex items-center justify-between font-mono text-sm mb-4">
                <span className="text-stone-600">Subtotal:</span>
                <span className="text-xl font-bold text-stone-900">৳{subtotal.toLocaleString()}</span>
              </div>
              <button
                onClick={() => alert(`Harvest Order Confirmed for ৳${subtotal.toLocaleString()}! We will contact you for delivery details.`)}
                className="w-full py-3.5 rounded-xl bg-emerald-950 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-emerald-900 transition-colors shadow-lg"
              >
                SECURE CHECKOUT • ৳{subtotal.toLocaleString()}
              </button>
              <p className="text-[10px] text-center font-mono text-stone-400 mt-2">
                100% Organic Delivery Guarantee • Zero Formalin
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-stone-950/95 text-stone-100 backdrop-blur-xl flex flex-col justify-between p-8 md:hidden">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-serif text-3xl font-bold text-amber-400">PFO ORGANIC</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-2xl p-2 text-stone-400">✕</button>
            </div>
            <nav className="mt-8 flex flex-col gap-6 font-serif text-2xl font-bold">
              <a href="#reserves" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">
                Our Reserves
              </a>
              <a href="#heritage" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">
                Heritage Orchards
              </a>
              <a href="#guarantee" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">
                Formalin 0.00% Cert
              </a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-400 transition-colors">
                Farm Dispatch
              </a>
            </nav>
          </div>

          <div className="font-mono text-xs border-t border-white/10 pt-6">
            <p className="text-stone-400">Direct Hotline & WhatsApp:</p>
            <p className="text-amber-300 font-bold text-sm mt-1">+880 1700-000000</p>
            <p className="text-[11px] text-stone-500 mt-3">Rajshahi • Sundarban • Dhaka Dispatch</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
