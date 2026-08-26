import { Tabs as KTabs } from "@kobalte/core/tabs";
import { omit, For } from "solid-js";
import type { JSX } from "@solidjs/web";
import { fullClass } from "./setting";

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
    <KTabs class={fullClass.root} {...others}>
      <KTabs.List class={fullClass.list}>
        <For each={props.items}>
          {(item) => (
            <KTabs.Trigger class={fullClass.trigger} value={item.value} disabled={item.disabled}>
              {item.label}
            </KTabs.Trigger>
          )}
        </For>
        <KTabs.Indicator class={fullClass.indicator} />
      </KTabs.List>

      <For each={props.items}>
        {(item) => (
          <KTabs.Content class={fullClass.content} value={item.value}>
            {item.content}
          </KTabs.Content>
        )}
      </For>
    </KTabs>
  );
};
