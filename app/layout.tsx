import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
  description:
    'Fullstack Developer building production systems in Golang, Next.js, and TypeScript. 80% ops automation at MAYFEYR. 37 modules in 14 weeks at ADMA. Open to remote roles.',
  metadataBase: new URL('https://madmasyhur.dev'),
  openGraph: {
    title: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
    description:
      'Fullstack Developer building production systems in Golang, Next.js, and TypeScript. Open to remote full-time roles.',
    url: 'https://madmasyhur.dev',
    siteName: 'Muhammad Bin Djafar Almasyhur',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
    description:
      'Fullstack Developer building production Golang APIs and Next.js applications. Open to remote roles.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Muhammad Bin Djafar Almasyhur' }],
  keywords: [
    'Fullstack Developer',
    'Golang',
    'Next.js',
    'TypeScript',
    'React',
    'Backend Developer',
    'Indonesia',
    'Remote Developer',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F0EEE6] font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
