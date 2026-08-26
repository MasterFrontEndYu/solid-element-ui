import { RadioGroup as KRadioGroup } from "@kobalte/core/radio-group";
import { omit, type ComponentProps, For, Show } from "solid-js";
import { defaultClass } from "./setting";

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps
  extends Omit<ComponentProps<typeof KRadioGroup>, "children" | "class"> {
  label?: string;
  options: RadioOption[];
  class?: string;
}

/**
 * RadioGroup 高度封装版
 * 自动处理循环渲染、选中指示器以及水平/垂直布局
 */
export const RadioGroup = (props: RadioGroupProps) => {
  const others = omit(props, "label", "options", "class", "orientation");

  return (
    <KRadioGroup class={defaultClass.root} {...others}>
      <Show when={props.label}>
        <KRadioGroup.Label class={defaultClass.label}>{props.label}</KRadioGroup.Label>
      </Show>

      <For each={props.options}>
        {(option) => (
          <KRadioGroup.Item value={option.value} disabled={option.disabled} class={defaultClass.item}>
            <KRadioGroup.ItemInput />
            <KRadioGroup.ItemControl class={defaultClass.control}>
              <KRadioGroup.ItemIndicator class={defaultClass.indicator} />
            </KRadioGroup.ItemControl>
            <KRadioGroup.ItemLabel class={defaultClass.itemLabel}>{option.label}</KRadioGroup.ItemLabel>
          </KRadioGroup.Item>
        )}
      </For>
    </KRadioGroup>
  );
};
