import { fetchMarkdownPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  // TODO: sort posts

  return json(allPosts)
}
