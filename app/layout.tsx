import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'Muhammad Bin Djafar Almasyhur — AI Automation Engineer',
  description:
    'AI Automation Engineer building agentic systems, LLM integration, and workflow automation for production. LangGraph, FastAPI, n8n, and LLM APIs. Open to remote roles.',
  metadataBase: new URL('https://madmasyhur.dev'),
  openGraph: {
    title: 'Muhammad Bin Djafar Almasyhur — AI Automation Engineer',
    description:
      'Agentic systems, LLM integration, and workflow automation built for production. Open to remote AI Automation / Applied AI Engineer roles.',
    url: 'https://madmasyhur.dev',
    siteName: 'Muhammad Bin Djafar Almasyhur',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Bin Djafar Almasyhur — AI Automation Engineer',
    description:
      'Agentic systems, LLM integration, and workflow automation built for production. Open to remote roles.',
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Muhammad Bin Djafar Almasyhur' }],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-bg text-text-primary font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
