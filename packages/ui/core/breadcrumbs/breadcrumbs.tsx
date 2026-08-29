import { Breadcrumbs as KBreadcrumbs, type BreadcrumbsRootProps } from "@kobalte/core/breadcrumbs";
import { For, omit } from "solid-js";
import type { JSX } from "@solidjs/web";
import { ChevronRight } from "../icons";
import { defaultClass } from "./setting";

// TODO 1. 定义样式
//      2. icon 支持自定义

export interface BreadcrumbItem {
  title: JSX.Element;
  href?: string;
  current?: boolean;
  disabled?: boolean;
}

interface BreadcrumbsProps extends BreadcrumbsRootProps {
  items: BreadcrumbItem[];
  separatorIcon?: JSX.Element;
  class?: string;
  linkClass?: string;
  separatorClass?: string;
}

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const others = omit(props, "items", "separatorIcon", "class", "linkClass", "separatorClass");

  return (
    <KBreadcrumbs class={defaultClass.root} {...others}>
      <For each={props.items}>
        {(breadcrumb, index) => (
          <>
            <KBreadcrumbs.Link
              href={breadcrumb.href}
              current={breadcrumb.current}
              disabled={breadcrumb.disabled}
              class={defaultClass.link}
            >
              {breadcrumb.title}
            </KBreadcrumbs.Link>

            {index() < props.items.length - 1 && (
              <span aria-hidden="true" class={defaultClass.separator}>
                {props.separatorIcon || <ChevronRight size={16} />}
              </span>
            )}
          </>
        )}
      </For>
    </KBreadcrumbs>
  );
};
