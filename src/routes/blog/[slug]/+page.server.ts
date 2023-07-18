import { error } from "@sveltejs/kit"
import type { PageServerLoad } from './$types';
import { getBlogPosts } from "$lib/utils"
import { getImage } from "$lib/utils/blog"

export const load = (async ({ params }) => {
  try {
    const posts = await getBlogPosts()
    const post = posts.find((post) => post.slug === params.slug)

    if (!post) {
      throw error(404, "Post not found")
    }

    return {
      post,
      meta: {
        title: post.title,
        description: post.description,
        metaImage: getImage(post),
      },
    }
  } catch (e) {
    throw error(404, "Post not found")
  }
}) satisfies PageServerLoad;
