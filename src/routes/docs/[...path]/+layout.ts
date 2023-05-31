import type { DocumentationArticle } from '../../../lib/types';
import type { LayoutLoad } from './$types';
import {error} from '@sveltejs/kit'


export const load = (async ({params, fetch}) => {
    try {
        const {path} = params
        const response = await fetch(`/api/docs/${path}`)
        const doc: DocumentationArticle = await response.json()

        return {
            doc
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies LayoutLoad;