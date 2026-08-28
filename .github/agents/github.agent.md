---
name: solidjs-rc2-foundation
description: Use when creating, modifying, or reviewing any component in solid-element-ui, to apply SolidJS RC 2.0 fundamentals — signals/memos/effects, JSX control flow (<Show>/<For>/<Switch>), read-only props, Tailwind styling, and type exports.
---

# SolidJS RC 2.0 组件开发基础

## 概述

solid-element-ui 的所有组件都以 SolidJS RC 2.0 为基础。本技能定义编写组件时必须遵守的响应式、JSX、样式与类型规范，适用于新建、修改和代码审查。

## 核心原则

1. **Props 只读**：组件 props 不可直接修改；数据变更通过回调（如 `onChange`）上抛。
2. **细粒度响应式**：状态用 `createSignal`，派生值用 `createMemo`，副作用用 `createEffect`；signal 在 effect/JSX 中被访问时自动追踪。
3. **JSX 差异**：使用 `class` 而非 `className`；`value` 按受控方式绑定 `value={...}`。
4. **控制流组件优先**：条件、循环、分支使用 `<Show>`、`<For>`、`<Switch>/<Match>`，而不是 `&&` / `.map()`。
5. **函数式组件 + 导出类型**：`export function X(props: XProps) {}`，props 接口一并导出。

## 工作流

### 1. 搭建组件骨架

- 在组件包目录下创建文件，并从包入口统一导出（如 `import { Select } from "solid-element-ui"`）。
- props 用接口定义，必选/可选用 `?` 标注；支持 `class` 透传以便外部覆盖样式。

### 2. 实现响应式状态

- 本地状态：`const [open, setOpen] = createSignal(false)`
- 派生值：`const label = createMemo(() => optionLabel(options, value()))`
- 副作用必须清理：
  ```tsx
  createEffect(() => {
    const t = setTimeout(...);
    onCleanup(() => clearTimeout(t));
  });
  ```

### 3. 渲染控制流

- 条件：`<Show when={open()} fallback={<Placeholder />}>...</Show>`
- 列表：`<For each={options}>{(item) => <div>{item.label}</div>}</For>`——Solid 按引用匹配 key，避免用 index 做 key。
- 多分支：`<Switch><Match when={...}>...</Match></Switch>`

### 4. 样式与主题

- 使用 Tailwind CSS；通过 `dark:` 前缀适配暗色模式（参考 select.tsx 中的 `dark:bg-zinc-950`）。
- 根节点统一合并传入的 `class`，允许外部覆盖。

### 5. 事件与表单

- 事件命名遵循 DOM 风格：`onChange`、`onInput`、`onClick`。
- 受控组件：值来自 props，变更通过回调上抛；非受控时内部 fallback 到本地 signal。

## 决策点

| 场景                       | 选择                           |
| -------------------------- | ------------------------------ |
| 可变状态                   | `createSignal`                 |
| 依赖其他状态的派生值       | `createMemo`                   |
| DOM 副作用 / 定时器 / 监听 | `createEffect` + `onCleanup`   |
| 条件渲染                   | `<Show>`                       |
| 列表渲染                   | `<For>`                        |
| 多分支条件                 | `<Switch>` / `<Match>`         |
| 跨组件共享状态             | `createContext` + `useContext` |

## 质量检查

- [ ] props 未被修改，变更只通过回调上抛
- [ ] 无手动 DOM 操作，渲染由响应式数据驱动
- [ ] 列表使用 `<For>`，避免用 index 做 key
- [ ] 每个 `createEffect` 都评估是否需要 `onCleanup`
- [ ] 支持 `class` 透传与暗色模式
- [ ] props 接口完整导出，类型严格
- [ ] 在 `apps/target/src/routes/` 下有对应的 demo 页面（参考 select.tsx）

## 参考示例

- `apps/target/src/routes/select.tsx`：Select 演示页（label / options / placeholder / description 用法）
- selectOptions 展示了 `disabled` 选项的写法
