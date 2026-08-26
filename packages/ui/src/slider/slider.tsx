import { Slider as KSlider } from "@kobalte/core/slider";
import { omit, type ComponentProps, For, Show } from "solid-js";
import { fullClass } from "./setting";

// FIXME 点击轨道时报错

export interface SliderProps extends Omit<ComponentProps<typeof KSlider>, "class"> {
  label?: string;
  showValue?: boolean;
  class?: string;
}

export const Slider = (props: SliderProps) => {
  const others = omit(props, "label", "showValue", "class", "variant", "size");

  return (
    <KSlider class={fullClass.root} {...others}>
      <Show when={props.label || props.showValue}>
        <div class={fullClass.labelWrapper}>
          <Show when={props.label}>
            <KSlider.Label class={fullClass.label}>{props.label}</KSlider.Label>
          </Show>
          <Show when={props.showValue}>
            <KSlider.ValueLabel class={fullClass.value} />
          </Show>
        </div>
      </Show>

      <KSlider.Track class={fullClass.track}>
        <KSlider.Fill class={fullClass.fill} />
        <For each={others.value ?? [others.defaultValue]}>
          {() => (
            <KSlider.Thumb class={fullClass.thumb}>
              <KSlider.Input />
            </KSlider.Thumb>
          )}
        </For>
      </KSlider.Track>
    </KSlider>
  );
};
