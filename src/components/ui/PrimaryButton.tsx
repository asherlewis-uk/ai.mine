import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  emphasis?: "idle" | "active";
  leadingAdornment?: ReactNode;
  trailingAdornment?: ReactNode;
  loading?: boolean;
};

export function PrimaryButton({
  children,
  className,
  disabled,
  emphasis = "idle",
  leadingAdornment,
  loading = false,
  trailingAdornment,
  type = "button",
  ...props
}: PrimaryButtonProps) {
  const state = disabled ? "disabled" : loading || emphasis === "active" ? "active" : "idle";

  return (
    <button
      aria-busy={loading || undefined}
      className={cn("glass-button glass-primary-button", className)}
      data-state={state}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {leadingAdornment}
      <span>{children}</span>
      {trailingAdornment}
    </button>
  );
}
