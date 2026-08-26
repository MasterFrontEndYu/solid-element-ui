import { Tabs as KTabs } from "@kobalte/core/tabs";
import { omit, For } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

export type TabItem = {
  value: string;
  label: string | JSX.Element;
  content: JSX.Element;
  disabled?: boolean;
};

interface TabsProps {
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  class?: string;
}

export const Tabs = (props: TabsProps) => {
  const others = omit(props, "items", "class");

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
