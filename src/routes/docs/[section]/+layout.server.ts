import type { LayoutServerLoad } from './$types';
import { createBreadcrumbs, handleKitRedirect } from '$lib/utils';
import { error } from '@sveltejs/kit'

export const load = (async ({ parent, params }) => {
  const parentData = await parent()
  const { docs, rootPath, rootTitle, meta: parentMeta } = parentData
  let pathSection = params.section

  handleKitRedirect(params)

  const section = docs.find((section) => section.slug === pathSection)

  if (!section) {
    throw error(404, "Section not found")
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