"use client";
import NavToggle from "@/shared/components/NavToggle";
import ThemeToggle from "@/shared/components/ThemeToggle";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavToggle />
      <main className="min-h-full w-full flex flex-col items-center justify-center p-4 overflow-y-hidden">
        {children}
      </main>
    </>
  );
}
