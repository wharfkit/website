import type { PageLoad } from "./$types"

export const load = (async () => {
  const meta = {
    title: "Account Kit",
    description: "Coming soon.",
  }

  return {
    meta,
  }
}) satisfies PageLoad
