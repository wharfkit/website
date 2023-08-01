import { redirect } from "@sveltejs/kit"
import type { PageLoad } from "./$types"

export const load = async ({ params }) => {
  const { slug } = params
  throw redirect(301, `/blog/${slug}`)
}
