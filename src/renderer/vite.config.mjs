import path from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config
export default defineConfig({
  root: path.resolve(__dirname),
  base: "./",
  plugins: [vue()],
  resolve: {
    browserField: true,
    mainFields: ["browser", "module", "jsnext:main", "jsnext"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
    },
  },
})
