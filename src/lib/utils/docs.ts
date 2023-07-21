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
  sections: DocumentationSection[],
  query: string
): DocumentationSection[] {
  if (query === "") {
    return sections;
  }

  const filteredSections: DocumentationSection[] = [];

  sections.forEach(({ title, articles }) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredArticles.length > 0) {
      filteredSections.push({ title, articles: filteredArticles });
    }
  });

  return filteredSections;
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

function getTitle(html: string): string {
  const $ = cheerio.load(html)
  const title = $("h1").first().text()
  return title
}

function getFirstParagraph(html: string): string {
  const $ = cheerio.load(html)
  const firstParagraph = $("p").first().text()
  return firstParagraph
}

function groupDocsBySection(docs: DocumentationArticle[]): Record<string, DocumentationArticle[]> {
  const grouped = docs.reduce((acc, doc) => {
    const { section } = doc
    if (!acc[section]) {
      acc[section] = []
    }
    acc[section].push(doc)
    return acc
  }, {} as Record<string, DocumentationArticle[]>)
  return grouped
}

export async function fetchDocs() {
  const allDocFiles = import.meta.glob("/src/lib/docs/**/*.md")
  const iterableDocs = Object.entries(allDocFiles)
  const allDocs = await Promise.all(
    iterableDocs.map(async ([path, resolver]) => {
      const resolved = await resolver() as MarkdownFile
      return resolved
    }
    )
  )
  const docs = allDocs.map(makeDoc)
  const groupedDocs = groupDocsBySection(docs)
  return groupedDocs
}

export function makeDoc(markdown: MarkdownFile): DocumentationArticle {
  const metadata: DocumentationMetadata = markdown.metadata || {}
  const content = markdown.default.render().html
  const title = metadata?.title || getTitle(content)
  const slug = metadata?.slug || slugify(title)
  const description = metadata?.description || getFirstParagraph(content)
  const section = metadata?.category?.toLowerCase() || ""
  const path = `/docs/${section}/${slug}`

  const doc = {
    ...metadata,
    title,
    path,
    section,
    content,
    slug,
    description,
    headings: parseHeadings(content),
  }

  return doc
}



export function orderSections(groupedDocs: Record<string, DocumentationArticle[]>, order: string[]): DocumentationSection[] {
  const sections = order.flatMap((section) => {
    const articles = groupedDocs[section.toLowerCase()]
    if (!articles) return []
    return { title: formatSectionTitle(section), articles }
  })
  return sections
}

