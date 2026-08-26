import { Menubar as KMenubar } from "@kobalte/core/menubar";
import { omit, type ComponentProps } from "solid-js";
import { fullClass } from "./setting";

// TODO 1. 格式

export const Menubar = Object.assign(
  (props: ComponentProps<typeof KMenubar>) => {
    const others = omit(props, "class");
    return <KMenubar class={fullClass.root} {...others} />;
  },
  {
    Menu: KMenubar.Menu,
    Trigger: (props: ComponentProps<typeof KMenubar.Trigger>) => {
      const others = omit(props, "class");
      return <KMenubar.Trigger class={fullClass.trigger} {...others} />;
    },
    Content: (props: ComponentProps<typeof KMenubar.Content>) => {
      const others = omit(props, "class");
      return (
        <KMenubar.Portal>
          <KMenubar.Content class={fullClass.content} {...others} />
        </KMenubar.Portal>
      );
    },
    Item: (props: ComponentProps<typeof KMenubar.Item>) => {
      const others = omit(props, "class");
      return <KMenubar.Item class={fullClass.item} {...others} />;
    },
    Separator: (props: ComponentProps<typeof KMenubar.Separator>) => {
      const others = omit(props, "class");
      return <KMenubar.Separator class={fullClass.separator} {...others} />;
    },
  },
);
