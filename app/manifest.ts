import type { MetadataRoute } from 'next'
import { personal } from '@/data/portfolio'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.name} — ${personal.role}`,
    short_name: 'MBDA',
    description:
      'Agentic systems, LLM integration, and workflow automation built for production.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F1117',
    theme_color: '#0F1117',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
  }
}
