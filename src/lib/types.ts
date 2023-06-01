export interface DocumentationArticle {
  title: string
  path: string
  section: string
  content: string
  slug: string
  headings: HeadingNode[]
}

export interface DocumentationSections {
  [key: string]: DocumentationArticle[]
}

export interface HeadingNode {
  text: string
  id?: string
}

export interface BreadCrumb {
  title: string
  path: string
}
