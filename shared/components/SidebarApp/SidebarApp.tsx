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
      className="border-zinc-900/20 dark:border-zinc-100/20 "
    >
      <SidebarHeader>Mi Logo</SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel>Bienvenido a tu panel</SidebarGroupLabel>
        <SidebarMenu className="flex flex-col mt-4 gap-5 md:gap-7 md:mt-7">
          {sidebarDato.map(({ href, icon: Icon, titulo, id }) => (
            <SidebarMenuItem className="" key={id}>
              <SidebarMenuButton className="" asChild>
                <Link
                  href={href}
                  className="flex items-center gap-x-3 w-full py-4 px-6"
                >
                  <Icon className="stroke-1 size-6! shrink-0 text-slate-700 dark:text-slate-300" />
                  <span className="-leading-relaxed text-base tracking-tight text-slate-700 dark:text-slate-300">
                    {titulo}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
