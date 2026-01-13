import { Collapsible as KCollapsible } from "@kobalte/core/collapsible";
import { splitProps, type JSX, type ComponentProps } from "solid-js";
import { tv } from "tailwind-variants";
import { ChevronDown } from "lucide-solid";

const collapsibleStyles = tv({
    slots: {
        root: "w-full space-y-2",
        trigger:
            "flex w-full items-center justify-between rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900 transition-all group",
        content:
            "overflow-hidden text-sm transition-all data-[expanded]:animate-collapsible-down data-[closed]:animate-collapsible-up",
        contentInner:
            "px-4 py-3 text-zinc-600 dark:text-zinc-400 border border-t-0 border-zinc-200 dark:border-zinc-800 rounded-b-lg",
        icon: "h-4 w-4 text-zinc-500 transition-transform duration-200 group-data-[expanded]:rotate-180",
    },
});

const { root, trigger, content, contentInner, icon } = collapsibleStyles();

interface CollapsibleProps extends ComponentProps<typeof KCollapsible> {
    title: JSX.Element;
    children: JSX.Element;
}

export const Collapsible = (props: CollapsibleProps) => {
    const [local, others] = splitProps(props, ["title", "children", "class"]);

    return (
        <KCollapsible class={root({ class: local.class })} {...others}>
            <KCollapsible.Trigger class={trigger()}>
                <span>{local.title}</span>
                <ChevronDown class={icon()} />
            </KCollapsible.Trigger>

            <KCollapsible.Content class={content()}>
                <div class={contentInner()}>{local.children}</div>
            </KCollapsible.Content>
        </KCollapsible>
    );
};
