export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('/src/routes/progress/**/*.md')
  const iterablePosts = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
      iterablePosts.map(async ([path, resolver]) => {
          const resolved = await resolver()
          const {metadata} = resolved 
          const postPath = path.slice(11, -3)
          
          return {
              ...metadata,
              text: resolved.default.render().html,
              path: postPath,
              date: new Date(metadata.date).toLocaleDateString("en-US", {timeZone: "UTC"})
          }
      })
  )
  
  // Reverse Chronological Sort Order
  allPosts.sort((a,b) => new Date(b.date) - new Date(a.date))
  
  return allPosts
}