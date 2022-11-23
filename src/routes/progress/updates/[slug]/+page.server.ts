import { error } from "@sveltejs/kit"

export const load = async ({ params }) => {
  try {
    const markdown = await import(`../${params.slug}.md`)
    return {
      post: {
        ...markdown.metadata,
        content: markdown.default.render().html,
        date: new Date(markdown.metadata.date).toLocaleDateString("en-US", { timeZone: "UTC" }),
        slug: params.slug,
      },
      meta: {
        title: markdown.metadata.title,
        description: markdown.default.render().html
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
