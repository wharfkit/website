import { readFile } from "fs/promises"

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

    return lines
  } catch (error) {
    throw new Error(`Error importing plugin directory text file: ${error.message}`)
    return []
  }
}

async function importPluginJson() {
  try {
    const text = await readFile(PLUGIN_INFO_PATH, "utf-8")
    const json = JSON.parse(text)
    return json
  } catch (error) {
    throw new Error(`Error importing plugin information json file: ${error.message}`)
  }
}

/**
 * @param {string} repo
 * */
async function fetchRepo(repo) {
  const url = `https://api.github.com/repos/${repo}`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Cannot fetch repo ${repo}: Error ${response.status}`
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
 * */
async function fetchRelease(repo) {
  const url = `https://api.github.com/repos/${repo}/releases/latest`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Cannot fetch latest release for ${repo}: Error ${response.status}`
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
 * */
async function fetchReadme(repo) {
  const url = `https://api.github.com/repos/${repo}/readme`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Cannot fetch readme for ${repo}: Error ${response.status}`
    // Not throwing so process can continue
    console.error(message)
    return {}
  }
  const { content } = await response.json()
  return {
    readme: content,
  }
}

/**
 * @param {string} repo
 * */
async function fetchSha(repo) {
  const url = `https://api.github.com/repos/${repo}/commits`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Cannot fetch commit for ${repo}: Error ${response.status}`
    throw new Error(message)
  }
  const [result] = await response.json()
  return result.sha
}

async function main() {
  try {
    const pluginList = await importTxtFile()
    let allPlugins = await importPluginJson()

    pluginList.every(async (plugin) => {
      // Check if updates are needed
      if (allPlugins[plugin]) {
        const remoteSha = await fetchSha(plugin)
        const { sha: currentSha } = allPlugins[plugin]
        if (remoteSha === currentSha) {
          return false // skip to next plugin
        }
      }

      // Only fetch data when new plugin or new commit
      const pluginRepo = await fetchRepo(plugin)
      const pluginRelease = await fetchRelease(plugin)
      const pluginReadme = await fetchReadme(plugin)
      const pluginInfo = { ...pluginRepo, ...pluginRelease, ...pluginReadme }
      allPlugins[plugin] = pluginInfo
      return true // continue with next plugin
    })
  } catch (error) {
    console.error(error)
  }
}

main()
