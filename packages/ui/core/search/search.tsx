import { TextField as KSearch } from "@kobalte/core/text-field";
import { omit, type ComponentProps, Show } from "solid-js";
import { Search as SearchIcon, CircleX } from "../icons";
import { fullClass } from "./setting";

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
      class={fullClass.root}
      value={props.value}
      onChange={props.onChange}
      {...others}
    >
      <div class={fullClass.inputWrapper}>
        <SearchIcon class={fullClass.icon} />
        <KSearch.Input class={fullClass.input} placeholder={props.placeholder ?? "搜索..."} />
        <Show when={props.allowClear && props.value}>
          <button onClick={() => props.onClear?.()} class={fullClass.clear}>
            <CircleX class="text-white dark:text-slate-950" />
          </button>
        </Show>
      </div>
    </KSearch>
  );
};
