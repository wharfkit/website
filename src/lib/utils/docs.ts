import * as cheerio from "cheerio"
import slugify from "@sindresorhus/slugify"
import { capitalize } from "./general"


/**
 * Formats the section title by capitalizing each word and removing dashes
 * @param section 
 * @returns 
 */
export function formatSectionTitle(section: string) {
  // remove any dashes from section
  const sectionName = section.replace(/-/g, " ")
  // capitalize first letter of each word
  const sectionTitle = sectionName.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  )
  return sectionTitle
}

/**
 * Filters the documentation articles by title based on the query
 * @param sections 
 * @param query 
 * @returns 
 */
export function filterDocumentationArticles(
  sections: DocumentationSection[],
  query: string
): DocumentationSection[] {
  if (query === "") {
    return sections;
  }

  const filteredSections: DocumentationSection[] = [];

  sections.forEach(({ articles, ...rest }) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredArticles.length > 0) {
      filteredSections.push({ articles: filteredArticles, ...rest });
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


/**
 * Groups the docs by section name
 * @param docs 
 * @returns 
 */
function groupBySection(docs: DocumentationArticle[]): Record<string, DocumentationArticle[]> {
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

const isDocVisible = (doc: DocumentationArticle): boolean => doc.published === true
const docSort = (a: DocumentationArticle, b: DocumentationArticle): number => (a.order || 100) - (b.order || 100)

/**
 * Imports all the docs from the /src/lib/docs folder
 * @returns 
 */
export async function fetchDocs() {
  const allDocFiles = import.meta.glob("/src/lib/docs/**/*.md")
  const iterableDocs = Object.entries(allDocFiles)
  const allDocs = await Promise.all(
    iterableDocs.map(async ([path, resolver]) => await resolver() as MarkdownFile)
  )
  const docs = allDocs
    .map(makeDoc)
    .filter(isDocVisible)
    .sort(docSort)

  return docs
}


/**
 * Imports all the docs from the /src/lib/docs folder and groups them by section
 * @returns
 */
export async function fetchGroupedDocs() {
  const docs = await fetchDocs()
  const groupedDocs = groupBySection(docs)
  return groupedDocs
}

/**
 * Creates a DocumentationArticle from a MarkdownFile
 * @param markdown
 * @returns
 */
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

/**
 * Orders the sections based on the displayOrder array
 * @param groupedDocs 
 * @param order 
 * @returns 
 */
export function orderSections(groupedDocs: Record<string, DocumentationArticle[]>, order: string[]): DocumentationSection[] {
  const sections = order.flatMap((section) => {
    const allArticles = groupedDocs[section.toLowerCase()]
    if (!allArticles) return []
    const [indexPage, articles] = extractSectionIndexPage(allArticles)
    return { title: formatSectionTitle(section), articles, indexPage }
  })
  return sections
}

/**
 * Extracts index page from articles and removes it from the array
 */
function extractSectionIndexPage(articles: DocumentationArticle[]): [DocumentationArticle, DocumentationArticle[]] {
  const indexPage = articles.find((article) => article.slug === "index")
  const filteredArticles = articles.filter((article) => article.slug !== "index")

  if (!indexPage) {
    throw new Error(`No index page found for section ${articles[0].section}`)
  }

  return [indexPage, filteredArticles]
}
