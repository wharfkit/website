import type { PageLoad } from './$types';
import {error} from '@sveltejs/kit'
import {capitalize} from '$lib/utils'

export const load = (async ({params, fetch, parent}) => {
    try {
        const {section, slug} = params

        const {sections} = await parent()

        const doc = sections[section].find((doc) => doc.slug === slug)

        if (!doc) {
            throw error(404, 'Doc not found')
        }

        const meta = {
            title: doc.title.concat(" - ", capitalize(doc.section)),
            description: doc.description,
        }

        return {
            doc,
            meta,
        }
    } catch (err) {
        throw error(404, 'Error fetching doc')
    }
}) satisfies PageLoad;

