import Link from 'next/link'
import { notFound } from 'next/navigation'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
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
  // This avoids the React version mismatch caused by next-mdx-remote/rsc.
  // remark-gfm is what turns pipe tables, strikethrough and task lists into
  // real nodes; without it a table renders as a paragraph of literal pipes.
  const { default: MDXContent } = await evaluate(post.content, {
    ...runtime,
    remarkPlugins: [remarkGfm],
    baseUrl: import.meta.url,
  })

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      {/* pt clears the fixed 64px navbar, then restores the original gap above
          the back link (32px on phones, 64px from sm up) */}
      <div className="mx-auto max-w-2xl px-5 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-32">
        {/* Back link — py/-my pair grows the tap target to 44px without moving it,
            so the spacing below lives on the wrapper instead of the link */}
        <div className="mb-12">
          <Link
            href="/blog"
            className="-my-3.5 inline-flex items-center gap-2 py-3.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← All posts
          </Link>
        </div>

        {/* Title */}
        <h1 className="mb-6 break-words font-display text-2xl font-semibold leading-tight tracking-tight text-text-primary sm:text-3xl sm:leading-tight md:text-4xl">
          {post.title}
        </h1>

        {/* Metadata row */}
        <div className="label-mono mb-4 flex flex-wrap items-center gap-3 text-xs text-text-muted">
          <span>{formattedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Tags — same chip as the stack list on ProjectCard */}
        <div className="mb-12 flex min-w-0 flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="break-words rounded-md border border-border px-2 py-1 text-xs text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-10 border-t border-border" />

        {/* MDX Content — rendered with the shared token-styled components */}
        <article>
          <MDXContent components={MDXComponents} />
        </article>

        {/* Footer nav */}
        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/blog"
            className="-my-3.5 inline-flex items-center gap-2 py-3.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
