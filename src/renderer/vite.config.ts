import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import postcssPresetEnv from "postcss-preset-env"

// https://vitejs.dev/config
export default defineConfig({
  root: __dirname,
  base: "./",
  plugins: [vue()],
  resolve: {
    browserField: true,
    mainFields: ["browser", "module", "jsnext:main", "jsnext"],
    alias: {
      "@": __dirname,
    },
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
  },
})
