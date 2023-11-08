import type { PageLoad } from "./$types"

export const load = (async () => {
  const meta = {
    title: "Session Kit",
    description: "Create an experience that your users will love.",
  }

  return {
    meta,
  }
}) satisfies PageLoad
