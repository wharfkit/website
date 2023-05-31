import slugify from "@sindresorhus/slugify"
import type { DocumentationSections } from "./types"

type Grouped<T> = {
  [key: string]: T[]
}

// Groups an array of objects by a key

export function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Grouped<T> {
  return arr.reduce((acc: Grouped<T>, item: T) => {
    const groupKey = String(item[key])
    acc[groupKey] = [...(acc[groupKey] || []), item]
    return acc
  }, {})
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export async function fetchBlogPosts() {
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
      }
    })
  )

  // Reverse Chronological Sort Order
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return allPosts
}

function formatSectionTitle(section: string) {
  // remove any dashes from section
  const sectionName = section.replace(/-/g, " ")
  // capitalize first letter of each word
  const sectionTitle = sectionName.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  )
  return sectionTitle
}

export async function fetchDocs() {
  // import md files not in the root /docs folder
  const allDocFiles = import.meta.glob("/src/lib/docs/**/!(/docs)/*.md")
  const iterablePosts = Object.entries(allDocFiles)

  const allDocs = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(8, -3)
      const pathArray = postPath.split("/")
      const section = pathArray[2]

      return {
        ...metadata,
        path: postPath,
        section: formatSectionTitle(section),
        title: pathArray[3],
        slug: slugify(pathArray[3]),
      }
    })
  )

  return allDocs
}

export function filterDocumentationArticles(
  sections: DocumentationSections,
  query: string
): DocumentationSections {
  if (query === "") {
    return sections
  }

  if (Object.keys(sections).length === 0) {
    return {}
  }

  // Consider adding fuse.js for fuzzy search down the line

  const filteredSections: DocumentationSections = {}

  Object.entries(sections).forEach(([section, articles]) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    )

    if (filteredArticles.length > 0) {
      filteredSections[section] = filteredArticles
    }
  })

  console.log(filteredSections)

  return filteredSections
}
