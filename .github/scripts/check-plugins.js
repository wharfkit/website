import { readFile, writeFile } from "node:fs/promises"
import { gunzipSync } from "node:zlib"

const PLUGIN_LIST_PATH = "./src/lib/plugin-directory.txt"
const PLUGIN_INFO_PATH = "./src/lib/plugins/plugins.json"
const REGISTRY = "https://registry.npmjs.org"

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
 */
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
 * @param {string} pkg
 */
async function fetchPackument(pkg) {
  const response = await fetch(`${REGISTRY}/${pkg}`)
  if (!response.ok) {
    throw new Error(`Error ${response.status}: Cannot fetch package ${pkg}`)
  }
  return response.json()
}

/**
 * Turns a package.json repository field into a browsable GitHub URL.
 * @param {any} repository
 * @returns {string | undefined}
 */
function repositoryLink(repository) {
  if (!repository) return undefined
  const raw = typeof repository === "string" ? repository : repository.url
  if (!raw) return undefined
  const match = raw.match(/github\.com[/:]([^/]+)\/([^/#]+?)(?:\.git)?$/)
  if (!match) return undefined
  const base = `https://github.com/${match[1]}/${match[2]}`
  const directory = typeof repository === "object" && repository.directory
  return directory ? `${base}/tree/HEAD/${directory}` : base
}

/**
 * @param {string} link
 * @returns {string | undefined}
 */
function githubOwner(link) {
  const match = link && link.match(/^https:\/\/github\.com\/([^/]+)/)
  return match ? match[1] : undefined
}

/**
 * Reads one file out of a gzipped ustar archive without a tar dependency.
 * @param {Buffer} tarball
 * @param {string} wanted
 * @returns {string | undefined}
 */
function readTarEntry(tarball, wanted) {
  const tar = gunzipSync(tarball)
  let offset = 0
  while (offset + 512 <= tar.length) {
    const header = tar.subarray(offset, offset + 512)
    if (header.every((byte) => byte === 0)) break
    const name = header.toString("utf-8", 0, 100).replace(/\0.*$/, "")
    const prefix = header.toString("utf-8", 345, 500).replace(/\0.*$/, "")
    const size = parseInt(header.toString("utf-8", 124, 136), 8) || 0
    const type = String.fromCharCode(header[156])
    const path = prefix ? `${prefix}/${name}` : name
    const body = tar.subarray(offset + 512, offset + 512 + size)
    if ((type === "0" || type === "\0") && path === wanted) {
      return body.toString("utf-8")
    }
    offset += 512 + Math.ceil(size / 512) * 512
  }
  return undefined
}

/**
 * The packument omits the README for scoped packages, so it comes from the tarball.
 * @param {string} pkg
 * @param {string} tarballUrl
 */
async function fetchReadme(pkg, tarballUrl) {
  const response = await fetch(tarballUrl)
  if (!response.ok) {
    console.error(`Error ${response.status}: Cannot fetch tarball for ${pkg}`)
    return {}
  }
  const tarball = Buffer.from(await response.arrayBuffer())
  const readme =
    readTarEntry(tarball, "package/README.md") ??
    readTarEntry(tarball, "package/readme.md") ??
    readTarEntry(tarball, "package/README")
  if (readme === undefined) {
    console.error(`No README in the tarball for ${pkg}`)
    return {}
  }
  return { readme }
}

/**
 * @param {string} pkg
 */
async function fetchPluginInfo(pkg) {
  console.log(`Fetching info for ${pkg}...`)
  const packument = await fetchPackument(pkg)
  const version = packument["dist-tags"]?.latest
  if (!version) {
    throw new Error(`No latest dist-tag for ${pkg}`)
  }
  const manifest = packument.versions[version]
  const scope = pkg.startsWith("@") ? pkg.slice(1).split("/")[0] : undefined
  const sourceLink =
    repositoryLink(manifest.repository) ??
    repositoryLink(packument.repository) ??
    (/github\.com/.test(manifest.homepage ?? "") ? manifest.homepage : undefined) ??
    `https://www.npmjs.com/package/${pkg}`
  const owner = githubOwner(sourceLink)
  const author =
    scope ?? owner ?? manifest.author?.name ?? packument.maintainers?.[0]?.name ?? "unknown"
  const iconOwner = scope ?? owner
  const readme = await fetchReadme(pkg, manifest.dist.tarball)

  return {
    name: pkg.replace(/^@[^/]+\//, ""),
    pluginId: pkg,
    description: manifest.description ?? packument.description ?? "",
    author,
    authorIcon: iconOwner ? `https://github.com/${iconOwner}.png?size=56` : undefined,
    sourceLink,
    license: manifest.license ?? packument.license,
    version,
    lastPublishedDate: packument.time?.[version],
    ...readme,
  }
}

async function main() {
  try {
    const pluginList = await importTxtFile()
    const currentPluginData = await importPluginJson()
    const updatedPlugins = await Promise.all(
      pluginList.map(async (pkg) => {
        const current = currentPluginData[pkg]
        if (current?.readme) {
          const packument = await fetchPackument(pkg)
          if (packument["dist-tags"]?.latest === current.version) {
            console.log(`No updates found for ${pkg}`)
            return [pkg, current]
          }
        }
        return [pkg, await fetchPluginInfo(pkg)]
      })
    )
    const updatedPluginsJson = Object.fromEntries(updatedPlugins)
    await writeFile(PLUGIN_INFO_PATH, JSON.stringify(updatedPluginsJson, null, 2) + "\n")
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
}

main()
