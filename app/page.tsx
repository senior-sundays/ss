import Link from 'next/link';
import dynamic from 'next/dynamic';
import { EVENTS } from '@/lib/events';

const Countdown = dynamic(() => import('@/components/Countdown'), { ssr: false });
const Calendar  = dynamic(() => import('@/components/Calendar'),  { ssr: false });

/* ── Marquee strip text ──────────────────────────────────────── */
const MARQUEE_ITEMS = [
  '🐣 Leeaster',
  '🏓 Pickleball',
  '🍽️ Friend of a Friend Dinner',
  '🖍️ Chalk in WSP',
  '🌙 Queens Night Market',
  '🎓 Class of 2026',
  '🗽 Last Month in NYC',
];
const marqueeText = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].join('   ·   ');

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: '#FFFBF0' }}>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-6 pt-16 pb-0"
        style={{
          background: 'linear-gradient(160deg, #FFD000 0%, #FF8800 55%, #FF5500 100%)',
        }}
      >
        {/* Big decorative text behind */}
        <p
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-10 text-white leading-none text-center"
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 900,
            fontSize: 'clamp(8rem, 28vw, 20rem)',
            overflow: 'hidden',
          }}
          aria-hidden
        >
          SS
        </p>

        <div className="relative text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="inline-block bg-white bg-opacity-30 rounded-full px-4 py-1 mb-6 text-white tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-lora)', fontSize: '0.75rem', fontWeight: 600, fontStyle: 'italic' }}
          >
            April 2026 · New York City
          </p>

          {/* Main title */}
          <h1
            className="text-white leading-none mb-4"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 14vw, 9rem)',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 30px rgba(0,0,0,0.15)',
            }}
          >
            Senior
            <br />
            Sundays
          </h1>

          {/* Subtitle */}
          <p
            className="text-white opacity-90 mb-10"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontStyle: 'italic',
            }}
          >
            Our Last Month in New York
          </p>
        </div>

        {/* Wave bottom */}
        <div className="relative" style={{ marginBottom: '-2px' }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L60 68C120 56 240 32 360 26.7C480 21 600 35 720 42.7C840 51 960 53 1080 48C1200 43 1320 32 1380 26.7L1440 21V80H0Z"
              fill="#FFFBF0"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════════════════ */}
      <div
        className="overflow-hidden py-3 border-y border-ss-yellow"
        style={{ background: '#FFD000' }}
      >
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="whitespace-nowrap pr-8"
              style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#1A0700',
              }}
            >
              {MARQUEE_ITEMS.map((item, j) => (
                <span key={j}>
                  {item}
                  <span className="mx-4 opacity-50">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          COUNTDOWN
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="mb-2 tracking-widest uppercase text-ss-brown opacity-60"
            style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 600, fontSize: '0.75rem' }}
          >
            🎓 NYU Commencement · May 14, 2026
          </p>
          <Countdown />
          <p
            className="mt-5 text-ss-brown opacity-50"
            style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.9rem' }}
          >
            Make every one count.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CALENDAR
      ══════════════════════════════════════════════════════ */}
      <section className="py-10 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center mb-8"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: '#1A0700',
              letterSpacing: '-0.02em',
            }}
          >
            The Month
          </h2>

          <div
            className="rounded-3xl p-4 sm:p-8 shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%)',
              border: '2px solid #FFD000',
            }}
          >
            <Calendar />
          </div>

          <p
            className="text-center mt-4 text-ss-brown opacity-50"
            style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: '0.85rem' }}
          >
            Tap a highlighted date to RSVP
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          EVENTS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-10"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              color: '#1A0700',
              letterSpacing: '-0.02em',
            }}
          >
            All Events
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((event, i) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="event-card group block rounded-2xl overflow-hidden no-underline"
                style={{
                  background: event.color === 'yellow'
                    ? 'linear-gradient(145deg, #FFD000 0%, #FFAA00 100%)'
                    : 'linear-gradient(145deg, #FF6600 0%, #FF4400 100%)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <div className="p-6">
                  {/* Emoji */}
                  <div className="text-4xl mb-3">{event.emoji}</div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 800,
                      fontSize: '1.35rem',
                      letterSpacing: '-0.01em',
                      color: event.color === 'yellow' ? '#1A0700' : '#fff',
                      lineHeight: 1.2,
                    }}
                  >
                    {event.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="mt-1 mb-3"
                    style={{
                      fontFamily: 'var(--font-lora)',
                      fontStyle: 'italic',
                      fontSize: '0.9rem',
                      color: event.color === 'yellow' ? '#7C4200' : 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {event.tagline}
                  </p>

                  {/* Dates */}
                  <div className="space-y-0.5 mb-4">
                    {event.displayDates.map((d) => (
                      <p
                        key={d}
                        style={{
                          fontFamily: 'var(--font-fraunces)',
                          fontWeight: 600,
                          fontSize: '0.78rem',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: event.color === 'yellow' ? '#5D2D00' : 'rgba(255,255,255,0.7)',
                        }}
                      >
                        {d}
                      </p>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5"
                    style={{
                      background: event.color === 'yellow' ? 'rgba(26,7,0,0.12)' : 'rgba(255,255,255,0.2)',
                      fontFamily: 'var(--font-fraunces)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: '0.04em',
                      color: event.color === 'yellow' ? '#1A0700' : '#fff',
                    }}
                  >
                    Details & RSVP
                    <span
                      className="transition-transform group-hover:translate-x-0.5"
                      style={{ display: 'inline-block' }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer
        className="py-8 px-6 text-center"
        style={{
          background: '#1A0700',
          color: 'rgba(255,255,255,0.45)',
          fontFamily: 'var(--font-lora)',
          fontStyle: 'italic',
          fontSize: '0.85rem',
        }}
      >
        Senior Sundays · April 2026 · New York City ·{' '}
        <span style={{ color: '#FFD000' }}>Class of 2026 🎓</span>
      </footer>
    </main>
  );
}
