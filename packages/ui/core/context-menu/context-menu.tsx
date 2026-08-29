import { ContextMenu as KContextMenu, type ContextMenuRootProps } from "@kobalte/core/context-menu";
import { For, Show } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronRight } from "../icons";
import { defaultClass } from "./setting";

// TODO 样式修改

// 定义配置项类型
export type ContextMenuItemConfig = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  separator?: boolean;
  children?: ContextMenuItemConfig[]; // 支持嵌套子菜单
};

interface UnifiedContextMenuProps extends ContextMenuRootProps {
  items: ContextMenuItemConfig[];
  children: JSX.Element; // 触发区域
  class?: string;
  contentClass?: string;
  itemClass?: string;
  separatorClass?: string;
  subIconClass?: string;
}

// 递归渲染函数
const RenderMenuItems = (props: { items: ContextMenuItemConfig[] }) => {
  return (
    <For each={props.items}>
      {(itemConfig) => (
        <Show
          when={!itemConfig.separator}
          fallback={<KContextMenu.Separator class={defaultClass.separator} />}
        >
          <Show
            when={itemConfig.children && itemConfig.children.length > 0}
            fallback={
              <KContextMenu.Item
                class={defaultClass.item}
                disabled={itemConfig.disabled}
                onSelect={() => itemConfig.onClick?.()}
              >
                {itemConfig.label}
              </KContextMenu.Item>
            }
          >
            {/* 渲染子菜单 */}
            <KContextMenu.Sub>
              <KContextMenu.SubTrigger class={defaultClass.item}>
                {itemConfig.label}
                <ChevronRight class={defaultClass.subIcon} />
              </KContextMenu.SubTrigger>
              <KContextMenu.Portal>
                <KContextMenu.SubContent class={defaultClass.content}>
                  <RenderMenuItems items={itemConfig.children!} />
                </KContextMenu.SubContent>
              </KContextMenu.Portal>
            </KContextMenu.Sub>
          </Show>
        </Show>
      )}
    </For>
  );
};

export const ContextMenu = (props: UnifiedContextMenuProps) => {
  return (
    <KContextMenu>
      <KContextMenu.Trigger class={props.class}>{props.children}</KContextMenu.Trigger>
      <KContextMenu.Portal>
        <KContextMenu.Content class={defaultClass.content}>
          <RenderMenuItems items={props.items} />
        </KContextMenu.Content>
      </KContextMenu.Portal>
    </KContextMenu>
  );
};
