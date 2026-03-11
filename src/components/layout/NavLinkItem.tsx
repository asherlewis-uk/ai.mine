import { NavLink } from "react-router-dom";

import { cn } from "@/lib/cn";

type NavLinkItemProps = {
  label: string;
  to: string;
  onNavigate?: () => void;
};

export function NavLinkItem({ label, to, onNavigate }: NavLinkItemProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        cn(
          "flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200",
          isActive
            ? "border-border-active bg-[color-mix(in_oklab,var(--state-spectral)_16%,transparent)] text-text-primary shadow-[var(--shadow-active)]"
            : "border-border-idle bg-white/4 text-text-secondary hover:border-white/18 hover:text-text-primary",
        )
      }
      onClick={onNavigate}
      to={to}
    >
      <span>{label}</span>
    </NavLink>
  );
}
