import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPlugin } from '$lib/utils';
import { formatRelativeDate } from '$lib/utils';

export const load = (async ({ params }) => {
  const { plugin: pluginName } = params
  const plugin = await getPlugin(pluginName)

  if (!plugin) {
    throw error(404, "Plugin not found")
  }

  const formattedPlugin = {
    ...plugin,
    lastPublishedDate: formatRelativeDate(plugin.lastPublishedDate)
  }
  return { plugin: formattedPlugin };
}) satisfies PageServerLoad;