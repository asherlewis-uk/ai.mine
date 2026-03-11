import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type GlassCardProps = {
  title?: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  selected?: boolean;
  disabled?: boolean;
  interactive?: boolean;
};

export function GlassCard({
  children,
  className,
  description,
  disabled = false,
  footer,
  interactive = false,
  meta,
  selected = false,
  title,
}: GlassCardProps) {
  const state = disabled ? "disabled" : selected ? "selected" : "idle";

  return (
    <article
      className={cn("glass-card p-5 sm:p-6", className)}
      data-interactive={interactive}
      data-state={state}
      tabIndex={interactive && !disabled ? 0 : undefined}
    >
      {title || description || meta ? (
        <div className="flex items-start justify-between gap-3">
          <div>
            {title ? (
              <h3 className="text-base font-semibold tracking-[-0.02em] text-text-primary">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {description}
              </p>
            ) : null}
          </div>
          {meta ? (
            <div className="text-xs uppercase tracking-[0.18em] text-text-tertiary">
              {meta}
            </div>
          ) : null}
        </div>
      ) : null}
      {children ? <div className={title || description || meta ? "mt-4" : undefined}>{children}</div> : null}
      {footer ? (
        <div className="mt-4 border-t border-white/8 pt-4 text-sm text-text-secondary">
          {footer}
        </div>
      ) : null}
    </article>
  );
}
