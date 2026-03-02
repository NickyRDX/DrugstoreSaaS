"use client";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarApp from "@/shared/components/SidebarApp/SidebarApp";
import ThemeToggle from "@/shared/components/ThemeToggle";
import React from "react";
interface LayoutRoutesProps {
  children: React.ReactNode;
}
export default function LayoutRoutes({ children }: LayoutRoutesProps) {
  return (
    <main className="h-screen font-sans md:w-full relative mx-auto overflow-hidden">
      <SidebarProvider>
        <SidebarApp />
        <SidebarInset>
          <header className="flex h-16 items-center gap-x-2 border-b dark:border-zinc-100/20 px-4 border-zinc-900/20">
            <SidebarTrigger className="cursor-pointer"/>
            <ThemeToggle/>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
