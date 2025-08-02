import { getCollection } from 'astro:content'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

export async function getCategories() {
  const posts = await getPosts()

  const categories = new Map<string, Post[]>()

  posts.forEach((post) => {
    if (post.data.categories) {
      post.data.categories.forEach((c) => {
        const posts = categories.get(c) || []
        posts.push(post)
        categories.set(c, posts)
      })
    }
  })

  return categories
}

export async function getEssayCategories() {
  const essays = await getEssays()

  const categories = new Map<string, Essay[]>()

  essays.forEach((essay) => {
    if (essay.data.categories) {
      essay.data.categories.forEach((c) => {
        const essays = categories.get(c) || []
        essays.push(essay)
        categories.set(c, essays)
      })
    }
  })

  return categories
}

export async function getPosts() {
  const posts = await getCollection('posts')
  posts.sort((a, b) => {
    const aDate = a.data.pubDate || new Date()
    const bDate = b.data.pubDate || new Date()
    return bDate.getTime() - aDate.getTime()
  })
  return posts
}

export async function getEssays() {
  const essays = await getCollection('essays')
  essays.sort((a, b) => {
    const aDate = a.data.pubDate || new Date()
    const bDate = b.data.pubDate || new Date()
    return bDate.getTime() - aDate.getTime()
  })
  return essays
}

const parser = new MarkdownIt()

export function getPostDescription(post: Post) {
  if (post.data.description) {
    return post.data.description
  }

  const html = parser.render(post.body)
  const sanitized = sanitizeHtml(html, { allowedTags: [] })
  return sanitized.slice(0, 400)
}



export function getEssayDisplayTitle(essay: Essay) {
  // 如果有标题就使用标题
  if (essay.data.title) {
    return essay.data.title
  }

  // 否则使用内容的前50个字符作为标题
  const html = parser.render(essay.body)
  const sanitized = sanitizeHtml(html, { allowedTags: [] })
  const preview = sanitized.slice(0, 50).trim()
  return preview + (sanitized.length > 50 ? '...' : '')
}

export function formatDate(date?: Date) {
  if(!date) return '--'
  const year = date.getFullYear().toString().padStart(4, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

// 格式化时间为简洁格式，包含具体时间（用于随笔）
export function formatEssayDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}/${month}/${day} ${hours}:${minutes}`
}

export function getPathFromCategory(category: string, category_map: {name: string, path: string}[]) {
  const mappingPath = category_map.find(l => l.name === category)
  return mappingPath ? mappingPath.path : category
}