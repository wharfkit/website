import type { LayoutServerLoad } from './$types'
import { fetchGroupedDocs, orderSections } from "$lib/utils";

/**
 * Order the sections here.
 */
const displayOrder = [
    'SessionKit',
    'Antelope',
];

export const prerender = true

export const load = (async () => {
    const groupedDocs = await fetchGroupedDocs()
    const orderedDocs = orderSections(groupedDocs, displayOrder)

    return {
        docs: orderedDocs,
    }
}) satisfies LayoutServerLoad
