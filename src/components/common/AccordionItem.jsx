import React from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "../../utils/helpers";

export default function AccordionItem({ title, children, open, onToggle }) {
  return (
    <div className={cx("bg-white/[0.02]", open && "bg-white/[0.03]")}>
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-4 py-3 font-medium text-left"
        aria-expanded={open}
        aria-controls={`panel-${title}`}
      >
        <span>{title}</span>
        <ChevronDown
          className={cx(
            "h-5 w-5 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Content - bullet-leak proof */}
      <div
        id={`panel-${title}`}
        className={cx(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[60rem] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!open}
      >
        {/* Remove default top margins that can peek */}
        <div className="px-4 pb-4 [&>*:first-child]:mt-0 [&>*]:mt-0">
          {children}
        </div>
      </div>
    </div>
  );
}
