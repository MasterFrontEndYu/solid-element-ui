import { ColorSwatch as KColorSwatch, type ColorSwatchRootProps } from "@kobalte/core/color-swatch";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

// TODO 源代码问题

// FIXME 源代码问题

export interface ColorSwatchProps extends ColorSwatchRootProps {
  class?: string;
}

export const ColorSwatch = (props: ColorSwatchProps) => {
  const others = omit(props, "class", "style");

  return <KColorSwatch class={defaultClass.root} {...others} />;
};
