import { defineConfig } from "vite-plus";
import solid from "@solidjs/vite-plugin";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [solid(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js", "@kobalte/core", "tailwind-variants", "tailwind-merge"],
    },
  },
} as any);
