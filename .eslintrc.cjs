module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    MAIN_WINDOW_VITE_DEV_SERVER_URL: "readonly",
    MAIN_WINDOW_VITE_NAME: "readonly",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
}
