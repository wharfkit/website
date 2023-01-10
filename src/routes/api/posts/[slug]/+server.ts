import { fetchMarkdownPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"
import slugify from "@sindresorhus/slugify"

export const GET = async ({ params }) => {
  const posts = await fetchMarkdownPosts()
  const post = posts.filter((post) => slugify(post.title) === params.slug)

  return json(post)
}
