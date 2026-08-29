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
        style={{
          background:
            "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent), red",
        }}
      />
      <KColorArea.Thumb class={defaultClass.thumb}></KColorArea.Thumb>
    </KColorArea>
  );
};
