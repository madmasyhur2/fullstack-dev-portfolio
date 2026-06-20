import type { Project } from '@/data/portfolio'
import { GithubIcon } from '@/components/ui/SocialIcons'
import { ArrowUpRight } from 'lucide-react'

const badgeStyles: Record<Project['badgeKind'], string> = {
  demo: 'border-accent/30 bg-accent-soft text-accent',
  production: 'border-success/30 bg-success/10 text-success',
  research: 'border-border text-text-secondary',
}

export default function ProjectCard({ project }: { project: Project }) {
  const featured = !!project.featured
  const hasLinks = project.github || project.demo

  return (
    <article
      className={`group flex h-full flex-col rounded-card border p-6 transition-all duration-200 hover:border-accent hover:shadow-card-hover ${
        featured
          ? 'border-border border-l-2 border-l-accent bg-surface-raised'
          : 'border-border bg-surface'
      }`}
    >
      <span
        className={`label-mono inline-flex w-fit items-center rounded-full border px-2.5 py-1 text-[10px] ${badgeStyles[project.badgeKind]}`}
      >
        {project.badge}
      </span>

      <h3
        className={`mt-4 font-semibold leading-snug text-text-primary ${
          featured ? 'text-xl' : 'text-lg'
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <li
            key={s}
            className="rounded-md border border-border px-2 py-1 text-xs text-text-secondary"
          >
            {s}
          </li>
        ))}
      </ul>

      {hasLinks && (
        <div className="mt-5 flex items-center gap-5 border-t border-border pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}
