import { Pagination as KPagination } from "@kobalte/core/pagination";
import { omit, type ComponentProps } from "solid-js";
import { ChevronLeft, ChevronRight, Ellipsis } from "../icons";
import { fullClass } from "./setting";

// FIXME 样式修改，

export interface PaginationProps extends ComponentProps<typeof KPagination> {}

export const Pagination = (props: PaginationProps) => {
  // 显式提取 count 以满足类型约束，同时清理 others
  const others = omit(props, "class", "count");

  return (
    <KPagination
      class={fullClass.root}
      count={props.count}
      {...others}
      itemComponent={(p) => (
        <KPagination.Item page={p.page} class={fullClass.item}>
          {p.page}
        </KPagination.Item>
      )}
      ellipsisComponent={() => (
        <KPagination.Ellipsis class={fullClass.ellipsis}>
          <Ellipsis size={16} />
        </KPagination.Ellipsis>
      )}
    >
      <div class={fullClass.itemsContainer}>
        <KPagination.Previous class={fullClass.trigger}>
          <ChevronLeft size={16} />
        </KPagination.Previous>

        <KPagination.Items />

        <KPagination.Next class={fullClass.trigger}>
          <ChevronRight size={16} />
        </KPagination.Next>
      </div>
    </KPagination>
  );
};
