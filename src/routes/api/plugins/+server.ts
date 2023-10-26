import { getAllPlugins } from "$lib/utils"
import { json, error } from "@sveltejs/kit"

export const GET = async ({ url }) => {
  try {
    const params = url.searchParams

    const options: PluginQueryOptions = {}

    if (params.get("tag")) {
      options.tag = String(params.get("tag"))
    }

    if (params.get("sort")) {
      options.sort = String(params.get("sort"))
    }

    if (params.get("q")) {
      options.query = String(params.get("q"))
    }

    const allPlugins = await getAllPlugins(options)

    return json(allPlugins)

  } catch (e) {
    throw error(500, "Error getting plugins" + e)
  }
}

