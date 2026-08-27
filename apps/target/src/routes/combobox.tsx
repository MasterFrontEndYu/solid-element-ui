import { Combobox, ComboboxItem } from "solid-element-ui";

export default function ComboboxDemo() {
  return (
    <div class="p-4 bg-white dark:bg-zinc-950 border rounded-lg">
      <Combobox
        options={["Apple", "Banana", "Orange"]}
        placeholder="Search fruits..."
        itemComponent={(props: any) => <ComboboxItem item={props.item} />}
      />
    </div>
  );
}
