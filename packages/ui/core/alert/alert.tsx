import { Alert as KAlert } from "@kobalte/core/alert";
import { omit, type ComponentProps } from "solid-js";
import { Info, CircleAlert, CircleCheck, CircleX } from "../icons";
import { defaultClass } from "./setting";



export interface AlertProps extends ComponentProps<typeof KAlert> {
  title?: string;
  icon?: boolean;
  variant?: "info" | "success" | "warning" | "danger";
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
