import { Popover as KPopover } from "@kobalte/core/popover";
import { CrossIcon } from "../icons";
import { omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { fullClass } from "./setting";

// FIXME 与其他的气泡样式不统一的问题
// Description，而不是内敛。
// trigger用内部，而其他放在标签属性

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
        <KPopover.Content class={fullClass.content}>
          <KPopover.Arrow class={fullClass.arrow} />

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
