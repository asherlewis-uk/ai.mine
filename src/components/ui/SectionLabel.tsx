import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionLabelProps = {
  label: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function SectionLabel({ aside, className, label }: SectionLabelProps) {
  return (
    <div className={cn("section-label", className)}>
      <span>{label}</span>
      {aside ? <div className="text-sm text-text-tertiary">{aside}</div> : null}
    </div>
  );
}
