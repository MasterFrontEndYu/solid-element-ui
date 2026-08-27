import { Accordion } from "solid-element-ui";

export const data = [
  { value: "1", title: "第一项", content: "内容部分1" },
  { value: "2", title: "第二项", content: "内容部分2" },
];

export default function AccordionDemo() {
  return <Accordion items={data} />;
}
