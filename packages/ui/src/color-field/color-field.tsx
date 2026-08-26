import { ColorField as KColorField } from "@kobalte/core/color-field";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

export interface ColorFieldProps extends ComponentProps<typeof KColorField> {
  label?: string;
  desc?: string;
  error?: string;
}

export const ColorField = (props: ColorFieldProps) => {
  const others = omit(props, "label", "desc", "error", "class");

  return (
    <KColorField
      class={fullClass.root}
      validationState={props.error ? "invalid" : "valid"}
      {...others}
    >
      {props.label && <KColorField.Label class={fullClass.label}>{props.label}</KColorField.Label>}
      <KColorField.Input class={fullClass.input} placeholder="#FFFFFF" />
      {props.desc && !props.error && (
        <KColorField.Description class={fullClass.description}>{props.desc}</KColorField.Description>
      )}
      <KColorField.ErrorMessage class={fullClass.errorMessage}>{props.error}</KColorField.ErrorMessage>
    </KColorField>
  );
};
