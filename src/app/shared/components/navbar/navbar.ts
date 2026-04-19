import { Component } from '@angular/core';
import { Stock } from '../../../services/stock';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private stock: Stock) {}
  verTotal = () => this.stock.obtenerTotalProductos();
}
