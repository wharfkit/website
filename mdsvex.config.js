import { defineMDSveXConfig as defineConfig } from "mdsvex"
// import codeScreenshot from "remark-code-screenshot"
// import toc from "remark-toc"
import rehypeToc from "rehype-toc"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
})

export default config
