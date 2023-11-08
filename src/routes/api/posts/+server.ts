import { getBlogPosts } from "$lib/utils"
import { json, error } from "@sveltejs/kit"
import { postsPerPage } from "$lib/config.js"
import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async ({ url }) => {
  try {
    const params = url.searchParams

    const options: BlogQueryOptions = {
      limit: Number(params.get("limit")) || postsPerPage,
      tag: (params.get("tag") as BlogPostTag) || undefined,
      sort: (params.get("sort") as BlogPostSort) || undefined,
    }

    const allPosts = await getBlogPosts(options)

    return json(allPosts)
  } catch (e) {
    throw error(500, "Error getting blog posts." + e)
  }
}
