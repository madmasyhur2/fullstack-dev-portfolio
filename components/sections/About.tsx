'use client'

import { about, stack } from '@/data/portfolio'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { Reveal, Stagger } from '@/components/ui/Reveal'
import BrandIcon from '@/components/ui/StackIcons'
import Tooltip, { TooltipProvider } from '@/components/ui/Tooltip'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="What I build" />

      <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        {/* Bio — three tiers of emphasis */}
        <Reveal className="max-w-prose">
          <p className="text-lg leading-relaxed text-text-primary sm:text-xl sm:leading-relaxed">{about.lead}</p>
          <p className="mt-5 leading-relaxed text-text-secondary">{about.body}</p>
          <p className="mt-5 flex items-center gap-2 text-sm text-text-secondary">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-success" />
            {about.credential}
          </p>
        </Reveal>

        {/* Stack — icon grid. Names come from the tooltip on pointer/keyboard, and
            from a visible caption on touch-sized screens where hover never fires. */}
        <Reveal>
          <p className="label-mono mb-4 text-xs text-text-muted">Stack</p>
          <TooltipProvider delayDuration={150} skipDelayDuration={300}>
            <Stagger className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-4">
              {stack.map((item) => (
                <Stagger.Item key={item.slug}>
                  <Tooltip label={item.name}>
                    <span
                      role="img"
                      aria-label={item.name}
                      tabIndex={0}
                      className="flex aspect-square cursor-default items-center justify-center rounded-lg border border-border bg-surface text-text-secondary transition-colors duration-150 hover:border-accent hover:text-text-primary focus-visible:border-accent focus-visible:text-text-primary"
                    >
                      <BrandIcon slug={item.slug} size={26} />
                    </span>
                  </Tooltip>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 block text-center text-[10px] leading-tight text-text-muted sm:hidden"
                  >
                    {item.name}
                  </span>
                </Stagger.Item>
              ))}
            </Stagger>
          </TooltipProvider>
        </Reveal>
      </div>
    </Section>
  )
}
