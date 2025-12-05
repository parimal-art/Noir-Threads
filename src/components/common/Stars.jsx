import React from 'react';
import { Star } from 'lucide-react';
import { cx } from '../../utils/helpers';

export default function Stars({ value }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cx("h-4 w-4", i < full ? 'fill-lime-400 text-lime-400' : 'text-neutral-700')} />
      ))}
    </div>
  );
}