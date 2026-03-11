import { NavLinkItem } from "@/components/layout/NavLinkItem";

const primaryItems = [
  { label: "Home", to: "/" },
  { label: "Chats", to: "/chats" },
  { label: "Library", to: "/library" },
  { label: "Models", to: "/models" },
  { label: "Settings", to: "/settings" },
];

type NavigationDrawerProps = {
  isOpen: boolean;
  onNavigate: () => void;
};

export function NavigationDrawer({
  isOpen,
  onNavigate,
}: NavigationDrawerProps) {
  return (
    <aside
      className={[
        "fixed inset-y-0 left-0 z-40 flex w-[18rem] max-w-[85vw] flex-col border-r border-white/8 bg-[color-mix(in_oklab,var(--surface-glass)_90%,black_10%)] p-4 shadow-[var(--shadow-panel)] backdrop-blur-2xl transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
    >
      <div className="glass-panel flex items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-text-secondary">
            ai.mine
          </p>
          <p className="mt-1 text-sm font-semibold text-text-primary">
            Local-first workspace
          </p>
        </div>
        <button
          className="glass-button min-h-10 min-w-10 px-3"
          onClick={onNavigate}
          type="button"
        >
          Close
        </button>
      </div>
      <nav aria-label="Primary" className="mt-4 flex flex-1 flex-col gap-2">
        {primaryItems.map((item) => (
          <NavLinkItem
            key={item.to}
            label={item.label}
            onNavigate={onNavigate}
            to={item.to}
          />
        ))}
      </nav>
      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="px-1 text-[0.7rem] uppercase tracking-[0.22em] text-text-secondary">
          Session
        </p>
        <div className="mt-3">
          <NavLinkItem
            label="Temporary Chat"
            onNavigate={onNavigate}
            to="/temporary-chat"
          />
        </div>
      </div>
    </aside>
  );
}
