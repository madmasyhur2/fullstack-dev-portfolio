'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

interface ExperienceItemProps {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  index: number
}

export default function ExperienceItem({
  company,
  role,
  period,
  location,
  bullets,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[#E8FF57] border-2 border-[#0A0A0A] z-10 shadow-[0_0_8px_rgba(232,255,87,0.5)]" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <div>
            <h3 className="font-syne font-bold text-[#F0EEE6] text-lg leading-tight">
              {company}
            </h3>
            <p className="font-mono text-[#E8FF57] text-sm mt-0.5">{role}</p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 shrink-0">
            <span className="text-[#8A887F] text-xs font-mono">{period}</span>
            <span className="flex items-center gap-1 text-[#4A4844] text-xs font-mono">
              <MapPin size={11} />
              {location}
            </span>
          </div>
        </div>

        <ul className="mt-3 flex flex-col gap-2.5">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-[#8A887F] text-sm leading-relaxed">
              <span className="text-[#E8FF57]/50 mt-0.5 shrink-0">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
