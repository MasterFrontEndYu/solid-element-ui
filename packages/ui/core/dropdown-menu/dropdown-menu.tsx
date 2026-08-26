import { DropdownMenu as KDropdownMenu } from "@kobalte/core/dropdown-menu";
import { For, Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronRight } from "../icons";
import { fullClass } from "./setting";

// TODO  Dropdown Menu 样式

// 定义菜单项配置类型
export type DropdownItemConfig = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean; // 是否作为分隔线
  children?: DropdownItemConfig[]; // 子菜单
};

interface DropdownMenuProps {
  trigger: JSX.Element;
  items: DropdownItemConfig[];
  placement?: "bottom" | "bottom-start" | "bottom-end" | "top" | "left" | "right";
  class?: string;
}

// 递归渲染函数：处理无限级嵌套
const RenderMenuItems = (props: { items: DropdownItemConfig[] }) => {
  return (
    <For each={props.items}>
      {(config) => (
        <Show when={!config.separator} fallback={<KDropdownMenu.Separator class={fullClass.separator} />}>
          <Show
            when={config.children && config.children.length > 0}
            fallback={
              <KDropdownMenu.Item
                class={fullClass.item}
                disabled={config.disabled}
                onSelect={() => config.onClick?.()}
              >
                {config.label}
              </KDropdownMenu.Item>
            }
          >
            {/* 子菜单渲染逻辑 */}
            <KDropdownMenu.Sub>
              <KDropdownMenu.SubTrigger class={fullClass.item}>
                {config.label}
                <ChevronRight class={fullClass.subIcon} />
              </KDropdownMenu.SubTrigger>
              <KDropdownMenu.Portal>
                <KDropdownMenu.SubContent class={fullClass.content}>
                  <RenderMenuItems items={config.children!} />
                </KDropdownMenu.SubContent>
              </KDropdownMenu.Portal>
            </KDropdownMenu.Sub>
          </Show>
        </Show>
      )}
    </For>
  );
};

export const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <KDropdownMenu placement={props.placement ?? "bottom-start"}>
      <KDropdownMenu.Trigger as="div" class={fullClass.trigger}>
        {props.trigger}
      </KDropdownMenu.Trigger>

      <KDropdownMenu.Portal>
        <KDropdownMenu.Content class={fullClass.content}>
          <RenderMenuItems items={props.items} />
        </KDropdownMenu.Content>
      </KDropdownMenu.Portal>
    </KDropdownMenu>
  );
};
