import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A142F',
        navy: '#0F1E4D',
        primary: '#1C3FAA',
        accent: '#6C7CFF',
        mist: '#F4F7FC',
        border: '#DCE4F3'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 30, 77, 0.08)',
        hover: '0 16px 48px rgba(15, 30, 77, 0.14)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 15% 15%, rgba(108,124,255,.28), transparent 36%), radial-gradient(circle at 85% 5%, rgba(28,63,170,.2), transparent 34%)'
      }
    }
  },
  plugins: []
} satisfies Config;
