import { ColorChannelField as KColorChannelField } from "@kobalte/core/color-channel-field";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

export interface ColorChannelFieldProps extends ComponentProps<typeof KColorChannelField> {
  label?: string;
}

// TODO channel 问题

export const ColorChannelField = (props: ColorChannelFieldProps) => {
  const others = omit(props, "label", "class");

  return (
    <KColorChannelField class={fullClass.root} {...others}>
      {props.label && (
        <KColorChannelField.Label class={fullClass.label}>{props.label}</KColorChannelField.Label>
      )}
      <KColorChannelField.Input class={fullClass.input} />
    </KColorChannelField>
  );
};
