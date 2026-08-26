import { Collapsible as KCollapsible } from "@kobalte/core/collapsible";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";
import { fullClass } from "./setting";

interface CollapsibleProps extends ComponentProps<typeof KCollapsible> {
  title: JSX.Element;
  children: JSX.Element;
}

export const Collapsible = (props: CollapsibleProps) => {
  const others = omit(props, "title", "children", "class");

  return (
    <KCollapsible class={fullClass.root} {...others}>
      <KCollapsible.Trigger class={fullClass.trigger}>
        <span>{props.title}</span>
        <ChevronDown class={fullClass.icon} />
      </KCollapsible.Trigger>

      <KCollapsible.Content class={fullClass.content}>
        <div class={fullClass.contentInner}>{props.children}</div>
      </KCollapsible.Content>
    </KCollapsible>
  );
};
