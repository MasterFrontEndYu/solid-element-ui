import { Progress as KProgress, type ProgressRootProps } from "@kobalte/core/progress";
import { omit, Show } from "solid-js";
import { defaultClass } from "./setting";

// FIXME  进度条问题，value 直接占满

export interface ProgressProps extends Omit<ProgressRootProps, "children"> {
  label?: string;
  showValue?: boolean;
  class?: string;
  labelContainerClass?: string;
  trackClass?: string;
  fillClass?: string;
}

export const Progress = (props: ProgressProps) => {
  const others = omit(
    props,
    "label",
    "showValue",
    "class",
    "size",
    "radius",
    "labelContainerClass",
    "trackClass",
    "fillClass",
  );

  return (
    <KProgress class={defaultClass.root} {...others}>
      <Show when={props.label || props.showValue}>
        <div class={defaultClass.labelContainer}>
          <Show when={props.label}>
            <KProgress.Label>{props.label}</KProgress.Label>
          </Show>
          <Show when={props.showValue}>
            <KProgress.ValueLabel class="text-xs text-slate-500" />
          </Show>
        </div>
      </Show>

      <KProgress.Track class={defaultClass.track}>
        <KProgress.Fill
          class={defaultClass.fill}
          style={{ width: "var(--kb-progress-fill-width)" }}
        />
      </KProgress.Track>
    </KProgress>
  );
};
