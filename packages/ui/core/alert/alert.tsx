import { Alert as KAlert } from "@kobalte/core/alert";
import { omit, type ComponentProps } from "solid-js";
import { Info, CircleAlert, CircleCheck, CircleX } from "../icons";
import { fullClass } from "./setting";



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
    return <Icon size={18} class={fullClass.icon} />;
  };

  // 5. 渲染组件
  return (
    <KAlert class={fullClass.root} {...others}>
      <RenderedIcon />
      <div class={fullClass.content}>
        {props.title && <h5 class={fullClass.title}>{props.title}</h5>}
        <div class={fullClass.children}>{props.children}</div>
      </div>
    </KAlert>
  );
};
