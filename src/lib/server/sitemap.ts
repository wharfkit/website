import { getBlogPosts } from "$lib/utils"
import { fetchDocs, importedDocs, importedGuides } from "$lib/utils"
import pluginsData from "$lib/plugins/plugins.json"

const SITE_URL = "https://wharfkit.com"

export interface SitemapURL {
  loc: string
  lastmod?: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}

/**
 * Static routes that should be included in the sitemap
 */
const staticRoutes: SitemapURL[] = [
  { loc: "/", priority: 1.0, changefreq: "weekly" },
  { loc: "/about", priority: 0.8, changefreq: "monthly" },
  { loc: "/brand", priority: 0.6, changefreq: "monthly" },
  { loc: "/kits", priority: 0.9, changefreq: "weekly" },
  { loc: "/kits/account", priority: 0.8, changefreq: "weekly" },
  { loc: "/kits/contract", priority: 0.8, changefreq: "weekly" },
  { loc: "/kits/session", priority: 0.8, changefreq: "weekly" },
  { loc: "/docs", priority: 0.9, changefreq: "weekly" },
  { loc: "/guides", priority: 0.9, changefreq: "weekly" },
  { loc: "/blog", priority: 0.8, changefreq: "daily" },
  { loc: "/plugins", priority: 0.7, changefreq: "weekly" },
]

/**
 * Fetch all documentation pages
 */
async function getDocumentationURLs(): Promise<SitemapURL[]> {
  const docs = await fetchDocs(importedDocs)

  return docs
    .filter((doc) => doc.published === true)
    .map((doc) => ({
      loc: doc.path,
      priority: 0.7,
      changefreq: "weekly" as const,
    }))
}

/**
 * Fetch all guide pages
 */
async function getGuideURLs(): Promise<SitemapURL[]> {
  const guides = await fetchDocs(importedGuides)

  return guides
    .filter((guide) => guide.published === true)
    .map((guide) => ({
      loc: guide.path,
      priority: 0.7,
      changefreq: "weekly" as const,
    }))
}

/**
 * Fetch all blog post URLs
 */
async function getBlogURLs(): Promise<SitemapURL[]> {
  const posts = await getBlogPosts()

  return posts.map((post) => ({
    loc: post.path,
    lastmod: post.date,
    priority: 0.6,
    changefreq: "monthly" as const,
  }))
}

/**
 * Get all plugin URLs
 */
function getPluginURLs(): SitemapURL[] {
  const plugins = Object.values(pluginsData)

  return plugins.map((plugin) => ({
    loc: `/plugins/${plugin.name}`,
    priority: 0.5,
    changefreq: "weekly" as const,
  }))
}

/**
 * Generate all sitemap URLs
 */
export async function generateSitemapURLs(): Promise<SitemapURL[]> {
  const [docURLs, guideURLs, blogURLs] = await Promise.all([
    getDocumentationURLs(),
    getGuideURLs(),
    getBlogURLs(),
  ])

  const pluginURLs = getPluginURLs()

  return [...staticRoutes, ...docURLs, ...guideURLs, ...blogURLs, ...pluginURLs]
}

/**
 * Convert sitemap URLs to XML format
 */
export function generateSitemapXML(urls: SitemapURL[]): string {
  const urlEntries = urls
    .map((url) => {
      const loc = `${SITE_URL}${url.loc}`
      const lastmod = url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ""
      const changefreq = url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : ""
      const priority =
        url.priority !== undefined ? `\n    <priority>${url.priority}</priority>` : ""

      return `  <url>
    <loc>${loc}</loc>${lastmod}${changefreq}${priority}
  </url>`
    })
    .join("\n")

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`
}
