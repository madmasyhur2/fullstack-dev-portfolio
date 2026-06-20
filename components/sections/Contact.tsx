'use client'

import { Mail } from 'lucide-react'
import { personal } from '@/data/portfolio'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <SectionHeading eyebrow="Contact" title="Let's talk" />

      <Reveal className="mt-8 max-w-2xl">
        <p className="text-lg leading-relaxed text-text-secondary">
          {personal.availability}
        </p>

        <a
          href={`mailto:${personal.email}`}
          className="group mt-8 inline-flex items-center gap-3 text-2xl font-medium text-text-primary transition-colors hover:text-accent md:text-3xl"
        >
          <Mail className="text-text-muted transition-colors group-hover:text-accent" size={26} />
          {personal.email}
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border-strong px-4 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-soft"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-border-strong px-4 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:bg-accent-soft"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
        </div>
      </Reveal>
    </Section>
  )
}
