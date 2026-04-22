export interface Medicamento {
  id: number | string;
  nombre: string;
  precio: number;
  stock: number;
  descripcion?: string;
}
