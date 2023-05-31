import { fetchBlogPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  const allPosts = await fetchBlogPosts()

  return json(allPosts)
}
