import { getDocs } from "$lib/utils"
import { json } from "@sveltejs/kit"

export const GET = async () => {
  const allDocs = await getDocs()

  // TODO: sort docs

  return json(allDocs)
}
