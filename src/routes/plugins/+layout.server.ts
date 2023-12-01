import type { LayoutServerLoad } from "./$types"

export const prerender = true

export const load = (async () => {
  const meta = {
    title: "Plugins",
    description: "WharfKit plugin directory",
  }

  return {
    rootPath: "/plugins",
    rootTitle: "Plugins",
    meta,
  }
}) satisfies LayoutServerLoad
