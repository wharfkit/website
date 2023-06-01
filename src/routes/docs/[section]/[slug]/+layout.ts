import type { DocumentationArticle } from '$lib/types';
import type { LayoutLoad } from './$types';
import {error} from '@sveltejs/kit'


export const load = (async ({params, fetch}) => {
    try {
        const {section, slug} = params

        const response = await fetch(`/api/docs`)
        const allDocs: DocumentationArticle[] = await response.json()

        const doc = allDocs.find((doc) => doc.section === section && doc.slug === slug)


        return {
            doc
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies LayoutLoad;