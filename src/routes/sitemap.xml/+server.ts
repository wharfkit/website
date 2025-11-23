import { generateSitemapURLs, generateSitemapXML } from "$lib/server/sitemap"
import type { RequestHandler } from "./$types"

export const prerender = true

export const GET: RequestHandler = async () => {
  try {
    const urls = await generateSitemapURLs()
    const xml = generateSitemapXML(urls)
    
    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "max-age=0, s-maxage=3600",
      },
    })
  } catch (error) {
    console.error("Error generating sitemap:", error)
    return new Response("Error generating sitemap", { status: 500 })
  }
}
