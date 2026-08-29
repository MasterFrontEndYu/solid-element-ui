import { Alert as KAlert, type AlertRootProps } from "@kobalte/core/alert";
import { omit, type ComponentProps } from "solid-js";
import { Info, CircleAlert, CircleCheck, CircleX } from "../icons";
import { defaultClass } from "./setting";
import type { JSX } from "@solidjs/web";

export interface AlertProps extends AlertRootProps {
  class?: string;
  title?: string;
  icon?: boolean;
  children?: string | JSX.Element;
}

const iconMap = {
  info: Info,
  success: CircleCheck,
  warning: CircleAlert,
  danger: CircleX,
};

export const Alert = (props: AlertProps) => {
  const others = omit(props, "title", "icon", "children", "class", "variant");

  const RenderedIcon = () => {
    if (props.icon === false) return null;
    if (typeof props.icon === "object") return props.icon;

    const Icon = iconMap[props.variant || "info"];
    return <Icon size={18} class={defaultClass.icon} />;
  };

  // 5. 渲染组件
  return (
    <KAlert class={defaultClass.root} {...others}>
      <RenderedIcon />
      <div class={defaultClass.content}>
        {props.title && <h5 class={defaultClass.title}>{props.title}</h5>}
        <div class={defaultClass.children}>{props.children}</div>
      </div>
    </KAlert>
  );
};
