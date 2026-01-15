import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";

import Nav from "~/layout/nav";
import Aside from "~/layout/aside";

export default function App() {
  return (
      <Router
          root={(props) => (
              <>
                  <Nav />
                  <main class="flex">
                      <Aside />
                      <div class="prose prose-slate max-w-none dark:prose-invert p-8 w-full bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                          <Suspense>{props.children}</Suspense>
                      </div>
                  </main>
              </>
          )}
      >
          <FileRoutes />
      </Router>
  );
}
