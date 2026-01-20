import { useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { getFilteredRoutes } from "~/utils/getRouter";

export default () => {
    const filteredRoutes = getFilteredRoutes(FileRoutes());

     const location = useLocation();
    
        const active = (path: string) =>
            path == location.pathname
                ? "bg-sky-600 text-white"
                : "border-transparent text-red-800 hover:border-sky-600";
    return (
        <aside class="bg-orange-300 h-screen sticky top-0 flex flex-col">
            <ul class="container flex flex-col w-42 overflow-y-auto scrollbar-thin">
                {filteredRoutes.map((route: any) => (
                    <li class={`${active(route.path)} px-6 py-3 shrink-0`}>
                        <a href={route.path} class="hover:underline">
                            {route.path.replace("/", "") || "Home"}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
