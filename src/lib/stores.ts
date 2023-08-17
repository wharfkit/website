import { writable } from "svelte/store"

export const intersectingSections = writable<string[]>([])
