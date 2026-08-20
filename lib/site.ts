/*
 * Single source of truth for the site's absolute URL.
 *
 * Every canonical link, OG url, sitemap entry, robots directive and JSON-LD
 * @id derives from this one value, so pointing the site at a custom domain is
 * a one-line change (or a NEXT_PUBLIC_SITE_URL env var, no redeploy of code).
 *
 * The default is the Vercel URL because it is the one that actually resolves —
 * madmasyhur.dev is not registered yet, and a canonical pointing at a dead
 * host is worse than no canonical at all.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://madmasyhur-portfolio.vercel.app'
).replace(/\/+$/, '')

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = '/'): string {
  return new URL(path, `${SITE_URL}/`).toString()
}

/*
 * JSON-LD has to be injected as raw text, so escape the sequences that could
 * close the <script> element early. The payload is our own static data, but
 * this keeps the helper safe if it is ever handed post frontmatter.
 */
export function jsonLd(data: unknown): { __html: string } {
  return {
    __html: JSON.stringify(data)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026'),
  }
}
