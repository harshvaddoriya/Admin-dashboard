"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {
  collapsed?: boolean;
  onClose?: () => void;
};

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/users", label: "Users" },
  { href: "/analytics", label: "Analytics" },
];

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
        active
          ? "bg-gray-100 dark:bg-gray-800 font-medium"
          : "text-gray-700 dark:text-gray-300"
      }`}
    >
      {children}
    </Link>
  );
};

export const Sidebar: React.FC<Props> = ({
  collapsed = false,
  onClose,
}) => {
  return (
    <aside
      className={`bg-white dark:bg-gray-900 border-r dark:border-gray-800 w-64 sm:w-64 p-4 transform ${
        collapsed ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
      } transition-transform fixed sm:static inset-y-0 left-0 z-30 sm:h-screen`}>
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-semibold">Menu</div>
        <button className="sm:hidden" onClick={onClose}>
          ✕
        </button>
      </div>

      {/* Dynamic Navigation */}
      <nav className="space-y-1">
        {links.map((l) => (
          <NavLink key={l.href} href={l.href}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
