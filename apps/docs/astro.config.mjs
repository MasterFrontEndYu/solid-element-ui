// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import solidJs from "@astrojs/solid-js";

import tailwindcss from "@tailwindcss/vite";

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
            external: ["solid-js", "solid-element-ui"],
        },
        resolve: {
            // 强制优先匹配 solid 条件
            conditions: ["solid", "import", "browser"],
        },
    },
});
