import React, { useState } from "react";
import { Minus, Plus, Heart, Check } from "lucide-react";
import { cx } from "../../utils/helpers";
import { ACCENT } from "../../constants/theme";
import { DETAILS } from "../../data/mockData";
import AccordionItem from "../common/AccordionItem";

export default function RightPanel({ size, setSize, qty, setQty }) {
  // One-open accordion (all closed initially)
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  };

  return (
    <div className="space-y-4">
      <p className={cx("text-xs uppercase tracking-wide", ACCENT.text)}>
        Launch Offer 20% Off
      </p>

      <h1 className="text-xl md:text-2xl font-semibold leading-7">
        Noir Threads – Premium Stretch Cotton Shirt (Jet Black)
      </h1>

      <div className="flex items-end gap-3">
        <div className="text-2xl font-bold">₹ 1,499</div>
        <div className="text-neutral-500 line-through">₹ 1,899</div>
        <span className={cx("rounded-full text-black text-xs px-2 py-0.5", ACCENT.bg)}>
          Save ₹400
        </span>
      </div>

      <p className="text-xs text-neutral-500">SKU: SHRT-091</p>

      {/* Size Selector */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Size: {size}</div>
        <div className="flex flex-wrap gap-2">
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={cx(
                "inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-medium transition",
                s === size
                  ? cx("border-lime-400/50 ring-2", ACCENT.ring)
                  : "hover:border-white/30 border-white/10"
              )}
              aria-pressed={s === size}
              aria-label={`Select size ${s}`}
            >
              {s}
              {s === size && <Check className="ml-2 h-4 w-4" />}
            </button>
          ))}
        </div>
      </div>

      {/* Colour */}
      <div className="space-y-2">
        <div className="text-sm font-medium">Colour: Jet Black</div>
        <div className="flex items-center gap-2">
          <span
            className="h-7 w-14 rounded-md border border-white/10 bg-neutral-900"
            aria-label="Jet Black swatch"
          />
          <span className="text-xs text-neutral-500">Selected</span>
        </div>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <div className="text-sm font-medium">Quantity</div>
        <div className="inline-flex items-center rounded-xl border border-white/10 overflow-hidden">
          <button
            className="p-2 disabled:opacity-40 hover:bg-white/5"
            onClick={() => setQty(Math.max(1, qty - 1))}
            disabled={qty <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <div
            className="px-4 py-2 text-sm font-semibold border-x border-white/10 min-w-[3rem] text-center"
            aria-live="polite"
          >
            {qty}
          </div>
          <button
            className="p-2 hover:bg-white/5"
            onClick={() => setQty(qty + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="space-y-3">
        <div className={cx("text-sm font-medium", ACCENT.text)}>In Stock</div>
        <div className="flex gap-3">
          <button
            className={cx(
              "flex-1 rounded-xl px-4 py-3 font-medium transition hover:scale-[1.01] active:scale-[.99] shadow-lg shadow-lime-400/10",
              ACCENT.bg
            )}
          >
            Add to Cart
          </button>
          <button
            className="rounded-xl border border-white/10 px-4 py-3 hover:bg-white/5"
            aria-label="Add to wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Accordion (one open at a time) */}
      <div className="rounded-2xl border border-white/10 shadow-sm overflow-hidden divide-y divide-white/10">
        {DETAILS.map((sec, i) => (
          <AccordionItem
            key={sec.title}
            title={sec.title}
            open={openIndex === i}
            onToggle={() => handleToggle(i)}
          >
            <ul className="list-disc ml-5 space-y-1 text-sm text-neutral-300">
              {sec.content.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}
