import { Separator as KSeparator } from "@kobalte/core/separator";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

export interface SeparatorProps extends ComponentProps<typeof KSeparator> {
  orientation?: "horizontal" | "vertical";
  class?: string;
}

export const Separator = (props: SeparatorProps) => {
  const others = omit(props, "class", "orientation", "thickness", "variant");

  return (
    <KSeparator
      class={defaultClass.root}
      orientation={props.orientation}
      {...others}
    />
  );
};
