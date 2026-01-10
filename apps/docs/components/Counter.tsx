// .vitepress/components/SolidCounter.tsx
import { createSignal } from "solid-js";

export default function SolidCounter() {
    const [count, setCount] = createSignal(0);
    return (
        <button onClick={() => setCount(count() + 1)}>
            Solid 计数器: {count()}
        </button>
    );
}
