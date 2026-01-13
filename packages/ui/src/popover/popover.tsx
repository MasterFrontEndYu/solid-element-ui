import { Popover as KPopover } from "@kobalte/core/popover";
import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { tv } from "tailwind-variants";

const popoverStyles = tv({
    slots: {
        content: [
            "z-50 w-72 rounded-md border bg-white p-4 shadow-md outline-none antialiased",
            "dark:bg-slate-950 dark:border-slate-800 dark:text-slate-50",
            "animate-in fade-in zoom-in-95 duration-200",
        ],
        arrow: "fill-white stroke-slate-200 dark:fill-slate-950 dark:stroke-slate-800",
    },
});

const s = popoverStyles();

export interface PopoverProps extends ComponentProps<typeof KPopover> {
    trigger: JSX.Element;
    showArrow?: boolean;
}

/**
 * Popover 高度封装版
 * 修复了 Kobalte 不支持 asChild 的问题，直接将 trigger 渲染为内容
 */
export const Popover = (props: PopoverProps) => {
    const [local, others] = splitProps(props, [
        "trigger",
        "children",
        "showArrow",
    ]);

    return (
        <KPopover {...others}>
            <KPopover.Trigger class="inline-flex">
                {local.trigger}
            </KPopover.Trigger>

            <KPopover.Portal>
                <KPopover.Content class={s.content()}>
                    {local.showArrow && <KPopover.Arrow class={s.arrow()} />}
                    {local.children}
                </KPopover.Content>
            </KPopover.Portal>
        </KPopover>
    );
};
