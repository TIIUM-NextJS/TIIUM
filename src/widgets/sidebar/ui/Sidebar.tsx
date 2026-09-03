"use client";

import { XIcon } from "lucide-react";
import Link from "next/link";

import { LogoutButton } from "@/src/features/logout/ui/LogoutButton";
import { cn } from "@/src/shared/lib/utils";

import { SIDEBAR_MENU_ITEMS } from "../model/constants";
import { useCloseOnEscape } from "../model/useCloseOnEscape";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  useCloseOnEscape(isOpen, onClose);

  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-20 bg-sidebar-overlay transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        aria-label="메뉴"
        inert={!isOpen}
        className={cn(
          "fixed top-0 right-0 z-30 flex h-full w-80 max-w-full flex-col border-l border-sidebar-border bg-sidebar text-sidebar-foreground shadow-[-8px_0_32px_var(--sidebar-shadow)] transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-end px-8 py-10">
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={onClose}
            className="cursor-pointer"
          >
            <XIcon />
          </button>
        </div>
        <nav className="flex-1">
          <ul className="flex flex-col px-8 gap-10">
            {SIDEBAR_MENU_ITEMS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  className="-mx-3 block rounded-md px-3 py-3 text-lg transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="px-8 py-10">
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
