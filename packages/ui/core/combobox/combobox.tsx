import { Combobox as KCombobox, type ComboboxRootProps } from "@kobalte/core/combobox";
import { omit } from "solid-js";
import { Check, ChevronDown } from "../icons";
import { defaultClass } from "./setting";

// FIXME 缺少Description，ErrorMessage，验证

export type ComboboxProps<T> = ComboboxRootProps<T> & {
  label?: string;
  placeholder?: string;
  class?: string;
  labelClass?: string;
  controlClass?: string;
  inputClass?: string;
  triggerClass?: string;
  contentClass?: string;
  listboxClass?: string;
  itemClass?: string;
  itemIndicatorClass?: string;
  iconClass?: string;
};

export const Combobox = <T extends string | object>(props: ComboboxProps<T>) => {
  const others = omit(
    props as ComboboxProps<T>,
    "label",
    "placeholder",
    "class",
    "labelClass",
    "controlClass",
    "inputClass",
    "triggerClass",
    "contentClass",
    "listboxClass",
    "itemClass",
    "itemIndicatorClass",
    "iconClass",
  );

  return (
    <KCombobox<T> class={defaultClass.root} {...others}>
      {props.label && <KCombobox.Label class={defaultClass.label}>{props.label}</KCombobox.Label>}

      <KCombobox.Control class={defaultClass.control}>
        <KCombobox.Input class={defaultClass.input} placeholder={props.placeholder} />
        <KCombobox.Trigger class={defaultClass.trigger}>
          <KCombobox.Icon class={defaultClass.icon}>
            <ChevronDown class="h-4 w-4" />
          </KCombobox.Icon>
        </KCombobox.Trigger>
      </KCombobox.Control>

      <KCombobox.Portal>
        <KCombobox.Content class={defaultClass.content}>
          <KCombobox.Listbox class={defaultClass.listbox} />
        </KCombobox.Content>
      </KCombobox.Portal>
    </KCombobox>
  );
};

export const ComboboxItem = (props: { item: any }) => {
  return (
    <KCombobox.Item item={props.item} class={defaultClass.item}>
      <KCombobox.ItemIndicator class={defaultClass.itemIndicator}>
        <Check size={14} />
      </KCombobox.ItemIndicator>
      <KCombobox.ItemLabel>{props.item.rawValue}</KCombobox.ItemLabel>
    </KCombobox.Item>
  );
};
