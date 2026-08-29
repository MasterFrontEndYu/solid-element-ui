import { Switch as KSwitch, type SwitchRootProps } from "@kobalte/core/switch";
import { omit, Show } from "solid-js";
import { defaultClass } from "./setting";

export interface SwitchProps extends Omit<SwitchRootProps, "class"> {
  label?: string;
  description?: string;
  class?: string;
  controlClass?: string;
  thumbClass?: string;
  labelClass?: string;
  descriptionClass?: string;
}

export const Switch = (props: SwitchProps) => {
  const others = omit(
    props,
    "label",
    "description",
    "class",
    "size",
    "variant",
    "controlClass",
    "thumbClass",
    "labelClass",
    "descriptionClass",
  );

  return (
    <KSwitch class={defaultClass.root} {...others}>
      <KSwitch.Input />
      <KSwitch.Control class={defaultClass.control}>
        <KSwitch.Thumb class={defaultClass.thumb} />
      </KSwitch.Control>

      <Show when={props.label || props.description}>
        <div class="flex flex-col gap-0.5">
          <Show when={props.label}>
            <KSwitch.Label class={defaultClass.label}>{props.label}</KSwitch.Label>
          </Show>
          <Show when={props.description}>
            <KSwitch.Description class={defaultClass.description}>
              {props.description}
            </KSwitch.Description>
          </Show>
        </div>
      </Show>
    </KSwitch>
  );
};
