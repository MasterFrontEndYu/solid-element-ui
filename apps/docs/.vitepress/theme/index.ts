import DefaultTheme from "vitepress/theme";

// 1. 引入你的组件
import SolidWrapper from "../components/SolidWrapper.vue"
import Test from "../components/Test.vue";

export default {
    ...DefaultTheme, // 继承默认主题（重要！）
    enhanceApp({ app }:any) {
        // 2. 手动全局注册组件
        app.component("SolidWrapper", SolidWrapper);
        app.component("Test", Test);
        // 可以在这里注册更多组件...
    },
};
