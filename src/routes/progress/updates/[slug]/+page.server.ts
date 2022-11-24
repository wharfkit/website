import { error } from "@sveltejs/kit"


let getThumbnail = (url: string) => {
  let videoID = /^.*\/(.*)$/m.exec(url)[1]
  return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`
}

let stripTags = (text: string) => /^<.*>(.*)<\/.*>$/gm.exec(text)


export const load = async ({ params }) => {
  try {
    const markdown = await import(`../${params.slug}.md`)
    let content = markdown.default.render().html
    return {
      post: {
        ...markdown.metadata,
        content,
        date: new Date(markdown.metadata.date).toLocaleDateString("en-US", { timeZone: "UTC" }),
        slug: params.slug,
      },
      meta: {
        title: markdown.metadata.title,
        description: stripTags(content),
        seoImage: getThumbnail(markdown.metadata.videolink)
      },
    }
  } catch (err) {
    throw error(404, err)
  }
}
