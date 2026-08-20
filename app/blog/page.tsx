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
    <div className="min-h-screen bg-bg text-text-primary">
      {/* pt clears the fixed 64px navbar, then restores the original gap above
          the back link (32px on phones, 64px from sm up) */}
      <div className="mx-auto max-w-3xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
        {/* Back link — py/-my pair grows the tap target to 44px without moving it,
            so the spacing below lives on the wrapper instead of the link */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="-my-3.5 inline-flex items-center gap-2 py-3.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to portfolio
          </Link>
        </div>

        {/* Same tick + tracked eyebrow motif as SectionHeading, but an <h1> —
            this is the page title, not a section within one */}
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          <span className="label-mono text-xs text-accent">Blog</span>
        </div>

        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
          Technical Writing
        </h1>
        <p className="mt-3 max-w-xl text-text-secondary">
          Architecture decisions, engineering trade-offs, and things I learned building in production.
        </p>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <p className="mt-12 text-sm text-text-muted">No posts published yet.</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
