import type { RouteObject } from "react-router-dom";
import {
  createBrowserRouter,
  createMemoryRouter,
  Navigate,
} from "react-router-dom";

import { App } from "@/app/App";
import { ChatsScreen } from "@/screens/ChatsScreen";
import { HomeScreen } from "@/screens/HomeScreen";
import { LibraryScreen } from "@/screens/LibraryScreen";
import { ModelsScreen } from "@/screens/ModelsScreen";
import { SettingsScreen } from "@/screens/SettingsScreen";
import { TemporaryChatScreen } from "@/screens/TemporaryChatScreen";

export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "chats",
        element: <ChatsScreen />,
      },
      {
        path: "library",
        element: <LibraryScreen />,
      },
      {
        path: "models",
        element: <ModelsScreen />,
      },
      {
        path: "settings",
        element: <SettingsScreen />,
      },
      {
        path: "temporary-chat",
        element: <TemporaryChatScreen />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate replace to="/" />,
  },
];

export const appRouter = createBrowserRouter(appRoutes);

export function createAppMemoryRouter(initialEntries: string[] = ["/"]) {
  return createMemoryRouter(appRoutes, { initialEntries });
}
