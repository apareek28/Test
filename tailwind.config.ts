import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0C2D6B',
        secondary: '#1A4FAE',
        sky: '#6CAEFF',
        section: '#F4F7FC'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(15, 35, 80, 0.08)',
        header: '0 10px 24px rgba(12, 45, 107, 0.14)'
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0C2D6B 0%, #1A4FAE 55%, #6CAEFF 100%)'
      }
    }
  },
  plugins: []
} satisfies Config;
