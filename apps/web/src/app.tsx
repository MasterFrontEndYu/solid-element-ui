import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/nav";
import Aside from "~/components/aside";
import "./app.css";

export default function App() {
  return (
      <Router
          root={(props) => (
              <>
                  <Nav />
                  <main class="flex">
                       <Aside />
                      <Suspense>{props.children}</Suspense>
                  </main>
              </>
          )}
      >
          <FileRoutes />
      </Router>
  );
}
