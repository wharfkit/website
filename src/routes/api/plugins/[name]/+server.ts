import type { RequestHandler } from './$types';
import { getPlugin } from '$lib/server/plugins';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  const plugin = await getPlugin(params.name);
  return json(plugin);
};
