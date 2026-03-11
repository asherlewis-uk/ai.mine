import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { Composer } from "@/components/ui/Composer";
import { GlassCard } from "@/components/ui/GlassCard";
import { MessageBubble } from "@/components/ui/MessageBubble";
import { SectionLabel } from "@/components/ui/SectionLabel";

type TemporaryMessage = {
  id: string;
  body: string;
  meta: string;
  variant: "inbound" | "outbound";
};

const initialMessages: TemporaryMessage[] = [
  {
    id: "temporary-intro",
    body: "This route is temporary by design. Nothing here is added to saved chats or library items in this first pass.",
    meta: "Temporary session",
    variant: "inbound",
  },
  {
    id: "temporary-scope",
    body: "Use it for quick drafting, testing a prompt, or shaping a thought without turning it into a stored thread.",
    meta: "Local only",
    variant: "inbound",
  },
];

export function TemporaryChatScreen() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<TemporaryMessage[]>(initialMessages);

  function handleSubmit() {
    const nextDraft = draft.trim();

    if (!nextDraft) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `draft-${currentMessages.length + 1}`,
        body: nextDraft,
        meta: "Unsaved draft",
        variant: "outbound",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        leadingControl={
          <button
            aria-label="Back to Home"
            className="glass-button min-h-11 min-w-11 px-4"
            onClick={() => navigate("/")}
            type="button"
          >
            Back
          </button>
        }
        subtitle="A non-persistent conversation surface for quick local drafting. Leaving this route should not quietly create a saved thread."
        title="Temporary Chat"
      />
      <div className="flex min-h-0 flex-1 flex-col gap-5">
        <GlassCard
          description="Temporary Chat is intentionally separate from saved chats. This screen is for one-off work, not quiet background persistence."
          meta="Not saved"
          title="Non-persistent by design"
        />

        <section className="flex min-h-0 flex-1 flex-col gap-3">
          <SectionLabel
            aside="Ephemeral route"
            label="Conversation"
          />
          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto pb-2 pr-1">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                meta={message.meta}
                variant={message.variant}
              >
                {message.body}
              </MessageBubble>
            ))}
          </div>
        </section>

        <section className="mt-auto">
          <Composer
            ariaLabel="Temporary Chat composer"
            footerContent="Temporary session only"
            onSubmit={handleSubmit}
            onValueChange={setDraft}
            placeholder="Write a quick local prompt or draft without saving it…"
            submitLabel="Send"
            value={draft}
          />
        </section>
      </div>
    </div>
  );
}
