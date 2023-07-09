import path from "node:path"
import { defineConfig } from "vite"

const rootPath = path.resolve(__dirname)

// https://vitejs.dev/config
export default defineConfig({
  root: rootPath,
  base: "./",
  build: {
    lib: {
      entry: "index.js",
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
