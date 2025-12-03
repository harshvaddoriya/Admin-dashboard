"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router"; 
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
  const router = useRouter();
  const active = router.pathname === href;

  return (
    <Link
      href={href}
      className={`
        block w-full text-center px-4 py-3 rounded-lg transition-all duration-200 ease-in-out
        cursor-pointer
        ${active ? "bg-blue-100 dark:bg-blue-800 font-semibold text-blue-600 dark:text-blue-300" : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 hover:text-blue-600 dark:hover:text-blue-300"}
         text-gray-700 dark:text-gray-300
        hover:bg-blue-100 dark:hover:bg-blue-800
        hover:text-blue-600 dark:hover:text-blue-300
        focus:outline-none
      `}
    >
      {children}
    </Link>
  );
};

export const Sidebar: React.FC<Props> = ({ collapsed = false, onClose }) => {
  return (
    <aside
      className={`
        bg-white dark:bg-gray-900 border-r dark:border-gray-800 w-64 sm:w-64 p-4
        transform transition-transform duration-300 ease-in-out
        ${collapsed ? "-translate-x-full sm:translate-x-0" : "translate-x-0"}
        fixed sm:sticky inset-y-0 left-0 z-30 sm:top-0 sm:h-screen overflow-auto
      `}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex items-center justify-between mb-4 border-b dark:border-gray-800 pb-3">
        <div className="text-lg font-semibold ml-2 mt-1">Menu</div>
        <button className="sm:hidden" onClick={onClose}>
          <RxCross2 size={20} />
        </button>
      </div>

      <nav className="flex flex-col  w-full space-y-2 mt-4">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
