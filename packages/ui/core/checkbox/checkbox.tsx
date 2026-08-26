import { Checkbox as KCheckbox } from "@kobalte/core/checkbox";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { Check } from "../icons";
import { fullClass } from "./setting";

// TODO 添加checkbox 的几种形状尺寸,看情况吧
export interface CheckboxProps extends ComponentProps<typeof KCheckbox> {
  label?: JSX.Element;
}

export const Checkbox = (props: CheckboxProps) => {
  const others = omit(props, "label", "class", "description", "errorMessage");

  return (
    <KCheckbox class={fullClass.root} {...others}>
      <KCheckbox.Input />
      <KCheckbox.Control class={fullClass.control}>
        <KCheckbox.Indicator class={fullClass.indicator}>
          <Check class={fullClass.indicator} stroke-width={3} />
        </KCheckbox.Indicator>
      </KCheckbox.Control>
      {props.label && <KCheckbox.Label class={fullClass.label}>{props.label}</KCheckbox.Label>}
      <KCheckbox.Description class={fullClass.description}>{props.description}</KCheckbox.Description>
      <KCheckbox.ErrorMessage class={fullClass.errorMessage}>{props.errorMessage}</KCheckbox.ErrorMessage>
    </KCheckbox>
  );
};
