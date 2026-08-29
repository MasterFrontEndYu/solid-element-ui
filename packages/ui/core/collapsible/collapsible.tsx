import { Collapsible as KCollapsible, type CollapsibleRootProps } from "@kobalte/core/collapsible";
import { omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";
import { defaultClass } from "./setting";

interface CollapsibleProps extends CollapsibleRootProps {
  title: JSX.Element;
  children: JSX.Element;
  class?: string;
  triggerClass?: string;
  contentClass?: string;
  contentInnerClass?: string;
  iconClass?: string;
}

export const Collapsible = (props: CollapsibleProps) => {
  const others = omit(
    props,
    "title",
    "children",
    "class",
    "triggerClass",
    "contentClass",
    "contentInnerClass",
    "iconClass",
  );

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
