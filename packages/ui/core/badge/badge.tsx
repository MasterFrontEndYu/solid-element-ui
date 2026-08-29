import { Badge as KBadge, type BadgeRootProps } from "@kobalte/core/badge";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface BadgeProps extends BadgeRootProps {
  class?: string;
}

export const Badge = (props: BadgeProps) => {
  const others = omit(props, "class", "variant");

  return <KBadge class={defaultClass.root} {...others} />;
};
