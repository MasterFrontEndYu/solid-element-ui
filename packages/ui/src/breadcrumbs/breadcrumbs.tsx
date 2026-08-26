import { Breadcrumbs as KBreadcrumbs } from "@kobalte/core/breadcrumbs";
import { For, omit, type ComponentProps } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronRight } from "../icons";
import { fullClass } from "./setting";

// TODO 1. 定义样式
//      2. icon 支持自定义

export interface BreadcrumbItem {
  title: JSX.Element;
  href?: string;
  current?: boolean;
  disabled?: boolean;
}

interface BreadcrumbsProps extends ComponentProps<typeof KBreadcrumbs> {
  items: BreadcrumbItem[];
  separatorIcon?: JSX.Element;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const others = omit(props, "items", "separatorIcon", "class");

  return (
    <KBreadcrumbs class={fullClass.root} {...others}>
      <For each={props.items}>
        {(breadcrumb, index) => (
          <>
            <KBreadcrumbs.Link
              href={breadcrumb.href}
              current={breadcrumb.current}
              disabled={breadcrumb.disabled}
              class={fullClass.link}
            >
              {breadcrumb.title}
            </KBreadcrumbs.Link>

            {index() < props.items.length - 1 && (
              <span aria-hidden="true" class={fullClass.separator}>
                {props.separatorIcon || <ChevronRight size={16} />}
              </span>
            )}
          </>
        )}
      </For>
    </KBreadcrumbs>
  );
};
