import type { ReactNode } from "react";
import { useId } from "react";

import { cn } from "@/lib/cn";

type ToggleRowProps = {
  checked: boolean;
  label: ReactNode;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  meta?: ReactNode;
};

export function ToggleRow({
  checked,
  className,
  description,
  disabled = false,
  label,
  meta,
  onCheckedChange,
}: ToggleRowProps) {
  const labelId = useId();
  const descriptionId = useId();
  const state = disabled ? "disabled" : checked ? "on" : "off";

  return (
    <button
      aria-checked={checked}
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={labelId}
      className={cn("glass-card toggle-row", className)}
      data-state={state}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      role="switch"
      type="button"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-text-primary" id={labelId}>
              {label}
            </span>
            {meta ? (
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-text-tertiary">
                {meta}
              </span>
            ) : null}
          </div>
          {description ? (
            <p
              className="mt-2 text-sm leading-6 text-text-secondary"
              id={descriptionId}
            >
              {description}
            </p>
          ) : null}
        </div>
        <span aria-hidden="true" className="toggle-control" />
      </div>
    </button>
  );
}
