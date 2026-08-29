import { Pagination as KPagination, type PaginationRootProps } from "@kobalte/core/pagination";
import { omit } from "solid-js";
import { ChevronLeft, ChevronRight, Ellipsis } from "../icons";
import { defaultClass } from "./setting";

// FIXME 样式修改，

export interface PaginationProps extends PaginationRootProps {
  class?: string;
  itemsContainerClass?: string;
  itemClass?: string;
  ellipsisClass?: string;
  triggerClass?: string;
}

export const Pagination = (props: PaginationProps) => {
  // 显式提取 count 以满足类型约束，同时清理 others
  const others = omit(
    props,
    "class",
    "count",
    "itemsContainerClass",
    "itemClass",
    "ellipsisClass",
    "triggerClass",
  );

  return (
    <KPagination
      class={defaultClass.root}
      count={props.count}
      {...others}
      itemComponent={(p) => (
        <KPagination.Item page={p.page} class={defaultClass.item}>
          {p.page}
        </KPagination.Item>
      )}
      ellipsisComponent={() => (
        <KPagination.Ellipsis class={defaultClass.ellipsis}>
          <Ellipsis size={16} />
        </KPagination.Ellipsis>
      )}
    >
      <div class={defaultClass.itemsContainer}>
        <KPagination.Previous class={defaultClass.trigger}>
          <ChevronLeft size={16} />
        </KPagination.Previous>

        <KPagination.Items />

        <KPagination.Next class={defaultClass.trigger}>
          <ChevronRight size={16} />
        </KPagination.Next>
      </div>
    </KPagination>
  );
};
