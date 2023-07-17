import type { PageServerLoad } from './$types';

export const prerender = true;

export const load = (async () => {

    // Set page metadata
    const meta = {
        title: 'Docs',
    };

    return {
        meta,
    };
}) satisfies PageServerLoad;