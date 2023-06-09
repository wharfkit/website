import type {LayoutLoad} from './$types'
import {groupBy, formatSectionTitle} from '$lib/utils'
import type { DocumentationArticle, DocumentationSections } from '../../lib/types'

export const prerender = true

const sectionOrder = [
    'antelope', 
    'wharf', 
]

export const load = (async ({fetch}) => {
    const response = await fetch('/api/docs')
    const docs: DocumentationArticle[] = await response.json()

    const sections: DocumentationSections = groupBy(docs, 'section')

    // Sort the sections by the order of the sectionOrder array
    const sortedSections = Object.keys(sections)
        .sort((a, b) => sectionOrder.indexOf(a) - sectionOrder.indexOf(b))
        .reduce((acc, key) => {
            acc[key] = sections[key]
            return acc
        }, {} as DocumentationSections)


    return {
        sections: sortedSections,
    }
}) satisfies LayoutLoad
