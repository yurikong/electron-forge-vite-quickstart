import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

const rootPath = fileURLToPath(new URL(".", import.meta.url))

// https://vitejs.dev/config
export default defineConfig({
  root: rootPath,
  base: "./",
  build: {
    lib: {
      entry: "index.ts",
      fileName: "preload",
    },
  },
  resolve: {
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
    alias: {
      "@preload": rootPath,
    },
  },
})
