import { Dialog as KDialog } from "@kobalte/core/dialog";
import { Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { X } from "../icons";
import { fullClass } from "./setting";

//TODO 修改footer，可自定义或是自带，方法传入等等
// FIXME title 和close icon 平行。

interface DialogProps {
  // 状态控制
  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  // 触发器
  trigger?: JSX.Element;

  // 内容配置
  title: string;
  description?: string;
  children: JSX.Element; // 弹窗主体

  // 底部按钮配置
  footer?: JSX.Element;

  // 样式
  class?: string;
}

export const Dialog = (props: DialogProps) => {
  return (
    <KDialog open={props.open} onOpenChange={props.onOpenChange}>
      <Show when={props.trigger}>
        <KDialog.Trigger class="inline-block">{props.trigger}</KDialog.Trigger>
      </Show>

      <KDialog.Portal>
        <KDialog.Overlay class={fullClass.overlay} />
        <KDialog.Content
          class={fullClass.content}
          style={{ "pointer-events": "auto" }}
        >
          <div class="flex justify-between items-center">
            <KDialog.Title class={fullClass.title}>{props.title}</KDialog.Title>
            <KDialog.CloseButton class={fullClass.closeButton}>
              <X size={18} />
              <span class="sr-only">关闭</span>
            </KDialog.CloseButton>
          </div>
          <Show when={props.description}>
            <KDialog.Description class={fullClass.description}>{props.description}</KDialog.Description>
          </Show>

          <div class="mt-6">{props.children}</div>
        </KDialog.Content>
      </KDialog.Portal>
    </KDialog>
  );
};
