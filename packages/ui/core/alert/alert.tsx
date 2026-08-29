import { Alert as KAlert, type AlertRootProps } from "@kobalte/core/alert";
import { omit } from "solid-js";
import { Info, CircleAlert, CircleCheck, CircleX } from "../icons";
import { defaultClass } from "./setting";
import type { JSX } from "@solidjs/web";

export interface AlertProps extends AlertRootProps {
  class?: string;
  title?: string;
  icon?: boolean;
  children?: string | JSX.Element;
  contentClass?: string;
  titleClass?: string;
  childrenClass?: string;
  iconClass?: string;
}

export const Alert = (props: AlertProps) => {
  const others = omit(
    props,
    "title",
    "icon",
    "children",
    "class",
    "contentClass",
    "titleClass",
    "childrenClass",
    "iconClass",
  );

  const RenderedIcon = () => {
    if (props.icon === false) return null;
    if (typeof props.icon === "object") return props.icon;
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
