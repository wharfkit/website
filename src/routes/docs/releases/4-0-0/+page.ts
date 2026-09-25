import { redirect } from "@sveltejs/kit"

export const prerender = false

export const load = async () => {
  throw redirect(301, "/docs/releases/4-0-1")
}
