import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  // getAllPosts() sorts newest-first, so the first entry dates the collection.
  const newestPost = posts[0] ? new Date(posts[0].date) : new Date()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: newestPost,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: newestPost,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
