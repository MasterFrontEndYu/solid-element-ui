import { createSignal } from "solid-js";

import { Accordion, Button } from "solid-element-ui";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <Button>default</Button>
    </div>
  );
}
