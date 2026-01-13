import { AlertDialog as KAlertDialog } from "@kobalte/core/alert-dialog";
import { splitProps, type JSX, type ComponentProps } from "solid-js";
import { tv } from "tailwind-variants";
import { X } from "lucide-solid";

const alertDialogStyles = tv({
    slots: {
        overlay:
            "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out",
        content:
            "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-white p-6 shadow-xl dark:bg-zinc-900 dark:border-zinc-800",
        header: "flex flex-col gap-2 text-center sm:text-left",
        title: "text-lg font-semibold text-zinc-900 dark:text-zinc-100",
        description: "text-sm text-zinc-500 dark:text-zinc-400",
        footer: "mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3",
        closeButton:
            "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none",
    },
});

const { overlay, content, header, title, description, footer, closeButton } =
    alertDialogStyles();

interface AlertDialogProps extends ComponentProps<typeof KAlertDialog> {
    trigger: JSX.Element;
    title: string;
    description?: string;
    action: JSX.Element;
    cancel?: JSX.Element;
}

export const AlertDialog = (props: AlertDialogProps) => {
    const [local, others] = splitProps(props, [
        "trigger",
        "title",
        "description",
        "action",
        "cancel",
    ]);

    return (
        <KAlertDialog {...others}>
            <KAlertDialog.Trigger>{local.trigger}</KAlertDialog.Trigger>

            <KAlertDialog.Portal>
                <KAlertDialog.Overlay class={overlay()} />
                <div class="fixed inset-0 z-50 flex items-center justify-center">
                    <KAlertDialog.Content class={content()}>
                        <KAlertDialog.CloseButton class={closeButton()}>
                            <X size={18} />
                        </KAlertDialog.CloseButton>

                        <div class={header()}>
                            <KAlertDialog.Title class={title()}>
                                {local.title}
                            </KAlertDialog.Title>
                            {local.description && (
                                <KAlertDialog.Description class={description()}>
                                    {local.description}
                                </KAlertDialog.Description>
                            )}
                        </div>

                        <div class={footer()}>
                            <KAlertDialog.CloseButton>
                                {local.cancel || (
                                    <button
                                        type="button"
                                        class="inline-flex h-9 items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-zinc-100"
                                    >
                                        取消
                                    </button>
                                )}
                            </KAlertDialog.CloseButton>

                            <div
                                onClick={(e) => {
                                    // 如果是确认操作，用户通常会传入 onClick，这里保持原样
                                }}
                            >
                                {local.action}
                            </div>
                        </div>
                    </KAlertDialog.Content>
                </div>
            </KAlertDialog.Portal>
        </KAlertDialog>
    );
};
