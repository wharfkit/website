import type { LayoutServerLoad } from './$types'
import docs from './importDocs'

export const prerender = true

export const load = (() => {
    return {
        docs
    }
}) satisfies LayoutServerLoad
