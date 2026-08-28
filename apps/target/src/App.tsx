// App.tsx
import { Title } from "@solidjs/meta";
import { Loading } from "solid-js";
import { Router, routes } from "./router";
import "./App.css";

// 过滤并排序路由（按路径字母顺序）
const navRoutes = routes
  .filter((route) => route.path && route.path !== "/*404")
  .sort((a, b) => a.path.localeCompare(b.path));

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>Solid App</Title>
          <div class="flex">
            <nav>
              <ul>
                {navRoutes.map((route) => (
                  <li>
                    <a href={route.path}>
                      {route.path === "/" ? "Home" : route.path.replace("/", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
          </div>
        </>
      )}
    </Router>
  );
}
