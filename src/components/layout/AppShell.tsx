import { Outlet } from "react-router-dom";

import { NavigationDrawer } from "@/components/layout/NavigationDrawer";
import { useUiStore } from "@/state/ui-store";

export function AppShell() {
  const isDrawerOpen = useUiStore((state) => state.isDrawerOpen);
  const closeDrawer = useUiStore((state) => state.closeDrawer);

  return (
    <div className="relative min-h-dvh overflow-hidden bg-surface-base text-text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_color-mix(in_oklab,_var(--state-teal-core)_22%,_transparent),_transparent_38%),radial-gradient(circle_at_bottom_right,_color-mix(in_oklab,_var(--state-spectral)_14%,_transparent),_transparent_30%)]" />
      {isDrawerOpen ? (
        <button
          aria-label="Close navigation drawer"
          className="fixed inset-0 z-30 bg-black/45 backdrop-blur-[1px]"
          onClick={closeDrawer}
          type="button"
        />
      ) : null}
      <NavigationDrawer isOpen={isDrawerOpen} onNavigate={closeDrawer} />
      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-4xl flex-col px-4 pb-8 pt-4 sm:px-6 sm:pt-6">
        <div className="flex min-h-[calc(100dvh-2rem)] flex-1 flex-col rounded-[calc(var(--radius-panel)+0.5rem)] border border-white/6 bg-[color-mix(in_oklab,var(--surface-elevated)_78%,transparent)] px-4 py-5 shadow-[var(--shadow-panel)] backdrop-blur-xl sm:min-h-[calc(100dvh-3rem)] sm:px-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
