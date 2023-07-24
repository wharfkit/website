import type { PageLoad } from "./$types"

export const prerender = true

export const load = (async () => {
  const meta = {
    title: "About",
    description: "Wharf is a free, open-source framework of intuitive developer tools for building web-based apps on Antelope blockchains. Its three modular kits (Session, Account, and Contract) can be used separately or combined to create any number of web3 applications."
  }
  return {
    meta,
  }
}) satisfies PageLoad