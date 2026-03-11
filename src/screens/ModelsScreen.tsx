import { useState } from "react";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { ActionChip } from "@/components/ui/ActionChip";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToggleRow } from "@/components/ui/ToggleRow";

const runtimeProfiles = [
  "On-device",
  "Balanced",
  "Connected",
];

export function ModelsScreen() {
  const [selectedProfile, setSelectedProfile] = useState("On-device");
  const [preferLocalRuntime, setPreferLocalRuntime] = useState(true);

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        subtitle="Model and provider decisions belong here so runtime choice stays visible instead of hiding inside Settings."
        title="Models"
      />
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <GlassCard
          description="This destination is for model and provider posture, not for conversation content. The first pass keeps that choice explicit without adding deep provider logic yet."
          footer="Current emphasis: local-first runtime behavior with room for connected providers later."
          meta="Runtime"
          title="Model destination"
        />

        <section className="space-y-3">
          <SectionLabel
            aside={selectedProfile}
            label="Profiles"
          />
          <div className="flex gap-3 overflow-x-auto pb-1">
            {runtimeProfiles.map((profile) => (
              <ActionChip
                key={profile}
                className="shrink-0"
                onClick={() => setSelectedProfile(profile)}
                selected={selectedProfile === profile}
              >
                {profile}
              </ActionChip>
            ))}
          </div>
        </section>

        <GlassCard
          description={
            selectedProfile === "On-device"
              ? "A local-first profile intended for private on-device work and the quietest default posture."
              : selectedProfile === "Balanced"
                ? "A mixed profile for future cases where local work remains primary but selective connected support is acceptable."
                : "A connected-provider profile placeholder for later integration work, kept explicit instead of being hidden elsewhere."
          }
          meta="Selected"
          selected
          title={selectedProfile}
        />

        <ToggleRow
          checked={preferLocalRuntime}
          description="Keep local runtime behavior as the default posture whenever an on-device option is available."
          label="Prefer local runtime"
          meta="Local-first"
          onCheckedChange={setPreferLocalRuntime}
        />
      </div>
    </div>
  );
}
