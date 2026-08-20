import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page not found',
  /*
   * This has to be set explicitly. Next emits its own `noindex` for not-found,
   * but metadata is merged per-field, so without an override this page would
   * ALSO inherit the root layout's `index, follow` — two robots tags flatly
   * contradicting each other. Restating noindex here keeps them consistent.
   * No canonical: a 404 must not claim to be a real URL.
   */
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-viewport flex-col items-center justify-center px-5 py-20 text-center sm:px-6">
      <p className="label-mono text-xs text-accent">404</p>

      <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
        This page doesn&apos;t exist
      </h1>

      <p className="mt-4 max-w-prose text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-relaxed">
        The link may be out of date, or the page may have moved.
      </p>

      <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-white shadow-card transition-colors duration-150 hover:bg-accent-hover sm:w-auto"
        >
          Back to homepage
        </Link>
        <Link
          href="/blog"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-lg border border-border-strong px-5 text-sm font-medium text-text-primary transition-colors duration-150 hover:border-accent hover:bg-accent-soft sm:w-auto"
        >
          Read the blog
        </Link>
      </div>
    </main>
  )
}
