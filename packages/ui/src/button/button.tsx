import { Button as KButton } from "@kobalte/core/button";
import { omit, type ComponentProps, Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { LoaderCircle } from "../icons";
import { fullClass } from "./setting";



export interface ButtonProps extends ComponentProps<typeof KButton> {
  loading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export const Button = (props: ButtonProps) => {
  const others = omit(
    props,
    "class",
    "children",
    "loading",
    "leftIcon",
    "rightIcon",
    "disabled",
    "variant",
    "size",
    "color",
  );

  return (
    <KButton class={fullClass.base} disabled={props.disabled || props.loading} {...others}>
      {/* Loading 状态显示 */}
      <Show when={props.loading}>
        <LoaderCircle class={fullClass.icon} />
      </Show>

      {/* 非 Loading 状态下的 Left Icon */}
      <Show when={!props.loading && props.leftIcon}>
        <span class="mr-2 inline-flex">{props.leftIcon}</span>
      </Show>

      {props.children}

      {/* Right Icon */}
      <Show when={props.rightIcon}>
        <span class="ml-2 inline-flex">{props.rightIcon}</span>
      </Show>
    </KButton>
  );
};
