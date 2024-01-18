import { create, insertMultiple, search } from "@orama/orama"
import type { Orama, Results, SearchParams, TypedDocument } from "@orama/orama"
import { browser } from "$app/environment"
import parse from "./md"
import _pluginsJson from "../plugins/plugins.json"
const pluginsJson = _pluginsJson as unknown as Record<string, WharfkitPlugin>

const removeNullUndefined = <T extends Record<string, any>>(obj: T) =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null)) as {
    [K in keyof T as T[K] extends null | undefined ? never : K]: T[K]
  }

const pluginSchema = {
  name: "string",
  description: "string",
  tags: "string[]",
  author: "string",
  authorIcon: "string",
  lastPublishedDate: "string",
  version: "string",
  sourceLink: "string",
  license: "string",
  readme: "string",
  pluginId: "string",
} as const

export type PluginDocument = TypedDocument<Orama<typeof pluginSchema>>

export const db: Promise<Orama<typeof pluginSchema>> = create({
  schema: pluginSchema,
}).then(async (db) => {
  try {
    if (browser) return db
    console.log("Orama database instance created")

    const pluginsPromises = Object.values(pluginsJson)
      .map((plugin) => removeNullUndefined(plugin))
      .map((plugin) => formatReadme(plugin))

    const plugins = await Promise.all(pluginsPromises)
    console.log("Loaded plugins from JSON")

    await insertMultiple(db, plugins)
    console.log("Inserted plugins into database")
    return db
  } catch (error) {
    console.error(error)
    return db
  }
})

export const getAllPlugins = async (options?: PluginQueryOptions) => {
  let searchParams: SearchParams<Orama<typeof pluginSchema>> = {
    limit: 100,
  }

  if (options?.query) {
    searchParams["term"] = options.query
  }

  if (options?.tag) {
    searchParams["where"] = { tags: options.tag }
  }

  if (options?.sort) {
    if (options.sort === "latest") {
      searchParams["sortBy"] = { property: "lastPublishedDate", order: "DESC" }
    }
  }

  const results: Results<PluginDocument> = await search(await db, searchParams)
  return results.hits
}

export const getPlugin = async (name: string) => {
  const result: Results<PluginDocument> = await search(await db, {
    where: { name: name },
  })
  return result.hits[0]
}

const formatReadme = async (plugin: WharfkitPlugin) => {
  try {
    const { readme } = plugin
    const { value } = await parse(readme)
    return { ...plugin, readme: value }
  } catch (error) {
    console.error(error)
    return plugin
  }
}
