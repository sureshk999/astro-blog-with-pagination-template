import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.optional(z.string()),
      image: image().refine((img) => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
      imageAlt: z.string(),
      tags: z.array(z.string()),
      // Add a 'draft' property, which is a boolean false or true no ``
      draft: z.optional(z.boolean()),
    })
 });

export const collections = {
  posts: postsCollection,
};