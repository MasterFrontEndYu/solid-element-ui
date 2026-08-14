import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import { SolidBaseRoot } from "@kobalte/solidbase/client";
import { Suspense } from "solid-js";

import { ToastProvider } from "solid-element-ui";

export default function App() {
  return (
    <Router
      root={(props) => (
        <SolidBaseRoot>
          <ToastProvider>
            <Suspense>{props.children}</Suspense>
          </ToastProvider>
        </SolidBaseRoot>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
