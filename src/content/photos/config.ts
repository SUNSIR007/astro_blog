import { defineCollection, z } from 'astro:content'

export const photoSchema = z.object({
  url: z.string().url(),
  thumbnail: z.string().url().optional(),
  date: z.date(),
})

export const photos = defineCollection({
  type: 'data',
  schema: photoSchema,
})

export const collections = {
  photos,
}
