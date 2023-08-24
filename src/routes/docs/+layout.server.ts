import type { LayoutServerLoad } from "./$types"
import { fetchGroupedDocs, orderSections, importedDocs } from "$lib/utils"

/**
 * Order the sections here.
 */
// prettier-ignore
const displayOrder = [
  "session-kit",
  "contract-kit",
  "account-kit",
  "utilities",
  "antelope"
]

export const prerender = true

export const load = (async () => {
  const groupedDocs = await fetchGroupedDocs(importedDocs)
  const orderedDocs = orderSections(groupedDocs, displayOrder)

  const meta = {
    title: "Docs",
  }

  return {
    rootPath: "/docs",
    rootTitle: "Documentation",
    docs: orderedDocs,
    meta,
  }
}) satisfies LayoutServerLoad
