import type { PageLoad } from "./$types"

export const prerender = true

export const load = (async () => {
  const meta = {
    title: "Brand",
    description: "We would like to make it as easy as possible for you to reference Wharf in your project, so we've prepared all the essentials for you here: the logo, colors, font, and background images. If you would like to go further in your usage of the Wharf brand, please download the Brand Guidelines PDF for additional images and information.",
  }
  return {
    meta,
  }
}) satisfies PageLoad