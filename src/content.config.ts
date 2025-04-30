import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

import veille from "@/config/veille.json";

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
      boundarie: z.enum(
        veille.boundaries.map((b: { name: string }) => b.name) as [
          string,
          ...string[],
        ],
      ),
      date: z.coerce.date(),
    }),
  }),

  rp: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/rp",
    }),

    schema: z.object({
      title: z.string().min(26).max(56),
      description: z.string().min(50).max(500),
      category: z.enum(["TP", "Stage"]),
      skills: z.array(z.string().min(5).max(26)),
      technos: z.array(z.string().min(5).max(26)),
      date: z.coerce.date(),
    }),
  }),
};

export { collections };
