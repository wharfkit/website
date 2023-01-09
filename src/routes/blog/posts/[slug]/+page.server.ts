import { error } from "@sveltejs/kit"

const defaultImage =
  "https://assets.wharfkit.com/wharf-brand-assets/logo/svg/wharf-logo-bright-vector-no-bg.svg"

const getThumbnail = (url: string) => {
  const videoID = /^.*\/(.*)$/m.exec(url)[1]
  return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
}

const getImage = (metadata) => {
  if (metadata.image) {
    return metadata.image
  } else if (metadata.videolink) {
    return getThumbnail(metadata.videolink)
  } else {
    return defaultImage
  }
}

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
        description: markdown.metadata.description,
        seoImage: getImage(markdown.metadata),
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
