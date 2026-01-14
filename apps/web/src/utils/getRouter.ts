const getFilteredRoutes: any = (routes: any[]) => {
    return routes
        .filter((route) => {
            // 1. 排除 404 页面 (通常匹配包含 *404 或 [...404] 的路径)
            if (route.path.includes("404") || route.path.includes("*")) {
                return false;
            }
            // 2. 排除 index 页面 (路径为 "/" 或空字符串)
            if (route.path === "/" || route.path === "") {
                return false;
            }
            return true;
        })
        .map((route) => {
            // 如果有子路由，递归过滤子路由
            if (route.children) {
                return {
                    ...route,
                    children: getFilteredRoutes(route.children),
                };
            }
            return route;
        });
};


export { getFilteredRoutes };