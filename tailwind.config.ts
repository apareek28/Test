import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070B14',
        panel: '#0E1526',
        line: '#1F2A44',
        accent: '#60A5FA',
        accentSecondary: '#8B5CF6'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(96, 165, 250, 0.28), 0 22px 42px rgba(96, 165, 250, 0.22)',
        panel: '0 18px 42px rgba(4, 8, 18, 0.45)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        gradient: 'linear-gradient(120deg, rgba(96,165,250,0.18), rgba(139,92,246,0.16))'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
