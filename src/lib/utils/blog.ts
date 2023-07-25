import slugify from "@sindresorhus/slugify"
import { postsPerPage } from "../config"


const defaultImage =
  "https://assets.wharfkit.com/wharf-brand-assets/logo/svg/wharf-logo-bright-vector-no-bg.svg"


export const getThumbnail = (url: string) => {
  const videoID = /^.*\/(.*)$/m.exec(url)[1]
  return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
}

export const getImage = (metadata: BlogPost) => {
  if (metadata.image) {
    return metadata.image
  } else if (metadata.videolink) {
    return getThumbnail(metadata.videolink)
  } else {
    return defaultImage
  }
}



export async function getBlogPosts(queryOptions: BlogQueryOptions = {}): Promise<BlogPost[]> {
  const allPostFiles = import.meta.glob("/src/routes/blog/**/*.md")
  const iterablePosts = Object.entries(allPostFiles)

  const { limit, tag } = queryOptions

  const allPosts = await Promise.all(
    iterablePosts.map(async ([source, resolver]) => {
      const resolved = await resolver() as MarkdownFile
      const { metadata } = resolved

      const content = resolved.default.render().html
      const date = new Date(metadata?.date).toLocaleDateString("en-CA", {
        timeZone: "UTC",
        dateStyle: "short",
      })

      const sourcePath = source.slice(11, -3)
      const pathBase = '/blog/'
      const slug = slugify(metadata?.title)
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
  let sortedPosts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))

  // Filter by Tag
  if (tag) {
    if (tag === "all") return sortedPosts
    sortedPosts = sortedPosts.filter((post) => post.tags.includes(tag))
  }

  // Limit
  if (limit && limit < sortedPosts.length && limit > 0) {
    sortedPosts = sortedPosts.slice(0, limit)
  }


  return sortedPosts
}


export async function getTotalBlogPosts() {
  const allPostFiles = import.meta.glob("/src/routes/blog/**/*.md")
  return Object.keys(allPostFiles).length
}

export async function getTotalBlogPostsByTag() {
  const allPostFiles = import.meta.glob("/src/routes/blog/**/*.md")
  const iterablePosts = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePosts.flatMap(async ([source, resolver]) => {
      const resolved = await resolver() as MarkdownFile
      const { metadata } = resolved

      if (!metadata || !metadata.tags) {
        return []
      }

      return metadata
    })
  )

  const tags = allPosts.map((meta) => String(meta.tags)).flat()

  const tagCounts = tags.reduce((counts: { [key: string]: number }, tag) => {
    counts[tag] = (counts[tag] || 0) + 1
    return counts
  }, {})

  return tagCounts
}