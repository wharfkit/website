import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
  console.log(params)
  try {
    const post = await import(`../${params.slug}.md`)
    return {
      PostContent: post.default.render().html,
      meta: { ...post.metadata, slug: params.slug },
    }
  } catch (err) {
    throw error(404, err)
  }
}
