import { Accordion } from "solid-element-ui";

const items = [
    { value: "1", title: "第一项", content: "内容部分" },
    { value: "2", title: "第二项", content: "内容部分" },
];

export default () => {
    return (
        <>
            <Accordion items={items} collapsible />;
        </>
    );
};
