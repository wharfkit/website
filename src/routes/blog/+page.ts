import type { BlogPost } from "../../lib/types"
import type { PageLoad } from "./$types"

export const load = (async ({ fetch }) => {
  const response = await fetch("/api/posts")
  const posts = await response.json() as BlogPost[]

  return {
    posts,
  }
}) satisfies PageLoad
