'use client'

import { ExternalLink, Lock } from 'lucide-react'
import { useState } from 'react'

const GithubIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

interface ProjectCardProps {
  title: string
  slug: string
  description: string
  stack: string[]
  status: string
  github: string | null
  demo: string | null
  highlight: string
  featured: boolean
}

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  'In Progress': {
    label: 'In Progress',
    color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    dot: 'bg-amber-400',
  },
  Shipped: {
    label: 'Shipped',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    dot: 'bg-emerald-400',
  },
  Completed: {
    label: 'Completed',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    dot: 'bg-blue-400',
  },
}

export default function ProjectCard({
  title,
  description,
  stack,
  status,
  github,
  demo,
  highlight,
  featured,
}: ProjectCardProps) {
  const [showGithubTooltip, setShowGithubTooltip] = useState(false)
  const [showDemoTooltip, setShowDemoTooltip] = useState(false)
  const statusCfg = statusConfig[status] || statusConfig['Completed']

  return (
    <article
      className={`group relative bg-[#111111] border border-[#222220] rounded-xl p-6 flex flex-col gap-4 hover:border-[#E8FF57]/30 transition-all duration-300 hover:scale-[1.01] ${
        featured ? 'border-l-2 border-l-[#E8FF57]/40' : ''
      }`}
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${statusCfg.color}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dot} animate-pulse-accent`} />
          {statusCfg.label}
        </span>
        {featured && (
          <span className="text-[10px] font-mono text-[#E8FF57]/50 uppercase tracking-widest">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-[#F0EEE6] group-hover:text-[#E8FF57] transition-colors duration-200">
        {title}
      </h3>

      {/* Description — full, no truncation */}
      <p className="font-sans text-[#8A887F] text-sm leading-relaxed">
        {description}
      </p>

      {/* Highlight */}
      <p className="text-[#E8FF57]/80 text-xs italic font-sans">
        ↗ {highlight}
      </p>

      {/* Stack Tags */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-[#8A887F] bg-[#1A1A1A] border border-[#222220] rounded px-2.5 py-1 hover:border-[#E8FF57]/30 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-1">
        {/* GitHub Button */}
        <div className="relative">
          <button
            aria-label={github ? 'View GitHub repository' : 'Private repository'}
            onMouseEnter={() => !github && setShowGithubTooltip(true)}
            onMouseLeave={() => setShowGithubTooltip(false)}
            onClick={() => github && window.open(github, '_blank')}
            className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border transition-all duration-150 ${
              github
                ? 'border-[#222220] text-[#8A887F] hover:border-[#E8FF57]/40 hover:text-[#F0EEE6] cursor-pointer'
                : 'border-[#222220] text-[#4A4844] cursor-default'
            }`}
          >
            {github ? <GithubIcon size={12} /> : <Lock size={12} />}
            {github ? 'GitHub' : 'Private'}
          </button>
          {showGithubTooltip && (
            <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-[#1A1A1A] border border-[#222220] rounded text-xs text-[#8A887F] whitespace-nowrap z-10">
              Private Repository
              <div className="absolute top-full left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#222220]" />
            </div>
          )}
        </div>

        {/* Demo Button */}
        <div className="relative">
          <button
            aria-label={demo ? 'View live demo' : 'No demo available'}
            onMouseEnter={() => !demo && setShowDemoTooltip(true)}
            onMouseLeave={() => setShowDemoTooltip(false)}
            onClick={() => demo && window.open(demo, '_blank')}
            className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded border transition-all duration-150 ${
              demo
                ? 'border-[#222220] text-[#8A887F] hover:border-[#E8FF57]/40 hover:text-[#F0EEE6] cursor-pointer'
                : 'border-[#222220] text-[#4A4844] cursor-default'
            }`}
          >
            <ExternalLink size={12} />
            {demo ? 'Live Demo' : 'No Demo'}
          </button>
          {showDemoTooltip && (
            <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 bg-[#1A1A1A] border border-[#222220] rounded text-xs text-[#8A887F] whitespace-nowrap z-10">
              Demo Not Available
              <div className="absolute top-full left-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#222220]" />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
