// Groups an array of objects by a key

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

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
} 