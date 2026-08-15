import { ToggleButton as KToggle } from "@kobalte/core/toggle-button";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { tv, type VariantProps } from "tailwind-variants";

// TODO 切换样式问题

const toggleStyles = tv(
  {
    base: [
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 focus-visible:ring-offset-1",
      "disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
    ],
    variants: {
      variant: {
        solid:
          "bg-foreground text-main hover:bg-foreground/80 data-[pressed]:bg-reversal-bg data-[pressed]:text-reversal",
        outline:
          "border border-light bg-transparent hover:bg-slate-100 data-[pressed]:bg-slate-900 data-[pressed]:text-white dark:hover:bg-slate-800 dark:data-[pressed]:bg-slate-50 dark:data-[pressed]:text-slate-900",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
  {
    twMerge: true,
  },
);

type ToggleVariants = VariantProps<typeof toggleStyles>;

export interface ToggleButtonProps
  extends Omit<ComponentProps<typeof KToggle>, "class">, ToggleVariants {
  class?: string;
  children?: JSX.Element;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const others = omit(props, "class", "children", "variant", "size");

  return (
    <KToggle
      class={toggleStyles({
        variant: props.variant,
        size: props.size,
        class: props.class,
      })}
      {...others}
    >
      {(state: any) =>
        typeof props.children === "function" ? (props.children as any)(state) : props.children
      }
    </KToggle>
  );
};
