import Link from 'next/link'
import { notFound } from 'next/navigation'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { MDXComponents } from '@/components/ui/MDXComponents'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getPostBySlug(slug)
    return {
      title: `${post.title} — Muhammad Bin Djafar Almasyhur`,
      description: post.summary,
    }
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params

  let post
  try {
    post = getPostBySlug(slug)
  } catch {
    notFound()
  }

  // Compile MDX using @mdx-js/mdx evaluate — uses the project's own React runtime
  // This avoids the React version mismatch caused by next-mdx-remote/rsc
  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    baseUrl: import.meta.url,
  })

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0EEE6]">
      <div className="max-w-2xl mx-auto py-16 px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#4A4844] hover:text-[#E8FF57] transition-colors mb-12"
        >
          ← All posts
        </Link>

        {/* Title */}
        <h1 className="font-display font-extrabold text-3xl md:text-4xl text-[#F0EEE6] leading-tight mb-6">
          {post.title}
        </h1>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#4A4844]">{formattedDate}</span>
          <span className="text-[#222220]">·</span>
          <span className="font-mono text-xs text-[#4A4844]">{post.readingTime}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-[#8A887F] bg-[#1A1A1A] border border-[#222220] rounded px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#222220] mb-10" />

        {/* MDX Content — rendered with custom dark-theme components */}
        <article>
          <MDXContent components={MDXComponents} />
        </article>

        {/* Footer nav */}
        <div className="border-t border-[#222220] mt-16 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#4A4844] hover:text-[#E8FF57] transition-colors"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
