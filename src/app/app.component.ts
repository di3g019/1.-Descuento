import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cantidad: number = 0;
  precio: number = 0;
  total: number = 0;
  descuento: number = 0;

  calcularTotal() {
    const subtotal = this.cantidad * this.precio;
    this.descuento = subtotal > 200 ? 0.2 : 0;
    this.total = subtotal - (subtotal * this.descuento);
  }
}

