import { BadgeDollarSign, Home, LucideIcon, PackageIcon, PersonStanding, TruckElectric, User } from "lucide-react";
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
    href: '/dashboard',
    icon: Home ,
  },
  {
    id: 2,
    titulo: 'Stock',
    href: '/productos',
    icon: PackageIcon ,
  },
  {
    id: 3,
    titulo: 'Ventas',
    href: '/ventas',
    icon: BadgeDollarSign ,
  },
  {
    id: 4,
    titulo: 'Empleados',
    href: '/empleados',
    icon: PersonStanding ,
  },
  {
    id: 5,
    titulo: 'Proveedores',
    href: '/proveedores',
    icon: TruckElectric ,
  },
  {
    id: 6,
    titulo: 'Userio',
    href: '/usuarios',
    icon: User ,
  },
]