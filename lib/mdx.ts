import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime: string
  published: boolean
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      const rt = readingTime(content)

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        tags: (data.tags as string[]) ?? [],
        readingTime: rt.text,
        published: (data.published as boolean) ?? true,
      }
    })
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: rt.text,
    published: (data.published as boolean) ?? true,
    content,
  }
}
