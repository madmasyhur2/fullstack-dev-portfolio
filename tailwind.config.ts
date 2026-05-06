import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1A1A1A',
        'accent': '#E8FF57',
        'accent-dim': '#B8CC3A',
        'text-primary': '#F0EEE6',
        'text-secondary': '#8A887F',
        'text-tertiary': '#4A4844',
        'border-color': '#222220',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        '5xl': '64rem',
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'pulse-accent': 'pulse-accent 2s ease-in-out infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-accent': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
export default config
