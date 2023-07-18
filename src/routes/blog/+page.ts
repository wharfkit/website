import type { BlogPost } from "../../lib/types"
import type { PageLoad } from "./$types"


export const load = (async ({ fetch, url }) => {
  const res = await fetch(`/api/posts${url.search}`)
  const posts: BlogPost[] = await res.json()

  const totalRes = await fetch(`/api/posts/total`)
  const totals: { total: number, tags: Record<string, number> } = await totalRes.json()

  return {
    posts,
    totals
  }
}) satisfies PageLoad
