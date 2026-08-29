import { NumberField as KNumberField, type NumberFieldRootProps } from "@kobalte/core/number-field";
import { omit, Show } from "solid-js";
import { ChevronUp, ChevronDown } from "../icons";
import { defaultClass } from "./setting";

export interface NumberFieldProps extends Omit<NumberFieldRootProps, "class"> {
  label?: string;
  description?: string;
  class?: string;
  labelClass?: string;
  containerClass?: string;
  inputClass?: string;
  controlsClass?: string;
  stepperClass?: string;
  errorMessageClass?: string;
}

export const NumberField = (props: NumberFieldProps) => {
  // 严格处理属性，防止 TS 报错“已声明但未使用”
  const others = omit(
    props,
    "label",
    "description",
    "class",
    "labelClass",
    "containerClass",
    "inputClass",
    "controlsClass",
    "stepperClass",
    "errorMessageClass",
  );

  return (
    <KNumberField class={defaultClass.root} {...others}>
      <Show when={props.label}>
        <KNumberField.Label class={defaultClass.label}>{props.label}</KNumberField.Label>
      </Show>

      <div class={defaultClass.container}>
        <KNumberField.Input class={defaultClass.input} />
        <div class={defaultClass.controls}>
          <KNumberField.IncrementTrigger class={defaultClass.stepper}>
            <ChevronUp size={14} />
          </KNumberField.IncrementTrigger>
          <KNumberField.DecrementTrigger
            class={`${defaultClass.stepper} border-t border-slate-200 dark:border-slate-800`}
          >
            <ChevronDown size={14} />
          </KNumberField.DecrementTrigger>
        </div>
      </div>

      <Show when={props.description}>
        <KNumberField.Description class="text-xs text-slate-500 ml-1 mt-1" />
      </Show>
      <KNumberField.ErrorMessage class={defaultClass.errorMessage} />
    </KNumberField>
  );
};
