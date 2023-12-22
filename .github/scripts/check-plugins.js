import { readFile, writeFile } from "fs/promises"

const PLUGIN_LIST_PATH = "./src/lib/plugin-directory.txt"
const PLUGIN_INFO_PATH = "./src/lib/plugins/plugins.json"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_HEADERS = {
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "GitHub Actions",
  },
}

async function importTxtFile() {
  try {
    const text = await readFile(PLUGIN_LIST_PATH, "utf-8")
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    console.log(`Imported ${lines.length} lines from ${PLUGIN_LIST_PATH}`)
    return lines
  } catch (error) {
    throw new Error(`Error importing plugin directory text file: ${error.message}`)
  }
}

/**
 * @returns {Promise<Object<string, any>>}
 * */
async function importPluginJson() {
  try {
    const text = await readFile(PLUGIN_INFO_PATH, "utf-8")
    const json = JSON.parse(text)
    console.log(`Imported ${Object.keys(json).length} plugins from ${PLUGIN_INFO_PATH}`)
    return json
  } catch (error) {
    throw new Error(`Error importing plugin information json file: ${error.message}`)
  }
}

/**
 * @param {string} repo
 * @returns {{name: string, pluginId: string, description: string, tags: string[], author: string, authorIcon: string, sourceLink: string, license: string}}
 * */
async function fetchRepo(repo) {
  const url = `https://api.github.com/repos/${repo}`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error ${response.status}: Cannot fetch repo ${repo}`
    throw new Error(message)
  }
  const repoData = await response.json()
  return {
    name: repoData.name,
    pluginId: repoData.full_name,
    description: repoData.description,
    tags: repoData.topics,
    author: repoData.owner.login,
    authorIcon: repoData.owner.avatar_url,
    sourceLink: repoData.html_url,
    license: repoData.license.name,
  }
}

/**
 * @param {string} repo
 * @returns {{version: string, lastPublishedDate: string } | {}}
 * */
async function fetchRelease(repo) {
  const url = `https://api.github.com/repos/${repo}/releases/latest`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error ${response.status}: Cannot fetch latest release for ${repo}`
    // Not throwing so process can continue
    console.error(message)
    return {}
  }
  const release = await response.json()
  return {
    version: release.tag_name,
    lastPublishedDate: release.published_at,
  }
}

/**
 * @param {string} repo
 * @returns {{readme: string } | {}}
 * */
async function fetchReadme(repo) {
  const url = `https://api.github.com/repos/${repo}/readme`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error ${response.status}: Cannot fetch readme for ${repo}`
    // Not throwing so process can continue
    console.error(message)
    return {}
  }
  const { content } = await response.json()
  const readme = atob(content)
  return {
    readme,
  }
}

/**
 * @param {string} repo
 * */
async function fetchSha(repo) {
  const url = `https://api.github.com/repos/${repo}/commits`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error ${response.status}: Cannot fetch commit for ${repo}`
    throw new Error(message)
  }
  const [result] = await response.json()
  return result.sha
}

/**
 * @param {string} plugin
 * */
async function fetchPluginInfo(plugin) {
  console.log(`Fetching info for ${plugin}...`)
  const [pluginRepo, pluginRelease, pluginReadme] = await Promise.all([
    fetchRepo(plugin),
    fetchRelease(plugin),
    fetchReadme(plugin),
  ])
  return { ...pluginRepo, ...pluginRelease, ...pluginReadme }
}

async function main() {
  try {
    const pluginList = await importTxtFile()
    const currentPluginData = await importPluginJson()
    const updatedPlugins = await Promise.all(
      pluginList.map(async (plugin) => {
        // Check if no updates are needed
        if (currentPluginData[plugin]) {
          const remoteSha = await fetchSha(plugin)
          const { sha: currentSha } = currentPluginData[plugin]
          if (remoteSha === currentSha) {
            console.log(`No updates found for ${plugin}`)
            // Re-use existing data
            return [plugin, currentPluginData[plugin]]
          }
        }

        const pluginInfo = await fetchPluginInfo(plugin)
        return [plugin, pluginInfo]
      })
    )
    const updatedPluginsMap = new Map(updatedPlugins)
    const updatedPluginsJson = Object.fromEntries(updatedPluginsMap)
    const updatedPluginsJsonString = JSON.stringify(updatedPluginsJson)
    await writeFile(PLUGIN_INFO_PATH, updatedPluginsJsonString)
  } catch (error) {
    console.error(error)
  }
}

main()
