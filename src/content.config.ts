import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

import realisations from "@/config/realisations.json";
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

  realisations: defineCollection({
    loader: glob({
      pattern: "**/*.mdx",
      base: "./src/content/realisations",
    }),

    schema: z.object({
      title: z.string().min(26).max(56),
      description: z.string().min(50).max(500),
      category: z.enum(
        realisations.categories.map((a) => a) as [string, ...string[]],
      ),
      skills: z.array(
        z.object({
          name: z.string().min(5).max(26),
          subskills: z.array(z.string().min(2).max(26)).optional(),
        }),
      ),
      technos: z.array(z.string().min(5).max(26)),
      date: z.coerce.date(),
    }),
  }),
};

export { collections };
