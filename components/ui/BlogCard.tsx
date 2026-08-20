import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PostMeta } from '@/lib/mdx'

interface BlogCardProps {
  post: PostMeta
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-4 rounded-card border border-border bg-surface p-5 transition-all duration-200 hover:border-accent hover:shadow-card-hover sm:p-6"
    >
      {/* Meta row */}
      <div className="label-mono flex items-center gap-3 text-xs text-text-muted">
        <span>{formattedDate}</span>
        <span aria-hidden="true">·</span>
        <span>{post.readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-accent">
        {post.title}
      </h3>

      {/* Summary — full, no truncation */}
      <p className="text-sm leading-relaxed text-text-secondary">{post.summary}</p>

      {/* Tags — same chip as the stack list on ProjectCard */}
      <div className="flex min-w-0 flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="break-words rounded-md border border-border px-2 py-1 text-xs text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow link */}
      <div className="mt-auto flex items-center gap-1.5 pt-1 text-sm text-text-secondary transition-colors duration-200 group-hover:text-accent">
        Read post
        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
