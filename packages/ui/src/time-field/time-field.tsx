import { TimeField as KTimeField } from "@kobalte/core/time-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { tv, type VariantProps } from "tailwind-variants";

const timeFieldStyles = tv({
  slots: {
    root: "flex flex-col gap-1.5 w-full",
    label:
      "text-sm font-medium text-slate-700 dark:text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    control: [
      "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm transition-shadow",
      "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950",
      "data-[invalid]:border-red-500 data-[invalid]:focus-within:ring-red-500",
    ],
    segment: [
      "inline rounded-sm px-0.5 tabular-nums outline-none transition-colors",
      "focus:bg-blue-600 focus:text-white dark:focus:bg-blue-500",
      "data-[placeholder]:text-slate-400 data-[type=literal]:px-0",
    ],
    description: "text-xs text-slate-500 dark:text-slate-400",
    errorMessage: "text-xs text-red-500",
  },
  variants: {
    size: {
      sm: { control: "h-8 px-2 text-xs" },
      md: { control: "h-10 px-3 text-sm" },
      lg: { control: "h-12 px-4 text-base" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type TimeFieldVariants = VariantProps<typeof timeFieldStyles>;

export interface TimeFieldProps
  extends Omit<ComponentProps<typeof KTimeField>, "class">, TimeFieldVariants {
  label?: string;
  description?: string;
  errorMessage?: string;
  class?: string;
}

export const TimeField = (props: TimeFieldProps) => {
  const others = omit(props, "label", "description", "errorMessage", "class", "size");

  const styles = timeFieldStyles({ size: props.size });

  return (
    <KTimeField
      class={styles.root({ class: props.class })}
      validationState={props.errorMessage ? "invalid" : "valid"}
      {...others}
    >
      <Show when={props.label}>
        <KTimeField.Label class={styles.label()}>{props.label}</KTimeField.Label>
      </Show>

      <KTimeField.Input>{(segment) => <KTimeField.Segment segment={segment()} />}</KTimeField.Input>

      <Show when={props.description}>
        <KTimeField.Description class={styles.description()}>
          {props.description}
        </KTimeField.Description>
      </Show>

      <Show when={props.errorMessage}>
        <KTimeField.ErrorMessage class={styles.errorMessage()}>
          {props.errorMessage}
        </KTimeField.ErrorMessage>
      </Show>
    </KTimeField>
  );
};
