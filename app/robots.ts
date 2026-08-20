import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/*
 * AI crawlers are listed explicitly rather than relying on the `*` rule.
 * Several of them (Google-Extended, Applebot-Extended) are opt-out signals
 * that only count when the user-agent is named, and an explicit Allow is what
 * GEO audits look for. This is a public portfolio meant to be cited — there is
 * nothing here to withhold from an answer engine.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'CCBot',
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
