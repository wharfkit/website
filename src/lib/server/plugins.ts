import * as yaml from "js-yaml"
import * as fs from "node:fs"
import { create, insertMultiple, search } from "@orama/orama"
import type { Orama, Results, SearchParams, TypedDocument } from "@orama/orama"
import { browser } from "$app/environment"

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
  link: "string",
} as const

export type PluginDocument = TypedDocument<Orama<typeof pluginSchema>>

export const db: Promise<Orama<typeof pluginSchema>> = create({
  schema: pluginSchema,
}).then(async (db) => {
  try {
    if (browser) return db
    console.log("Orama database instance created")
    const plugins: WharfkitPlugin[] = []
    const files = fs.readdirSync("src/lib/plugins")
    files.forEach((file) => {
      const plugin = yaml.load(
        fs.readFileSync("src/lib/plugins".concat("/", file), "utf8")
      ) as WharfkitPlugin
      plugins.push(plugin)
    })
    console.log("Loaded plugins from YAML")
    await insertMultiple(db, plugins)
    console.log("Inserted plugins into database")
    return db
  } catch (error) {
    console.log(error)
    return db
  }
})

export const getAllPlugins = async (options?: PluginQueryOptions) => {
  let searchParams: SearchParams<Orama<typeof pluginSchema>> = {}

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
