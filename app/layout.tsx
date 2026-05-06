import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
  description:
    'Fullstack Developer specializing in Golang, Next.js, and TypeScript. Building scalable web systems. Open to remote opportunities.',
  metadataBase: new URL('https://madmasyhur.dev'),
  openGraph: {
    title: 'Muhammad Bin Djafar Almasyhur — Fullstack Developer',
    description:
      'Fullstack Developer specializing in Golang, Next.js, and TypeScript. Building scalable web systems. Open to remote opportunities.',
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
      'Fullstack Developer specializing in Golang, Next.js, and TypeScript. Building scalable web systems.',
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F0EEE6] font-dm antialiased">
        {children}
      </body>
    </html>
  )
}
