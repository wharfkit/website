import type { DocumentationSections, HeadingNode, DocumentationArticle, BreadCrumb } from "../types"
import * as cheerio from "cheerio"
import slugify from "@sindresorhus/slugify"
import { capitalize } from "./general"


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

export function createBreadcrumbs(section: string, doc?: DocumentationArticle): BreadCrumb[] {
  const breadcrumbs: BreadCrumb[] = [
    { title: "Documentation", path: "/docs" },
    { title: capitalize(section), path: `/docs/${section}` },
  ]

  if (doc) {
    breadcrumbs.push({
      title: doc.title,
      path: `/docs/${section}/${doc.slug}`,
    })
  }

  return breadcrumbs
}

function parseHeadings(html: string): HeadingNode[] {
  const $ = cheerio.load(html)
  const headings = $("h2, h3")
    .toArray()
    .map((el) => {
      const elName = $(el).prop("tagName") // h2 or h3
      const id = $(el).attr("id")
      const text = $(el).text()
      return { id, text, elName }
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
