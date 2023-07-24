// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare module "*.md"

interface MarkdownFile {
  metadata?: {
    [key: string]: any;
  };
  default: {
    render: () => {
      html: string;
    };
  };
}

interface MarkdownMetadata {
  [key: string]: any;
}

interface DocumentationArticle {
  title: string
  path: string
  section: string
  content: string
  slug: string
  description: string
  headings: HeadingNode[]
  published?: boolean
  order?: number
}

interface DocumentationSection {
  title: string
  indexPage: DocumentationArticle
  articles: DocumentationArticle[]
}

interface DocumentationMetadata extends MarkdownMetadata {
  title?: string
  description?: string
  category?: string
  order?: number
  slug?: string
  published?: boolean
}

interface HeadingNode {
  text: string
  id?: string
  elName: string
}

interface BreadCrumb {
  title: string
  path: string
}

interface DocumentationCommit {
  author: string
  date: string
  message: string
}

interface DocUpdate {
  date: string
  commits: DocumentationCommit[]
}

interface BlogQueryOptions {
  limit?: number
  tag?: BlogPostTag
}

type BlogPostTag = "video" | "article"

interface BlogPost {
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
  tags: Array<BlogPostTag>
}

interface KitLink {
  href: string
  text: string
  icon?: string
}

interface KitFeature {
  title: string
  description?: string
  link?: KitLink
  list?: string[]
}

interface KitPage {
  title: string
  subtitle: string
  logo: string
  features: KitFeature[]
  examples: KitFeature[]
  cta: KitFeature
}
