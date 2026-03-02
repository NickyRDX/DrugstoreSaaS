export type Proveedor = {
  id: string;
  tiendaId: string;
  nombre: string;
  telefono: string | null;
  diaVisita: string | null;
  created_at: Date;
}

export type ProveedorFormData = Omit<Proveedor, 'id' | 'tiendaId' | 'created_at'>