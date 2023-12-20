import { readFile } from "fs/promises"
import https from "https"

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
async function fetchRepoData(repo) {
  const url = `https://api.github.com/repos/${repo}`
  const options = {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "GitHub Actions",
    },
  }

  return new Promise((resolve, reject) => {
    https
      .get(url, options, (response) => {
        let data = ""

        response.on("data", (chunk) => {
          data += chunk
        })

        response.on("end", () => {
          if (response.statusCode === 200) {
            resolve(data)
          } else {
            reject(
              `Error getting repository information for ${repo}.
                                Status code: ${response.statusCode}`
            )
          }
        })
      })
      .on("error", (error) => {
        reject(error)
      })
  })
}

/**
 * @param {Object} repo GitHub repository data from API
 * @param {string} repo.name
 * @param {string} repo.full_name
 * @param {string} repo.description
 * @param {string[]} repo.topics
 * @param {Object} repo.owner
 * @param {string} repo.owner.login
 * @param {string} repo.owner.avatar_url
 * @param {string} repo.html_url
 * @param {Object} repo.license
 * @param {string} repo.license.name
 * */
function extractFields(repo) {
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
    const pluginsInfo = await importPluginJson()
    pluginList.forEach(async (plugin) => {
      const sha = await fetchSha(plugin)
      console.log({ plugin, sha })
      if (plugin in pluginsInfo) {
        const { sha: currentVersion } = pluginsInfo[plugin]
        if (sha !== currentVersion) {
          // const repoData = await fetchRepoData(plugin)
          // const json = JSON.parse(repoData)
          // const pluginData = extractFields(json)
          // return pluginInfo
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}

main()
