export type Producto = {
  id: string;
  tiendaId: string;
  nombre: string;
  categoria: string;
  stock: number;
  stockMinimo: number;
  precioCompra: number;
  precioVenta: number;
  fechaVencimiento: Date | null;
  created_at: Date;
}

export type ProductoFormData = Omit<Producto, 'id' | 'tiendaId' | 'created_at'>;

export type ProductoConMargen = Producto & {
  margen: number;
}