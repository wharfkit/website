import { sveltekit } from "@sveltejs/kit/vite"
import basicSsl from '@vitejs/plugin-basic-ssl'
import type { UserConfig } from "vite"

const config: UserConfig = {
  plugins: [basicSsl(), sveltekit()],
  server: {
    host: true,
    https: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/variables.scss" as *;',
      },
    },
  },
}

export default config
