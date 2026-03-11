import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "@/app/router";
import { AppProviders } from "@/app/providers";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProviders>
    <RouterProvider router={appRouter} />
  </AppProviders>,
);
