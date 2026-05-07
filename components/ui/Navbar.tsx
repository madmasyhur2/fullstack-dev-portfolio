'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '@/data/portfolio'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '/blog', external: true },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 20)
      if (currentY < 20) {
        setVisible(true)
      } else if (currentY > lastScrollY + 5) {
        setVisible(false)
        setMobileOpen(false)
      } else if (currentY < lastScrollY - 5) {
        setVisible(true)
      }
      setLastScrollY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = (href: string, external?: boolean) => {
    setMobileOpen(false)
    if (external) return // Let the Link handle navigation
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-[#222220]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Home"
            className="font-mono text-sm font-bold tracking-widest text-[#E8FF57] hover:text-[#B8CC3A] transition-colors"
          >
            MUHAMMAD
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#8A887F] hover:text-[#F0EEE6] text-sm transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href, link.external)}
                  className="text-[#8A887F] hover:text-[#F0EEE6] text-sm transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Resume Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={personal.resumeUrl}
              download
              aria-label="Download Resume PDF"
              className="hidden md:flex items-center gap-2 text-xs font-mono border border-[#E8FF57] text-[#E8FF57] px-3 py-1.5 rounded hover:bg-[#E8FF57] hover:text-[#0A0A0A] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#E8FF57]"
            >
              <Download size={14} />
              Resume
            </a>
            <button
              className="md:hidden text-[#8A887F] hover:text-[#F0EEE6] transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-[#111111] border-b border-[#222220] overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.external ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-[#8A887F] hover:text-[#F0EEE6] text-sm text-left transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-[#8A887F] hover:text-[#F0EEE6] text-sm text-left transition-colors duration-150"
                    >
                      {link.label}
                    </button>
                  )
                )}
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 text-xs font-mono border border-[#E8FF57] text-[#E8FF57] px-3 py-2 rounded w-fit hover:bg-[#E8FF57] hover:text-[#0A0A0A] transition-all duration-150"
                >
                  <Download size={12} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
