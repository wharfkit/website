import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit'
import { capitalize } from '$lib/utils'
import { createBreadcrumbs } from '$lib/utils/docs'

export const load = (async ({ params, parent }) => {
    try {
        const { section, slug } = params

        const { sections } = await parent()

        const doc = sections[section].find((doc) => doc.slug === slug)

        if (!doc) {
            throw error(404, 'Doc not found')
        }

        const meta = {
            title: doc.title.concat(" - ", capitalize(doc.section)),
            description: doc.description,
        }

        return {
            section,
            doc,
            meta,
            headings: doc.headings,
            title: doc.title,
            breadcrumbs: createBreadcrumbs(section, doc),
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies PageLoad;

