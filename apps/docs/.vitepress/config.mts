import { defineConfig } from 'vitepress'
import solidPlugin from "vite-plugin-solid";
// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "pages",
    title: "solid-element-ui",
    description: "a ui of solid-element-ui",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
    vite: {
        plugins: [solidPlugin({ include: [/\.jsx$/, /\.tsx$/] })],
        ssr: {
            noExternal: ["@kobalte/core", "solid-element-ui"],
        },
    },
});
