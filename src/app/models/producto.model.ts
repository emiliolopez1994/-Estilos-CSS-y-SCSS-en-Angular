/** Modelo solicitado en la práctica; imagen es un recurso gráfico adicional. */
export interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  descuento: number;
  enStock: boolean;
  destacado: boolean;
  imagen: string;
  descripcion: string;
}
