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
    console.error(`Error importing file: ${error.message}`)
    return []
  }
}

async function importPluginJson() {
  try {
    const text = await readFile(PLUGIN_INFO_PATH, "utf-8")
    const json = JSON.parse(text)
    return json
  } catch (error) {
    throw new Error(`Error importing plugin information json: ${error.message}`)
  }
}

/**
 * @param {string} repo
 * */
async function fetchRepo(repo) {
  const url = `https://api.github.com/repos/${repo}`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error fetching repo ${repo}: Error ${response.status}`
    throw new Error(message)
  }
  const repo = await response.json()
  return {
    name: repo.name,
    pluginId: repo.full_name,
    description: repo.description,
    tags: repo.topics,
    author: repo.owner.login,
    authorIcon: repo.owner.avatar_url,
    sourceLink: repo.html_url,
    license: repo.license.name,
  }
}

/**
 * @param {string} repo
 * */
async function fetchRelease(repo) {
  const url = `https://api.github.com/repos/${repo}/releases/latest`
  const response = await fetch(url, GITHUB_HEADERS)
  if (!response.ok) {
    const message = `Error fetching latest release for ${repo}: Error ${response.status}`
    throw new Error(message)
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
    const message = `Error fetching readme for ${repo}: Error ${response.status}`
    throw new Error(message)
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
    const message = `Error fetching commits: ${response.status}`
    throw new Error(message)
  }
  const result = await response.json()
  return result[0].sha
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
          return false
        }
      }

      // Only fetch data when new plugin or new commit
      const pluginRepo = await fetchRepo(plugin)
      const pluginRelease = await fetchRelease(plugin)
      const pluginReadme = await fetchReadme(plugin)
      const pluginInfo = { ...pluginRepo, ...pluginRelease, ...pluginReadme }
      allPlugins[plugin] = pluginInfo
      return true
    })
  } catch (error) {
    console.error(error)
  }
}

main()
