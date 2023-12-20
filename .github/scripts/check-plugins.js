import { readFile } from "fs/promises"
import https from "https"

const FILE_PATH = "./src/lib/plugin-directory.txt"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

/**
 * @param {string} filePath
 */
async function importTxtFile(filePath) {
  try {
    const text = await readFile(filePath, "utf-8")
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    return lines
  } catch (error) {
    console.error(`Error importing file: ${error.message}`)
    return []
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

async function main() {
  try {
    const repositories = await importTxtFile(FILE_PATH)
    repositories.forEach(async (repo) => {
      const repoData = await fetchRepoData(repo)
      const json = JSON.parse(repoData)
      const pluginData = extractFields(json)

      fetch(pluginData.sourceLink).then((v) => console.log({ v }))

      // console.log(pluginData)
    })
  } catch (error) {
    console.error(error)
  }
}

main()
