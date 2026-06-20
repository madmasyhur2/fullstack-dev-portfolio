import { Reveal } from '@/components/ui/Reveal'

/** Shared heading: an indigo tick + tracked eyebrow (the structural motif),
 *  then the H2 in the display face. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        <span className="label-mono text-xs text-accent">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-text-secondary">{subtitle}</p>
      )}
    </Reveal>
  )
}
