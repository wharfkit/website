import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit'
import { capitalize } from '$lib/utils'
import { createBreadcrumbs } from '$lib/utils/docs'

export const load = (async ({ params, parent }) => {
    const { docs, rootPath, rootTitle, meta: parentMeta } = await parent()

    const section = docs.find((section) => section.slug === params.section)

    if (!section) {
        throw error(404, 'Section not found')
    }

    const doc = section.articles.find((doc) => doc.slug === params.slug)

    if (!doc) {
        throw error(404, 'Doc not found')
    }

    const meta = {
        ...parentMeta,
        title: doc.title.concat(" - ", parentMeta.title),
        description: doc.description,
    }

    return {
        section: section.title,
        doc,
        meta,
        headings: doc.headings,
        title: doc.title,
        toc: doc.toc,
        breadcrumbs: createBreadcrumbs({ rootPath, rootTitle, section: section.slug, doc }),
    }
}) satisfies PageLoad;

