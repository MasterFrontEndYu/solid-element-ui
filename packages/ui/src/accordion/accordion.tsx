import { Accordion as KAccordion, type AccordionRootProps } from "@kobalte/core/accordion";
import { For, omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronDown } from "../icons";

import { fullClass} from "./setting"



export const Accordion = (props: any) => {
  const others = omit(props, "items", "class");

  return (
    <KAccordion class={fullClass.root} {...others}>
      <For each={props.items}>
        {(itemData) => (
          <KAccordion.Item value={itemData.value} disabled={itemData.disabled} class={fullClass.item}>
            <KAccordion.Header class={fullClass.header}>
              <KAccordion.Trigger class={fullClass.trigger}>
                {itemData.title}
                <ChevronDown aria-hidden="true" />
              </KAccordion.Trigger>
            </KAccordion.Header>
            <KAccordion.Content class={fullClass.content}>
              <div class={fullClass.contentInner}>{itemData.content}</div>
            </KAccordion.Content>
          </KAccordion.Item>
        )}
      </For>
    </KAccordion>
  );
};
