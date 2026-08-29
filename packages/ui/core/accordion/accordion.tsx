import { Accordion as KAccordion, type AccordionRootProps } from "@kobalte/core/accordion";
import { ComponentProps, For, omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";

import { defaultClass } from "./setting";

// TODO  别忘记如何处理 后端返回的 带标签的数据？强制用户自己处理，组件只用处理jsx就可以了。

export interface AccordionProps extends AccordionRootProps {
  items: Array<any>;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  triggerClass?: string;
  contentClass?: string;
  contentTextClass?: string;
  iconClass?: string;
}

export const Accordion = (props: AccordionProps) => {
  const others = omit(
    props,
    "items",
    "class",
    "itemClass",
    "headerClass",
    "triggerClass",
    "contentClass",
    "contentTextClass",
    "iconClass",
  );
  return (
    <KAccordion class={defaultClass.root} {...others}>
      <For each={props.items}>
        {(itemData) => (
          <KAccordion.Item
            value={itemData.value}
            disabled={itemData.disabled}
            class={defaultClass.item}
          >
            <KAccordion.Header class={defaultClass.header}>
              <KAccordion.Trigger class={defaultClass.trigger}>
                {itemData.title}
                <ChevronDown class={defaultClass.icon} aria-hidden="true" />
              </KAccordion.Trigger>
            </KAccordion.Header>
            <KAccordion.Content class={defaultClass.content}>
              <p class={defaultClass.contentText}>{itemData.content}</p>
            </KAccordion.Content>
          </KAccordion.Item>
        )}
      </For>
    </KAccordion>
  );
};
