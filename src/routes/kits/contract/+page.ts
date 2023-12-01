import type { PageLoad } from './$types';

export const load = (async () => {

    const meta = {
        title: "Contract Kit",
        description: "Easily read and write to the blockchain.",
    }

    return {
        meta,
    };
}) satisfies PageLoad;