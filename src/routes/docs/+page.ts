import type { PageLoad } from './$types';

export const load = (async () => {
    const meta = {
        title: 'Docs',
    };
    return {
        meta
    };
}) satisfies PageLoad;