import { Meter as KMeter } from "@kobalte/core/meter";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

// TODO 1. 格式

export const Meter = Object.assign(
  (props: ComponentProps<typeof KMeter>) => {
    const others = omit(props, "class", "color");

    return (
      <KMeter class={defaultClass.root} {...others}>
        {others.children}
      </KMeter>
    );
  },
  {
    Label: (props: ComponentProps<typeof KMeter.Label>) => {
      const others = omit(props, "class");
      return (
        <KMeter.Label class={defaultClass.labelContainer} {...others} />
      );
    },
    ValueLabel: (props: ComponentProps<typeof KMeter.ValueLabel>) => {
      const others = omit(props, "class");
      return <KMeter.ValueLabel class={`text-xs text-slate-500 ${props.class}`} {...others} />;
    },
    Track: (props: ComponentProps<typeof KMeter.Track>) => {
      const others = omit(props, "class");
      return <KMeter.Track class={defaultClass.track} {...others} />;
    },
    Fill: (props: ComponentProps<typeof KMeter.Fill>) => {
      const others = omit(props, "class");
      // 注意：Fill 不需要手动设置宽度，Kobalte 会通过 style 注入百分比
      return <KMeter.Fill class={defaultClass.fill} {...others} />;
    },
  },
);
