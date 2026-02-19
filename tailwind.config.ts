import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C9B6FF',
        sky: '#BFDFFF',
        cloud: '#FAFAFC',
        blush: '#FFD7C6',
        mint: '#D9F6E6',
        offwhite: '#F8F9FC',
        accent: '#C9B6FF',
        bg: '#F8F9FC'
      },
      boxShadow: {
        soft: '0 14px 60px rgba(159, 161, 204, 0.16)',
        glow: '0 0 0 1px rgba(201, 182, 255, 0.34), 0 20px 80px rgba(191, 223, 255, 0.48)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 10%, rgba(201, 182, 255, 0.44), transparent 35%), radial-gradient(circle at 80% 10%, rgba(191, 223, 255, 0.4), transparent 36%), radial-gradient(circle at 50% 85%, rgba(255, 215, 198, 0.42), transparent 38%)',
        aurora: 'linear-gradient(118deg, rgba(201, 182, 255, 0.9), rgba(191, 223, 255, 0.86), rgba(255, 215, 198, 0.82))'
      }
    }
  },
  plugins: []
} satisfies Config;
