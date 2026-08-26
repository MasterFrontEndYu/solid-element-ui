import { ColorSwatch as KColorSwatch } from "@kobalte/core/color-swatch";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

// TODO 源代码问题

// FIXME 源代码问题

export interface ColorSwatchProps extends ComponentProps<typeof KColorSwatch> {}

export const ColorSwatch = (props: ColorSwatchProps) => {
  const others = omit(props, "class", "style");

  return <KColorSwatch class={fullClass.root} {...others} />;
};
