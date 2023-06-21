import slugify from "@sindresorhus/slugify"
import type { BlogPost } from "$lib/types"

export async function getBlogPosts() {
  const allPostFiles = import.meta.glob("/src/routes/blog/**/*.md")
  const iterablePosts = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePosts.map(async ([source, resolver]) => {
      const resolved = await resolver()
      const { metadata } = resolved
      const sourcePath = source.slice(11, -3)
      const pathBase = source.slice(11, 23)

      const content = resolved.default.render().html

      const date = new Date(metadata.date).toLocaleDateString("en-CA", {
        timeZone: "UTC",
        dateStyle: "short",
      })

      const slug = slugify(metadata.title)

      const path = pathBase + slug

      return {
        ...metadata,
        content,
        sourcePath,
        path,
        slug,
        date,
      } as BlogPost
    })
  )

  // Reverse Chronological Sort Order
  allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  return allPosts
}
