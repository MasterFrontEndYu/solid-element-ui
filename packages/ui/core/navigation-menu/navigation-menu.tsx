import { NavigationMenu as KNavigationMenu } from "@kobalte/core/navigation-menu";
import { omit, type ComponentProps, For, Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { defaultClass } from "./setting";

// TODO 不显示问题

interface NavItem {
  title: string;
  href?: string;
  content?: JSX.Element;
}

export interface NavigationMenuProps extends ComponentProps<typeof KNavigationMenu> {
  items: NavItem[];
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  const others = omit(props, "items", "class");

  return (
    <KNavigationMenu class={defaultClass.root} {...others}>
      <For each={props.items}>
        {(item) => (
          <KNavigationMenu.Menu>
            <Show
              when={item.content}
              fallback={
                <KNavigationMenu.Trigger as="a" href={item.href} class={defaultClass.trigger}>
                  {item.title}
                </KNavigationMenu.Trigger>
              }
            >
              <KNavigationMenu.Trigger class={defaultClass.trigger}>
                {item.title}
                <svg
                  class="ml-1 h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </KNavigationMenu.Trigger>
              <KNavigationMenu.Portal>
                <KNavigationMenu.Content class={defaultClass.content}>{item.content}</KNavigationMenu.Content>
              </KNavigationMenu.Portal>
            </Show>
          </KNavigationMenu.Menu>
        )}
      </For>
      <KNavigationMenu.Viewport class={defaultClass.viewport}>
        <KNavigationMenu.Arrow />
      </KNavigationMenu.Viewport>
    </KNavigationMenu>
  );
};
