import { Button as KButton } from "@kobalte/core/button";
import { splitProps, type JSX, type ComponentProps, Show } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";
import { LoaderCircle } from "lucide-solid";

// --- 样式定义保持不变 ---
const buttonStyles = tv(
    {
        slots: {
            base: "inline-flex items-center cursor-pointer justify-center rounded-sm text-sm font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
            icon: "animate-spin -ml-1 mr-2 h-4 w-4 text-current",
        },
        variants: {
            size: {
                sm: { base: "h-6 px-2 text-xs" },
                md: { base: "h-8 px-4 text-sm" },
                lg: { base: "h-10 px-6 text-base" },
            },
            loading: {
                true: {
                    base: "pointer-events-none opacity-70",
                },
            },
            variant: {
                default: { base: "bg-main text-reversal" },
                outline: {
                    base: "border border-base hover:border-primary hover:text-primary",
                },
                dashed: {
                    base: "border border-dashed border-base hover:border-primary hover:text-primary",
                },
                filled: { base: "bg-main/5 hover:bg-main/10"},
                text: { base: "hover:bg-main/10"},
            },
            color: {
                primary: { base: "" },
                success: { base: "" },
                warning: { base: "" },
                danger: { base: "" },
            },
        },
        compoundVariants: [
            {
                variant: "default",
                color: "primary",
                class: {
                    base: "bg-primary text-white border-primary hover:bg-primary/70 hover:border-primary/70",
                },
            },
            {
                variant: "default",
                color: "success",
                class: {
                    base: "bg-success text-white border-success hover:bg-success/70 hover:border-success/70",
                },
            },
            {
                variant: "default",
                color: "warning",
                class: {
                    base: "bg-warning text-white border-warning hover:bg-warning/70 hover:border-warning/70",
                },
            },
            {
                variant: "default",
                color: "danger",
                class: {
                    base: "bg-danger text-white border-danger hover:bg-danger/70 hover:border-danger/70",
                },
            },
            // --- outline 和 dashed 类型 ---
            {
                variant: ["outline", "dashed"],
                color: "primary",
                class: {
                    base: "text-primary border-primary hover:border-primary/70  hover:text-primary/70",
                },
            },
            {
                variant: ["outline", "dashed"],
                color: "success",
                class: {
                    base: "text-success border-success hover:border-success/70  hover:text-success/70",
                },
            },
            {
                variant: ["outline", "dashed"],
                color: "warning",
                class: {
                    base: "text-warning border-warning hover:border-warning/70  hover:text-warning/70",
                },
            },
            {
                variant: ["outline", "dashed"],
                color: "danger",
                class: {
                    base: "text-danger border-danger hover:border-danger/70  hover:text-danger/70",
                },
            },

            // --- filled 类型 ---
            {
                variant: "filled",
                color: "primary",
                class: {
                    base: "text-primary bg-primary/5 hover:bg-primary/10",
                },
            },
            {
                variant: "filled",
                color: "success",
                class: {
                    base: "text-success bg-success/5 hover:bg-success/10",
                },
            },
            {
                variant: "filled",
                color: "warning",
                class: {
                    base: "text-warning bg-warning/5 hover:bg-warning/10",
                },
            },
            {
                variant: "filled",
                color: "danger",
                class: {
                    base: "text-danger bg-danger/5 hover:bg-danger/10",
                },
            },
            // --- text 类型 ---
            {
                variant: "text",
                color: "primary",
                class: {
                    base: "text-primary hover:bg-primary/10",
                },
            },
            {
                variant: "text",
                color: "success",
                class: {
                    base: "text-success hover:bg-success/10",
                },
            },
            {
                variant: "text",
                color: "warning",
                class: {
                    base: "text-warning hover:bg-warning/10",
                },
            },
            {
                variant: "text",
                color: "danger",
                class: {
                    base: "text-danger hover:bg-danger/10",
                },
            },
        ],
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    },
    { twMerge: true },
);

type ButtonVariants = VariantProps<typeof buttonStyles>;

export interface ButtonProps
    extends ComponentProps<typeof KButton>, ButtonVariants {
    loading?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
}

export const Button = (props: ButtonProps) => {
    // 1. 更加精细地拆分 props
    // local: 逻辑处理相关; variantKeys: 样式变体相关; others: 传递给 HTML 按钮的属性
    const [local, variantKeys, others] = splitProps(
        props,
        ["class", "children", "loading", "leftIcon", "rightIcon", "disabled"],
        ["variant", "size", "color", "loading"], // 这里的 loading 也要传给 tv
    );

    // 2. 调用 styles 获取 slots
    // 注意：将 local.class 传入 base 槽位
    const styles = () =>
        buttonStyles({
            ...variantKeys,
            class: local.class,
        });

    return (
        <KButton
            class={styles().base()}
            disabled={local.disabled || local.loading}
            {...others}
        >
            {/* Loading 状态显示 */}
            <Show when={local.loading}>
                <LoaderCircle class={styles().icon()} />
            </Show>

            {/* 非 Loading 状态下的 Left Icon */}
            <Show when={!local.loading && local.leftIcon}>
                <span class="mr-2 inline-flex">{local.leftIcon}</span>
            </Show>

            {local.children}

            {/* Right Icon */}
            <Show when={local.rightIcon}>
                <span class="ml-2 inline-flex">{local.rightIcon}</span>
            </Show>
        </KButton>
    );
};
