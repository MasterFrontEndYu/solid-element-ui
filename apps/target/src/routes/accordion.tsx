import { Accordion } from "solid-element-ui";

export const data = [
  { value: "1", title: <b class="text-red-700">第1项</b>, content: <b>内容部分1</b> },
  { value: "2", title: "第二项", content: "内容部分2" },
];

export default function AccordionDemo() {
  return <Accordion multiple defaultValue={["2"]} items={data} />;
}
