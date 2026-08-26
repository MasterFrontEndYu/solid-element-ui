import { TextField as KSearch } from "@kobalte/core/text-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { Search as SearchIcon, CircleX } from "../icons";
import { defaultClass } from "./setting";

export interface SearchProps extends Omit<ComponentProps<typeof KSearch>, "class"> {
  class?: string;
  placeholder?: string;
  allowClear?: boolean;
  onClear?: () => void;
}

export const Search = (props: SearchProps) => {
  const others = omit(
    props,
    "class",
    "placeholder",
    "allowClear",
    "onClear",
    "value",
    "onChange",
    "size",
    "ringColor",
  );

  return (
    <KSearch
      class={defaultClass.root}
      value={props.value}
      onChange={props.onChange}
      {...others}
    >
      <div class={defaultClass.inputWrapper}>
        <SearchIcon class={defaultClass.icon} />
        <KSearch.Input class={defaultClass.input} placeholder={props.placeholder ?? "搜索..."} />
        <Show when={props.allowClear && props.value}>
          <button onClick={() => props.onClear?.()} class={defaultClass.clear}>
            <CircleX class="text-white dark:text-slate-950" />
          </button>
        </Show>
      </div>
    </KSearch>
  );
};
