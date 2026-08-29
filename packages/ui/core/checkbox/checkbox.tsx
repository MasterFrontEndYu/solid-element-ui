import { Checkbox as KCheckbox, type CheckboxRootProps } from "@kobalte/core/checkbox";
import { omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { Check } from "../icons";
import { defaultClass } from "./setting";

// TODO 添加checkbox 的几种形状尺寸,看情况吧
export interface CheckboxProps extends CheckboxRootProps {
  label?: JSX.Element;
  class?: string;
  controlClass?: string;
  labelClass?: string;
  indicatorClass?: string;
  descriptionClass?: string;
  errorMessageClass?: string;
}

export const Checkbox = (props: CheckboxProps) => {
  const others = omit(
    props,
    "label",
    "class",
    "description",
    "errorMessage",
    "controlClass",
    "labelClass",
    "indicatorClass",
    "descriptionClass",
    "errorMessageClass",
  );

  return (
    <KCheckbox class={defaultClass.root} {...others}>
      <KCheckbox.Input />
      <KCheckbox.Control class={defaultClass.control}>
        <KCheckbox.Indicator class={defaultClass.indicator}>
          <Check class={defaultClass.indicator} stroke-width={3} />
        </KCheckbox.Indicator>
      </KCheckbox.Control>
      {props.label && <KCheckbox.Label class={defaultClass.label}>{props.label}</KCheckbox.Label>}
      <KCheckbox.Description class={defaultClass.description}>
        {props.description}
      </KCheckbox.Description>
      <KCheckbox.ErrorMessage class={defaultClass.errorMessage}>
        {props.errorMessage}
      </KCheckbox.ErrorMessage>
    </KCheckbox>
  );
};
