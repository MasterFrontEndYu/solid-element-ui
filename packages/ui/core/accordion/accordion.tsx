import { Accordion as KAccordion, type AccordionRootProps } from "@kobalte/core/accordion";
import { For, omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";

import { defaultClass} from "./setting"



export const Accordion = (props: any) => {
  const others = omit(props, "items", "class");

  return (
    <KAccordion class={defaultClass.root} {...others}>
      <For each={props.items}>
        {(itemData) => (
          <KAccordion.Item value={itemData.value} disabled={itemData.disabled} class={defaultClass.item}>
            <KAccordion.Header class={defaultClass.header}>
              <KAccordion.Trigger class={defaultClass.trigger}>
                {itemData.title}
                <ChevronDown aria-hidden="true" />
              </KAccordion.Trigger>
            </KAccordion.Header>
            <KAccordion.Content class={defaultClass.content}>
              <div class={defaultClass.contentInner}>{itemData.content}</div>
            </KAccordion.Content>
          </KAccordion.Item>
        )}
      </For>
    </KAccordion>
  );
};
