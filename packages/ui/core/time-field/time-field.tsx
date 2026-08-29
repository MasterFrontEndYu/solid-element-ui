import { TimeField as KTimeField, type TimeFieldRootProps } from "@kobalte/core/time-field";
import { omit, Show } from "solid-js";
import { defaultClass } from "./setting";

export interface TimeFieldProps extends Omit<TimeFieldRootProps, "class"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  class?: string;
  labelClass?: string;
  controlClass?: string;
  segmentClass?: string;
  descriptionClass?: string;
  errorMessageClass?: string;
}

export const TimeField = (props: TimeFieldProps) => {
  const others = omit(
    props,
    "label",
    "description",
    "errorMessage",
    "class",
    "size",
    "labelClass",
    "controlClass",
    "segmentClass",
    "descriptionClass",
    "errorMessageClass",
  );

  return (
    <KTimeField
      class={defaultClass.root}
      validationState={props.errorMessage ? "invalid" : "valid"}
      {...others}
    >
      <Show when={props.label}>
        <KTimeField.Label class={defaultClass.label}>{props.label}</KTimeField.Label>
      </Show>

      <KTimeField.Input>{(segment) => <KTimeField.Segment segment={segment()} />}</KTimeField.Input>

      <Show when={props.description}>
        <KTimeField.Description class={defaultClass.description}>
          {props.description}
        </KTimeField.Description>
      </Show>

      <Show when={props.errorMessage}>
        <KTimeField.ErrorMessage class={defaultClass.errorMessage}>
          {props.errorMessage}
        </KTimeField.ErrorMessage>
      </Show>
    </KTimeField>
  );
};
