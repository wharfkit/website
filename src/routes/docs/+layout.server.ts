import type { LayoutServerLoad } from './$types'
import { fetchGroupedDocs, orderSections, importedDocs } from "$lib/utils";

/**
 * Order the sections here.
 */
const displayOrder = [
    'SessionKit',
    'Antelope',
];

export const prerender = true

export const load = (async () => {
    const groupedDocs = await fetchGroupedDocs(importedDocs)
    const orderedDocs = orderSections(groupedDocs, displayOrder)

    return {
        rootPath: '/docs',
        rootTitle: 'Documentation',
        docs: orderedDocs,
    }
}) satisfies LayoutServerLoad
