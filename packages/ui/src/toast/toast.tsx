import { Toast as KToast, toaster } from "@kobalte/core/toast";
import {
    splitProps,
    type ComponentProps,
    Show,
    type ParentProps,
} from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import {
    X,
    CheckCircle2,
    AlertCircle,
    Info,
    AlertTriangle,
} from "lucide-solid";

const toastStyles = tv({
    slots: {
        root: [
            "group relative flex w-[400px] items-start justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all",
            "data-[opened]:animate-in data-[closed]:animate-out data-[swipe=move]:translate-x-[var(--kb-toast-swipe-move-x)]",
            "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:translate-x-[var(--kb-toast-swipe-end-x)]",
            "data-[swipe=end]:animate-out data-[closed]:fade-out-80 data-[closed]:slide-out-to-right-full data-[opened]:slide-in-from-top-full",
        ],
        title: "text-sm font-semibold",
        description: "text-xs opacity-90 leading-relaxed",
        closeButton: [
            "absolute right-2 top-2 rounded-md p-1 text-slate-500 opacity-0 transition-opacity hover:text-slate-900",
            "focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 dark:text-slate-400 dark:hover:text-slate-50",
        ],
        content: "flex flex-col gap-1 flex-1",
        icon: "h-5 w-5 shrink-0 mt-0.5", // 稍微下移一点对齐文字
    },
    variants: {
        variant: {
            info: {
                root: "bg-white border-slate-200 text-slate-950 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50",
                icon: "text-blue-500",
            },
            success: {
                root: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950 dark:border-emerald-900 dark:text-emerald-50",
                icon: "text-emerald-500",
            },
            warning: {
                root: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950 dark:border-amber-900 dark:text-amber-50",
                icon: "text-amber-500",
            },
            error: {
                root: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950 dark:border-red-900 dark:text-red-50",
                icon: "text-red-500",
            },
        },
    },
    defaultVariants: { variant: "info" },
});

type ToastVariants = VariantProps<typeof toastStyles>;

export interface ToastProps
    extends Omit<ComponentProps<typeof KToast>, "class">, ToastVariants {
    title?: string;
    description?: string;
    class?: string;
}

const iconMap = {
    info: Info,
    success: CheckCircle2,
    warning: AlertTriangle,
    error: AlertCircle,
} as const; // 使用 const 断言增强类型推导

// 优化：允许包裹 Children，这样在 App.tsx 顶层包裹即可
export const ToastProvider = (props: ParentProps) => {
    return (
        <>
            {props.children}
            <KToast.Region>
                <KToast.List class="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 w-full max-w-[400px] outline-none" />
            </KToast.Region>
        </>
    );
};

const Toast = (props: ToastProps) => {
    const [local, variantProps, others] = splitProps(
        props,
        ["title", "description", "class", "toastId"],
        ["variant"]
    );

    const styles = toastStyles(variantProps);
    // 显式回退到 info，确保 Icon 组件始终存在
    const Icon = iconMap[variantProps.variant ?? "info"];

    return (
        <KToast
            toastId={local.toastId}
            class={styles.root({ class: local.class })}
            {...others}
        >
            <Icon class={styles.icon()} />
            <div class={styles.content()}>
                <Show when={local.title}>
                    <KToast.Title class={styles.title()}>
                        {local.title}
                    </KToast.Title>
                </Show>
                <Show when={local.description}>
                    <KToast.Description class={styles.description()}>
                        {local.description}
                    </KToast.Description>
                </Show>
            </div>
            <KToast.CloseButton class={styles.closeButton()}>
                <X size={16} />
            </KToast.CloseButton>
        </KToast>
    );
};

export const showToast = (props: Omit<ToastProps, "toastId">) => {
    return toaster.show((data) => <Toast toastId={data.toastId} {...props} />);
};
