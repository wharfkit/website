import type { PageLoad } from "./$types"

export const prerender = true

export const load = (async () => {
  const meta = {
    title: "Kits",
    description:
      "Wharf's modular design was created by expert blockchain developers in order to make sure that no one ever has to reinvent the wheel. The Session, Contract, and Account kits can be used separately or in an endless number of combinations, and can also be customized through the use of plugins.",
  }
  return {
    meta,
  }
}) satisfies PageLoad
