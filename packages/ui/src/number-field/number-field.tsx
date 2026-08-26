import { NumberField as KNumberField } from "@kobalte/core/number-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { ChevronUp, ChevronDown } from "../icons";
import { fullClass } from "./setting";

export interface NumberFieldProps
  extends Omit<ComponentProps<typeof KNumberField>, "class"> {
  label?: string;
  description?: string;
  class?: string;
}

export const NumberField = (props: NumberFieldProps) => {
  // 严格处理属性，防止 TS 报错“已声明但未使用”
  const others = omit(props, "label", "description", "class");

  return (
    <KNumberField class={fullClass.root} {...others}>
      <Show when={props.label}>
        <KNumberField.Label class={fullClass.label}>{props.label}</KNumberField.Label>
      </Show>

      <div class={fullClass.container}>
        <KNumberField.Input class={fullClass.input} />
        <div class={fullClass.controls}>
          <KNumberField.IncrementTrigger class={fullClass.stepper}>
            <ChevronUp size={14} />
          </KNumberField.IncrementTrigger>
          <KNumberField.DecrementTrigger
            class={`${fullClass.stepper} border-t border-slate-200 dark:border-slate-800`}
          >
            <ChevronDown size={14} />
          </KNumberField.DecrementTrigger>
        </div>
      </div>

      <Show when={props.description}>
        <KNumberField.Description class="text-xs text-slate-500 ml-1 mt-1" />
      </Show>
      <KNumberField.ErrorMessage class={fullClass.errorMessage} />
    </KNumberField>
  );
};
