import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductoCardComponent {
  @Input({ required: true }) producto!: Producto;
  @Output() alternarDestacado = new EventEmitter<number>();
  @Output() alternarStock = new EventEmitter<number>();

  get precioFinal(): number {
    return this.producto.precio * (1 - this.producto.descuento / 100);
  }

  // ngStyle: objeto generado a partir del estado del producto.
  getEstiloPrecio(): { [key: string]: string } {
    return {
      color: this.producto.enStock ? (this.producto.descuento > 0 ? '#22c3a5' : '#8b5cf6') : '#94a3b8',
      'font-weight': this.producto.destacado ? '900' : '750',
      'font-size': this.producto.destacado ? '30px' : '27px'
    };
  }
}
