'use client'

import { motion } from 'framer-motion'
import { about } from '@/data/portfolio'

const stats = [
  { value: '3.80', label: 'GPA — Cum Laude' },
  { value: '80%', label: 'Ops time eliminated at MAYFEYR' },
  { value: '37', label: 'Modules shipped in 14 weeks' },
  { value: 'UTC+7', label: 'Remote-ready, async-first' },
]

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: 'easeOut' as const,
    },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#222220]" aria-label="About section">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          / 01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="font-sans text-[#8A887F] leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="bg-[#111111] border border-[#222220] rounded-xl p-5 flex flex-col gap-1 hover:border-[#E8FF57]/20 transition-colors duration-300"
              >
                <span className="font-display font-extrabold text-3xl text-[#E8FF57] leading-none">
                  {stat.value}
                </span>
                <span className="font-sans text-[#F0EEE6] text-sm font-medium leading-snug mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
