'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/portfolio'
import ExperienceItem from '@/components/ui/ExperienceItem'

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-[#222220]" aria-label="Experience section">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          / 03 — Experience
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Where I&apos;ve worked
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1.5 top-0 bottom-0 w-px bg-[#222220]"
            aria-hidden="true"
          />

          {/* Experience items */}
          <div className="flex flex-col">
            {experience.map((item, i) => (
              <ExperienceItem key={item.company} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
