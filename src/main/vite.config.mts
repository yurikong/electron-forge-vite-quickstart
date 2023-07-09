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
      fileName: "main",
    },
    rollupOptions: {
      external: ["ffi-napi", "ref-napi", "ref-array-di", "ref-struct-di"],
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
