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
        <SidebarMenu>
          {sidebarDato.map(({ href, icon: Icon, titulo, id }) => (
            <SidebarMenuItem className='flex items-center space-y-6 gap-x-2 px-3' key={id}>
              <SidebarMenuButton asChild>
                <Link href={href}>
                <Icon size={50}/>
                {titulo}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
