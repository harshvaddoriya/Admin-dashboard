"use client";

import React, { useState } from "react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
      <Sidebar collapsed={!sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="p-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};
