import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
  try {
    const post = await import(`../${params.slug}.md`)
    return {
      PostContent: post.default.render().html,
      meta: {
        ...post.metadata,
        date: new Date(post.metadata.date).toLocaleDateString("en-US", { timeZone: "UTC" }),
        slug: params.slug,
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
