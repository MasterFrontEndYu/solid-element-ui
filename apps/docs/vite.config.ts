import { defineConfig } from "vite-plus";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";

import { solidStart } from "@solidjs/start/config";
import mdx from "@mdx-js/rollup";

import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    {
      ...mdx({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solidStart({
      extensions: ["mdx", "md"],
    }),
    tailwindcss(),
    nitro(),
  ],
});
