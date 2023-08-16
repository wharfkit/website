import { defineMDSveXConfig as defineConfig } from "mdsvex"
import rehypeSlug from "rehype-slug"
import rehypeSectionize from "@hbsnow/rehype-sectionize"

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [rehypeSlug, rehypeSectionize],
})

export default config
