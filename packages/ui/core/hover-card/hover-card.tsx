import { HoverCard as KHoverCard, type HoverCardRootProps } from "@kobalte/core/hover-card";
import { omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

export interface HoverCardProps extends HoverCardRootProps {
  trigger: JSX.Element;
  showArrow?: boolean;
  class?: string;
  contentClass?: string;
  arrowClass?: string;
}

export const HoverCard = (props: HoverCardProps) => {
  const others = omit(
    props,
    "trigger",
    "children",
    "showArrow",
    "size",
    "class",
    "contentClass",
    "arrowClass",
  );

  return (
    <KHoverCard openDelay={200} closeDelay={300} {...others}>
      <KHoverCard.Trigger>{props.trigger}</KHoverCard.Trigger>

      <KHoverCard.Portal>
        <KHoverCard.Content class={defaultClass.content}>
          {props.showArrow && <KHoverCard.Arrow class={defaultClass.arrow} />}
          {props.children}
        </KHoverCard.Content>
      </KHoverCard.Portal>
    </KHoverCard>
  );
};
