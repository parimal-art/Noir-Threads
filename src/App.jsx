import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { cx } from "./utils/helpers";
import { ACCENT } from "./constants/theme";
import { IMAGES } from "./data/mockData";

// Components
import Navbar from "./components/layout/Navbar";
import RightPanel from "./components/product/RightPanel";
import ReviewsSection from "./components/reviews/ReviewsSection";

function GradientGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div
        className={cx(
          "absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full blur-3xl",
          `bg-gradient-to-b ${ACCENT.grad}`
        )}
      />
    </div>
  );
}

function Tabs({ value, onChange, items }) {
  return (
    <div className="border-b border-white/10 mb-8 flex flex-wrap gap-8 text-sm">
      {items.map((i) => (
        <button
          key={i}
          onClick={() => onChange(i)}
          className={cx(
            "py-4 -mb-px border-b-2 transition",
            value === i
              ? "border-lime-400 text-white font-semibold"
              : "border-transparent text-neutral-400 hover:text-neutral-200"
          )}
        >
          {i}
        </button>
      ))}
    </div>
  );
}

/* ---------- DETAILED CONTENT BLOCKS ---------- */

function DescriptionBlock() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <h3 className="mb-3">About the Shirt</h3>
      <p>
        Noir Threads Premium Stretch Cotton Shirt is a modern essential crafted
        for all-day comfort. Long-staple cotton provides a smooth hand-feel,
        while a subtle elastane blend adds natural stretch for movement. Clean
        single-needle stitching, matte buttons, and a crisp semi-spread collar
        deliver a refined, minimal look that pairs with denim, chinos, or a
        suit.
      </p>

      <h4 className="mt-8">Design Details</h4>
      <ul>
        <li>Long-staple cotton (high yarn count) for a soft, durable finish</li>
        <li>2% elastane for comfortable stretch without losing shape</li>
        <li>Semi-spread collar with reinforced interlining</li>
        <li>Matte, low-gloss buttons with clean lock-stitching</li>
        <li>Curved hem designed to be tucked or untucked</li>
        <li>Back yoke for better drape and shoulder mobility</li>
      </ul>

      <h4 className="mt-8">Performance You’ll Feel</h4>
      <ul>
        <li>Breathable weave suitable for warm & humid climates</li>
        <li>Wrinkle-resistant finish for easier morning routines</li>
        <li>Color-locked black dyed to resist fading</li>
        <li>Everyday easy care—machine wash & quick to iron</li>
      </ul>

      <h4 className="mt-8">Occasions</h4>
      <p>
        Versatile from desk to dinner: wear it with tailored trousers for
        meetings, throw on chinos for weekends, or layer under a blazer for
        evenings out.
      </p>
    </div>
  );
}

function FabricCareBlock() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <h3 className="mb-3">Fabric & Care</h3>

      <div className="grid sm:grid-cols-2 gap-6 not-prose">
        {/* Fabric Spec */}
        <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
          <h4 className="text-lg font-semibold mb-3">Fabric Specs</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <span className="text-neutral-400">Composition:</span>{" "}
              98% long-staple cotton, 2% elastane
            </li>
            <li>
              <span className="text-neutral-400">Weave:</span> Compact sateen /
              fine twill (breathable, smooth touch)
            </li>
            <li>
              <span className="text-neutral-400">Weight:</span> ~130–150 GSM
              (all-season)
            </li>
            <li>
              <span className="text-neutral-400">Finish:</span> Softening +
              wrinkle-resistant + color-lock black dye
            </li>
            <li>
              <span className="text-neutral-400">Hand-feel:</span> Smooth, cool
              touch with light stretch
            </li>
          </ul>
        </div>

        {/* Care Guide */}
        <div className="rounded-2xl border border-white/10 p-5 bg-white/[0.03]">
          <h4 className="text-lg font-semibold mb-3">Care Guide</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>Machine wash cold (≤ 30°C) with similar colors</li>
            <li>Use mild detergent; avoid bleach & optical brighteners</li>
            <li>Turn inside out to minimize fading</li>
            <li>Gentle spin; do not wring</li>
            <li>Line dry in shade; avoid direct sunlight</li>
            <li>Warm iron (≤ 150°C). Steam to lift creases</li>
            <li>Do not dry clean frequently—spot clean when possible</li>
          </ul>
        </div>
      </div>

      <h4 className="mt-8">Pro Tips</h4>
      <ul>
        <li>
          For crisp collars, iron while slightly damp or use a steam burst.
        </li>
        <li>Use a garment bag if machine washing with zippers/buttons.</li>
        <li>Wash dark colors inside out to extend color life.</li>
      </ul>
    </div>
  );
}

function FitSizeBlock() {
  return (
    <div className="prose prose-invert prose-neutral max-w-none">
      <h3 className="mb-3">Fit & Size</h3>
      <p>
        Tailored fit: clean through the chest and sleeves with comfortable room
        to move. Designed to be worn tucked or untucked.
      </p>

      {/* Fit Notes */}
      <div className="not-prose mt-6 grid sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.03]">
          <div className="text-sm text-neutral-400">Model</div>
          <div className="text-sm">Height 5'11" (180 cm), wearing size M</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.03]">
          <div className="text-sm text-neutral-400">Fit</div>
          <div className="text-sm">Tailored / slim-regular hybrid</div>
        </div>
        <div className="rounded-2xl border border-white/10 p-4 bg-white/[0.03]">
          <div className="text-sm text-neutral-400">Length</div>
          <div className="text-sm">Hip length, curved hem</div>
        </div>
      </div>

      {/* Size Guide */}
      <h4 className="mt-8">Size Guide (Body Measurements)</h4>
      <div className="overflow-x-auto not-prose">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="text-left text-neutral-300">
              <th className="border-b border-white/10 px-3 py-2">Size</th>
              <th className="border-b border-white/10 px-3 py-2">Chest (in)</th>
              <th className="border-b border-white/10 px-3 py-2">Neck (in)</th>
              <th className="border-b border-white/10 px-3 py-2">
                Sleeve (in)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { s: "S", c: "36–38", n: "14–14.5", sl: "32–33" },
              { s: "M", c: "38–40", n: "15–15.5", sl: "33–34" },
              { s: "L", c: "40–42", n: "16–16.5", sl: "34–35" },
              { s: "XL", c: "42–44", n: "17–17.5", sl: "35–36" },
              { s: "2XL", c: "44–46", n: "18–18.5", sl: "36–37" },
            ].map((row) => (
              <tr key={row.s} className="text-neutral-200">
                <td className="px-3 py-2 border-b border-white/10">{row.s}</td>
                <td className="px-3 py-2 border-b border-white/10">{row.c}</td>
                <td className="px-3 py-2 border-b border-white/10">{row.n}</td>
                <td className="px-3 py-2 border-b border-white/10">{row.sl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="mt-8">How to Measure</h4>
      <ul>
        <li>
          <span className="text-neutral-300">Chest:</span> Measure around the
          fullest part, under the arms.
        </li>
        <li>
          <span className="text-neutral-300">Neck:</span> Measure around the
          base of your neck where a collar sits.
        </li>
        <li>
          <span className="text-neutral-300">Sleeve:</span> From shoulder tip to
          wrist bone with elbow slightly bent.
        </li>
      </ul>

      <p className="mt-6 text-sm text-neutral-300">
        Between sizes? If you prefer a relaxed look or plan to layer, size up.
        For a sharper, closer fit, choose your regular size.
      </p>
    </div>
  );
}

/* ---------- PAGE ---------- */

export default function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("Reviews");

  // subtle enter animation
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-safe:scroll-smooth");
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-100 selection:bg-lime-400/30 font-sans">
      <GradientGlow />
      <Navbar />

      {/* Breadcrumbs */}
      <div className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-sm text-neutral-400 flex items-center gap-1 flex-wrap">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <ChevronRight className="h-4 w-4 text-neutral-500" />
          <a href="#" className="hover:text-white">
            Men
          </a>
          <ChevronRight className="h-4 w-4 text-neutral-500" />
          <a href="#" className="hover:text-white">
            Shirts
          </a>
          <ChevronRight className="h-4 w-4 text-neutral-500" />
          <span className="text-white/90 font-medium truncate">
            Noir Threads – Premium Stretch Cotton Shirt
          </span>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Thumbnails */}
          <aside className="order-2 lg:order-1 lg:col-span-1 flex lg:flex-col gap-3 overflow-auto">
            {IMAGES.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cx(
                  "relative aspect-[3/4] w-20 lg:w-full overflow-hidden rounded-xl border border-white/10 transition",
                  activeImage === i
                    ? cx("ring-2", ACCENT.ring)
                    : "hover:border-white/30"
                )}
                aria-label={`Thumbnail ${i + 1}`}
              >
                <img
                  src={src}
                  alt="thumbnail"
                  className="h-full w-full object-cover scale-100 hover:scale-105 transition duration-500"
                />
              </button>
            ))}
          </aside>

          {/* Main Image */}
          <section className="order-1 lg:order-2 lg:col-span-7">
            <div className="group aspect-[3.2/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              <img
                src={IMAGES[activeImage]}
                alt="product"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </section>

          {/* Right Sidebar */}
          <section className="order-3 lg:col-span-4 lg:sticky lg:top-8 self-start">
            <RightPanel {...{ size, setSize, qty, setQty }} />
          </section>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 flex flex-col items-center w-full">
          <div className="w-full max-w-4xl">
            <Tabs
              value={tab}
              onChange={setTab}
              items={["Description", "Fabric & Care", "Fit & Size", "Reviews"]}
            />

            {tab === "Description" && <DescriptionBlock />}
            {tab === "Fabric & Care" && <FabricCareBlock />}
            {tab === "Fit & Size" && <FitSizeBlock />}
            {tab === "Reviews" && <ReviewsSection />}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Noir Threads</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
