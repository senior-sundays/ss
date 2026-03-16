'use client';

import Link from 'next/link';
import { EVENTS, getDateEventMap } from '@/lib/events';

// April 1, 2026 is a Wednesday (index 3 in Sun=0 week)
const APRIL_FIRST_DOW = 3;
const APRIL_DAYS      = 30;
const DAY_HEADERS     = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_HEADERS_SM  = ['S',   'M',   'T',   'W',   'T',   'F',   'S'];

export default function Calendar() {
  const dateMap = getDateEventMap();

  // Build cell list: nulls for leading blank days, then 1–30
  const cells: (number | null)[] = [
    ...Array(APRIL_FIRST_DOW).fill(null),
    ...Array.from({ length: APRIL_DAYS }, (_, i) => i + 1),
  ];

  return (
    <div>
      {/* Month label */}
      <p
        className="text-center mb-4 tracking-widest uppercase text-ss-brown opacity-70"
        style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '0.85rem' }}
      >
        April 2026
      </p>

      <div className="calendar-grid">
        {/* Day headers */}
        {DAY_HEADERS.map((d, i) => (
          <div key={d} className="cal-header">
            <span className="hidden sm:inline">{d}</span>
            <span className="sm:hidden">{DAY_HEADERS_SM[i]}</span>
          </div>
        ))}

        {/* Day cells */}
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={`e${idx}`} className="cal-cell cal-cell-empty" />;
          }

          const dateStr = `2026-04-${String(day).padStart(2, '0')}`;
          const slug    = dateMap[dateStr];

          if (!slug) {
            return (
              <div key={day} className="cal-cell cal-cell-plain">
                <span className="cal-day-num">{day}</span>
              </div>
            );
          }

          const event = EVENTS.find((e) => e.slug === slug)!;

          return (
            <Link
              key={day}
              href={`/events/${slug}`}
              className={`cal-cell-event cal-cell-${event.color}`}
              title={event.title}
            >
              <span className="cal-day-num">{day}</span>
              <span className="cal-emoji">{event.emoji}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
