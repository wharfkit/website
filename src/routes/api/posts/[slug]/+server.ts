import type { RequestHandler } from "./$types"
import { getBlogPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET: RequestHandler = async ({ params }) => {
  const posts = await getBlogPosts()
  const post = posts.filter((post) => post.slug === params.slug)
  return json(post)
}
