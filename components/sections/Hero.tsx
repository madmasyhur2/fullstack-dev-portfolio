'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ChevronRight, Download, Mail } from 'lucide-react'
import { personal } from '@/data/portfolio'

// Inline SVGs for brand icons removed in lucide-react v1.0
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 hero-grid opacity-[0.035]"
        aria-hidden="true"
      />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(232,255,87,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 text-xs font-mono border border-[#E8FF57]/30 text-[#E8FF57] rounded-full px-3 py-1.5 bg-[#E8FF57]/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8FF57] animate-pulse-accent" />
            {personal.availability}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <h1 className="font-syne font-extrabold text-5xl md:text-7xl text-[#F0EEE6] leading-[1.05] tracking-tight">
            Building scalable
            <br />
            <span className="text-[#E8FF57]">systems.</span>
          </h1>
          <p className="font-syne font-extrabold text-5xl md:text-7xl text-[#F0EEE6] leading-[1.05] tracking-tight">
            Shipping reliable
            <br />
            <span style={{ WebkitTextStroke: '1.5px #F0EEE6', color: 'transparent' }}>
              products.
            </span>
          </p>
        </motion.div>

        {/* Sub tagline */}
        <motion.p
          variants={itemVariants}
          className="font-mono text-[#8A887F] text-sm tracking-widest uppercase"
        >
          {personal.subTagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            aria-label="View projects"
            className="flex items-center gap-2 bg-[#E8FF57] text-[#0A0A0A] font-syne font-bold text-sm px-6 py-3 rounded-lg hover:bg-[#B8CC3A] transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#E8FF57]"
          >
            View Projects
            <ChevronRight size={16} />
          </button>
          <a
            href={personal.resumeUrl}
            download
            aria-label="Download Resume PDF"
            className="flex items-center gap-2 border border-[#E8FF57] text-[#E8FF57] font-mono text-sm px-6 py-3 rounded-lg hover:bg-[#E8FF57]/10 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-[#E8FF57]"
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[#4A4844] hover:text-[#E8FF57] transition-colors duration-150"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[#4A4844] hover:text-[#E8FF57] transition-colors duration-150"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Send email"
            className="text-[#4A4844] hover:text-[#E8FF57] transition-colors duration-150"
          >
            <Mail size={20} />
          </a>
          <div className="w-px h-5 bg-[#222220]" />
          <span className="font-mono text-xs text-[#4A4844]">
            {personal.location}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[#4A4844] text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <ArrowDown
          size={16}
          className="text-[#4A4844] animate-bounce-slow"
        />
      </motion.div>
    </section>
  )
}
