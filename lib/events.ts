export interface CalendarEvent {
  slug: string;
  title: string;
  dates: string[];
  displayDates: string[];
  emoji: string;
  tagline: string;
  description: string;
  location?: string;
  partifulUrls?: string[];
  color: 'yellow' | 'orange';
}

export const EVENTS: CalendarEvent[] = [
  {
    slug: 'leeaster',
    title: 'Leeaster',
    dates: ['2026-04-05'],
    displayDates: ['Sunday, April 5'],
    emoji: '🐣',
    tagline: 'Easter.',
    description: "Leeaster on Christopher's Terrace. Dinner Provided!",
    color: 'yellow',
    partifulUrls: ['https://partiful.com/e/4nZ8DPHNubrGqBgtIrFp'],
  },
  {
    slug: 'pickleball',
    title: 'Pickleball Tuesdays',
    dates: ['2026-04-07', '2026-04-14', '2026-04-21', '2026-04-28'],
    displayDates: [
      'Tuesday, April 7',
      'Tuesday, April 14',
      'Tuesday, April 21',
      'Tuesday, April 28',
    ],
    emoji: '🏓',
    tagline: 'Every Tuesday this April.',
    description:
      'Four Tuesdays. Four chances to dink, drive, and destroy. Weekly pickleball all month long. Beginners welcome, competition mandatory. BYOP (that means bring your own paddle)',
    color: 'orange',
    partifulUrls: [
      'https://partiful.com/e/C3YxktZ0VHQntYe3CxwF',
      'https://partiful.com/e/usbYoUj7o2248jRkPr3w',
      'https://partiful.com/e/sAHnGaQId4iBqPhI2lq9',
      'https://partiful.com/e/7pKxIdjDf49h5iwanjaI',
    ],
  },
  {
    slug: 'friend-of-a-friend-dinner',
    title: 'Friend of a Friend Dinner',
    dates: ['2026-04-12'],
    displayDates: ['Sunday, April 12'],
    emoji: '🍽️',
    tagline: 'Expand the circle.',
    description:
      "Bring one friend your crew hasn't met. Leave knowing everyone. A dinner designed to blur the lines between your circles in our last month in New York. Details TBD.",
    color: 'yellow',
  },
  {
    slug: 'chalk-in-wsp',
    title: 'Chalk in WSP',
    dates: ['2026-04-16'],
    displayDates: ['Thursday, April 16'],
    emoji: '🖍️',
    tagline: "Taking on Felix Morello's spots.",
    description:
      "Felix Morello has had his spots long enough. If you\'re drawing spots, they better be positive! Come draw and leave your mark on the city.",
    location: 'Washington Square Park, New York',
    color: 'orange',
  },
  {
    slug: 'queens-night-market',
    title: 'Queens Night Market',
    dates: ['2026-04-19'],
    displayDates: ['Sunday, April 19'],
    emoji: '🌙',
    tagline: 'First night of the season.',
    description:
      "The Queens Night Market opens for 2026 and we're going opening night. Every cuisine on the planet, a borough full of energy, and our whole crew. One of the best nights New York has to offer.",
    location: 'Flushing Meadows Corona Park, Queens',
    color: 'yellow',
    partifulUrls: ['https://partiful.com/e/QUUhcYesxHVSRQZi0Ytz'],
  },
];

export function getEventBySlug(slug: string): CalendarEvent | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

export function getDateEventMap(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const event of EVENTS) {
    for (const date of event.dates) {
      map[date] = event.slug;
    }
  }
  return map;
}
