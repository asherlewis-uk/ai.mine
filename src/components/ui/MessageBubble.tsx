import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type MessageBubbleProps = {
  children: ReactNode;
  className?: string;
  meta?: ReactNode;
  selected?: boolean;
  status?: "default" | "failed";
  variant?: "inbound" | "outbound";
};

export function MessageBubble({
  children,
  className,
  meta,
  selected = false,
  status = "default",
  variant = "inbound",
}: MessageBubbleProps) {
  return (
    <article
      className={cn(
        "message-bubble px-4 py-3",
        variant === "outbound" ? "self-end" : "self-start",
        className,
      )}
      data-selected={selected}
      data-status={status}
      data-variant={variant}
    >
      <div className="text-sm leading-6 text-text-primary">{children}</div>
      {meta ? (
        <p className="mt-2 text-[0.72rem] uppercase tracking-[0.18em] text-text-tertiary">
          {meta}
        </p>
      ) : null}
    </article>
  );
}
