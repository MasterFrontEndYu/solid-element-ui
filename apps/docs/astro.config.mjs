// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "My Docs",
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/withastro/starlight",
                },
            ],
            sidebar: [
                {
                    label: "Guides",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: "Example Guide", slug: "guides/example" },
                    ],
                },
                {
                    label: "Reference",
                    autogenerate: { directory: "reference" },
                },
                {
                    label: "components",
                    autogenerate: { directory: "components" },
                },
            ],
            customCss: ["./src/styles/global.css"],
        }),
        solidJs(),
    ],
    vite: {
        plugins: [/** @type {any} */ (tailwindcss())],
        ssr: {
            noExternal: [
                "solid-js",
                "solid-js/web",
                "solid-element-ui",
                "@kobalte/core",
                "lucide-solid",
            ],
        },
        resolve: {
            // 强制优先匹配 solid 条件
            conditions: ["solid", "import", "browser"],
            alias: {
                "solid-element-ui": path.resolve(
                    __dirname,
                    "../../packages/ui/src/index.tsx"
                ),
            },
        },
    },
});
