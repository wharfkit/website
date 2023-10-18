import * as yaml from "js-yaml"
import * as fs from "node:fs"

function loadPluginsFromYAML(directory: string) {
  const plugins: WharfkitPlugin[] = []
  const files = fs.readdirSync(directory)
  files.forEach(file => {
    const plugin = yaml.load(fs.readFileSync(directory.concat('/', file), 'utf8')) as WharfkitPlugin
    plugins.push(plugin)
  })
  return plugins
}

export const getAllPlugins = async (options?: PluginQueryOptions) => {
  const { tag, sort } = options || {}
  let plugins = loadPluginsFromYAML('src/lib/plugins')

  if (tag) {
    plugins = plugins.filter(plugin => tag && plugin.tags.includes(tag))
  }

  if (sort === "popular") {
    // TODO: Implement popular sort
  } else {
    // Default to sorting by last published date
    plugins = plugins.sort((a, b) => {
      return new Date(b.lastPublishedDate).getTime() - new Date(a.lastPublishedDate).getTime()
    })
  }

  return plugins
}

export const getPlugin = async (name: string) => {
  const plugins = await getAllPlugins()
  const plugin = plugins.find(plugin => plugin.name === name)
  return plugin
}