import type { LayoutServerLoad } from "./$types"
import { fetchGroupedDocs, orderSections, importedGuides } from "$lib/utils"

/* Order the sections here. */
/* prettier-ignore */
const displayOrder = [
    "tutorials",
    "session-kit",
    "contract-kit",
    "starter-kits"
]

export const prerender = true

export const load = (async () => {
  const groupedDocs = await fetchGroupedDocs(importedGuides)
  const orderedDocs = orderSections(groupedDocs, displayOrder)

  const meta = {
    title: "Guides",
  }

  return {
    rootPath: "/guides",
    rootTitle: "Guides",
    docs: orderedDocs,
    meta,
  }
}) satisfies LayoutServerLoad
