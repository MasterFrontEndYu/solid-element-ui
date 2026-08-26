import { TimeField as KTimeField } from "@kobalte/core/time-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { defaultClass } from "./setting";

export interface TimeFieldProps
  extends Omit<ComponentProps<typeof KTimeField>, "class"> {
  label?: string;
  description?: string;
  errorMessage?: string;
  class?: string;
}

export const TimeField = (props: TimeFieldProps) => {
  const others = omit(props, "label", "description", "errorMessage", "class", "size");

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
