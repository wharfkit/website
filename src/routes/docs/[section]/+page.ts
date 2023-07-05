import type { PageLoad } from './$types';
import { createBreadcrumbs } from '$lib/utils';

export const load = (async ({ parent, params }) => {
    const { section } = params
    const { sections } = await parent()
    const docs = sections[section]

    return {
        section,
        docs,
        breadcrumbs: createBreadcrumbs(section),
    };
}) satisfies PageLoad;