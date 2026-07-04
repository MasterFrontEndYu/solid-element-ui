<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

<!--PROJECT START-->

# solid-element-ui — AI Agent Guide

## 📦 Project Overview

**solid-element-ui** is a SolidJS component library built as a **thin wrapper** around [Kobalte](https://kobalte.dev/) (headless UI primitives for SolidJS). It adds Tailwind CSS v4 styling via `tailwind-variants` (tv). The library is published as the npm package `solid-element-ui`.

### Monorepo Structure

| Path           | Purpose                                                          |
| -------------- | ---------------------------------------------------------------- |
| `packages/ui/` | 📦 The component library source (`solid-element-ui` npm package) |
| `apps/docs/`   | 📖 Documentation site built with SolidStart + MDX                |
| `tools/`       | (Reserved for future tooling)                                    |

### Quick Start Commands

```bash
vp install         # Install all dependencies (uses bun)
vp check           # Lint + format + type check (oxlint + oxfmt + tsc)
vp test            # Run tests (vitest via Vite+)
vp run -r build    # Build all workspaces
vp run dev         # Start docs dev server (vp run docs#dev)
vp run ready       # Full CI check: check → test → build
```

### Package Manager & Runtime

- **Package manager**: `bun` v1.3.14 (specified in `devEngines.packageManager`)
- **Node**: `>=22.18.0`
- **TypeScript**: `^5.7` with `verbatimModuleSyntax`, `erasableSyntaxOnly`, `strict: true`

---

## 🧩 Component Conventions

Every component in `packages/ui/src/<name>/<name>.tsx` follows this pattern:

### 1. Architecture: Kobalte Wrapper

Each component wraps a Kobalte primitive (imported with `K` prefix) and adds Tailwind styling:

```tsx
import { Button as KButton } from "@kobalte/core/button";
import { splitProps, type ComponentProps } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
```

### 2. Styles: `tailwind-variants` (tv)

Always use `tv()` with `{ twMerge: true }` option. Two patterns:

- **Single slot**: `tv({ base: "...", variants: {...} })` — for simple components (Badge, Skeleton, Link)
- **Multi-slot**: `tv({ slots: { root, trigger, content, ... }, variants: {...} })` — for complex components (Button, Dialog, Select, Switch)

### 3. Props: Three-Way `splitProps`

Almost all components split props into three groups:

- **local**: Component-consumed props (`class`, `children`, custom props like `loading`, `leftIcon`)
- **variantKeys**: tv variant keys (`variant`, `size`, `color`, `orientation`)
- **others**: Remaining props forwarded to the Kobalte root component

```tsx
const [local, variantKeys, others] = splitProps(
  props,
  ["class", "children", "loading"], // local
  ["variant", "size", "color"], // variant keys
);
```

Simple components without tv variants may use two-way split (local + others).

### 4. Export Pattern

- Each component folder has a single `<name>.tsx` file (no `index.tsx`)
- All exports are re-exported from `packages/ui/src/index.tsx`
- `ComponentProps<typeof KComponent>` is used for type intersection

### 5. Compound Components (Meter pattern)

For components with multiple sub-components (like `<Meter.Label>`, `<Meter.Track>`), use `Object.assign`:

```tsx
export const Meter = Object.assign(Root, { Label, Track, Fill, ValueText });
```

---

## 🎨 Style System

### Tailwind CSS v4

Uses `@tailwindcss/vite` plugin (NOT PostCSS). Key differences from v3:

- `@import "tailwindcss"` instead of `@tailwind` directives
- `@theme` block for design tokens
- `@custom-variant` for custom variants
- `@source` to scan additional paths for class detection

### Semantic Color Tokens

All components use CSS variable-based semantic colors (defined in `packages/ui/src/style/global.css`):

| Token                                        | Usage                                   |
| -------------------------------------------- | --------------------------------------- |
| `primary` / `success` / `warning` / `danger` | Semantic colors (blue/green/orange/red) |
| `main` / `muted` / `reversal`                | Text colors                             |
| `app` / `foreground` / `reversal-bg`         | Background colors                       |
| `base` / `light` / `ring`                    | Border/ring colors                      |

**⚠️ Always use these semantic tokens, NOT hardcoded Tailwind colors** (like `zinc-950` or `dark:`). Some older components still use hardcoded values — prefer the token system for new code.

### Dark Mode

Uses custom `data-theme` attribute (NOT `class` or `prefers-color-scheme`):

- `@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *))`
- Switch themes via `document.documentElement.setAttribute("data-theme", val)`
- Supported themes: `light` (default), `dark`, `coffee`
- CSS variables switch in `[data-theme="dark"]` / `[data-theme="coffee"]` blocks

### Global CSS Import

The library's `global.css` is imported in `src/index.tsx`. Consumers can also import `solid-element-ui/index.css`.

### Animation Tokens

Defined in global.css: `accordion-down`, `fade-in`, `fade-out`, `slide-in`, `collapsible-down/up`, `swipe-out`. Use via `animate-*` utility classes.

---

## 📐 Documentation Site (apps/docs)

- **Framework**: SolidStart (`@solidjs/start` v1.3.2) powered by Vinxi
- **Routing**: File-based routing via `@solidjs/start/router` (FileRoutes)
- **Content**: MDX files in `apps/docs/src/routes/` with `@vinxi/plugin-mdx` + `solid-mdx`
- **Layout**: `app.tsx` → Nav (top bar with theme selector) + Aside (sidebar component nav) + main content
- **Styling**: Uses `@tailwindcss/typography` — wrap demos in `not-prose` class to escape prose styles
- **API tables**: Manually written Markdown tables in MDX files
- **404 route**: `[...404].mdx`
- Route filter: `getFilteredRoutes.ts` filters out 404, color-\*, rating-group routes

---

## 📦 Key Dependencies

| Package                    | Purpose                                           |
| -------------------------- | ------------------------------------------------- |
| `solid-js` ^1.9.13         | SolidJS core (peer dependency)                    |
| `@kobalte/core` ^0.13.11   | Headless UI primitives (accessibility + behavior) |
| `tailwind-variants` ^3.2.2 | Type-safe component variant definitions           |
| `tailwind-merge` ^3.6.0    | Smart Tailwind class merging (used by tv)         |
| `lucide-solid` ^1.16.0     | Icon library                                      |
| `vinxi` ^0.5.11            | Meta-framework engine for docs site               |

---

## ⚠️ Common Pitfalls

1. **Dark mode inconsistency**: Some components use hardcoded `zinc` colors or `dark:` prefix instead of semantic tokens — prefer the CSS variable system for new components.
2. **`verbatimModuleSyntax: true`**: Always use `import type` for type-only imports. Never use `enum` (disallowed by `erasableSyntaxOnly`).
3. **Global CSS imported at package root**: `import "./style/global.css"` in `index.tsx` means styles are bundled. For consumers, use `solid-element-ui/index.css`.
4. **AlertDialog uses internal state**: It manages `isOpen` internally via `createSignal` and does NOT accept `open`/`onOpenChange` from parents.
5. **No SSR guards**: Most components don't check `isServer` — only Toast does. Be mindful of SSR if adding new browser-API-dependent code.
6. **Children as render prop**: `ToggleButton` accepts children as a function `{(state) => ...}` pattern — check component's type definition.
7. **Chinese text hardcoded**: Some components have Chinese UI strings (Dialog "关闭", AlertDialog "取消"/"确认") — these are intentional.
8. **Components without `class` forwarding**: Always split `class` into local props and pass to tv styles for `tailwind-merge` to work properly.

---

## 🔧 Build Configuration

- `packages/ui/vite.config.ts`: Builds library as ESM, externalizes `solid-js`, `@kobalte/core`, `tailwind-variants`, `tailwind-merge`
- `packages/ui/tsconfig.json`: `jsx: preserve`, `jsxImportSource: solid-js`, `moduleResolution: bundler`
- Type declarations generated by `vite-plugin-dts`
- Root `vite.config.ts` configures oxlint rules for Vite+

<!--PROJECT END-->
