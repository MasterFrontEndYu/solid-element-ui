import {
  ColorChannelField as KColorChannelField,
  type ColorChannelFieldRootProps,
} from "@kobalte/core/color-channel-field";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

export interface ColorChannelFieldProps extends ColorChannelFieldRootProps {
  label?: string;
  class?: string;
  labelClass?: string;
  inputClass?: string;
}

// TODO channel 问题

export const ColorChannelField = (props: ColorChannelFieldProps) => {
  const others = omit(props, "label", "class", "labelClass", "inputClass");

  return (
    <KColorChannelField class={defaultClass.root} {...others}>
      {props.label && (
        <KColorChannelField.Label class={defaultClass.label}>
          {props.label}
        </KColorChannelField.Label>
      )}
      <KColorChannelField.Input class={defaultClass.input} />
    </KColorChannelField>
  );
};
