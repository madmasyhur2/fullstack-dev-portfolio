'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

type NavItem = (typeof navLinks)[number]

/* The nav is mounted on the blog routes too, where a bare '#about' points at
   nothing. Off the homepage the in-page links have to carry the route — and
   that makes them navigations, so they go through <Link> instead of a raw
   anchor. On '/' they stay raw anchors, which is what the smooth-scroll and
   scroll-padding rules in globals.css are written against. */
function NavLink({
  link,
  pathname,
  className,
  onClick,
}: {
  link: NavItem
  pathname: string
  className: string
  onClick?: () => void
}) {
  const onHome = pathname === '/'

  if (link.external || !onHome) {
    const href = link.external ? link.href : `/${link.href}`
    const current = link.external && pathname.startsWith(link.href)
    return (
      <Link
        href={href}
        onClick={onClick}
        aria-current={current ? 'page' : undefined}
        className={`${className} ${current ? 'text-text-primary' : ''}`}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <a href={link.href} onClick={onClick} className={className}>
      {link.label}
    </a>
  )
}

export default function Navbar() {
  const reduce = useReducedMotion()
  const pathname = usePathname()
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

  // Rotating a phone into landscape can cross into the desktop layout, which
  // hides the menu via `md:hidden` — without this the scroll lock below would
  // stay applied with no visible control left to release it.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => {
      if (mq.matches) setMobileOpen(false)
    }
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // While the mobile menu is open: lock background scroll and close on Escape.
  // <html> is locked too — globals.css sets overflow-x on it, which stops a
  // body-only overflow from propagating to the viewport.
  useEffect(() => {
    if (!mobileOpen) return
    const root = document.documentElement
    const previousRootOverflow = root.style.overflowY
    const previousBodyOverflow = document.body.style.overflow
    root.style.overflowY = 'hidden'
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      root.style.overflowY = previousRootOverflow
      document.body.style.overflow = previousBodyOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={{ y: reduce ? 0 : -80 }}
      animate={{ y: reduce ? 0 : visible || mobileOpen ? 0 : -80 }}
      transition={{ duration: reduce ? 0 : 0.3, ease: 'easeInOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-border bg-bg/95' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-5 sm:px-6 md:px-10">
        <Link
          href="/"
          aria-label="Home"
          className="-mx-1 inline-flex min-h-[44px] items-center px-1 font-display text-sm font-semibold tracking-tight text-text-primary transition-colors hover:text-accent"
        >
          MBDA<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              link={link}
              pathname={pathname}
              className="inline-flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.resumeUrl}
            download
            aria-label="Download résumé (PDF)"
            className="hidden min-h-[44px] items-center gap-2 rounded-lg border border-border-strong px-3.5 text-xs font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-soft md:inline-flex lg:min-h-[40px]"
          >
            <Download size={14} />
            Résumé
          </a>
          <button
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-text-secondary transition-colors hover:text-text-primary md:hidden"
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
            <div className="mx-auto flex max-w-shell flex-col px-5 py-2 sm:px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  link={link}
                  pathname={pathname}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center text-sm text-text-secondary transition-colors hover:text-text-primary"
                />
              ))}
              <a
                href={personal.resumeUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="mt-2 mb-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-border-strong px-4 text-xs font-medium text-text-primary"
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
