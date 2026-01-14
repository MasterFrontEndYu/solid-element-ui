import { Breadcrumbs as KBreadcrumbs } from "@kobalte/core/breadcrumbs";
import { For, type JSX, splitProps, type ComponentProps } from "solid-js";
import { tv } from "tailwind-variants";
import { ChevronRight } from "lucide-solid";

const breadcrumbStyles = tv({
    slots: {
        root: "flex w-full justify-start",
        list: "flex flex-wrap items-center gap-1.5 break-words text-sm text-zinc-500 dark:text-zinc-400",
        item: "flex items-center gap-1.5",
        link: "transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 data-[current]:font-semibold data-[current]:text-zinc-900 dark:data-[current]:text-zinc-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        separator: "flex h-4 w-4 items-center justify-center text-zinc-400",
    },
});

const { root, list, item, link, separator } = breadcrumbStyles();

export interface BreadcrumbItem {
    title: JSX.Element;
    href?: string;
    current?: boolean;
    disabled?: boolean;
}

interface BreadcrumbsProps extends ComponentProps<typeof KBreadcrumbs> {
    items: BreadcrumbItem[];
    separatorIcon?: JSX.Element;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
    const [local, others] = splitProps(props, [
        "items",
        "separatorIcon",
        "class",
    ]);

    return (
        <KBreadcrumbs class={root({ class: local.class })} {...others}>
            <ol class={list()}>
                <For each={local.items}>
                    {(breadcrumb, index) => (
                        <li class={item()}>
                            <KBreadcrumbs.Link
                                href={breadcrumb.href}
                                current={breadcrumb.current}
                                disabled={breadcrumb.disabled}
                                class={link()}
                            >
                                {breadcrumb.title}
                            </KBreadcrumbs.Link>

                            {/* 如果不是最后一项，则显示分隔符 */}
                            {index() < local.items.length - 1 && (
                                <span aria-hidden="true" class={separator()}>
                                    {local.separatorIcon || (
                                        <ChevronRight size={14} />
                                    )}
                                </span>
                            )}
                        </li>
                    )}
                </For>
            </ol>
        </KBreadcrumbs>
    );
};
