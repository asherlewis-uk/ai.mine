import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

import { ActionChip } from "@/components/ui/ActionChip";
import { Composer } from "@/components/ui/Composer";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroBlock } from "@/components/ui/HeroBlock";
import { MessageBubble } from "@/components/ui/MessageBubble";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToggleRow } from "@/components/ui/ToggleRow";

describe("shared ui primitives", () => {
  it("renders the primitive family with the expected state markers", () => {
    render(
      <div>
        <SectionLabel aside="Pinned" label="Quick Actions" />
        <HeroBlock
          description="A calm introduction surface for the Home screen."
          title="Local-first work, without noise."
        />
        <ActionChip selected>Focus mode</ActionChip>
        <PrimaryButton emphasis="active">Continue</PrimaryButton>
        <GlassCard
          description="Selected cards carry controlled spectral emphasis."
          meta="Local"
          selected
          title="Workspace"
        />
        <MessageBubble meta="Draft" variant="outbound">
          This bubble stays inside the same glass-luminous family.
        </MessageBubble>
      </div>,
    );

    expect(screen.getByText("Quick Actions")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Local-first work, without noise." })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Focus mode" })).toHaveAttribute(
      "data-state",
      "selected",
    );
    expect(screen.getByRole("button", { name: "Continue" })).toHaveAttribute(
      "data-state",
      "active",
    );
    expect(screen.getByText("Workspace").closest("article")).toHaveAttribute(
      "data-state",
      "selected",
    );
    expect(
      screen.getByText("This bubble stays inside the same glass-luminous family.").closest("article"),
    ).toHaveAttribute("data-variant", "outbound");
  });

  it("supports toggle and composer interaction without screen-specific logic", () => {
    function Harness() {
      const [checked, setChecked] = useState(false);
      const [value, setValue] = useState("");
      const [submitted, setSubmitted] = useState(false);

      return (
        <div>
          <ToggleRow
            checked={checked}
            description="The row owns only local toggle behavior."
            label="Private mode"
            onCheckedChange={setChecked}
          />
          <Composer
            footerContent="Temporary Chat"
            onSubmit={() => setSubmitted(true)}
            onValueChange={setValue}
            submitLabel="Send"
            value={value}
          />
          {submitted ? <span>Submitted</span> : null}
        </div>
      );
    }

    render(<Harness />);

    const toggle = screen.getByRole("switch", { name: "Private mode" });
    const composer = screen.getByRole("textbox");
    const sendButton = screen.getByRole("button", { name: "Send" });

    expect(toggle).toHaveAttribute("data-state", "off");
    expect(sendButton).toBeDisabled();

    fireEvent.click(toggle);
    fireEvent.change(composer, { target: { value: "Hello ai.mine" } });

    expect(toggle).toHaveAttribute("data-state", "on");
    expect(sendButton).not.toBeDisabled();

    fireEvent.click(sendButton);

    expect(screen.getByText("Submitted")).toBeInTheDocument();
  });
});
