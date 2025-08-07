import { defineCollection, z } from 'astro:content'

export const photoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  url: z.string().url(),
  thumbnail: z.string().url().optional(),
  alt: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
  featured: z.boolean().optional().default(false),
})

export const photos = defineCollection({
  type: 'data',
  schema: photoSchema,
})

export const collections = {
  photos,
}
