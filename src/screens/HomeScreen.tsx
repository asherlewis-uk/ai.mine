import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { ActionChip } from "@/components/ui/ActionChip";
import { Composer } from "@/components/ui/Composer";
import { GlassCard } from "@/components/ui/GlassCard";
import { HeroBlock } from "@/components/ui/HeroBlock";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeScreen() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState("");
  const [selectedEntryAction, setSelectedEntryAction] = useState("Scratchpad");
  const [lastAction, setLastAction] = useState<string | null>(null);

  const entryActions = [
    "Scratchpad",
    "Summarize notes",
    "Review ideas",
    "Temporary Chat",
  ];

  function handleComposerSubmit() {
    setLastAction(`Draft staged locally: "${draft.trim()}"`);
    setDraft("");
  }

  function handleActionSelect(action: string) {
    setSelectedEntryAction(action);

    if (action === "Temporary Chat") {
      navigate("/temporary-chat");
      return;
    }

    setLastAction(`${action} selected for the next local session.`);
  }

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        subtitle="A calm starting point for private local work, quick entry actions, and non-persistent session launch."
        title="Home"
      />
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <HeroBlock
          description="ai.mine is a privacy-first, local-first workspace for shaping thoughts, exploring context, and starting focused sessions without turning your workflow into a cluttered control panel."
          title="Start locally, stay in control."
        >
          <div className="flex flex-wrap gap-3">
            <PrimaryButton
              className="w-full sm:w-auto"
              emphasis="active"
              onClick={() => navigate("/temporary-chat")}
            >
              Open Temporary Chat
            </PrimaryButton>
            <PrimaryButton
              className="w-full sm:w-auto"
              onClick={() => navigate("/library")}
            >
              Open Library
            </PrimaryButton>
          </div>
        </HeroBlock>

        <section className="space-y-3">
          <SectionLabel
            aside="Quick entry"
            label="Session Actions"
          />
          <div className="flex gap-3 overflow-x-auto pb-1">
            {entryActions.map((action) => (
              <ActionChip
                key={action}
                className="shrink-0"
                onClick={() => handleActionSelect(action)}
                selected={selectedEntryAction === action}
              >
                {action}
              </ActionChip>
            ))}
          </div>
        </section>

        <GlassCard
          description="Temporary Chat stays behaviorally separate from saved chats and is the fastest way to start a non-persistent session."
          footer="No long-running automation, hidden storage, or assistant theatrics in this first pass."
          title="Temporary session access"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-text-secondary">
              Use Temporary Chat when you want a clean scratch space that does
              not become part of chat history.
            </p>
            <PrimaryButton onClick={() => navigate("/temporary-chat")}>
              Start Temporary Chat
            </PrimaryButton>
          </div>
        </GlassCard>

        <section className="mt-auto space-y-3">
          <SectionLabel
            aside={selectedEntryAction}
            label="Primary Composer"
          />
          <Composer
            ariaLabel="Home composer"
            footerContent={lastAction ?? "Local draft only"}
            onSubmit={handleComposerSubmit}
            onValueChange={setDraft}
            placeholder="Sketch a thought, outline a task, or begin a private local draft…"
            submitLabel="Stage Draft"
            value={draft}
          />
        </section>
      </div>
    </div>
  );
}
