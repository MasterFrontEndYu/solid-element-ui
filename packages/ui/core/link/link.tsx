import { Link as KLink } from "@kobalte/core/link";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

export interface LinkProps extends ComponentProps<typeof KLink> {
  external?: boolean;
}

export const Link = (props: LinkProps) => {
  const others = omit(props, "class", "external", "children", "href", "variant", "underline");

  return (
    <KLink
      href={props.href}
      target={props.external ? "_blank" : undefined}
      rel={props.external ? "noopener noreferrer" : undefined}
      class={fullClass.root}
      {...others}
    >
      {props.children}
    </KLink>
  );
};
