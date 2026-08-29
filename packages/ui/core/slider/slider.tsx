import { Slider as KSlider, type SliderRootProps } from "@kobalte/core/slider";
import { omit, For, Show } from "solid-js";
import { defaultClass } from "./setting";

// FIXME 点击轨道时报错

export interface SliderProps extends Omit<SliderRootProps, "class"> {
  label?: string;
  showValue?: boolean;
  class?: string;
  labelWrapperClass?: string;
  labelClass?: string;
  valueClass?: string;
  trackClass?: string;
  fillClass?: string;
  thumbClass?: string;
}

export const Slider = (props: SliderProps) => {
  const others = omit(
    props,
    "label",
    "showValue",
    "class",
    "variant",
    "size",
    "labelWrapperClass",
    "labelClass",
    "valueClass",
    "trackClass",
    "fillClass",
    "thumbClass",
  );

  return (
    <KSlider class={defaultClass.root} {...others}>
      <Show when={props.label || props.showValue}>
        <div class={defaultClass.labelWrapper}>
          <Show when={props.label}>
            <KSlider.Label class={defaultClass.label}>{props.label}</KSlider.Label>
          </Show>
          <Show when={props.showValue}>
            <KSlider.ValueLabel class={defaultClass.value} />
          </Show>
        </div>
      </Show>

      <KSlider.Track class={defaultClass.track}>
        <KSlider.Fill class={defaultClass.fill} />
        <For each={others.value ?? [others.defaultValue]}>
          {() => (
            <KSlider.Thumb class={defaultClass.thumb}>
              <KSlider.Input />
            </KSlider.Thumb>
          )}
        </For>
      </KSlider.Track>
    </KSlider>
  );
};
