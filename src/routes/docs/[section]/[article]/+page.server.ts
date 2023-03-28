import type {PageServerLoad} from './$types'
import {error} from '@sveltejs/kit'

export const load = (async ({params}) => {
    try {
        const {article, section} = params
        const post = await import(`../../../../lib/docs/${section}/${article}.md`)
        return {
            PostContent: post.default.render().html,
            meta: {...post.metadata, slug: article},
        }
    } catch (err) {
        throw error(404, 'Error ' + JSON.stringify(err, null, 2))
    }
}) satisfies PageServerLoad
