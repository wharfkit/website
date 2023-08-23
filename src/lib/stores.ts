import { writable } from "svelte/store"

export const activeTocSection = writable<string>("")
export const scrollPosition = writable(0)
export const scrollDirection = writable<"up" | "down">("down")