import { Menubar as KMenubar, type MenubarRootProps } from "@kobalte/core/menubar";
import { omit, type ComponentProps } from "solid-js";
import { defaultClass } from "./setting";

// TODO 1. 格式

export interface MenubarProps extends MenubarRootProps {
  class?: string;
  triggerClass?: string;
  contentClass?: string;
  itemClass?: string;
  separatorClass?: string;
  shortcutClass?: string;
}

export const Menubar = Object.assign(
  (props: MenubarProps) => {
    const others = omit(
      props,
      "class",
      "triggerClass",
      "contentClass",
      "itemClass",
      "separatorClass",
      "shortcutClass",
    );
    return <KMenubar class={defaultClass.root} {...others} />;
  },
  {
    Menu: KMenubar.Menu,
    Trigger: (props: ComponentProps<typeof KMenubar.Trigger>) => {
      const others = omit(props, "class");
      return <KMenubar.Trigger class={defaultClass.trigger} {...others} />;
    },
    Content: (props: ComponentProps<typeof KMenubar.Content>) => {
      const others = omit(props, "class");
      return (
        <KMenubar.Portal>
          <KMenubar.Content class={defaultClass.content} {...others} />
        </KMenubar.Portal>
      );
    },
    Item: (props: ComponentProps<typeof KMenubar.Item>) => {
      const others = omit(props, "class");
      return <KMenubar.Item class={defaultClass.item} {...others} />;
    },
    Separator: (props: ComponentProps<typeof KMenubar.Separator>) => {
      const others = omit(props, "class");
      return <KMenubar.Separator class={defaultClass.separator} {...others} />;
    },
  },
);
