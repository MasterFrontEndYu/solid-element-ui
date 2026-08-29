import { Link as KLink, type LinkRootProps } from "@kobalte/core/link";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface LinkProps extends LinkRootProps {
  external?: boolean;
  class?: string;
}

export const Link = (props: LinkProps) => {
  const others = omit(props, "class", "external", "children", "href", "variant", "underline");

  return (
    <KLink
      href={props.href}
      target={props.external ? "_blank" : undefined}
      rel={props.external ? "noopener noreferrer" : undefined}
      class={defaultClass.root}
      {...others}
    >
      {props.children}
    </KLink>
  );
};
