import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const menuCollection = defineCollection({
  loader: glob({
    pattern: "**/*.yaml",
    base: "./src/content/menu",
  }),

  schema: z.object({
    name: z.string(),

    slides: z.array(
      z.object({
        template: z.string(),
        duration: z.number(),
        data: z.record(z.string(), z.any()),
      })
    ),
  }),
});

export const collections = {
  menu: menuCollection,
};
