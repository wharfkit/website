import type { LayoutLoad } from './$types';

export const load = (async ({parent, params}) => {
    const {section} = params
    const {sections} = await parent()
    const docs = sections[section]
        
    return {
        section,
        docs
    };
}) satisfies LayoutLoad;