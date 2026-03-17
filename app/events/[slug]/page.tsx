import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getEventBySlug, EVENTS } from '@/lib/events';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return { title: 'Senior Sundays' };
  return {
    title: `${event.title} — Senior Sundays`,
    description: event.tagline,
  };
}

export default function EventPage({ params }: Props) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const isYellow = event.color === 'yellow';

  const headerGradient = isYellow
    ? 'linear-gradient(160deg, #FFD000 0%, #FFAA00 60%, #FF8800 100%)'
    : 'linear-gradient(160deg, #FF8800 0%, #FF6600 50%, #FF3300 100%)';

  const textColor = isYellow ? '#1A0700' : '#fff';
  const mutedColor = isYellow ? '#7C4200' : 'rgba(255,255,255,0.75)';

  // Navigate to prev/next event
  const currentIndex = EVENTS.findIndex((e) => e.slug === event.slug);
  const prevEvent    = EVENTS[currentIndex - 1] ?? null;
  const nextEvent    = EVENTS[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen" style={{ background: '#FFFBF0' }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative px-6 pt-12 pb-0 overflow-hidden"
        style={{ background: headerGradient }}
      >
        {/* Back link */}
        <div className="relative max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-2 no-underline"
            style={{
              background: 'rgba(255,255,255,0.25)',
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 600,
              fontSize: '0.85rem',
              color: textColor,
              letterSpacing: '0.03em',
            }}
          >
            ← All Events
          </Link>

          {/* Emoji */}
          <div style={{ fontSize: 'clamp(3.5rem, 12vw, 6rem)', lineHeight: 1 }}>
            {event.emoji}
          </div>

          {/* Title */}
          <h1
            className="mt-3 mb-2 leading-none"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 10vw, 6rem)',
              letterSpacing: '-0.03em',
              color: textColor,
            }}
          >
            {event.title}
          </h1>

          {/* Tagline */}
          <p
            className="mb-8"
            style={{
              fontFamily: 'var(--font-lora)',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 3vw, 1.4rem)',
              color: mutedColor,
            }}
          >
            {event.tagline}
          </p>
        </div>

        {/* Wave */}
        <div style={{ marginBottom: '-2px' }}>
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path
              d="M0 80L60 68C120 56 240 32 360 26.7C480 21 600 35 720 42.7C840 51 960 53 1080 48C1200 43 1320 32 1380 26.7L1440 21V80H0Z"
              fill="#FFFBF0"
            />
          </svg>
        </div>
      </section>

      {/* ── Details ──────────────────────────────────────────── */}
      <section className="px-6 py-12 max-w-2xl mx-auto">

        {/* Date(s) */}
        <div className="mb-8 space-y-1">
          {event.displayDates.map((d) => (
            <div
              key={d}
              className="inline-flex mr-3 items-center gap-2 rounded-full px-5 py-2"
              style={{
                background: isYellow ? '#FFD000' : '#FF6600',
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 700,
                fontSize: '0.9rem',
                color: isYellow ? '#1A0700' : '#fff',
                letterSpacing: '0.03em',
              }}
            >
              📅 {d}
            </div>
          ))}
        </div>

        {/* Location badge */}
        {event.location && (
          <div
            className="inline-flex items-center gap-2 mb-8 rounded-full px-4 py-1.5"
            style={{
              background: '#fff3cc',
              border: '1.5px solid #FFD000',
              fontFamily: 'var(--font-lora)',
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: '#7C4200',
            }}
          >
            📍 {event.location}
          </div>
        )}

        {/* Description */}
        <div
          className="rounded-3xl p-8 mb-10"
          style={{
            background: isYellow
              ? 'linear-gradient(135deg, #fff9e6 0%, #fff3cc 100%)'
              : 'linear-gradient(135deg, #fff3e0 0%, #ffe0c0 100%)',
            border: `2px solid ${isYellow ? '#FFD000' : '#FF8800'}`,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: '#1A0700',
            }}
          >
            {event.description}
          </p>
        </div>

        {/* ── RSVP / Partiful ────────────────────────────────── */}
        <div>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-fraunces)',
              fontWeight: 800,
              fontSize: '1.8rem',
              letterSpacing: '-0.02em',
              color: '#1A0700',
            }}
          >
            RSVP
          </h2>

          {event.partifulUrl ? (
  
    href={event.partifulUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 no-underline"
    style={{
      background: isYellow ? '#FFD000' : '#FF6600',
      fontFamily: 'var(--font-fraunces)',
      fontWeight: 800,
      fontSize: '1.2rem',
      color: isYellow ? '#1A0700' : '#fff',
      letterSpacing: '-0.01em',
    }}
  >
    🎟️ RSVP on Partiful →
  </a>
) : (
            /* Placeholder — fill in partifulUrl in lib/events.ts */
            <div
              className="rounded-2xl p-8 text-center"
              style={{
                background: '#fff',
                border: '2px dashed #FFD000',
              }}
            >
              <p style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🎟️</p>
              <p
                style={{
                  fontFamily: 'var(--font-fraunces)',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: '#1A0700',
                  marginBottom: '8px',
                }}
              >
                Partiful RSVP coming soon
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontStyle: 'italic',
                  fontSize: '0.9rem',
                  color: '#7C4200',
                  marginBottom: '20px',
                }}
              >
                Add the Partiful link in <code>lib/events.ts</code> to enable the embed.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Event Navigation ─────────────────────────────────── */}
      <section className="px-6 pb-16 max-w-2xl mx-auto">
        <div className="flex gap-4 justify-between mt-4">
          {prevEvent ? (
            <Link
              href={`/events/${prevEvent.slug}`}
              className="event-nav-card flex-1 rounded-2xl p-5 no-underline"
              style={{
                background: prevEvent.color === 'yellow'
                  ? 'linear-gradient(135deg, #FFD000, #FFAA00)'
                  : 'linear-gradient(135deg, #FF6600, #FF4400)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.75rem', color: prevEvent.color === 'yellow' ? '#7C4200' : 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                ← Previous
              </p>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: '1.1rem', color: prevEvent.color === 'yellow' ? '#1A0700' : '#fff', marginTop: '4px' }}>
                {prevEvent.emoji} {prevEvent.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}

          {nextEvent ? (
            <Link
              href={`/events/${nextEvent.slug}`}
              className="event-nav-card flex-1 rounded-2xl p-5 no-underline text-right"
              style={{
                background: nextEvent.color === 'yellow'
                  ? 'linear-gradient(135deg, #FFD000, #FFAA00)'
                  : 'linear-gradient(135deg, #FF6600, #FF4400)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.75rem', color: nextEvent.color === 'yellow' ? '#7C4200' : 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Next →
              </p>
              <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 800, fontSize: '1.1rem', color: nextEvent.color === 'yellow' ? '#1A0700' : '#fff', marginTop: '4px' }}>
                {nextEvent.emoji} {nextEvent.title}
              </p>
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-6 px-6 text-center"
        style={{
          background: '#1A0700',
          color: 'rgba(255,255,255,0.4)',
          fontFamily: 'var(--font-lora)',
          fontStyle: 'italic',
          fontSize: '0.85rem',
        }}
      >
        <Link href="/" style={{ color: '#FFD000', textDecoration: 'none' }}>
          ← Senior Sundays
        </Link>
        {' · '} April 2026 · NYC
      </footer>
    </main>
  );
}
