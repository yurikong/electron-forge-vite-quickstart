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
      fileName: "main",
    },
  },
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ["module", "jsnext:main", "jsnext"],
    alias: {
      "@main": rootPath,
    },
  },
})
