import { Popover as KPopover } from "@kobalte/core/popover";
import { CrossIcon } from "lucide-solid";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { tv } from "tailwind-variants";

// FIXME 与其他的气泡样式不统一的问题
// Description，而不是内敛。
// trigger用内部，而其他放在标签属性

const popoverStyles = tv(
  {
    slots: {
      content: [
        "z-50 w-72 rounded-md border border-light bg-app p-4 shadow-md outline-none antialiased text-main",
        "data-[expanded]:animate-in data-[closed]:animate-out",
      ],
      arrow: "fill-app stroke-slate-200 dark:stroke-slate-800",
    },
  },
  {
    twMerge: true,
  },
);

const { content, arrow } = popoverStyles();

export interface PopoverProps extends ComponentProps<typeof KPopover> {
  trigger: JSX.Element;
  title: string;
}

export const Popover = (props: PopoverProps) => {
  const others = omit(props, "trigger", "children", "title");

  return (
    <KPopover {...others}>
      <KPopover.Trigger class="inline-flex">{props.trigger}</KPopover.Trigger>

      <KPopover.Portal>
        <KPopover.Content class={content()}>
          <KPopover.Arrow class={arrow()} />

          <div class="flex">
            <KPopover.Title>{props.title}</KPopover.Title>
            <KPopover.CloseButton>
              <CrossIcon />
            </KPopover.CloseButton>
          </div>
          <KPopover.Description>{props.children}</KPopover.Description>
        </KPopover.Content>
      </KPopover.Portal>
    </KPopover>
  );
};
