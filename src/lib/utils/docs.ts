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

export function makeDoc(rawsection: string, markdown: MarkdownFile): DocumentationArticle {
  const content = markdown.default.render().html
  // const { metadata } = markdown
  const title = getTitle(content)
  const slug = slugify(title)
  const section = rawsection.toLowerCase()
  const path = `/docs/${section}/${slug}`

  const doc = {
    // ...metadata,
    path,
    section,
    title,
    slug,
    content,
    headings: parseHeadings(content),
    description: getFirstParagraph(content),
  }

  return doc
}

export function makeDocs(section: { [key: string]: MarkdownFile[] }): DocumentationSection {
  const [sectionTitle, markdowns] = Object.entries(section)[0]
  const articles = markdowns.map((markdown) => makeDoc(sectionTitle, markdown))
  return { title: sectionTitle.toLowerCase(), articles }
}
