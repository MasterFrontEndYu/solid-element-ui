import { Tooltip as KTooltip } from "@kobalte/core/tooltip";
import { splitProps, type JSX, type ComponentProps, Show } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipStyles = tv({
    slots: {
        content: [
            "z-50 overflow-hidden rounded-md bg-slate-900 px-3 py-1.5 text-xs text-slate-50 shadow-md animate-in fade-in-0 zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "dark:bg-slate-50 dark:text-slate-900",
        ],
        arrow: "text-slate-900 dark:text-slate-50",
    },
    variants: {
        variant: {
            default: { content: "bg-slate-900 dark:bg-slate-50" },
            danger: { content: "bg-red-600 text-white dark:bg-red-500" },
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

type TooltipVariants = VariantProps<typeof tooltipStyles>;

export interface TooltipProps
    extends Omit<ComponentProps<typeof KTooltip>, "class">,
        TooltipVariants {
    content: JSX.Element;
    children: JSX.Element;
    showArrow?: boolean;
}

export const Tooltip = (props: TooltipProps) => {
    const [local, variantProps, others] = splitProps(
        props,
        ["children", "content", "showArrow"],
        ["variant"]
    );

    const styles = tooltipStyles(variantProps);

    return (
        <KTooltip {...others}>
            <KTooltip.Trigger class="inline-block">
                {local.children}
            </KTooltip.Trigger>

            <KTooltip.Portal>
                <KTooltip.Content class={styles.content()}>
                    <Show when={local.showArrow}>
                        <KTooltip.Arrow class={styles.arrow()} />
                    </Show>
                    {local.content}
                </KTooltip.Content>
            </KTooltip.Portal>
        </KTooltip>
    );
};
