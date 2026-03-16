import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ss-yellow':  '#FFD000',
        'ss-yellow-light': '#FFE566',
        'ss-yellow-pale': '#FFF9DC',
        'ss-orange':  '#FF6600',
        'ss-orange-light': '#FF8F3C',
        'ss-orange-pale': '#FFF0E0',
        'ss-cream':   '#FFFBF0',
        'ss-dark':    '#1A0700',
        'ss-brown':   '#7C4200',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-lora)',     'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
