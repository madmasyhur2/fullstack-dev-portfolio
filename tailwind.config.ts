import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F1117',
        surface: '#1E2130',
        'surface-raised': '#252A3D',
        border: '#2D3148',
        'border-strong': '#3A3F5C',
        accent: '#6366F1',
        'accent-hover': '#4F46E5',
        'text-primary': '#F8F9FA',
        'text-secondary': '#94A3B8',
        'text-muted': '#5B6478',
        success: '#10B981',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        // spec: 8px components, 12px cards
        DEFAULT: '8px',
        lg: '8px',
        xl: '12px',
        card: '12px',
      },
      maxWidth: {
        shell: '72rem', // 1152px page shell
        prose: '38rem', // bio reading column
      },
      boxShadow: {
        // subtle card-hover lift (spec: "subtle shadow only")
        card: '0 1px 2px rgba(0,0,0,0.3)',
        'card-hover':
          '0 10px 30px -12px rgba(99,102,241,0.25), 0 4px 12px -6px rgba(0,0,0,0.5)',
      },
      keyframes: {
        // node-graph signature (CSS-only, hero background)
        'edge-flow': {
          to: { strokeDashoffset: '-24' },
        },
        'node-pulse': {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'edge-flow': 'edge-flow 3.2s linear infinite',
        'node-pulse': 'node-pulse 3.6s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
