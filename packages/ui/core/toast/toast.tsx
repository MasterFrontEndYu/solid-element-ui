import { Toast as KToast, toaster } from "@kobalte/core/toast";

import { isServer } from "@solidjs/web";
import { omit, type ComponentProps, Show, type ParentProps } from "solid-js";
import { X, CircleCheck, CircleAlert, Info, TriangleAlert } from "../icons";
import { defaultClass } from "./setting";

export interface ToastProps extends Omit<ComponentProps<typeof KToast>, "class"> {
  title?: string;
  description?: string;
  class?: string;
  variant?: "info" | "success" | "warning" | "error";
}

const iconMap = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleAlert,
} as const; // 使用 const 断言增强类型推导

export const ToastProvider = (props: ParentProps) => {
  return (
    <>
      {props.children}
      <KToast.Region>
        <KToast.List class="fixed bottom-4 right-4 z-100 flex flex-col gap-3 w-full max-w-100 outline-none" />
      </KToast.Region>
    </>
  );
};

const Toast = (props: ToastProps) => {
  const others = omit(props, "title", "description", "class", "toastId", "variant");

  // 显式回退到 info，确保 Icon 组件始终存在
  const Icon = iconMap[props.variant ?? "info"];

  return (
    <KToast toastId={props.toastId} class={defaultClass.root} {...others}>
      <Icon class={defaultClass.icon} />
      <div class={defaultClass.content}>
        <Show when={props.title}>
          <KToast.Title class={defaultClass.title}>{props.title}</KToast.Title>
        </Show>
        <Show when={props.description}>
          <KToast.Description class={defaultClass.description}>{props.description}</KToast.Description>
        </Show>
      </div>
      <KToast.CloseButton class={defaultClass.closeButton}>
        <X size={16} />
      </KToast.CloseButton>
    </KToast>
  );
};

export const showToast = (props: Omit<ToastProps, "toastId">) => {
  if (isServer) {
    return { toastId: () => "server-id" }; // 给个假实现，不报错就行
  }
  return toaster.show((data) => <Toast toastId={data.toastId} {...props} />);
};
