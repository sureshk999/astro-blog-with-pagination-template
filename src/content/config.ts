import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.optional(z.string()),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      // Add a 'draft' property, which is a boolean false or true no ``
      draft: z.optional(z.boolean()),
    })
 });

export const collections = {
  posts: postsCollection,
};