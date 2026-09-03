"use client";

import { useState } from "react";

import { Header } from "@/src/widgets/header/ui/Header";
import { Sidebar } from "@/src/widgets/sidebar/ui/Sidebar";

export function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
