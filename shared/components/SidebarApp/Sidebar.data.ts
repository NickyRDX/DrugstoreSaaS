import { Home, LucideIcon, PackageIcon } from "lucide-react";
type SidebarProps = {
  id:number;
  titulo: string;
  href: string;
  icon: LucideIcon;
}
export const sidebarDato: SidebarProps[] =[
  {
    id: 1,
    titulo : 'Inicio',
    href: '/',
    icon: Home ,
  },
  {
    id: 2,
    titulo: 'Stock',
    href: '/productos',
    icon: PackageIcon ,
  }
]