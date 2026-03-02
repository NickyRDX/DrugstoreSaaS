export type Rol = 'OWNER' | 'EMPLOYEE';

export type User = {
  id: string;
  email: string;
  nombre: string;
  rol: Rol;
  tiendaId: string;
  create_at: Date;
}