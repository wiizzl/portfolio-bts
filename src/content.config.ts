import { glob } from "astro/loaders";

import { defineCollection, z } from "astro:content";

const collections = {
  veille: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/veille",
    }),

    schema: z.object({
      title: z.string().min(26).max(56),
      author: z.string().min(3).max(56),
      source: z.string().url(),
      boundaries: z.array(z.string().min(5).max(26)),
      date: z.coerce.date(),
    }),
  }),
};

export { collections };
