'use client'

import { experience } from '@/data/portfolio'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { Stagger } from '@/components/ui/Reveal'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've shipped" />

      <Stagger as="ol" className="mt-12 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Stagger.Item
            as="li"
            key={job.company}
            className={`relative ${i === experience.length - 1 ? '' : 'pb-10 sm:pb-12'}`}
          >
            {/* node on the spine — the offset tracks the padding step so the
                10px dot stays straddling the 1px border at both sizes */}
            <span
              aria-hidden="true"
              className="absolute -left-[1.8rem] top-1 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[2.3rem]"
            />

            <div className="flex flex-col gap-y-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
              <h3 className="text-base font-semibold text-text-primary">{job.company}</h3>
              <span className="label-mono text-xs text-text-muted">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-text-secondary">{job.role}</p>
            <p className="mt-0.5 text-xs text-text-muted">{job.location}</p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-text-secondary">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  )
}
