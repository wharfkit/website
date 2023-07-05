import type { PageLoad } from './$types';
import sessionKit from './sessionKit';
import accountKit from './accountKit';
import contractKit from './contractKit';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
    const { kit } = params;

    let kitPage
    if (kit === 'session') {
        kitPage = sessionKit
    } else if (kit === 'account') {
        kitPage = accountKit
    } else if (kit === 'contract') {
        kitPage = contractKit
    } else {
        throw error(404, 'Kit not found')
    }


    return {
        params,
        kit: kitPage,
    };
}) satisfies PageLoad;