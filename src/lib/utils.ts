export async function fetchMarkdownPosts() {
  const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
  const iterablePosts = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
      iterablePosts.map(async ([path, resolver]) => {
        //   const { metadata } = await resolver()
          const resolved = await resolver()
          const {metadata} = resolved 
          const postPath = path.slice(11, -3)

          return {
              meta: metadata,
              text: resolved.default.render().html,
              path: postPath
          }
      })
  )

  return allPosts
}