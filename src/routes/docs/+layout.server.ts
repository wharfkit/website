import type { LayoutServerLoad } from './$types'
import { fetchDocs, orderSections } from "$lib/utils";

/**
 * Order the sections here.
 */
const displayOrder = [
    'SessionKit',
    'Antelope',
];

export const prerender = true

export const load = (async () => {
    const docs = await fetchDocs()
    const orderedDocs = orderSections(docs, displayOrder)

    return {
        docs: orderedDocs,
    }
}) satisfies LayoutServerLoad
