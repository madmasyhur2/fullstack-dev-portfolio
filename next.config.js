/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

/*
 * Content-Security-Policy.
 *
 * 'unsafe-inline' for scripts is unavoidable without a nonce-issuing
 * middleware: Next.js inlines its bootstrap and flight-data scripts. Adding
 * middleware purely for a nonce would put every static page behind the edge
 * runtime, which is a real cost for a site that is 100% prerendered — so the
 * trade is deliberate rather than accidental.
 *
 * 'unsafe-eval' is dev-only (Turbopack's HMR needs it); production drops it.
 * Styles need 'unsafe-inline' because Tailwind's critical CSS and Framer
 * Motion both write inline style attributes.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''} https://va.vercel-scripts.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

module.exports = nextConfig
