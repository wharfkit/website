import {fetchDocs} from '$lib/utils'
import {json} from '@sveltejs/kit'

export const GET = async () => {
    const allDocs = await fetchDocs()

    // TODO: sort docs

    return json(allDocs)
}
