import { ColorSlider as KColorSlider } from "@kobalte/core/color-slider";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

// TODO defaultValue,还有channel 的问题

export interface ColorSliderProps extends ComponentProps<typeof KColorSlider> {
  label?: string;
  showValue?: boolean;
}

export const ColorSlider = (props: ColorSliderProps) => {
  const others = omit(props, "label", "showValue", "class");

  return (
    <KColorSlider class={defaultClass.root} {...others}>
      <div class="flex w-full justify-between items-center">
        {props.label && <KColorSlider.Label class={defaultClass.label}>{props.label}</KColorSlider.Label>}
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
