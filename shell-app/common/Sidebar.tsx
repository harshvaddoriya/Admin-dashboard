"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "../constants/Navlinks";
import { RxCross2 } from "react-icons/rx";

type Props = {
  collapsed?: boolean;
  onClose?: () => void;
};

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
      className={`bg-white dark:bg-gray-900 border-r dark:border-gray-800 w-64 sm:w-64 p-3 transform transition-transform duration-300 ease-in-out ${
        collapsed ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
      } fixed sm:sticky inset-y-0 left-0 z-30 sm:top-0 sm:h-screen overflow-auto`}
      style={{ WebkitOverflowScrolling: "touch" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="text-lg font-bold ml-2 mt-2">Menu</div>
        <button className="sm:hidden" onClick={onClose}>
          <RxCross2 />
        </button>
      </div>

      <nav className="space-y-1">
        {navLinks.map((l) => (
          <NavLink key={l.href} href={l.href}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
