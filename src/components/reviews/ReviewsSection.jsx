import React, { useState, useMemo } from 'react';
import { cx } from '../../utils/helpers';
import { ACCENT, RATING_BUCKETS } from '../../constants/theme';
import { ALL_REVIEWS } from '../../data/mockData';
import Stars from '../common/Stars';
import { ChevronDown, Star } from 'lucide-react';

/* ------------------------ Select Menu ------------------------ */
function SelectMenu({ label, onChange }) {
  const [open, setOpen] = useState(false);
  const options = [
    { key: 'recent', label: 'Most Recent' },
    { key: 'high', label: 'Highest Rated' },
    { key: 'low', label: 'Lowest Rated' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center justify-between gap-3 rounded-full border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5 min-w-[9rem] text-neutral-200"
      >
        {label} <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-44 rounded-lg border border-white/10 bg-black/90 backdrop-blur shadow">
          {options.map(o => (
            <button
              key={o.key}
              className="block w-full text-left px-3 py-2 hover:bg-white/5 text-sm text-neutral-200"
              onClick={() => {
                onChange(o.key);
                setOpen(false);
              }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------ Summary Box ------------------------ */
function ReviewSummary({ reviews }) {
  const avg = useMemo(() => {
    const sum = reviews.reduce((a, r) => a + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <div className="rounded-3xl border border-white/10 p-8 text-center bg-white/[0.03]">
      <div className="mx-auto inline-flex items-center gap-5 rounded-2xl border border-white/10 px-6 py-4 bg-white/[0.04]">
        <Stars value={Number(avg)} />
        <div className="text-4xl font-semibold">{avg}</div>
        <div className="text-sm text-neutral-400">
          <div>REVIEWS</div>
          <div className="text-base text-white font-medium">{reviews.length}</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------ Rating Chart ------------------------ */
function AnalyticsBars({ reviews, onPick, active, open, setOpen }) {
  const counts = useMemo(() => {
    const obj = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(r => (obj[Math.round(r.rating)] += 1));
    return obj;
  }, [reviews]);

  const total = reviews.length;
  const avg = useMemo(() => {
    const sum = reviews.reduce((a, r) => a + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] h-[550px] md:h-[420px] overflow-hidden">

      {/* Compact View */}
      <div className={cx(
        "absolute inset-0 p-6 transition-opacity duration-300 flex flex-col justify-center",
        open ? "opacity-0 pointer-events-none" : "opacity-100"
      )}>
        <div className="w-full flex justify-center mb-6">
          <button
            onClick={() => setOpen(true)}
            className={cx("rounded-lg border px-4 py-1.5 text-sm", ACCENT.border, ACCENT.softBg, ACCENT.text)}
          >
            Detailed Analytics
          </button>
        </div>

        <div className="space-y-3">
          {RATING_BUCKETS.map(star => {
            const count = counts[star];
            const pct = Math.round((count / total) * 100);
            const isActive = active === star;

            return (
              <button
                key={star}
                onClick={() => onPick(star)}
                className={cx(
                  "flex w-full items-center gap-3 text-left rounded-md transition",
                  isActive ? `ring-2 ${ACCENT.ring}` : "hover:bg-white/5"
                )}
              >
                <div className={cx("min-w-[88px] flex items-center gap-1", ACCENT.text)}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < star ? "fill-current" : "text-neutral-700"}`} />
                  ))}
                </div>

                <div className="flex-1 h-3.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-lime-400" style={{ width: `${pct}%` }} />
                </div>

                <div className="w-12 text-right text-sm">{count}</div>
                <div className="w-10 text-neutral-400 text-sm">{pct}%</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detailed Overlay */}
      <div className={cx(
        "absolute inset-0 p-6 backdrop-blur-sm bg-black/70 flex flex-col transition-opacity duration-300",
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-sm text-neutral-400">Average Rating</div>
            <div className="flex items-center gap-3 mt-1">
              <Stars value={Number(avg)} />
              <div className="text-3xl font-semibold">{avg}</div>
            </div>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4">

          {RATING_BUCKETS.map(star => {
            const count = counts[star];
            const pct = Math.round((count / total) * 100);

            return (
              <div key={star} className="rounded-xl border border-white/10 p-3">
                <div className="flex items-center gap-2 mb-2">
                  {Array.from({ length: star }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-lime-400 text-lime-400" />
                  ))}
                  <span className="text-sm text-neutral-400">{star} star</span>
                </div>

                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-lime-400" style={{ width: `${pct}%` }} />
                </div>

                <div className="mt-1 text-xs text-neutral-400">
                  {count} reviews • {pct}%
                </div>
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="sm:hidden mt-6 flex justify-center pb-4">
            <button className={cx("rounded-xl px-4 py-2 font-medium shadow-lg", ACCENT.bg)}>
              Add your review
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex sm:col-start-2 sm:row-start-3 items-center justify-center">
            <button className={cx("rounded-xl px-4 py-2 font-medium shadow-lg", ACCENT.bg)}>
              Add your review
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ------------------------ Review Card ------------------------ */
function ReviewCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const [helpful, setHelpful] = useState(data.helpful);

  return (
    <article className="rounded-3xl border border-white/10 p-5 bg-white/[0.03] hover:bg-white/[0.05] transition">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className={cx("h-10 w-10 rounded-full grid place-items-center font-semibold", ACCENT.softBg, ACCENT.text)}>
            {data.name[0]}
          </div>

          <div>
            <div className="font-medium">{data.name}</div>
            <div className={cx("flex items-center gap-2", ACCENT.text)}>
              <Stars value={data.rating} />
              <span className="text-sm font-semibold">{data.rating.toFixed(1)}</span>
              {data.verified && (
                <span className="ml-1 rounded-full border border-lime-400/40 bg-lime-400/10 px-2 py-0.5 text-[11px] text-lime-200">
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="text-xs text-neutral-500">{data.when}</div>
      </div>

      <div className="mt-3 font-medium">{data.title}</div>

      <p className={`mt-2 text-sm text-neutral-300 ${expanded ? "" : "line-clamp-3"}`}>
        {data.body}
      </p>

      <div className="mt-4 flex justify-between text-xs text-neutral-400">
        <button onClick={() => setExpanded(e => !e)} className={ACCENT.text}>
          {expanded ? "Show less" : "Read more"}
        </button>

        <button
          onClick={() => setHelpful(h => h + 1)}
          className="flex items-center gap-2 hover:text-neutral-200"
        >
          <span className="rounded-full bg-white/5 border border-white/10 px-2 py-1">
            {helpful}
          </span>
          Helpful
        </button>
      </div>
    </article>
  );
}

/* ------------------------ Main Export ------------------------ */
export default function ReviewsSection() {
  const [page, setPage] = useState(1);
  const [filterTag, setFilterTag] = useState("all");
  const [ratingOnly, setRatingOnly] = useState(null);
  const [sort, setSort] = useState("recent");
  const [analyticsOpen, setAnalyticsOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...ALL_REVIEWS];

    if (filterTag === "excellent") list = list.filter(r => r.rating >= 4.5);
    if (filterTag === "great") list = list.filter(r => r.rating >= 4 && r.rating < 4.5);
    if (filterTag === "verified") list = list.filter(r => r.verified);
    if (ratingOnly) list = list.filter(r => Math.round(r.rating) === ratingOnly);

    if (sort === "high") list.sort((a, b) => b.rating - a.rating);
    else if (sort === "low") list.sort((a, b) => a.rating - b.rating);
    else list.sort((a, b) => a.id - b.id);

    return list;
  }, [filterTag, ratingOnly, sort]);

  // Always show list view only → perPage = 3
  const perPage = 3;
  const pageCount = Math.ceil(filtered.length / perPage);
  const pageItems = filtered.slice((page - 1) * perPage, (page - 1) * perPage + perPage);

  function sortLabel(s) {
    return s === "high" ? "Highest Rated" : s === "low" ? "Lowest Rated" : "Most Recent";
  }

  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold">Customer Reviews</h2>

      <ReviewSummary reviews={ALL_REVIEWS} />

      <AnalyticsBars
        reviews={ALL_REVIEWS}
        onPick={setRatingOnly}
        active={ratingOnly}
        open={analyticsOpen}
        setOpen={setAnalyticsOpen}
      />

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <SelectMenu label={sortLabel(sort)} onChange={setSort} />

        {[{ k: "all", label: "Show All" },
          { k: "excellent", label: "Excellent" },
          { k: "great", label: "Great" },
          { k: "verified", label: "Verified" }]
          .map(f => (
            <button
              key={f.k}
              onClick={() => {
                setFilterTag(f.k);
                setRatingOnly(null);
              }}
              className={cx(
                "rounded-full border px-3 py-1.5 text-sm",
                filterTag === f.k
                  ? "bg-lime-400 text-black border-lime-400 shadow-sm"
                  : "hover:bg-white/5 border-white/10 text-neutral-200"
              )}
            >
              {f.label}
            </button>
          ))}
      </div>

      <div className="text-sm text-neutral-400">
        Showing {(page - 1) * perPage + 1}-{Math.min(page * perPage, filtered.length)} of {filtered.length} reviews
      </div>

      {/* Always List View */}
      <div className="space-y-6">
        {pageItems.map(r => (
          <ReviewCard key={r.id} data={r} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5"
        >
          Previous
        </button>

        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={cx(
              "h-9 w-9 rounded-md border border-white/10",
              page === i + 1
                ? "bg-lime-400 text-black border-lime-400"
                : "hover:bg-white/5 text-neutral-200"
            )}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setPage(Math.min(pageCount, page + 1))}
          className="rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5"
        >
          Next
        </button>
      </div>
    </section>
  );
}
