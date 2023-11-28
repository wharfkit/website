import * as yaml from "js-yaml"
import { create, insertMultiple, search } from "@orama/orama"
import type { Orama, Results, SearchParams, TypedDocument } from "@orama/orama"
import { browser } from "$app/environment"
import { compile } from 'mdsvex'

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
} as const

export type PluginDocument = TypedDocument<Orama<typeof pluginSchema>>

export const db: Promise<Orama<typeof pluginSchema>> = create({
  schema: pluginSchema,
}).then(async (db) => {
  try {
    if (browser) return db
    console.log("Orama database instance created")
    const plugins: WharfkitPlugin[] = []
    const files = import.meta.glob("/src/lib/plugins/**.yaml", { as: "raw", eager: true })

    for (const path in files) {
      const content = yaml.load(files[path]) as WharfkitPlugin
      const readme = await getPluginReadme(content.sourceLink) || ""
      content.readme = readme
      plugins.push(content)
    }

    console.log("Loaded plugins from YAML")
    await insertMultiple(db, plugins)
    console.log("Inserted plugins into database")
    return db
  } catch (error) {
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

const getPluginReadme = async (repoLink: string) => {
  const link = repoLink
    .replace("github.com", "raw.githubusercontent.com")
    .concat("/master/README.md")
  const readme = await fetch(link)

  try {
    if (!readme.ok) throw new Error("Readme not found")
    const text = await readme.text()
    const html = await compile(text)
    if (!html) throw new Error("Markdown could not be compiled")
    return html.code
  } catch (error) {
    console.error(error)
    return ""
  }


}