import { ColorWheel as KColorWheel, type ColorWheelRootProps } from "@kobalte/core/color-wheel";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

// FIXME 颜色选项都有源代码问题，注意查看原始kobalte的问题。

export interface ColorWheelProps extends ColorWheelRootProps {
  size?: number;
  class?: string;
  trackClass?: string;
  thumbClass?: string;
}

export const ColorWheel = (props: ColorWheelProps) => {
  const others = omit(props, "size", "class", "trackClass", "thumbClass");

  return (
    <KColorWheel class={defaultClass.root} {...others}>
      <KColorWheel.Track
        class={defaultClass.track}
        style={{
          width: `${props.size || 160}px`,
          height: `${props.size || 160}px`,
          background: "var(--kb-color-wheel-track-background)",
        }}
      >
        <KColorWheel.Thumb class={defaultClass.thumb}>
          <KColorWheel.Input />
        </KColorWheel.Thumb>
      </KColorWheel.Track>
    </KColorWheel>
  );
};
