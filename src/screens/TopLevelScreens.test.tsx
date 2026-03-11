import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { createAppMemoryRouter } from "@/app/router";

describe("top-level destination screens", () => {
  it.each([
    {
      path: "/chats",
      heading: "Chats",
      marker: "Saved conversation history",
    },
    {
      path: "/library",
      heading: "Library",
      marker: "Saved workspace material",
    },
    {
      path: "/models",
      heading: "Models",
      marker: "Model destination",
    },
    {
      path: "/settings",
      heading: "Settings",
      marker: "Workspace settings",
    },
  ])("renders $heading as a distinct destination", ({ heading, marker, path }) => {
    const router = createAppMemoryRouter([path]);

    render(<RouterProvider router={router} />);

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(marker)).toBeInTheDocument();
  });
});
