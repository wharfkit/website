import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit'
import { capitalize } from '$lib/utils'
import { createBreadcrumbs } from '$lib/utils/docs'

export const load = (async ({ params, parent }) => {
    try {
        const { slug } = params

        const { docs } = await parent()

        const section = docs.find((section) => section.title === params.section)

        if (!section) {
            throw error(404, 'Section not found')
        }

        const doc = section.articles.find((doc) => doc.slug === slug)

        if (!doc) {
            throw error(404, 'Doc not found')
        }

        const meta = {
            title: doc.title.concat(" - ", capitalize(doc.section)),
            description: doc.description,
        }

        return {
            section: section.title,
            doc,
            meta,
            headings: doc.headings,
            title: doc.title,
            breadcrumbs: createBreadcrumbs(section.title, doc),
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies PageLoad;

