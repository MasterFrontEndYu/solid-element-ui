import { ColorWheel as KColorWheel } from "@kobalte/core/color-wheel";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

// FIXME 颜色选项都有源代码问题，注意查看原始kobalte的问题。

export interface ColorWheelProps extends ComponentProps<typeof KColorWheel> {
  size?: number;
}

export const ColorWheel = (props: ColorWheelProps) => {
  const others = omit(props, "size", "class");

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
