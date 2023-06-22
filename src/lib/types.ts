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


export interface KitLink {
  href: string;
  text: string;
  icon?: string;
}

export interface KitFeature {
  title: string;
  description: string;
  link?: KitLink;
}

export interface KitPage {
  title: string;
  subtitle: string;
  logo: string;
  logoTransparent: string;
  features: KitFeature[];
  examples: KitFeature[];
  cta: KitFeature;
}
