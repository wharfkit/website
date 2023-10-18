import type { PageServerLoad } from './$types';
import { formatRelativeDate } from '$lib/utils';

export const load = (async ({ url, fetch }) => {
  const res = await fetch(`/api/plugins${url.search}`)
  const allPlugins: WharfkitPlugin[] = await res.json()
  const formattedPlugins = allPlugins.map(plugin => {
    return {
      ...plugin,
      lastPublishedDate: formatRelativeDate(plugin.lastPublishedDate)
    };
  });
  return {
    allPlugins: formattedPlugins
  };
}) satisfies PageServerLoad;