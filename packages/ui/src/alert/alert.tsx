import { Alert as KAlert } from "@kobalte/core/alert";
import { splitProps, type JSX, type ComponentProps } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { Info, AlertCircle, CheckCircle2, XCircle } from "lucide-solid";

const alertStyles = tv({
    base: "relative w-full rounded-lg border p-4 flex gap-3 antialiased",
    variants: {
        variant: {
            info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300",
            success:
                "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300",
            warning:
                "bg-amber-50 border-amber-200 text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300",
            danger: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300",
        },
    },
    defaultVariants: {
        variant: "info",
    },
});

type AlertVariants = VariantProps<typeof alertStyles>;

// 使用 ComponentProps<typeof KAlert> 获取 Kobalte Alert 的原始属性
export interface AlertProps
    extends ComponentProps<typeof KAlert>,
        AlertVariants {
    title?: string;
    icon?: boolean | JSX.Element;
}

const iconMap = {
    info: Info,
    success: CheckCircle2,
    warning: AlertCircle,
    danger: XCircle,
};

export const Alert = (props: AlertProps) => {
    // 显式提取属性，确保 others 中不包含 variant
    const [local, variantProps, others] = splitProps(
        props,
        ["title", "icon", "children", "class"],
        ["variant"]
    );

    const IconComponent = () => {
        if (local.icon === false) return null;
        if (typeof local.icon === "object") return local.icon;
        const Icon = iconMap[variantProps.variant || "info"];
        return <Icon size={18} class="shrink-0" />;
    };

    // 注意：这里直接使用 KAlert，而不是 KAlert.Root
    return (
        <KAlert
            class={alertStyles({
                variant: variantProps.variant,
                class: local.class,
            })}
            {...others}
        >
            <IconComponent />
            <div class="flex flex-col gap-1 text-left">
                {local.title && (
                    <h5 class="font-semibold leading-none tracking-tight">
                        {local.title}
                    </h5>
                )}
                <div class="text-sm leading-relaxed opacity-90">
                    {local.children}
                </div>
            </div>
        </KAlert>
    );
};
