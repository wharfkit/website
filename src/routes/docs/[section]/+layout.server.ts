import type { LayoutServerLoad } from './$types';
import { createBreadcrumbs } from '$lib/utils';
import { error } from '@sveltejs/kit'

export const load = (async ({ parent, params }) => {
  const parentData = await parent()
  const { docs, rootPath, rootTitle, meta: parentMeta } = parentData

  const section = docs.find((section) => section.title.toLowerCase() === params.section)

  if (!section) {
    throw error(404)
  }

  const meta = {
    ...parentMeta,
    title: section.indexPage.title.concat(" - ", parentMeta.title),
    description: section.indexPage.description,
  }

  return {
    meta,
    section,
    toc: section.indexPage.toc,
    title: section.indexPage.title,
    headings: section.indexPage.headings,
    breadcrumbs: createBreadcrumbs({ rootPath, rootTitle, section: section.title }),
  };

}) satisfies LayoutServerLoad;