// App.tsx
import { Title } from "@solidjs/meta";
import { Loading } from "solid-js";
import { Router, routes } from "./router";
import "./App.css";

const navRoutes = routes.filter((route) => route.path && route.path !== "/*404");

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
