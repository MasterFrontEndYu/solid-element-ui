import { Progress as KProgress } from "@kobalte/core/progress";
import { omit, type ComponentProps, Show } from "solid-js";
import { defaultClass } from "./setting";

// FIXME  进度条问题，value 直接占满

export interface ProgressProps
  extends Omit<ComponentProps<typeof KProgress>, "children"> {
  label?: string;
  showValue?: boolean;
}

export const Progress = (props: ProgressProps) => {
  const others = omit(props, "label", "showValue", "class", "size", "radius");

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
        <KProgress.Fill class={defaultClass.fill} style={{ width: "var(--kb-progress-fill-width)" }} />
      </KProgress.Track>
    </KProgress>
  );
};
