import { Skeleton as KSkeleton } from "@kobalte/core/skeleton";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

// 核心修正：使用 Omit 排除掉冲突的 width 和 height
export interface SkeletonProps
  extends Omit<ComponentProps<typeof KSkeleton>, "class" | "width" | "height"> {
  width?: string | number;
  height?: string | number;
  class?: string;
}

export const Skeleton = (props: SkeletonProps) => {
  // 显式提取这些属性，避免传给 KSkeleton 引起类型或运行时错误
  const others = omit(props, "class", "width", "height", "style", "variant", "animation");

  const mergedStyle = () => ({
    width: typeof props.width === "number" ? `${props.width}px` : props.width,
    height: typeof props.height === "number" ? `${props.height}px` : props.height,
    ...(typeof props.style === "object" ? props.style : {}),
  });

  return (
    <KSkeleton
      class={defaultClass.root}
      style={mergedStyle()}
      {...others}
    />
  );
};
