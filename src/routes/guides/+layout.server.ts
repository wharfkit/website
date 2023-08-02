import type { LayoutServerLoad } from './$types'
import { fetchGroupedDocs, orderSections, importedGuides } from "$lib/utils";

/**
 * Order the sections here.
 */
const displayOrder = [
    'SessionKit',
];

export const prerender = true

export const load = (async () => {
    const groupedDocs = await fetchGroupedDocs(importedGuides)
    const orderedDocs = orderSections(groupedDocs, displayOrder)

    return {
        rootPath: '/guides',
        rootTitle: 'Guides',
        docs: orderedDocs,
    }
}) satisfies LayoutServerLoad
