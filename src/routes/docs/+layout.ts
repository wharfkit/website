import type {PageLoad} from './$types'
import {groupBy} from '$lib/utils'

export const load: PageLoad = async ({fetch}) => {
    const response = await fetch('api/docs')
    const docs = await response.json()

    const sections = groupBy(docs, 'section')

    return {
        docs,
        sections,
    }
}
