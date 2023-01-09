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

const stripTags = (text: string) => /^<.*>(.*)<\/.*>$/gm.exec(text)[1]

const truncate = (text: string) => text.slice(0, 140)

export const load = async ({ params }) => {
  try {
    const markdown = await import(`../${params.slug}.md`)
    const content = markdown.default.render().html
    const seoImage = getImage(markdown.metadata)

    return {
      post: {
        ...markdown.metadata,
        content,
        date: new Date(markdown.metadata.date).toLocaleDateString("en-US", { timeZone: "UTC" }),
        slug: params.slug,
      },
      meta: {
        title: markdown.metadata.title,
        description: truncate(stripTags(content)),
        seoImage,
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
