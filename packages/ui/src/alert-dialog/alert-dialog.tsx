import { AlertDialog as KAlertDialog } from "@kobalte/core/alert-dialog";
import { omit, type ComponentProps, createSignal } from "solid-js";
import type { JSX } from "@solidjs/web";
import { X } from "../icons";
import { Button } from "../button/button";
import { fullClass } from "./setting";

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
        <KAlertDialog.Overlay class={fullClass.overlay} />
        <KAlertDialog.Content class={fullClass.content}>
          <div class={fullClass.header}>
            <KAlertDialog.Title class={fullClass.title}>{props.title}</KAlertDialog.Title>
            <KAlertDialog.CloseButton class={fullClass.closeButton}>
              <X size={18} />
            </KAlertDialog.CloseButton>
          </div>

          <div class="mt-2">
            {props.description && (
              <KAlertDialog.Description class={fullClass.description}>
                {props.description}
              </KAlertDialog.Description>
            )}
          </div>

          <div class={fullClass.footer}>
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
