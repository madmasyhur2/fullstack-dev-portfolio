'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'

const PRIMARY_CATEGORIES = ['Primary Stack', 'Also Ship With']

export default function Skills() {
  const categories = Object.entries(skills)

  return (
    <section id="skills" className="py-24 border-t border-[#222220]" aria-label="Skills section">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          / 04 — Stack
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools &amp; technologies
        </motion.h2>

        <div className="flex flex-col gap-6">
          {categories.map(([category, techList], i) => {
            const isPrimary = category === 'Primary Stack'
            const isSecondary = category === 'Also Ship With'

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-5 border-b border-[#222220] last:border-b-0"
              >
                {/* Category label */}
                <div className="sm:w-40 shrink-0">
                  <span className={`font-mono text-xs uppercase tracking-widest ${
                    isPrimary ? 'text-[#E8FF57]' : 'text-[#4A4844]'
                  }`}>
                    {category}
                  </span>
                </div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {techList.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-150 cursor-default select-none ${
                        isPrimary
                          ? 'text-[#E8FF57] bg-[#E8FF57]/5 border-[#E8FF57]/30 hover:border-[#E8FF57]/60 text-sm font-medium'
                          : isSecondary
                          ? 'text-[#8A887F] bg-[#1A1A1A] border-[#222220] hover:border-[#E8FF57]/20 hover:text-[#F0EEE6]'
                          : 'text-[#8A887F] bg-[#1A1A1A] border-[#222220] hover:border-[#E8FF57]/20 hover:text-[#F0EEE6]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
