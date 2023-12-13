import type { RequestHandler } from "./$types"
import { getTotalBlogPosts, getTotalBlogPostsByTag } from "$lib/utils/blog"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const total = await getTotalBlogPosts()
  const tags = await getTotalBlogPostsByTag()
  return json({ total, tags })
}
