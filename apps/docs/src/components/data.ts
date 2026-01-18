

export const accordionData = [
    { value: "1", title: "第一项", content: "内容部分" },
    { value: "2", title: "第二项", content: "内容部分" },
];


export const navItems = [
    { title: "首页", href: "/" },
    { title: "组件库", href: "/components" },
    { title: "面包屑", current: true },
];


export const menuItems = [
    { label: "返回", onClick: () => console.log("Back") },
    { label: "前进", disabled: true },
    { separator: true },
    {
        label: "更多工具",
        children: [
            { label: "保存页面", onClick: () => alert("Saved") },
            { label: "打印", onClick: () => window.print() },
        ],
    },
    { separator: true },
    { label: "检查", onClick: () => console.log("Inspect") },
];


export const profileMenu = [
    { label: "个人资料", onClick: () => console.log("Profile") },
    { label: "设置", onClick: () => console.log("Settings") },
    { separator: true },
    {
        label: "邀请好友",
        children: [
            { label: "通过邮件", onClick: () => {} },
            { label: "通过微信", onClick: () => {} },
        ],
    },
    { separator: true },
    { label: "退出登录", onClick: () => {}, disabled: false },
];

export const planOptions = [
    { label: "基础版 (免费)", value: "free" },
    { label: "专业版 ($19/mo)", value: "pro" },
    { label: "企业版 (联系我们)", value: "enterprise", disabled: true },
];

export const selectOptions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry", disabled: true },
];


export const tabOptions = [
    { value: "account", label: "账户", content: "这里是账户设置内容。" },
    { value: "password", label: "密码", content: "在此处修改您的登录密码。" },
    {
        value: "settings",
        label: "偏好",
        content: "管理您的系统通知和外观设置。",
    },
];