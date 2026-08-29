import { Tooltip as KTooltip, type TooltipRootProps } from "@kobalte/core/tooltip";
import { omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

export interface TooltipProps extends Omit<TooltipRootProps, "class"> {
  content: JSX.Element;
  children: JSX.Element;
  class?: string;
  contentClass?: string;
  arrowClass?: string;
}

export const Tooltip = (props: TooltipProps) => {
  // 1. 分离属性
  const others = omit(
    props,
    "children",
    "content",
    "variant",
    "class",
    "contentClass",
    "arrowClass",
  );

  return (
    <KTooltip gutter={4} openDelay={200} {...others}>
      <KTooltip.Trigger class="block">{props.children}</KTooltip.Trigger>

      <KTooltip.Portal>
        <KTooltip.Content class={defaultClass.content}>
          <KTooltip.Arrow class={defaultClass.arrow} />
          {props.content}
        </KTooltip.Content>
      </KTooltip.Portal>
    </KTooltip>
  );
};
