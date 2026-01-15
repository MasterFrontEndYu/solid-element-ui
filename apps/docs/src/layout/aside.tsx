import { FileRoutes } from "@solidjs/start/router";
import { getFilteredRoutes } from "~/utils/getRouter";

export default () => {
    const filteredRoutes = getFilteredRoutes(FileRoutes());
    return (
        <aside class="bg-orange-300 h-screen sticky top-0">
            <ul class="container flex flex-col p-3 text-red-800 w-32">
                {filteredRoutes.map((route: any) => (
                    <li class="my-1.5">
                        <a href={route.path} class="hover:underline">
                            {route.path.replace("/", "")}
                        </a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
