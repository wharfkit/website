import { getBlogPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  const allPosts = await getBlogPosts()

  return json(allPosts)
}
