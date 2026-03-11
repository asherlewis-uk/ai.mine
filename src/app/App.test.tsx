import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { createAppMemoryRouter } from "@/app/router";

describe("ai.mine app shell", () => {
  it("renders the home route inside the shared shell", async () => {
    const router = createAppMemoryRouter(["/"]);

    render(<RouterProvider router={router} />);

    expect(
      await screen.findByRole("heading", { name: "Home" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Primary" })).toBeVisible();
    expect(screen.getByRole("button", { name: "Menu" })).toBeVisible();
  });
});
