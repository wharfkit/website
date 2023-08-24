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

export const isSectionNotHidden = (section: DocumentationSection) => section.articles.length > 0
export const removeHiddenArticles = (section: DocumentationSection): DocumentationSection => ({
  ...section,
  articles: section.articles.filter(isDocNotHidden)
})

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
    return sections.map(removeHiddenArticles).filter(isSectionNotHidden)
  }

  const filteredSections: DocumentationSection[] = [];

  sections.forEach((section) => {
    const { articles, title } = section;
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredArticles.length > 0 || title.toLowerCase().includes(query.toLowerCase())) {
      filteredSections.push({ ...section, articles: filteredArticles });
    }
  });

  return filteredSections;
}



export function createBreadcrumbs({ rootPath, rootTitle, section, doc }: { rootPath: string, rootTitle: string, section: string, doc?: DocumentationArticle }): BreadCrumb[] {
  const breadcrumbs: BreadCrumb[] = [
    { title: rootTitle, path: rootPath },
    { title: capitalize(section), path: `${rootPath}/${section}` },
  ]

  if (doc) {
    breadcrumbs.push({
      title: doc.title,
      path: `${rootPath}/${section}/${doc.slug}`,
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

export const isDocNotHidden = (doc: DocumentationArticle) => doc.hidden !== true
const isDocPublished = (doc: DocumentationArticle): boolean => doc.published === true
const docSort = (a: DocumentationArticle, b: DocumentationArticle): number => (a.order || 100) - (b.order || 100)

export const importedGuides = import.meta.glob("/src/lib/guides/**/*.md") as Record<string, () => Promise<MarkdownFile>>
export const importedDocs = import.meta.glob("/src/lib/docs/**/*.md") as Record<string, () => Promise<MarkdownFile>>

/**
 * Makes all the docs from the provided 
 * @returns 
 */
export async function fetchDocs(docFiles: Record<string, () => Promise<MarkdownFile>>) {
  const iterableDocs = Object.entries(docFiles)
  const allDocs = await Promise.all(
    iterableDocs.map(async ([path, resolver]) => ({ source: path, markdown: await resolver() as MarkdownFile }))
  )
  const docs = allDocs
    .map(makeDoc)
    .filter(isDocPublished)
    .sort(docSort)

  return docs
}


/**
 * Imports all the docs from the relevant /src/lib/ folder and groups them by section
 * @returns
 */
export async function fetchGroupedDocs(docFiles: Record<string, () => Promise<MarkdownFile>>) {
  const docs = await fetchDocs(docFiles)
  const groupedDocs = groupBySection(docs)
  return groupedDocs
}

/**
 * Creates a DocumentationArticle from a MarkdownFile
 * @param markdown
 * @returns
 */
export function makeDoc({ source, markdown }: { source: string, markdown: MarkdownFile }): DocumentationArticle {
  const metadata: DocumentationMetadata = markdown.metadata || {}
  const content = markdown.default.render().html
  const title = metadata?.title || getTitle(content)
  const slug = metadata?.slug || slugify(title)
  const description = metadata?.description || getFirstParagraph(content)
  const toc = metadata?.toc ?? true
  const root = source.split("/")[3]
  const section = slugify(metadata?.category || "")
  const path = `/${root}/${section}/${slug}`
  const headings = parseHeadings(content)

  const doc = {
    ...metadata,
    title,
    path,
    section,
    content,
    slug,
    description,
    headings,
    toc,
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
    return {
      title: formatSectionTitle(section),
      slug: slugify(section),
      articles,
      indexPage
    }
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
