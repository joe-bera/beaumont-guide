"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { id: "market", label: "Market Intel", href: "/market" },
  { id: "investment", label: "Investment", href: "/investment" },
  { id: "entitlements", label: "Entitlements", href: "/entitlements" },
  { id: "growth", label: "Growth Pipeline", href: "/growth" },
  { id: "documents", label: "Documents", href: "/documents" },
  { id: "calculator", label: "Calculator", href: "/calculator" },
  { id: "assistant", label: "AI Assistant", href: "/assistant" },
  { id: "properties", label: "Properties", href: "/properties" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="no-print bg-navy-deep overflow-x-auto scrollbar-hide">
      <div className="mx-auto flex max-w-[1200px] gap-0.5 px-4">
        {TABS.map((tab) => {
          const isActive =
            pathname === tab.href || (pathname === "/" && tab.href === "/market");
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`whitespace-nowrap rounded-t-md px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.06em] transition-all ${
                isActive
                  ? "bg-gold text-navy"
                  : "bg-transparent text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
