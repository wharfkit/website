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

  try {
    https
      .get(url, options, (res) => {
        let data = ""

        res.on("data", (chunk) => {
          data += chunk
        })

        res.on("end", () => {
          if (!res.statusCode === 200) {
            throw Error(
              `Error getting repository information for ${repo}.
                Status code: ${res.statusCode}`
            )
          }

          const json = JSON.parse(data)

          // console.log({ repo, url, data })
          return json
        })
      })
      .on("error", (error) => {
        throw Error(`Error making API request: ${error.message}`)
      })
  } catch (error) {
    console.error(error)
  }
}

async function main() {
  try {
    const repositories = await importTxtFile(FILE_PATH)
    repositories.forEach(async (repo) => {
      const repoData = await fetchRepoData(repo)
      const { name, description } = repoData
      console.log({ name, description })
    })
  } catch (error) {
    console.error(error)
  }
}

main()
