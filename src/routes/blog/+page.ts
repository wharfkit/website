import type { PageLoad } from "./$types"

export const load = (async ({ fetch, url }) => {
  const res = await fetch(`/api/posts${url.search}`)
  const posts: BlogPost[] = await res.json()

  const totalRes = await fetch(`/api/posts/total`)
  const totals: { total: number; tags: Record<string, number> } = await totalRes.json()

  const meta = {
    title: "Blog",
    description:
      "Want to keep up with the latest Wharf developments? Check out our blog for regular video updates and technical previews.",
  }

  return {
    posts,
    totals,
    meta,
  }
}) satisfies PageLoad
