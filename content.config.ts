import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: "data",
      source: "experience/**.json",
      schema: z.object({
        body: z.array(
          z.object({
            year: z.string(),
            company: z.string(),
            position: z.string(),
            description: z.array(z.string()),
          })
        ),
      }),
    }),
    project: defineCollection({
      type: "data",
      source: "project/**.json",
      schema: z.object({
        body: z.array(
          z.object({
            title: z.string(),
            projectList: z.array(
              z.object({
                title: z.string(),
                subTitle: z.string(),
                description: z.string(),
                links: z.array(
                  z.object({
                    title: z.string(),
                    linkTo: z.string().url(),
                  })
                ),
                tools: z.array(z.string()),
                image: z.string(),
              })
            ),
          })
        ),
      }),
    }),
    skill: defineCollection({
      type: "data",
      source: "skill/**.json",
      schema: z.object({
        body: z.array(
          z.object({
            topic: z.string(),
            list: z.array(z.string()),
          })
        ),
      }),
    }),
  },
});
