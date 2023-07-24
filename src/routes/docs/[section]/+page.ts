import type { PageLoad } from './$types';
import { createBreadcrumbs } from '$lib/utils';
import { error } from '@sveltejs/kit'


export const load = (async ({ parent, params }) => {

    const { docs } = await parent()

    const section = docs.find((section) => section.title.toLowerCase() === params.section)

    if (!section) {
        throw error(404)
    }

    const meta = {
        title: section.indexPage.title,
        description: section.indexPage.description,
    }

    return {
        meta,
        section,
        breadcrumbs: createBreadcrumbs(section.title),
    };
}) satisfies PageLoad;