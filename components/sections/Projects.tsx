'use client'

import { projects, moreWork, type BentoArea } from '@/data/portfolio'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { Reveal, Stagger } from '@/components/ui/Reveal'
import ProjectCard from '@/components/ui/ProjectCard'
import { ArrowUpRight } from 'lucide-react'

const areaClass: Record<BentoArea, string> = {
  featured: 'bento-featured',
  project2: 'bento-project2',
  project3: 'bento-project3',
  project4: 'bento-project4',
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Work"
        title="Selected work"
        subtitle="Agentic systems, automation pipelines, and full-stack platforms."
      />

      <Stagger className="bento-grid mt-12">
        {projects.map((project) => (
          <Stagger.Item key={project.title} className={`${areaClass[project.area]} h-full`}>
            <ProjectCard project={project} />
          </Stagger.Item>
        ))}
      </Stagger>

      {/* More work — compact secondary list */}
      <Reveal className="mt-16">
        <p className="label-mono text-xs text-text-muted">More work</p>
        <ul className="mt-4 border-t border-border">
          {moreWork.map((item) => {
            const rowClass =
              'group flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6'
            const inner = (
              <>
                <div className="min-w-0">
                  <h3 className="flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                    {item.title}
                    {item.github && (
                      <ArrowUpRight
                        size={14}
                        className="text-text-muted transition-colors group-hover:text-accent"
                      />
                    )}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">{item.blurb}</p>
                </div>
                <ul className="flex flex-shrink-0 flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </>
            )
            return (
              <li key={item.title} className="border-b border-border">
                {item.github ? (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={rowClass}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
