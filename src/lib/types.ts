export interface DocumentationArticle {
  title: string
  path: string
  section: string
}

export interface DocumentationSections {
  [key: string]: DocumentationArticle[]
}
