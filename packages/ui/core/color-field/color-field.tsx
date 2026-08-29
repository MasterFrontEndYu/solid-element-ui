import { ColorField as KColorField, type ColorFieldRootProps } from "@kobalte/core/color-field";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface ColorFieldProps extends ColorFieldRootProps {
  label?: string;
  desc?: string;
  error?: string;
  class?: string;
  labelClass?: string;
  inputClass?: string;
  descriptionClass?: string;
  errorMessageClass?: string;
}

export const ColorField = (props: ColorFieldProps) => {
  const others = omit(
    props,
    "label",
    "desc",
    "error",
    "class",
    "labelClass",
    "inputClass",
    "descriptionClass",
    "errorMessageClass",
  );

  return (
    <KColorField
      class={defaultClass.root}
      validationState={props.error ? "invalid" : "valid"}
      {...others}
    >
      {props.label && (
        <KColorField.Label class={defaultClass.label}>{props.label}</KColorField.Label>
      )}
      <KColorField.Input class={defaultClass.input} placeholder="#FFFFFF" />
      {props.desc && !props.error && (
        <KColorField.Description class={defaultClass.description}>
          {props.desc}
        </KColorField.Description>
      )}
      <KColorField.ErrorMessage class={defaultClass.errorMessage}>
        {props.error}
      </KColorField.ErrorMessage>
    </KColorField>
  );
};
