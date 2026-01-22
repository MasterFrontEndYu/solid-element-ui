import { Alert as KAlert } from "@kobalte/core/alert";
import { splitProps, type JSX, type ComponentProps } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { Info, CircleAlert, CircleCheck, CircleX } from "lucide-solid";

const alertStyles = tv({
    base: "relative w-full rounded-lg border p-4 flex gap-3 antialiased",
    variants: {
        variant: {
            info: "bg-primary/20 border-primary/80 text-main",
            success: "bg-success/20 border-success/80 text-success ",
            warning: "bg-warning/20 border-warning/80 text-warning",
            danger: "bg-danger/20 border-danger/80 text-danger",
        },
    },
    defaultVariants: {
        variant: "info",
    },
});

type AlertVariants = VariantProps<typeof alertStyles>;

// 使用 ComponentProps<typeof KAlert> 获取 Kobalte Alert 的原始属性
export interface AlertProps
    extends ComponentProps<typeof KAlert>, AlertVariants {
    title?: string;
    icon?: boolean | JSX.Element;
}

const iconMap = {
    info: Info,
    success: CircleCheck,
    warning: CircleAlert,
    danger: CircleX,
};

export const Alert = (props: AlertProps) => {
    // 显式提取属性，确保 others 中不包含 variant
    const [local, variantProps, others] = splitProps(
        props,
        ["title", "icon", "children", "class"],
        ["variant"],
    );

    const IconComponent = () => {
        if (local.icon === false) return null;
        if (typeof local.icon === "object") return local.icon;
        const Icon = iconMap[variantProps.variant || "info"];
        return <Icon size={18} class="shrink-0" />;
    };

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
                <div class="text-mdleading-relaxed opacity-90">
                    {local.children}
                </div>
            </div>
        </KAlert>
    );
};
