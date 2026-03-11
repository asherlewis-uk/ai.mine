import { fireEvent, render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";

import { createAppMemoryRouter } from "@/app/router";

describe("Temporary Chat screen", () => {
  it("makes non-persistent behavior explicit and supports local draft entry", () => {
    const router = createAppMemoryRouter(["/temporary-chat"]);

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole("heading", { name: "Temporary Chat" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Non-persistent by design")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Back to Home" })).toBeVisible();

    const composer = screen.getByRole("textbox", {
      name: "Temporary Chat composer",
    });
    const sendButton = screen.getByRole("button", { name: "Send" });

    fireEvent.change(composer, {
      target: { value: "A local temporary note." },
    });
    fireEvent.click(sendButton);

    expect(screen.getByText("A local temporary note.")).toBeInTheDocument();
    expect(screen.getByText("Unsaved draft")).toBeInTheDocument();
  });
});
