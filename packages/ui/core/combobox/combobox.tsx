import { Combobox as KCombobox } from "@kobalte/core/combobox";
import { omit, type ComponentProps } from "solid-js";
import { Check, ChevronDown } from "../icons";
import { fullClass } from "./setting";

// FIXME 缺少Description，ErrorMessage，验证

export type ComboboxProps<T> = ComponentProps<typeof KCombobox<T>> & {
  label?: string;
  placeholder?: string;
  class?: string;
};

export const Combobox = <T extends string | object>(props: ComboboxProps<T>) => {
  const others = omit(props as ComboboxProps<T>, "label", "placeholder", "class");

  return (
    <KCombobox<T> class={fullClass.root} {...others}>
      {props.label && <KCombobox.Label class={fullClass.label}>{props.label}</KCombobox.Label>}

      <KCombobox.Control class={fullClass.control}>
        <KCombobox.Input class={fullClass.input} placeholder={props.placeholder} />
        <KCombobox.Trigger class={fullClass.trigger}>
          <KCombobox.Icon class={fullClass.icon}>
            <ChevronDown class="h-4 w-4" />
          </KCombobox.Icon>
        </KCombobox.Trigger>
      </KCombobox.Control>

      <KCombobox.Portal>
        <KCombobox.Content class={fullClass.content}>
          <KCombobox.Listbox class={fullClass.listbox} />
        </KCombobox.Content>
      </KCombobox.Portal>
    </KCombobox>
  );
};

export const ComboboxItem = (props: { item: any }) => {
  return (
    <KCombobox.Item item={props.item} class={fullClass.item}>
      <KCombobox.ItemIndicator class={fullClass.itemIndicator}>
        <Check size={14} />
      </KCombobox.ItemIndicator>
      <KCombobox.ItemLabel>{props.item.rawValue}</KCombobox.ItemLabel>
    </KCombobox.Item>
  );
};
