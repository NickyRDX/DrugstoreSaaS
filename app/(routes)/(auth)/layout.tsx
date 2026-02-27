"use client"
import ThemeToggle from '@/shared/components/ThemeToggle';
import React from 'react'

export default function AuthLayout({children}:{children: React.ReactNode}) {
  return (
    <>
      <main className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 p-4 dark:bg-gray-900">
        <ThemeToggle />
        {children}
      </main>
    </>
  );
}
