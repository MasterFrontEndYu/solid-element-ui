import { Separator as KSeparator, type SeparatorRootProps } from "@kobalte/core/separator";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface SeparatorProps extends SeparatorRootProps {
  orientation?: "horizontal" | "vertical";
  class?: string;
}

export const Separator = (props: SeparatorProps) => {
  const others = omit(props, "class", "orientation", "thickness", "variant");

  return <KSeparator class={defaultClass.root} orientation={props.orientation} {...others} />;
};
