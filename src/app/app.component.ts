import { CommonModule } from '@angular/common';
import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Producto } from './models/producto.model';
import { ProductoCardComponent } from './componentes/producto-card/producto-card.component';
import { EncapsulamientoGlobalComponent } from './componentes/encapsulamiento-global/encapsulamiento-global.component';

type Filtro = 'todos' | 'disponibles' | 'destacados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductoCardComponent, EncapsulamientoGlobalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent implements OnDestroy {
  esTemaClaro = false;
  filtroActual: Filtro = 'todos';

  listaProductos: Producto[] = [
    { id: 1, nombre: 'Laptop Gamer Pro', categoria: 'Tecnología', precio: 1200, descuento: 10, enStock: true, destacado: true,
      imagen: 'productos/laptop.svg', descripcion: 'Alto rendimiento y diseño premium para trabajar o jugar.' },
    { id: 2, nombre: 'Teclado Mecánico RGB', categoria: 'Accesorios', precio: 85, descuento: 0, enStock: true, destacado: false,
      imagen: 'productos/teclado.svg', descripcion: 'Respuesta precisa, iluminación y comodidad total.' },
    { id: 3, nombre: 'Monitor 4K Ultra', categoria: 'Pantallas', precio: 450, descuento: 15, enStock: false, destacado: false,
      imagen: 'productos/monitor.svg', descripcion: 'Colores vibrantes, resolución excepcional y detalle profesional.' }
  ];

  get productosVisibles(): Producto[] {
    if (this.filtroActual === 'disponibles') return this.listaProductos.filter(producto => producto.enStock);
    if (this.filtroActual === 'destacados') return this.listaProductos.filter(producto => producto.destacado);
    return this.listaProductos;
  }
  get totalDisponibles(): number { return this.listaProductos.filter(p => p.enStock).length; }
  get totalDestacados(): number { return this.listaProductos.filter(p => p.destacado).length; }

  cambiarFiltro(filtro: Filtro): void { this.filtroActual = filtro; }
  toggleTema(): void {
    this.esTemaClaro = !this.esTemaClaro;
    document.body.classList.toggle('theme-light', this.esTemaClaro);
  }
  alternarDestacado(id: number): void {
    this.listaProductos = this.listaProductos.map(p => p.id === id ? { ...p, destacado: !p.destacado } : p);
  }
  alternarStock(id: number): void {
    this.listaProductos = this.listaProductos.map(p => p.id === id ? { ...p, enStock: !p.enStock } : p);
  }
  trackByProducto(_index: number, producto: Producto): number { return producto.id; }
  ngOnDestroy(): void { document.body.classList.remove('theme-light'); }
}
