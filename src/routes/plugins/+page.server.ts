import type { PageServerLoad } from './$types';
import { formatRelativeDate } from '$lib/utils';
import type { Result } from '@orama/orama';
import type { PluginDocument } from '$lib/utils/plugins';

export const load = (async ({ url, fetch }) => {
  const res = await fetch(`/api/plugins${url.search}`)
  const allDocuments: Result<PluginDocument>[] = await res.json()
  const formattedPlugins = allDocuments.map(({ document }) => {
    return {
      ...document,
      lastPublishedDate: formatRelativeDate(document.lastPublishedDate)
    };
  });

  return {
    allPlugins: formattedPlugins
  };
}) satisfies PageServerLoad;