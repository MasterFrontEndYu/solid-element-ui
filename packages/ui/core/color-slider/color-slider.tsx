import { ColorSlider as KColorSlider, type ColorSliderRootProps } from "@kobalte/core/color-slider";
import { omit } from "solid-js";
import { defaultClass } from "./setting";

// TODO defaultValue,还有channel 的问题

export interface ColorSliderProps extends ColorSliderRootProps {
  label?: string;
  showValue?: boolean;
  class?: string;
  labelClass?: string;
  trackClass?: string;
  thumbClass?: string;
  valueLabelClass?: string;
}

export const ColorSlider = (props: ColorSliderProps) => {
  const others = omit(
    props,
    "label",
    "showValue",
    "class",
    "labelClass",
    "trackClass",
    "thumbClass",
    "valueLabelClass",
  );

  return (
    <KColorSlider class={defaultClass.root} {...others}>
      <div class="flex w-full justify-between items-center">
        {props.label && (
          <KColorSlider.Label class={defaultClass.label}>{props.label}</KColorSlider.Label>
        )}
        {props.showValue && <KColorSlider.ValueLabel class={defaultClass.valueLabel} />}
      </div>
      <KColorSlider.Track
        class={defaultClass.track}
        style={{
          background: "var(--kb-color-slider-track-background)",
        }}
      >
        <KColorSlider.Thumb class={defaultClass.thumb}>
          <KColorSlider.Input />
        </KColorSlider.Thumb>
      </KColorSlider.Track>
    </KColorSlider>
  );
};
