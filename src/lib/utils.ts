import slugify from "@sindresorhus/slugify"
import type { DocumentationSections } from "./types"
import type { HeadingNode } from "./types"
import * as cheerio from "cheerio"

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
      }
    })
  )

  // Reverse Chronological Sort Order
  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

  return allPosts
}

export function formatSectionTitle(section: string) {
  // remove any dashes from section
  const sectionName = section.replace(/-/g, " ")
  // capitalize first letter of each word
  const sectionTitle = sectionName.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  )
  return sectionTitle
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

function parseHeadings(html: string): HeadingNode[] {
  const $ = cheerio.load(html)
  const headings = $("h2")
    .toArray()
    .map((el) => {
      const id = $(el).attr("id")
      const text = $(el).text()
      return { id, text }
    })
  return headings
}

function getFirstParagraph(html: string): string {
  const $ = cheerio.load(html)
  const firstParagraph = $("p").first().text()
  return firstParagraph
}

export async function getDocs() {
  // import md files not in the root /docs folder
  const allDocFiles = import.meta.glob("/src/lib/docs/**/!(/docs)/*.md")
  const iterablePosts = Object.entries(allDocFiles)

  const allDocs = await Promise.all(
    iterablePosts.map(async ([sourcePath, resolver]) => {
      const res = await resolver()
      const { metadata } = res
      const postPath = sourcePath.slice(9, -3)
      const pathArray = postPath.split("/")
      const [root, section, title] = pathArray
      const slug = slugify(title)
      const path = `/${root}/${section}/${slug}`

      const content = res.default.render().html
      const headings = parseHeadings(content)
      const firstParagraph = getFirstParagraph(content)

      return {
        ...metadata,
        pathArray,
        path,
        section,
        title,
        slug,
        content,
        headings,
        description: firstParagraph,
      }
    })
  )

  return allDocs
}
