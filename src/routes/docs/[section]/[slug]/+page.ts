import type { DocumentationArticle, HeadingNode } from '$lib/types';
import type { PageLoad } from './$types';
import {error} from '@sveltejs/kit'



export const load = (async ({params, fetch}) => {
    try {
        const {section, slug} = params

        const response = await fetch(`/api/docs`)
        const allDocs: DocumentationArticle[] = await response.json()

        const doc = allDocs.find((doc) => doc.section === section && doc.slug === slug)

        if (!doc) {
            throw error(404, 'Doc not found')
        }

        return {
            doc
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies PageLoad;

