import { ColorField as KColorField } from "@kobalte/core/color-field";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

export interface ColorFieldProps extends ComponentProps<typeof KColorField> {
  label?: string;
  desc?: string;
  error?: string;
}

export const ColorField = (props: ColorFieldProps) => {
  const others = omit(props, "label", "desc", "error", "class");

  return (
    <KColorField
      class={defaultClass.root}
      validationState={props.error ? "invalid" : "valid"}
      {...others}
    >
      {props.label && <KColorField.Label class={defaultClass.label}>{props.label}</KColorField.Label>}
      <KColorField.Input class={defaultClass.input} placeholder="#FFFFFF" />
      {props.desc && !props.error && (
        <KColorField.Description class={defaultClass.description}>{props.desc}</KColorField.Description>
      )}
      <KColorField.ErrorMessage class={defaultClass.errorMessage}>{props.error}</KColorField.ErrorMessage>
    </KColorField>
  );
};
