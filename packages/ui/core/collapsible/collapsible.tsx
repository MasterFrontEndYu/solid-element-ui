import { Collapsible as KCollapsible } from "@kobalte/core/collapsible";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";
import { defaultClass } from "./setting";

interface CollapsibleProps extends ComponentProps<typeof KCollapsible> {
  title: JSX.Element;
  children: JSX.Element;
}

export const Collapsible = (props: CollapsibleProps) => {
  const others = omit(props, "title", "children", "class");

  return (
    <KCollapsible class={defaultClass.root} {...others}>
      <KCollapsible.Trigger class={defaultClass.trigger}>
        <span>{props.title}</span>
        <ChevronDown class={defaultClass.icon} />
      </KCollapsible.Trigger>

      <KCollapsible.Content class={defaultClass.content}>
        <div class={defaultClass.contentInner}>{props.children}</div>
      </KCollapsible.Content>
    </KCollapsible>
  );
};
