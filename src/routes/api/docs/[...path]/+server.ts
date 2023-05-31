import { getDoc } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async ({ params }) => {
  const doc = await getDoc(params.path)

  return json(doc)
}
