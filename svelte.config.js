import { mdsvex } from "mdsvex"
import mdsvexConfig from "./mdsvex.config.js"
import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/styles/variables.scss" as *;',
      },
    }),
    mdsvex(mdsvexConfig),
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      // TODO: remove this once /docs/session-kit/login-context
      handleHttpError: "warn",
    },
  },
}

export default config
