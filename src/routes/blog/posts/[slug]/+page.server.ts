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

export const load = async ({ params, fetch }) => {
  try {
    const { slug } = params
    const response = await fetch(`/api/posts/${slug}`)
    const [post] = await response.json()

    return {
      post: {
        ...post,
      },
      meta: {
        title: post.title,
        description: post.description,
        seoImage: getImage(post),
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
