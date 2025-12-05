import React from 'react';
import { Search, User, ShoppingCart, ChevronDown } from 'lucide-react';
import { cx } from '../../utils/helpers';
import { ACCENT } from '../../constants/theme';

function AnnouncementBar() {
  return (
    <div className={cx("text-center py-2 text-xs", ACCENT.softBg, ACCENT.text)}>
      Free sample with every order • Free Shipping on Orders Above ₹1000
    </div>
  );
}

function IconBtn({ children, ariaLabel }){
  return (
    <button
      aria-label={ariaLabel}
      className={cx(
        "p-2 rounded-xl border border-white/10 hover:border-white/30 transition focus:outline-none focus-visible:ring-2",
        ACCENT.ring
      )}
    >
      {children}
    </button>
  );
}

function Dropdown({ label }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 font-semibold text-neutral-200 hover:text-white transition">
        {label}<ChevronDown className="h-4 w-4" />
      </button>
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute left-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/80 backdrop-blur shadow-lg p-2 z-50">
        {["Shirts", "T-Shirts", "Polos"].map((o) => (
          <a key={o} href="#" className="block rounded-lg px-3 py-2 hover:bg-white/5 text-sm text-neutral-200">{o}</a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <AnnouncementBar />
      <header className="supports-[backdrop-filter]:bg-white/5 backdrop-blur border-b border-white/10 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center">
            {/* Left: Brand */}
            <div>
              <div className={cx("text-3xl font-black tracking-tight", ACCENT.text)}>Noir Threads</div>
              <div className="text-[10px] text-neutral-500 -mt-1">Everyday Luxury</div>
            </div>

            {/* Right: Nav + Icons (pushed using ml-auto) */}
            <div className="ml-auto flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8 text-neutral-200">
                <Dropdown label="SHOP" />
                <Dropdown label="LOOKBOOK" />
                <Dropdown label="ABOUT" />
              </nav>

              <div className="flex items-center gap-2">
                <IconBtn ariaLabel="Search"><Search className="h-5 w-5" /></IconBtn>
                <IconBtn ariaLabel="Account"><User className="h-5 w-5" /></IconBtn>
                <IconBtn ariaLabel="Cart"><ShoppingCart className="h-5 w-5" /></IconBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
