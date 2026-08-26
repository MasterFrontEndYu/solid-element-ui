import { For } from "solid-js";
import { Dynamic } from "@solidjs/web";

/**
 * 本地 Lucide 图标（从 lucide-solid 提取的 SVG 数据，ISC 许可）。
 * Solid 2.0 移除了 `solid-js/web`，而 lucide-solid@1.x 仍依赖它，
 * 因此这里用一份无依赖的最小实现替代 lucide-solid。
 */

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
} as const;

export type IconNode = [tag: string, attrs: Record<string, string>][];

export type IconProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  absoluteStrokeWidth?: boolean;
  class?: string;
  [key: string]: unknown;
};

function createIcon(iconNode: IconNode) {
  return (props: IconProps) => {
    const {
      size = defaultAttributes.width,
      color = defaultAttributes.stroke,
      strokeWidth = defaultAttributes["stroke-width"],
      absoluteStrokeWidth,
      class: className,
      ...rest
    } = props;

    const computedStrokeWidth = absoluteStrokeWidth
      ? (Number(strokeWidth) * 24) / Number(size)
      : Number(strokeWidth);

    return (
      <svg
        {...defaultAttributes}
        width={size}
        height={size}
        stroke={color}
        stroke-width={computedStrokeWidth}
        class={className}
        {...rest}
      >
        <For each={iconNode}>{([tag, attrs]) => <Dynamic component={tag} {...attrs} />}</For>
      </svg>
    );
  };
}

export const ChevronDown = createIcon([["path", { d: "m6 9 6 6 6-6" }]]);

export const ChevronUp = createIcon([["path", { d: "m18 15-6-6-6 6" }]]);

export const ChevronLeft = createIcon([["path", { d: "m15 18-6-6 6-6" }]]);

export const ChevronRight = createIcon([["path", { d: "m9 18 6-6-6-6" }]]);

export const X = createIcon([
  ["path", { d: "M18 6 6 18" }],
  ["path", { d: "m6 6 12 12" }],
]);

export const Check = createIcon([["path", { d: "M20 6 9 17l-5-5" }]]);

export const Info = createIcon([
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "M12 16v-4" }],
  ["path", { d: "M12 8h.01" }],
]);

export const CircleAlert = createIcon([
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16" }],
]);

export const CircleCheck = createIcon([
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m9 12 2 2 4-4" }],
]);

export const CircleX = createIcon([
  ["circle", { cx: "12", cy: "12", r: "10" }],
  ["path", { d: "m15 9-6 6" }],
  ["path", { d: "m9 9 6 6" }],
]);

export const LoaderCircle = createIcon([["path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }]]);

export const CloudUpload = createIcon([
  ["path", { d: "M12 13v8" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }],
  ["path", { d: "m8 17 4-4 4 4" }],
]);

export const Ellipsis = createIcon([
  ["circle", { cx: "12", cy: "12", r: "1" }],
  ["circle", { cx: "19", cy: "12", r: "1" }],
  ["circle", { cx: "5", cy: "12", r: "1" }],
]);

export const Cross = createIcon([
  [
    "path",
    {
      d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",
    },
  ],
]);

export const Star = createIcon([
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    },
  ],
]);

export const Search = createIcon([
  ["path", { d: "m21 21-4.34-4.34" }],
  ["circle", { cx: "11", cy: "11", r: "8" }],
]);

export const TriangleAlert = createIcon([
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    },
  ],
  ["path", { d: "M12 9v4" }],
  ["path", { d: "M12 17h.01" }],
]);

// lucide-solid 带 Icon 后缀的别名
export { Cross as CrossIcon };
export { Star as StarIcon };
export { Search as SearchIcon };
