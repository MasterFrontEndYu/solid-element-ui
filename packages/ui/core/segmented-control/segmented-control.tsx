import { SegmentedControl as KSegmented } from "@kobalte/core/segmented-control";
import { omit, For, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

// FIXME 样式问题

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SegmentedControlProps
  extends Omit<ComponentProps<typeof KSegmented>, "class"> {
  options: Option[];
  label?: string;
  class?: string;
}

export const SegmentedControl = (props: SegmentedControlProps) => {
  const others = omit(props, "options", "class", "label", "size");

  return (
    <KSegmented class={fullClass.root} {...others}>
      {props.label && <KSegmented.Label class={fullClass.label}>{props.label}</KSegmented.Label>}
      <div class={fullClass.container}>
        <For each={props.options}>
          {(option) => (
            <KSegmented.Item value={option.value} disabled={option.disabled} class={fullClass.item}>
              <KSegmented.ItemInput />
              <KSegmented.ItemLabel class={fullClass.itemLabel}>{option.label}</KSegmented.ItemLabel>
            </KSegmented.Item>
          )}
        </For>
        <KSegmented.Indicator class={fullClass.indicator} />
      </div>
    </KSegmented>
  );
};
