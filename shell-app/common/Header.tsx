"use client";

import React from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { AvatarDropdown } from "../components/AvatarDropdown";

export const Header: React.FC<{ onToggleSidebar?: () => void }> = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 h-14 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      <div className="flex items-center gap-3">
        {/* mobile hamburger */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 sm:hidden"
        >
          ☰
        </button>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold">SmartPanel</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Admin</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <AvatarDropdown />
      </div>
    </header>
  );
};
