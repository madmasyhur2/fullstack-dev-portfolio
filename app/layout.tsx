import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { personal, about, stack } from '@/data/portfolio'
import { SITE_URL, jsonLd } from '@/lib/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const TITLE = `${personal.name} — ${personal.role}`

// Kept under 155 characters so search results show it without truncation.
const DESCRIPTION =
  'AI Automation Engineer building agentic systems, LLM integration, and workflow automation for production. LangGraph, FastAPI, n8n. Open to remote roles.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    // Absolute, with the trailing slash, so it matches the served URL byte for
    // byte — a bare origin would render without one.
    canonical: `${SITE_URL}/`,
    types: { 'text/plain': [{ url: '/llms.txt', title: 'LLMs.txt' }] },
  },
  openGraph: {
    title: TITLE,
    description:
      'Agentic systems, LLM integration, and workflow automation built for production. Open to remote AI Automation / Applied AI Engineer roles.',
    url: `${SITE_URL}/`,
    siteName: personal.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      'Agentic systems, LLM integration, and workflow automation built for production. Open to remote roles.',
  },
  // max-snippet/max-image-preview let search and answer engines quote the page
  // at full length instead of the ~160-char default. These belong on the
  // generic `robots` tag, not just `googlebot` — Bing and the AI crawlers only
  // read the generic one.
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  authors: [{ name: personal.name, url: SITE_URL }],
  creator: personal.name,
  publisher: personal.name,
  keywords: [
    'AI Automation Engineer',
    'Agentic Systems',
    'LangGraph',
    'LLM Integration',
    'FastAPI',
    'n8n',
    'Workflow Automation',
    'Applied AI Engineer',
    'Remote',
  ],
}

/*
 * Site-wide JSON-LD, emitted as a single @graph so the Person, WebSite and
 * ProfilePage nodes can cross-reference each other by @id.
 *
 * Person — not Organization — is the accurate root entity here: this is one
 * person's portfolio, not a company. Organization would require inventing a
 * legal entity and a postal address that do not exist.
 */
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: personal.name,
      alternateName: personal.shortName,
      url: `${SITE_URL}/`,
      email: `mailto:${personal.email}`,
      jobTitle: personal.role,
      description: about.lead,
      knowsLanguage: ['en', 'id'],
      knowsAbout: [
        'AI Automation',
        'Agentic Systems',
        'LLM Integration',
        'Prompt Engineering',
        'Workflow Automation',
        ...stack.map((s) => s.name),
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Brawijaya University',
      },
      sameAs: [personal.github, personal.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: personal.name,
      description: DESCRIPTION,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(STRUCTURED_DATA)}
        />
      </head>
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
        {/* The page renders server-side, but the nav is a client component —
            this keeps every route reachable if its JS never executes. */}
        <noscript>
          <nav aria-label="Site links">
            <a href="/">Home</a> · <a href="/#about">About</a> ·{' '}
            <a href="/#projects">Projects</a> · <a href="/#experience">Experience</a> ·{' '}
            <a href="/blog">Blog</a> · <a href="/#contact">Contact</a>
          </nav>
        </noscript>
        <Analytics />
      </body>
    </html>
  )
}
