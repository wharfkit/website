import { getBlogPosts } from "$lib/utils"
import { json, error } from "@sveltejs/kit"
import { postsPerPage } from "$lib/config.js"
import type { BlogPostTag, BlogQueryOptions } from "$lib/types.js"

export const GET = async ({ url }) => {
  try {
    const params = url.searchParams

    const options: BlogQueryOptions = {
      limit: Number(params.get("limit")) || postsPerPage,
      tag: params.get("tag") as BlogPostTag || undefined,
    }

    const allPosts = await getBlogPosts(options)

    return json(allPosts)

  } catch (e) {
    throw error(500, "Error getting blog posts." + e)
  }
}
