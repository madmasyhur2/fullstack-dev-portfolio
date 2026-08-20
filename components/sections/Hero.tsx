'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { personal } from '@/data/portfolio'
import NodeGraph from '@/components/ui/NodeGraph'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6, ease: EASE } },
  }

  // subheadline reads "AI Automation Engineer — <the rest>"
  const [lead, detail] = personal.subheadline.split('—').map((s) => s.trim())

  return (
    <section
      id="home"
      aria-label="Intro"
      // .min-h-viewport (globals.css) = 100vh with an svh override, so the hero
      // does not jump when the mobile browser toolbar hides
      className="min-h-viewport relative flex items-center overflow-hidden py-24 sm:py-28 lg:py-0"
    >
      <NodeGraph />

      {/* faint static indigo wash, top-left — anchors the composition, not animated */}
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-0" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-shell px-5 sm:px-6 md:px-10"
      >
        <div className="max-w-3xl">
          <motion.div variants={item}>
            <span className="label-mono inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-[11px] text-text-secondary">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              Available — remote
            </span>
          </motion.div>

          {/* phone/tablet curve converges on the desktop clamp, which lg: restores verbatim */}
          <motion.h1
            variants={item}
            className="mt-6 font-display text-[clamp(1.9rem,calc(4.5vw_+_1rem),4.75rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-text-primary lg:text-[clamp(2.4rem,6vw,4.75rem)]"
          >
            Muhammad Bin
            <br />
            Djafar Almasyhur
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed"
          >
            <span className="font-medium text-text-primary">{lead}</span>
            {' — '}
            {detail}
          </motion.p>

          {/* full-width stacked buttons under 640px, inline pills from sm up */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-white shadow-card transition-colors duration-150 hover:bg-accent-hover sm:w-auto sm:justify-start"
            >
              View Work
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-border-strong px-5 text-sm font-medium text-text-primary transition-colors duration-150 hover:border-accent hover:bg-accent-soft sm:w-auto sm:justify-start"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue — arrow only, no label (spec); 44x44 hit area, -mb-3 keeps the glyph where it was */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -mb-3 flex h-11 w-11 -translate-x-1/2 items-center justify-center text-text-muted transition-colors hover:text-text-secondary focus-visible:text-text-secondary"
      >
        <ArrowDown size={20} className="animate-scroll-cue" />
      </a>
    </section>
  )
}
