'use client'

import { personal } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#222220] py-6" aria-label="Footer">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[#4A4844] text-xs font-mono">
          © {year} {personal.name}
        </p>
        <p className="text-[#4A4844] text-xs font-mono">
          Built with Next.js + TailwindCSS
        </p>
      </div>
    </footer>
  )
}
