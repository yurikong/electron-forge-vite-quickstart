import type { ForgeConfig } from "@electron-forge/shared-types"
import { MakerSquirrel } from "@electron-forge/maker-squirrel"
import { MakerZIP } from "@electron-forge/maker-zip"
import { MakerDeb } from "@electron-forge/maker-deb"
import { MakerRpm } from "@electron-forge/maker-rpm"
import { VitePlugin } from "@electron-forge/plugin-vite"

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [new MakerSquirrel(), new MakerZIP({}, ["darwin"]), new MakerDeb(), new MakerRpm()],
  plugins: [
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be Main process, Preload scripts, Worker process, etc.
      // If you are familiar with Vite configuration, it will look really familiar.
      build: [
        {
          // `entry` is just an alias for `build.lib.entry` in the corresponding file of `config`.
          entry: "src/main/index.ts",
          config: "src/main/vite.config.mts",
        },
        {
          entry: "src/preload/index.ts",
          config: "src/preload/vite.config.mts",
        },
      ],
      renderer: [
        {
          name: "main_window",
          config: "src/renderer/vite.config.ts",
        },
      ],
    }),
  ],
}

export default config
