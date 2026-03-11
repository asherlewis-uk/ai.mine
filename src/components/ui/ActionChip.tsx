import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ActionChipProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  leadingAdornment?: ReactNode;
  trailingAdornment?: ReactNode;
};

export function ActionChip({
  children,
  className,
  disabled,
  leadingAdornment,
  selected = false,
  trailingAdornment,
  type = "button",
  ...props
}: ActionChipProps) {
  const state = disabled ? "disabled" : selected ? "selected" : "idle";

  return (
    <button
      aria-pressed={selected}
      className={cn("glass-button glass-chip", className)}
      data-state={state}
      disabled={disabled}
      type={type}
      {...props}
    >
      {leadingAdornment}
      <span>{children}</span>
      {trailingAdornment}
    </button>
  );
}
