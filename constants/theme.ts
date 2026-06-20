/**
 * Single source of truth for the design system.
 *
 * Palette and scale are intentionally fixed — an "internal dashboard" identity:
 * deep slate canvas, electric-indigo as the one accent, emerald reserved for
 * status/tags. Tailwind mirrors these tokens (tailwind.config.ts) and the CSS
 * custom properties in globals.css are derived from the same values, so colors
 * resolve identically whether referenced from a class, a CSS var, or inline JS.
 */
export const theme = {
  color: {
    bg: '#0F1117', // deep slate canvas (never pure black)
    surface: '#1E2130', // card surface
    surfaceRaised: '#252A3D', // featured / hovered surface (slightly lighter)
    border: '#2D3148',
    borderStrong: '#3A3F5C',
    accent: '#6366F1', // electric indigo
    accentHover: '#4F46E5',
    accentSoft: 'rgba(99, 102, 241, 0.12)', // tinted fills, focus halos
    textPrimary: '#F8F9FA',
    textSecondary: '#94A3B8',
    textMuted: '#5B6478', // captions, de-emphasised meta
    success: '#10B981', // status dot / tags
  },
  font: {
    display: 'var(--font-display)', // Space Grotesk — H1/H2 only
    body: 'var(--font-body)', // Inter — everything else
  },
  radius: {
    component: '8px',
    card: '12px',
  },
  /** 4px base unit. Use these multiples for all rhythm. */
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96] as const,
} as const

export type Theme = typeof theme
