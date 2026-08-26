import { TextField as KTextField } from "@kobalte/core/text-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { defaultClass } from "./setting";

export interface TextFieldProps
  extends Omit<ComponentProps<typeof KTextField>, "class"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  placeholder?: string;
  type?: string;
  class?: string;
}

export const TextField = (props: TextFieldProps) => {
  const others = omit(
    props,
    "label",
    "description",
    "errorMessage",
    "placeholder",
    "type",
    "class",
    "size",
  );

  return (
    <KTextField
      class={defaultClass.root}
      validationState={props.errorMessage ? "invalid" : "valid"}
      {...others}
    >
      <Show when={props.label}>
        <KTextField.Label class={defaultClass.label}>{props.label}</KTextField.Label>
      </Show>

      <KTextField.Input class={defaultClass.input} type={props.type} placeholder={props.placeholder} />

      <Show when={props.description}>
        <KTextField.Description class={defaultClass.description}>
          {props.description}
        </KTextField.Description>
      </Show>

      <Show when={props.errorMessage}>
        <KTextField.ErrorMessage class={defaultClass.errorMessage}>
          {props.errorMessage}
        </KTextField.ErrorMessage>
      </Show>
    </KTextField>
  );
};
