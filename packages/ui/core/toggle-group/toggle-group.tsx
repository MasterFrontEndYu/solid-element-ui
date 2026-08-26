import { ToggleGroup as KToggleGroup } from "@kobalte/core/toggle-group";
import { omit, For, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { fullClass } from "./setting";

// TODO 单选，多选出现问题

interface Option {
  label: string | JSX.Element;
  value: string;
  disabled?: boolean;
}

export interface ToggleGroupProps
  extends Omit<ComponentProps<typeof KToggleGroup>, "class"> {
  options: Option[];
  class?: string;
}

export const ToggleGroup = (props: ToggleGroupProps) => {
  const others = omit(props, "options", "class", "size", "variant");

  return (
    <KToggleGroup class={fullClass.root} {...others}>
      <For each={props.options}>
        {(option) => (
          <KToggleGroup.Item value={option.value} disabled={option.disabled} class={fullClass.item}>
            {option.label}
          </KToggleGroup.Item>
        )}
      </For>
    </KToggleGroup>
  );
};
