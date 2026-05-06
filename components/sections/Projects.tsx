'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ui/ProjectCard'

type FilterType = 'all' | 'featured'

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('featured')

  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects

  return (
    <section id="projects" className="py-24 border-t border-[#222220]" aria-label="Projects section">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <motion.p
          className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          / 02 — Projects
        </motion.p>

        {/* Header row */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-[#F0EEE6]">
            What I&apos;ve built
          </h2>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 bg-[#111111] border border-[#222220] rounded-lg p-1">
            {(['featured', 'all'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-label={`Show ${f} projects`}
                className={`text-xs font-mono px-4 py-1.5 rounded-md capitalize transition-all duration-150 ${
                  filter === f
                    ? 'bg-[#E8FF57] text-[#0A0A0A] font-bold'
                    : 'text-[#8A887F] hover:text-[#F0EEE6]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
