import { Badge as KBadge } from "@kobalte/core/badge";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

export interface BadgeProps extends ComponentProps<typeof KBadge> {}

export const Badge = (props: BadgeProps) => {
  const others = omit(props, "class", "variant");

  return (
    <KBadge class={fullClass.root} {...others} />
  );
};
