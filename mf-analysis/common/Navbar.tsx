"use client";

import Link from "next/link";
import React from "react";

export const Navbar: React.FC<{ onToggleSidebar?: () => void }> = () => {
  return (
    <header className="flex items-center justify-between p-6 h-16 border-b bg-white dark:bg-gray-900 dark:border-gray-800">
      
      <div className="flex items-center">
        <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Admin Panel
        </span>
      </div>

      <nav className="flex items-center gap-8 text-base font-medium">
        <Link
          href="/"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
        >
          Dashboard
        </Link>

        <Link
          href="/analysis"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
        >
          Analysis
        </Link>
      </nav>

    </header>
  );
};
