'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import SkillBadge from '@/components/ui/SkillBadge'

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
          className="font-syne font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools & technologies
        </motion.h2>

        <div className="flex flex-col gap-6">
          {categories.map(([category, techList], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-5 border-b border-[#222220] last:border-b-0"
            >
              {/* Category label */}
              <div className="sm:w-32 shrink-0">
                <span className="font-mono text-xs text-[#4A4844] uppercase tracking-widest">
                  {category}
                </span>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {techList.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
