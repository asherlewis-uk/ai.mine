import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { ActionChip } from "@/components/ui/ActionChip";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SectionLabel } from "@/components/ui/SectionLabel";

const chatFilters = ["All", "Recent", "Pinned"];

const storedChats = [
  {
    title: "Roadmap review",
    preview: "A saved conversation about priorities, scope tradeoffs, and the next implementation slice.",
    meta: "Updated 12m ago",
    footer: "Stored thread · 9 messages",
  },
  {
    title: "Research digest",
    preview: "A conversation used to condense notes into a reusable summary for later work.",
    meta: "Updated yesterday",
    footer: "Stored thread · 5 messages",
  },
  {
    title: "Launch checklist",
    preview: "A practical planning thread for release prep, polishing, and final validation passes.",
    meta: "Updated 2 days ago",
    footer: "Stored thread · 7 messages",
  },
];

export function ChatsScreen() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("Recent");

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        subtitle="Stored conversations belong here, separate from Temporary Chat and other one-off local drafting flows."
        title="Chats"
      />
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <GlassCard
          description="This screen is the persistent conversation destination. Temporary Chat remains a separate route and should not quietly appear here."
          footer="The first pass stays lightweight: a clear home for saved threads without building deep history tooling yet."
          meta="Stored"
          title="Saved conversation history"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-text-secondary">
              Use Temporary Chat when you want an unsaved scratch session. Use
              Chats when the conversation itself is worth keeping.
            </p>
            <PrimaryButton onClick={() => navigate("/temporary-chat")}>
              Open Temporary Chat
            </PrimaryButton>
          </div>
        </GlassCard>

        <section className="space-y-3">
          <SectionLabel
            aside={selectedFilter}
            label="Saved Threads"
          />
          <div className="flex gap-3 overflow-x-auto pb-1">
            {chatFilters.map((filter) => (
              <ActionChip
                key={filter}
                className="shrink-0"
                onClick={() => setSelectedFilter(filter)}
                selected={selectedFilter === filter}
              >
                {filter}
              </ActionChip>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          {storedChats.map((chat) => (
            <GlassCard
              key={chat.title}
              description={chat.preview}
              footer={chat.footer}
              meta={chat.meta}
              title={chat.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
