import { Checkbox as KCheckbox } from "@kobalte/core/checkbox";
import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { tv } from "tailwind-variants";
import { Check } from "lucide-solid";

const checkboxStyles = tv({
    slots: {
        root: "group flex items-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        control: [
            "flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-zinc-300 transition-all",
            "group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-zinc-950",
            "data-[checked]:bg-zinc-900 data-[checked]:border-zinc-900 data-[checked]:text-zinc-50",
            "dark:border-zinc-700 dark:data-[checked]:bg-zinc-50 dark:data-[checked]:text-zinc-900 dark:group-focus-visible:ring-zinc-300",
        ],
        label: "text-sm font-medium leading-none select-none",
        indicator: "h-3.5 w-3.5",
    },
});

const { root, control, label, indicator } = checkboxStyles();

export interface CheckboxProps extends ComponentProps<typeof KCheckbox> {
    label?: JSX.Element;
}

export const Checkbox = (props: CheckboxProps) => {
    const [local, others] = splitProps(props, ["label", "class"]);

    return (
        <KCheckbox class={root({ class: local.class })} {...others}>
            <KCheckbox.Input />
            <KCheckbox.Control class={control()}>
                <KCheckbox.Indicator class={indicator()}>
                    <Check stroke-width={3} />
                </KCheckbox.Indicator>
            </KCheckbox.Control>
            {local.label && (
                <KCheckbox.Label class={label()}>{local.label}</KCheckbox.Label>
            )}
        </KCheckbox>
    );
};
