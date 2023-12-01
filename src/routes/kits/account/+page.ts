import type { PageLoad } from "./$types"

export const load = (async () => {
  const meta = {
    title: "Account Kit",
    description:
      "The Account Kit works with custom APIs for each Antelope blockchain, so you can easily gather any data you need.",
  }

  return {
    meta,
  }
}) satisfies PageLoad
