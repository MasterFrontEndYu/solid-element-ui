import { defineConfig } from "vite";
import { nitro } from "nitro/vite";
import { solidStart } from "@solidjs/start/config";
import { createSolidBase } from "@kobalte/solidbase/config";

import tailwindcss from "@tailwindcss/vite";

import path from "path";
import {
  createDefaultThemeFilesystemSidebar,
  default as defaultTheme,
} from "@kobalte/solidbase/default-theme";

const solidbase = createSolidBase(defaultTheme);

export default defineConfig({
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web",
        "solid-js/store",
        "@kobalte/core",
        "tailwind-variants",
        "tailwind-merge",
      ],
    },
  },
  plugins: [
    tailwindcss(),
    solidbase.plugin({
      title: "solid-element-ui",
      titleTemplate: ":title - ui",
      description: "Fully featured, fully customisable static site generation for SolidStart",
      themeConfig: {
        sidebar: {
          "/": createDefaultThemeFilesystemSidebar("./src/routes/", {
            sort: (a, b) => {
              if (a.filePath.includes("i18n-provider")) return 1;
              if (b.filePath.includes("i18n-provider")) return -1;
              if (a.filePath.includes("index")) return -1;
              if (a.filePath > b.filePath) return 1;
              if (b.filePath > a.filePath) return -1;
              return 0;
            },
            filter: (item) => !item.filePath.includes("index"),
          }),
        },
      },
    }),
    solidStart(solidbase.startConfig()),
    nitro({
      prerender: {
        crawlLinks: true,
      },
    }),
  ],
});
