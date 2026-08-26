import { Rating as KRating } from "@kobalte/core/rating";
import { omit, type ComponentProps, Show, For } from "solid-js";
import { StarIcon } from "../icons";
import { defaultClass } from "./setting";

export interface RatingGroupProps
  extends Omit<ComponentProps<typeof KRating>, "children" | "class"> {
  label?: string;
  count?: number; // 星星总数，默认为 5
  class?: string;
}

/**
 * RatingGroup 高度封装版
 * 自动处理星星循环、高亮逻辑及表单集成
 */
export const RatingGroup = (props: RatingGroupProps) => {
  const others = omit(props, "label", "count", "class", "color", "size");

  return (
    <KRating class={defaultClass.root} {...others}>
      <Show when={props.label}>
        <KRating.Label class={defaultClass.label}>{props.label}</KRating.Label>
      </Show>

      <KRating.Control class={defaultClass.control}>
        <For each={Array(5)}>
          {(_) => (
            <KRating.Item class={defaultClass.item}>
              <KRating.ItemControl>
                <StarIcon />
              </KRating.ItemControl>
            </KRating.Item>
          )}
        </For>
      </KRating.Control>
    </KRating>
  );
};
