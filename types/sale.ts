export type Venta = {
  id: string;
  tiendaId: string;
  productoId: string;
  cantidad: number;
  precioVentaUnitario: number;
  precioCompraUnitario: number;
  margen: number;
  totalVenta: number;
  totalMargen: number;
  created_at: Date;
}

export type VentaFormData = {
  productoId: string;
  cantidad: number;
}

export type VentaConProducto = Venta & {
  producto: {
    id: string;
    nombre: string;
  }
}