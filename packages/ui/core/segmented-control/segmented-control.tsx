import {
  SegmentedControl as KSegmented,
  type SegmentedControlRootProps,
} from "@kobalte/core/segmented-control";
import { omit, For } from "solid-js";
import { defaultClass } from "./setting";

// FIXME 样式问题

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SegmentedControlProps extends Omit<SegmentedControlRootProps, "class"> {
  options: Option[];
  label?: string;
  class?: string;
  containerClass?: string;
  itemClass?: string;
  indicatorClass?: string;
  labelClass?: string;
  itemLabelClass?: string;
}

export const SegmentedControl = (props: SegmentedControlProps) => {
  const others = omit(
    props,
    "options",
    "class",
    "label",
    "size",
    "containerClass",
    "itemClass",
    "indicatorClass",
    "labelClass",
    "itemLabelClass",
  );

  return (
    <KSegmented class={defaultClass.root} {...others}>
      {props.label && <KSegmented.Label class={defaultClass.label}>{props.label}</KSegmented.Label>}
      <div class={defaultClass.container}>
        <For each={props.options}>
          {(option) => (
            <KSegmented.Item
              value={option.value}
              disabled={option.disabled}
              class={defaultClass.item}
            >
              <KSegmented.ItemInput />
              <KSegmented.ItemLabel class={defaultClass.itemLabel}>
                {option.label}
              </KSegmented.ItemLabel>
            </KSegmented.Item>
          )}
        </For>
        <KSegmented.Indicator class={defaultClass.indicator} />
      </div>
    </KSegmented>
  );
};
