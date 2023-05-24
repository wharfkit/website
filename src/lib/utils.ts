import slugify from "@sindresorhus/slugify"

type Grouped<T> = {
  [key: string]: T[]
}

// Groups an array of objects by a key

export function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Grouped<T> {
  return arr.reduce((acc: Grouped<T>, item: T) => {
    const groupKey = String(item[key])
    acc[groupKey] = [...(acc[groupKey] || []), item]
    return acc
  }, {})
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

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
  const allDocFiles = import.meta.glob("/src/lib/docs/**/*.md")
  const iterablePosts = Object.entries(allDocFiles)

  const allDocs = await Promise.all(
    iterablePosts.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(8, -3)
      const pathArray = postPath.split("/")
      const section = pathArray[2]

      // remove dashes from section
      const sectionName = section.replace(/-/g, " ")
      console.log(postPath, sectionName)

      // capitalize first letter of each word in sectionName
      const sectionTitle = sectionName.replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )

      return {
        ...metadata,
        path: postPath,
        section: sectionTitle,
      }
    })
  )

  return allDocs
}
