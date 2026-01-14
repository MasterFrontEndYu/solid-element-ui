// src/components/Counter.tsx
import { createSignal } from "solid-js";

import { Accordion } from "solid-element-ui";

const items = [
    { value: "1", title: "第一项", content: "内容部分" },
    { value: "2", title: "第二项", content: "内容部分" },
];

export default function Counter() {
    const [count, setCount] = createSignal(0);
    return <Accordion items={items} collapsible />;
}
