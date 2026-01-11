import { tv } from "tailwind-variants";

export const accordionStyles = tv({
    slots: {
        root: "w-full border border-slate-200 rounded-lg",
        item: "border-b border-slate-200 last:border-none",
        header: "flex",
        trigger:
            "flex flex-1 items-center justify-between p-4 font-medium transition-all hover:bg-slate-50 group",
        content:
            "overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down data-[closed]:animate-accordion-up",
        contentText: "p-4 pt-0 text-slate-600",
        icon: "transition-transform duration-200 group-data-[expanded]:rotate-45", // 旋转 X 图标
    },
    // 可以在这里添加变体，例如 size: { sm, lg }
    variants: {
        borderless: {
            true: {
                root: "border-none shadow-none",
            },
        },
    },
});
