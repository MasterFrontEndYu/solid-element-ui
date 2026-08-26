import { ColorChannelField as KColorChannelField } from "@kobalte/core/color-channel-field";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

export interface ColorChannelFieldProps extends ComponentProps<typeof KColorChannelField> {
  label?: string;
}

// TODO channel 问题

export const ColorChannelField = (props: ColorChannelFieldProps) => {
  const others = omit(props, "label", "class");

  return (
    <KColorChannelField class={defaultClass.root} {...others}>
      {props.label && (
        <KColorChannelField.Label class={defaultClass.label}>{props.label}</KColorChannelField.Label>
      )}
      <KColorChannelField.Input class={defaultClass.input} />
    </KColorChannelField>
  );
};
