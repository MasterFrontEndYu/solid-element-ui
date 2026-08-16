import { createSignal } from "solid-js";

import { Accordion } from "solid-element-ui";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return <Accordion items={[{ value: "12", title: "231", content: "content" }]} />;
}
