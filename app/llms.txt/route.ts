import { getAllPosts } from '@/lib/mdx'
import { personal, about, projects, moreWork, stack } from '@/data/portfolio'
import { SITE_URL } from '@/lib/site'

/*
 * /llms.txt — a plain-text brief for answer engines (ChatGPT, Claude,
 * Perplexity) that would otherwise have to infer the site's structure from
 * rendered HTML.
 *
 * Generated rather than checked in as a static file so the project list and
 * post index cannot drift out of sync with data/portfolio.ts and content/blog.
 */
export const dynamic = 'force-static'

export function GET(): Response {
  const posts = getAllPosts()

  const body = `# ${personal.name}

> ${personal.role}. ${about.lead}

${about.body} ${about.credential}

## Contact
- Email: ${personal.email}
- GitHub: ${personal.github}
- LinkedIn: ${personal.linkedin}
- Availability: ${personal.availability}

## Key pages
- [Portfolio home](${SITE_URL}/) - projects, experience, and stack
- [Blog](${SITE_URL}/blog) - technical writing on Go, Next.js, and system architecture
- [Résumé (PDF)](${SITE_URL}${personal.resumeUrl})

## Selected projects
${projects
  .map((p) => {
    const links = [p.demo && `demo: ${p.demo}`, p.github && `source: ${p.github}`]
      .filter(Boolean)
      .join(', ')
    return `- ${p.title} (${p.badge}) - ${p.description}${links ? ` [${links}]` : ''}`
  })
  .join('\n')}

## Other work
${moreWork
  .map((w) => `- ${w.title} - ${w.blurb}${w.github ? ` [source: ${w.github}]` : ''}`)
  .join('\n')}

## Blog posts
${posts
  .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) - ${p.summary} (${p.date})`)
  .join('\n')}

## Stack
${stack.map((s) => s.name).join(', ')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
