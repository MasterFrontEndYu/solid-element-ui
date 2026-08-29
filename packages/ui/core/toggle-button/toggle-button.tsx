import { ToggleButton as KToggle, type ToggleButtonRootProps } from "@kobalte/core/toggle-button";
import { omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

// TODO 切换样式问题

export interface ToggleButtonProps extends Omit<ToggleButtonRootProps, "class"> {
  class?: string;
  children?: JSX.Element;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const others = omit(props, "class", "children", "variant", "size");

  return (
    <KToggle class={defaultClass.root} {...others}>
      {(state: any) =>
        typeof props.children === "function" ? (props.children as any)(state) : props.children
      }
    </KToggle>
  );
};
