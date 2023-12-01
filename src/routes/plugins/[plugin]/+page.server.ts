import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import { formatRelativeDate } from "$lib/utils"
import type { Result } from "@orama/orama"
import type { PluginDocument } from "$lib/server/plugins"

export const load = (async ({ params, fetch }) => {
  const { plugin: pluginName } = params

  const res = await fetch(`/api/plugins/${pluginName}`)
  if (!res) {
    throw error(404, "Plugin not found")
  }

  const { document }: Result<PluginDocument> = await res.json()
  const plugin = document

  const formattedPlugin: WharfkitPlugin = {
    ...plugin,
    lastPublishedDate: formatRelativeDate(plugin.lastPublishedDate),
  }

  const meta = {
    title: plugin.name.concat(" - Plugins"),
    description: plugin.description,
  }

  return {
    meta,
    plugin: formattedPlugin,
  }
}) satisfies PageServerLoad
