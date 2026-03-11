import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type HeroBlockProps = {
  title: ReactNode;
  description: ReactNode;
  eyebrow?: ReactNode;
  children?: ReactNode;
  className?: string;
};

export function HeroBlock({
  children,
  className,
  description,
  eyebrow = "ai.mine",
  title,
}: HeroBlockProps) {
  return (
    <section className={cn("glass-card hero-block p-6 sm:p-7", className)}>
      <p className="text-[0.72rem] uppercase tracking-[0.24em] text-text-secondary">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-text-secondary sm:text-[0.98rem]">
        {description}
      </p>
      {children ? <div className="mt-6">{children}</div> : null}
    </section>
  );
}
