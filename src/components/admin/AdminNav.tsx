"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BASE_PATH } from "@/lib/site";

const LINKS = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/portfolio", label: "Portfolio" },
];

export default function AdminNav() {
  const rawPathname = usePathname();
  const pathname =
    BASE_PATH && rawPathname.startsWith(BASE_PATH)
      ? rawPathname.slice(BASE_PATH.length) || "/"
      : rawPathname;

  return (
    <nav
      className="flex gap-1 overflow-x-auto px-3 pb-4 lg:flex-col lg:px-3 lg:pb-2"
      aria-label="Admin"
    >
      {LINKS.map((link) => {
        const active =
          link.href === "/admin" ? pathname === "/admin" : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              active
                ? "bg-white/10 text-white"
                : "text-white/65 hover:bg-white/5 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
