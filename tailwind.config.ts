import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07111f',
        panel: '#0b1c2d',
        accent: '#20d3ff',
        accentSoft: '#1aa7cc'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(32, 211, 255, 0.35), 0 0 26px rgba(32, 211, 255, 0.28)',
        card: '0 10px 30px rgba(3, 9, 19, 0.4)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(144,165,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(144,165,184,0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config;
