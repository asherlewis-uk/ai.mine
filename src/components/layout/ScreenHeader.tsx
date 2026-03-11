import type { ReactNode } from "react";

import { useUiStore } from "@/state/ui-store";

type ScreenHeaderProps = {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  leadingControl?: ReactNode;
};

export function ScreenHeader({
  actions,
  leadingControl,
  subtitle,
  title,
}: ScreenHeaderProps) {
  const openDrawer = useUiStore((state) => state.openDrawer);

  return (
    <header className="mb-6 flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        {leadingControl ?? (
          <button
            className="glass-button min-h-11 min-w-11 px-4"
            onClick={openDrawer}
            type="button"
          >
            Menu
          </button>
        )}
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-text-secondary">
            ai.mine
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-text-primary sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
            {subtitle}
          </p>
        </div>
      </div>
      {actions ? <div className="hidden sm:block">{actions}</div> : null}
    </header>
  );
}
