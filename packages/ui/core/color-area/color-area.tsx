import { ColorArea as KColorArea, type ColorAreaRootProps } from "@kobalte/core/color-area";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface ColorAreaProps extends ColorAreaRootProps {
  class?: string;
  backgroundClass?: string;
  thumbClass?: string;
}

export const ColorArea = (props: ColorAreaProps) => {
  const others = omit(props, "class", "backgroundClass", "thumbClass");

  return (
    <KColorArea class={defaultClass.root} {...others}>
      <KColorArea.Background
        class={defaultClass.background}
        // 默认背景，通常实际使用时会根据 Hue 滑块动态改变这里的红色部分
        style={{
          background:
            "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), red",
        }}
      />
      <KColorArea.Thumb class={defaultClass.thumb}>
        {/* 修复点：ColorArea 需要分别定义 X 和 Y 的隐藏输入框 */}
      </KColorArea.Thumb>
    </KColorArea>
  );
};
