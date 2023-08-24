// Groups an array of objects by a key

import type { LayoutParams } from "../../routes/$types"
import { redirect } from "@sveltejs/kit"

type Grouped<T> = {
  [key: string]: T[]
}

export function groupBy<T extends Record<string, any>>(arr: T[], key: keyof T): Grouped<T> {
  return arr.reduce((acc: Grouped<T>, item: T) => {
    const groupKey = String(item[key])
    acc[groupKey] = [...(acc[groupKey] || []), item]
    return acc
  }, {})
}

// Capitalize first letter of a string
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Scroll to top of page
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Handle redirects for old kit names

type KitsRedirects = {
  [key: string]: string
}

const kits: KitsRedirects = {
  "sessionkit": "session-kit",
  "accountkit": "account-kit",
  "contractkit": "contract-kit",
  "starterkit": "starter-kit",
}
export function handleKitRedirect(rootPath: string, params: LayoutParams) {
  if (!params.section) return

  if (params.section in kits) {
    let path = rootPath.concat("/", kits[params.section])
    if (params.slug) {
      path = path.concat('/', params.slug)
    }
    throw redirect(301, path)
  }
}