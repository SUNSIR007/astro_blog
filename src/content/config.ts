
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    customData: z.string().optional(),
    banner: image()
      .refine((img) => Math.max(img.width, img.height) <= 4096, {
        message: "Width and height of the banner must less than 4096 pixels"
      })
      .optional(),
    categories: z.array(z.string()),
    author: z.string().optional(),
    commentsUrl: z.string().optional(),
    source: z.optional(z.object({ url: z.string(), title: z.string(), })),
    enclosure: z.optional(z.object({ url: z.string(), length: z.number(), type: z.string(), })),
  }),
});

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().optional(), // 随笔标题可选
    pubDate: z.coerce.date(),
    customData: z.string().optional(),
    banner: image()
      .refine((img) => Math.max(img.width, img.height) <= 4096, {
        message: "Width and height of the banner must less than 4096 pixels"
      })
      .optional(),
    author: z.string().optional(),
    commentsUrl: z.string().optional(),
    source: z.optional(z.object({ url: z.string(), title: z.string(), })),
    enclosure: z.optional(z.object({ url: z.string(), length: z.number(), type: z.string(), })),
  }),
});

const photos = defineCollection({
  type: 'data',
  schema: z.object({
    url: z.string().url(),
    thumbnail: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = {
  posts,
  essays,
  photos,
};
