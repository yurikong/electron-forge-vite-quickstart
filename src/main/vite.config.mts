import { defineConfig } from "vite"

// https://vitejs.dev/config
export default defineConfig({
  root: __dirname,
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
      "@main": __dirname,
    },
  },
})
