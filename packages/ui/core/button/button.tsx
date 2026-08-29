import { Button as KButton, type ButtonRootProps } from "@kobalte/core/button";
import { omit, Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { LoaderCircle } from "../icons";
import { defaultClass } from "./setting";
import { cn } from "../../utils/cn";

export interface ButtonProps extends ButtonRootProps {
  loading?: boolean;
  leftIcon?: JSX.Element;
  children?: JSX.Element;
  rightIcon?: JSX.Element;
  class?: string;
  iconClass?: string;
  variant?: "default" | "outline" | "dashed" | "filled" | "text";
  color?: "default" | "primary" | "success" | "warning" | "danger";
  size?: string;
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
    "iconClass",
  );

  return (
    <KButton
      class={cn('inline-flex items-center cursor-pointer justify-center rounded-sm text-sm font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none disabled:opacity-50 disabled:pointer-events-none', props.class)}
      disabled={props.disabled || props.loading}
      {...others}
    >
      {/* Loading 状态显示 */}
      <Show when={props.loading}>
        <LoaderCircle class={cn('animate-spin -ml-1 mr-2 h-4 w-4 text-current', props.iconClass)} />
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
