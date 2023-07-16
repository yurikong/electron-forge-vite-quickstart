import { defineConfig } from "vite"

// https://vitejs.dev/config
export default defineConfig({
  root: __dirname,
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
      "@preload": __dirname,
    },
  },
})
