import slugify from "@sindresorhus/slugify"




export const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {})


export async function fetchMarkdownPosts() {
      const allPostFiles = import.meta.glob("/src/routes/blog/**/*.md")
      const iterablePosts = Object.entries(allPostFiles)
    
      const allPosts = await Promise.all(
        iterablePosts.map(async ([source, resolver]) => {
          const resolved = await resolver()
          const { metadata } = resolved
          const sourcePath = source.slice(11, -3)
          const pathBase = source.slice(11, 23)
    
          const content = resolved.default.render().html
    
          const date = new Date(metadata.date).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            dateStyle: "short",
          })
    
          const slug = slugify(metadata.title)
    
          const path = pathBase + slug
    
          return {
            ...metadata,
            content,
            sourcePath,
            path,
            slug,
            date,
          }
        })
      )
    
      // Reverse Chronological Sort Order
      allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
    
      return allPosts
    }


export async function fetchDocs() {
    const allDocFiles = import.meta.glob('/src/lib/docs/**/*.md')
    const iterablePosts = Object.entries(allDocFiles)

    const allDocs = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const {metadata} = await resolver()
            const postPath = path.slice(8, -3)

            return {
                ...metadata,
                path: postPath,
            }
        })
    )

    return allDocs
