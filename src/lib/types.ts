export interface DocumentationArticle {
  title: string
  path: string
  section: string
}

export interface DocumentationSections {
  [key: string]: DocumentationArticle[]
}

export interface HeadingNode {
  tagName: string
  text: string
  id: string | null
}

export interface BreadCrumb {
  title: string
  path: string
}
