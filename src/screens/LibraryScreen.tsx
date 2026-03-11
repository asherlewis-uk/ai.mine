import { useState } from "react";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { ActionChip } from "@/components/ui/ActionChip";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";

const libraryCategories = [
  "Saved context",
  "Notes",
  "References",
];

const libraryItems = [
  {
    title: "Product brief",
    description: "A reusable framing note for the privacy-first, local-first direction of ai.mine.",
    footer: "Saved context · reusable",
    meta: "Updated today",
  },
  {
    title: "Prompt patterns",
    description: "A small set of writing and review prompts worth keeping for future sessions.",
    footer: "Reference set · reusable",
    meta: "Updated yesterday",
  },
  {
    title: "Meeting notes",
    description: "Condensed notes that can be brought back into future local drafting flows.",
    footer: "Saved note · reusable",
    meta: "Updated 3 days ago",
  },
];

export function LibraryScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Saved context");

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        subtitle="Reusable saved context, notes, and references belong here when they are meant to support later work."
        title="Library"
      />
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <GlassCard
          description="Library is for reusable material, not active conversation history. It gives saved context a stable home instead of scattering it across chats."
          footer="This first pass stays deliberately simple: light categorization and calm reusable content surfaces."
          meta="Reusable"
          title="Saved workspace material"
        />

        <section className="space-y-3">
          <SectionLabel
            aside={selectedCategory}
            label="Collections"
          />
          <div className="flex gap-3 overflow-x-auto pb-1">
            {libraryCategories.map((category) => (
              <ActionChip
                key={category}
                className="shrink-0"
                onClick={() => setSelectedCategory(category)}
                selected={selectedCategory === category}
              >
                {category}
              </ActionChip>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          {libraryItems.map((item) => (
            <GlassCard
              key={item.title}
              description={item.description}
              footer={item.footer}
              meta={item.meta}
              title={item.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
