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
      className="group bg-[#111111] border border-[#222220] rounded-xl p-5 sm:p-6 flex flex-col gap-4 hover:border-[#E8FF57]/30 transition-all duration-300 hover:scale-[1.01]"
    >
      {/* Meta row */}
      <div className="flex items-center gap-3 text-xs font-mono text-[#4A4844]">
        <span>{formattedDate}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-[#F0EEE6] group-hover:text-[#E8FF57] transition-colors duration-200 leading-snug">
        {post.title}
      </h3>

      {/* Summary — full, no truncation */}
      <p className="font-sans text-[#8A887F] text-sm leading-relaxed">
        {post.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-[#8A887F] bg-[#1A1A1A] border border-[#222220] rounded px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow link */}
      <div className="flex items-center gap-1.5 text-xs font-mono text-[#E8FF57]/70 group-hover:text-[#E8FF57] transition-colors duration-200 mt-auto pt-1">
        Read post
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  )
}
