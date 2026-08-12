import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    img: z.string(),
    categoria: z.string(),
  }),
});

export const collections = {
  projects,
};
