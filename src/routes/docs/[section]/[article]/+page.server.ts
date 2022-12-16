import type {PageServerLoad} from './$types'
import {error} from '@sveltejs/kit'
// import test from "src/lib/docs/get-started/installation.md"

let test = 'hello'

export const load: PageServerLoad = async ({params}) => {
    try {
        console.log(params)
        const post = await import(`../../../../lib/docs/${params.section}/${params.article}.md`)
        return {
            test,
            PostContent: post.default.render().html,
            meta: {...post.metadata, slug: params.article},
        }
    } catch (err) {
        throw error(404, err)
    }
}
