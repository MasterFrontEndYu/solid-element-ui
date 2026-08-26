import { Select as KSelect } from "@kobalte/core/select";
import { omit, Show, createMemo } from "solid-js";
import { ChevronDown, Check } from "../icons";
import { defaultClass } from "./setting";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

// 重新定义接口，使 value 和 onChange 处理的是 string 类型
export interface SelectProps {
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  label?: string;
  description?: string;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  class?: string;
}

export const Select = (props: SelectProps) => {
  const others = omit(
    props,
    "options",
    "label",
    "description",
    "placeholder",
    "class",
    "value",
    "defaultValue",
    "onChange",
    "size",
  );

  const selectedOption = createMemo(() => {
    if (props.value === undefined) return undefined;
    return props.options.find((opt) => opt.value === props.value);
  });

  const defaultOption = createMemo(() => {
    if (props.defaultValue === undefined) return undefined;
    return props.options.find((opt) => opt.value === props.defaultValue);
  });

  const handleValueChange = (opt: Option | null) => {
    if (opt === null) {
      props.onChange?.("");
      return;
    }
    props.onChange?.(opt.value);
  };

  return (
    <KSelect<Option>
      multiple={false}
      options={props.options}
      optionValue="value"
      optionTextValue="label"
      optionDisabled="disabled"
      placeholder={props.placeholder}
      value={selectedOption()}
      defaultValue={defaultOption()}
      onChange={handleValueChange}
      class={defaultClass.root}
      {...others}
      itemComponent={(itemProps) => (
        <KSelect.Item item={itemProps.item} class={defaultClass.item}>
          <KSelect.ItemIndicator class={defaultClass.itemIndicator}>
            <Check size={14} />
          </KSelect.ItemIndicator>
          <KSelect.ItemLabel>{itemProps.item.textValue}</KSelect.ItemLabel>
        </KSelect.Item>
      )}
    >
      <Show when={props.label}>
        <KSelect.Label class={defaultClass.label}>{props.label}</KSelect.Label>
      </Show>

      <KSelect.Trigger class={defaultClass.trigger}>
        <KSelect.Value<Option>>
          {(state) => (
            <Show when={state.selectedOption()} fallback={props.placeholder}>
              {state.selectedOption()?.label}
            </Show>
          )}
        </KSelect.Value>
        <KSelect.Icon>
          <ChevronDown size={16} class="opacity-50" />
        </KSelect.Icon>
      </KSelect.Trigger>

      <KSelect.Portal>
        <KSelect.Content class={defaultClass.content}>
          <KSelect.Listbox class={defaultClass.listbox} />
        </KSelect.Content>
      </KSelect.Portal>

      <Show when={props.description}>
        <KSelect.Description class={defaultClass.description}>{props.description}</KSelect.Description>
      </Show>
    </KSelect>
  );
};
