import { useState } from "react";

import { ScreenHeader } from "@/components/layout/ScreenHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ToggleRow } from "@/components/ui/ToggleRow";

export function SettingsScreen() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [clearTemporarySessions, setClearTemporarySessions] = useState(true);
  const [showAdvancedControls, setShowAdvancedControls] = useState(false);

  return (
    <div className="flex flex-1 flex-col">
      <ScreenHeader
        subtitle="Preferences and system-level behavior belong here once they stop being core workflow destinations."
        title="Settings"
      />
      <div className="flex flex-1 flex-col gap-5 sm:gap-6">
        <GlassCard
          description="Settings should collect preferences and system choices without becoming a dumping ground for every technical control in the app."
          footer="This first pass stays small: a few honest preferences and a note about local data posture."
          meta="Preferences"
          title="Workspace settings"
        />

        <section className="space-y-3">
          <SectionLabel
            aside="System"
            label="Preferences"
          />
          <div className="grid gap-4">
            <ToggleRow
              checked={reduceMotion}
              description="Reduce interface motion and animation intensity while keeping the glass-luminous system intact."
              label="Reduce motion"
              onCheckedChange={setReduceMotion}
            />
            <ToggleRow
              checked={clearTemporarySessions}
              description="Treat Temporary Chat as scratch space and clear local temporary session state when it is no longer needed."
              label="Clear temporary sessions"
              meta="Recommended"
              onCheckedChange={setClearTemporarySessions}
            />
            <ToggleRow
              checked={showAdvancedControls}
              description="Reveal deeper runtime and system controls later without forcing them into the default experience now."
              label="Show advanced controls"
              onCheckedChange={setShowAdvancedControls}
            />
          </div>
        </section>

        <GlassCard
          description="ai.mine is being rebuilt around a privacy-first, local-first posture. Settings can surface that clearly without pretending every storage or provider control exists yet."
          footer="More detailed storage, export, and provider settings are intentionally deferred."
          meta="Local data"
          title="System notes"
        />
      </div>
    </div>
  );
}
