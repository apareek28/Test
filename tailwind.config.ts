import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#333333',
        accent: '#F5C542'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(245, 197, 66, 0.3), 0 0 24px rgba(245, 197, 66, 0.35)'
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config;
