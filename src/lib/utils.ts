export const groupBy = (arr, key) =>
    arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {})

export async function fetchMarkdownPosts() {
    const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md')
    const iterablePosts = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePosts.map(async ([path, resolver]) => {
            const {metadata} = await resolver()
            const postPath = path.slice(11, -3)

            return {
                meta: metadata,
                path: postPath,
            }
        })
    )

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
}
