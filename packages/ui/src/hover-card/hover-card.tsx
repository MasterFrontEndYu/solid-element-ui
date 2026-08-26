import { HoverCard as KHoverCard } from "@kobalte/core/hover-card";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { fullClass } from "./setting";

export interface HoverCardProps extends ComponentProps<typeof KHoverCard> {
  trigger: JSX.Element;
  showArrow?: boolean;
}

export const HoverCard = (props: HoverCardProps) => {
  const others = omit(props, "trigger", "children", "showArrow", "size");

  return (
    <KHoverCard openDelay={200} closeDelay={300} {...others}>
      <KHoverCard.Trigger>{props.trigger}</KHoverCard.Trigger>

      <KHoverCard.Portal>
        <KHoverCard.Content class={fullClass.content}>
          {props.showArrow && <KHoverCard.Arrow class={fullClass.arrow} />}
          {props.children}
        </KHoverCard.Content>
      </KHoverCard.Portal>
    </KHoverCard>
  );
};
