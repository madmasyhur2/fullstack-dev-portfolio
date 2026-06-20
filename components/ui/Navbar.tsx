'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { personal } from '@/data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog', external: true },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y < 20) setVisible(true)
      else if (y > lastScrollY.current + 5) {
        setVisible(false)
        setMobileOpen(false)
      } else if (y < lastScrollY.current - 5) setVisible(true)
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: reduce ? 0 : -80 }}
      animate={{ y: reduce ? 0 : visible ? 0 : -80 }}
      transition={{ duration: reduce ? 0 : 0.3, ease: 'easeInOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/95' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          aria-label="Home"
          className="font-display text-sm font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
        >
          MBDA<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            download
            aria-label="Download résumé (PDF)"
            className="hidden min-h-[40px] items-center gap-2 rounded-lg border border-border-strong px-3.5 text-xs font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-soft md:inline-flex"
          >
            <Download size={14} />
            Résumé
          </a>
          <button
            className="-mr-1 p-2 text-text-secondary transition-colors hover:text-text-primary md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduce ? 0 : 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-border bg-bg md:hidden"
          >
            <div className="mx-auto flex max-w-shell flex-col px-6 py-2">
              {navLinks.map((link) =>
                link.external ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href={personal.resumeUrl}
                download
                className="mt-2 mb-3 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-lg border border-border-strong px-4 text-xs font-medium text-text-primary"
              >
                <Download size={14} />
                Download résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
