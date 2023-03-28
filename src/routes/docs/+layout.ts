import type {LayoutLoad} from './$types'
import {groupBy} from '$lib/utils'
import type { DocumentationArticle, DocumentationSections } from '../../lib/types'

export const load = (async ({fetch}) => {
    const response = await fetch('/api/docs')
    const docs: DocumentationArticle[] = await response.json()

    const sections: DocumentationSections = groupBy(docs, 'section')

    return {
        docs,
        sections,
    }
}) satisfies LayoutLoad
