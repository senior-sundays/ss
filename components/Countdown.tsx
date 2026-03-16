'use client';

import { useEffect, useState } from 'react';

// NYU Commencement — May 14, 2026
const GRADUATION = new Date('2026-05-14T00:00:00');

function getDaysUntil(target: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getWeekendsUntil(target: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  let count = 0;
  const cursor = new Date(now);
  while (cursor < target) {
    const day = cursor.getDay();
    if (day === 6) count++; // count each Saturday as one weekend
    cursor.setDate(cursor.getDate() + 1);
  }
  return count;
}

export default function Countdown() {
  const [days, setDays]         = useState<number | null>(null);
  const [weekends, setWeekends] = useState<number | null>(null);

  useEffect(() => {
    function update() {
      setDays(getDaysUntil(GRADUATION));
      setWeekends(getWeekendsUntil(GRADUATION));
    }
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
      {/* Days */}
      <div className="text-center">
        <div className="countdown-num text-ss-dark">
          {days === null ? '—' : days}
        </div>
        <div className="countdown-label text-ss-brown mt-1">
          days until graduation
        </div>
      </div>

      {/* Divider */}
      <div
        className="hidden sm:block w-px bg-ss-brown opacity-30"
        style={{ height: '5rem' }}
      />

      {/* Weekends */}
      <div className="text-center">
        <div className="countdown-num text-ss-dark">
          {weekends === null ? '—' : weekends}
        </div>
        <div className="countdown-label text-ss-brown mt-1">
          weekends left in NYC
        </div>
      </div>
    </div>
  );
}
