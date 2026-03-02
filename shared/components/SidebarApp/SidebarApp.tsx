"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarDato } from "./Sidebar.data";
import Link from "next/link";
export default function SidebarApp() {
  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-zinc-900/20 dark:border-zinc-100/20"
    >
      <SidebarHeader>Mi Logo</SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel>Bienvenido a tu panel</SidebarGroupLabel>
        <SidebarMenu className="space-y-3 md:space-y-6">
          {sidebarDato.map(({ href, icon: Icon, titulo, id }) => (
            <SidebarMenuItem
              className="flex items-center px-3 gap-x-2 h-full"
              key={id}
            >
              <SidebarMenuButton asChild>
                <Link
                  href={href}
                  className="flex w-full h-full gap-x-3 items-center-safe"
                >
                  <Icon className="size-5! stroke-1" />
                  <p className="text-pretty text-base md:text-lg leading-none md:leading-tight text-slate-800 dark:text-slate-200">
                    {titulo}
                  </p>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
