import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'
import BlogCard from '@/components/ui/BlogCard'

export default function Blog() {
  const latestPosts = getAllPosts().slice(0, 2)

  return (
    <section id="blog" className="py-24 border-t border-[#222220]" aria-label="Blog section">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section label */}
        <p className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6">
          / 05 — Writing
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-2">
              Technical Writing
            </h2>
            <p className="font-sans text-[#8A887F] text-sm leading-relaxed max-w-xl">
              Architecture decisions, engineering trade-offs, and things I learned building in production.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#E8FF57]/70 hover:text-[#E8FF57] transition-colors shrink-0"
          >
            View all posts
            <ArrowRight size={12} />
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="font-mono text-[#4A4844] text-sm">Posts coming soon.</p>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#E8FF57] border border-[#E8FF57]/30 px-5 py-2.5 rounded-lg hover:bg-[#E8FF57]/10 transition-all duration-150"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
