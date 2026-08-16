import { AlertDialog as KAlertDialog } from "@kobalte/core/alert-dialog";
import { omit, type ComponentProps, createSignal } from "solid-js";
import type { JSX } from "@solidjs/web";
import { tv } from "tailwind-variants";
import { X } from "../icons";
import { Button } from "../button/button";

const alertDialogStyles = tv(
  {
    slots: {
      overlay: [
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        " data-[expanded]:animate-in data-[closed]:animate-out ",
      ],
      content: [
        "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl bg-app p-4 shadow-xl ",
        "data-[expanded]:animate-in data-[closed]:animate-out",
      ],
      header: "flex align-center justify-between",
      title: "text-lg font-semibold text-main ",
      description: "text-sm py-2 text-main",
      footer: "mt-6 flex flex-row justify-end gap-3",
      closeButton:
        "rounded-sm opacity-70 text-main transition-opacity hover:opacity-100 focus:outline-none",
    },
  },
  {
    twMerge: true,
  },
);

const { overlay, content, header, title, description, footer, closeButton } = alertDialogStyles();

interface AlertDialogProps extends ComponentProps<typeof KAlertDialog> {
  trigger: JSX.Element;
  title: string;
  description?: string;
  action?: JSX.Element;
  cancel?: JSX.Element;
  onConfirm?: () => void | Promise<void>;
}

export const AlertDialog = (props: AlertDialogProps) => {
  // 使用受控模式
  const [isOpen, setIsOpen] = createSignal(false);
  const [loading, setLoading] = createSignal(false);

  const others = omit(props, "trigger", "title", "description", "action", "cancel", "onConfirm");

  const handleConfirm = async (e: MouseEvent) => {
    // 阻止默认行为和冒泡，确保点击不会误触发 Kobalte 的内部关闭逻辑
    e.preventDefault();
    e.stopPropagation();

    if (props.onConfirm) {
      setLoading(true);
      try {
        await props.onConfirm();
        // 只有逻辑成功执行后，才手动关闭
        setIsOpen(false);
      } catch (error) {
        console.error("确认操作失败:", error);
        // 报错时不关闭，让用户留在页面
      } finally {
        setLoading(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <KAlertDialog {...others} open={isOpen()} onOpenChange={setIsOpen}>
      <div onClick={() => setIsOpen(true)} class="inline-block">
        {props.trigger}
      </div>

      <KAlertDialog.Portal>
        <KAlertDialog.Overlay class={overlay()} />
        <KAlertDialog.Content class={content()}>
          <div class={header()}>
            <KAlertDialog.Title class={title()}>{props.title}</KAlertDialog.Title>
            <KAlertDialog.CloseButton class={closeButton()}>
              <X size={18} />
            </KAlertDialog.CloseButton>
          </div>

          <div class="mt-2">
            {props.description && (
              <KAlertDialog.Description class={description()}>
                {props.description}
              </KAlertDialog.Description>
            )}
          </div>

          <div class={footer()}>
            <KAlertDialog.CloseButton>
              {props.cancel || <Button variant="outline">取消</Button>}
            </KAlertDialog.CloseButton>
            <div onClick={handleConfirm}>
              {props.action || (
                <Button color="primary" loading={loading()}>
                  确认
                </Button>
              )}
            </div>
          </div>
        </KAlertDialog.Content>
      </KAlertDialog.Portal>
    </KAlertDialog>
  );
};
