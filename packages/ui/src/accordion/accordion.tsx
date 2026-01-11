import { Accordion as K } from "@kobalte/core/accordion";
import { For } from "solid-js";
import { accordionStyles } from "./setting";

export const Accordion = (props: any) => {
    // 解构样式槽位
    const { root, item, header, trigger, content, contentText, icon } =
        accordionStyles({
            borderless: props.borderless, // 假设你将来想通过 props 传参
        });

    return (
        <K class={root()} collapsible={props.collapsible}>
            <For each={props.items}>
                {(itemData, index) => (
                    <K.Item
                        class={item()}
                        value={itemData.value || `item-${index()}`}
                    >
                        <K.Header class={header()}>
                            <K.Trigger class={trigger()}>
                                <span>{itemData.title}</span>
                                {/* 使用 TV 定义的图标样式 */}
                                <span class={icon()}>X</span>
                            </K.Trigger>
                        </K.Header>
                        <K.Content class={content()}>
                            <div class={contentText()}>{itemData.content}</div>
                        </K.Content>
                    </K.Item>
                )}
            </For>
        </K>
    );
};
