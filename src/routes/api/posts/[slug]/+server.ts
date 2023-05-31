import { getBlogPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async ({ params }) => {
  const posts = await getBlogPosts()
  const post = posts.filter((post) => post.slug === params.slug)

  return json(post)
}
