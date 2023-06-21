export interface DocumentationArticle {
  title: string
  path: string
  section: string
  content: string
  slug: string
  headings: HeadingNode[]
  description: string
  pathArray: string[]
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

export interface DocumentationCommit {
  author: string
  date: string
  message: string
}

export interface DocUpdate {
  date: string
  commits: DocumentationCommit[]
}

export interface BlogPost {
  title: string
  path: string
  slug: string
  date: string
  content: string
  sourcePath: string
  description: string
  image?: string
  videolink?: string
  transcriptlink: string
  tags: string[]
}