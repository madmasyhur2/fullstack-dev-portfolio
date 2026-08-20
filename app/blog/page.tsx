import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'
import BlogCard from '@/components/ui/BlogCard'
import { personal } from '@/data/portfolio'
import { SITE_URL, jsonLd } from '@/lib/site'
import type { Metadata } from 'next'

const DESCRIPTION =
  'Technical writing on Golang, Next.js, system architecture, and engineering trade-offs from production experience.'

export const metadata: Metadata = {
  title: `Blog — ${personal.name}`,
  description: DESCRIPTION,
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Blog — ${personal.name}`,
    description: DESCRIPTION,
    url: '/blog',
    type: 'website',
  },
}

export default function BlogIndex() {
  const posts = getAllPosts()

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        url: `${SITE_URL}/blog`,
        name: `Blog — ${personal.name}`,
        description: DESCRIPTION,
        inLanguage: 'en',
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#person` },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${SITE_URL}/blog/${post.slug}#post`,
          headline: post.title,
          url: `${SITE_URL}/blog/${post.slug}`,
          datePublished: post.date,
          description: post.summary,
          keywords: post.tags,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/blog#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(structuredData)} />
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
