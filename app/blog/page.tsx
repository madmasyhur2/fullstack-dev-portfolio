import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import BlogCard from '@/components/ui/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Muhammad Bin Djafar Almasyhur',
  description:
    'Technical writing on Golang, Next.js, system architecture, and engineering trade-offs from production experience.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0EEE6]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#4A4844] hover:text-[#E8FF57] transition-colors mb-12"
        >
          ← Back to portfolio
        </Link>

        {/* Section header */}
        <p className="font-mono text-xs text-[#E8FF57] tracking-widest uppercase mb-6">
          / Blog
        </p>

        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] mb-4">
          Technical Writing
        </h1>
        <p className="font-sans text-[#8A887F] mb-12 leading-relaxed">
          Architecture decisions, engineering trade-offs, and things I learned building in production.
        </p>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <p className="font-mono text-[#4A4844] text-sm">No posts published yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
