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
import { usePathname } from "next/navigation";
import { sidebarDato } from "./Sidebar.data";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function SidebarApp() {
  const path = usePathname();
  const isActive = (href: string) =>
    path === href ? "bg-primary text-primary-foreground" : "";
  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-zinc-900/20 dark:border-zinc-100/20 "
    >
      <SidebarHeader>Mi Logo</SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel>Bienvenido a tu panel</SidebarGroupLabel>
        <SidebarMenu className="flex flex-col mt-4 px-1 gap-5 md:gap-7 md:mt-7">
          {sidebarDato.map(({ href, icon: Icon, titulo, id }) => (
            <SidebarMenuItem  key={id}>
              <SidebarMenuButton asChild>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-x-3 py-6 px-3",
                    isActive(href),
                  )}
                >
                  <Icon className="stroke-1 size-6! shrink-0" />
                  <span className="-leading-relaxed text-base tracking-tight">
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
