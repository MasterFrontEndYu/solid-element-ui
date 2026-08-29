import { Tabs as KTabs, type TabsRootProps } from "@kobalte/core/tabs";
import { omit, For } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

export type TabItem = {
  value: string;
  label: string | JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
};

interface TabsProps extends TabsRootProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  class?: string;
  listClass?: string;
  triggerClass?: string;
  indicatorClass?: string;
  contentClass?: string;
}

export const Tabs = (props: TabsProps) => {
  const others = omit(
    props,
    "class",
    "listClass",
    "triggerClass",
    "indicatorClass",
    "contentClass",
  );

  return (
    <KTabs class={defaultClass.root} {...others}>
      <KTabs.List class={defaultClass.list}>
        <For each={props.items}>
          {(item) => (
            <KTabs.Trigger class={defaultClass.trigger} value={item.value} disabled={item.disabled}>
              {item.label}
            </KTabs.Trigger>
          )}
        </For>
        <KTabs.Indicator class={defaultClass.indicator} />
      </KTabs.List>

      <For each={props.items}>
        {(item) => (
          <KTabs.Content class={defaultClass.content} value={item.value}>
            {item.content}
          </KTabs.Content>
        )}
      </For>
    </KTabs>
  );
};
