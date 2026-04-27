import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Stock } from './services/stock';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nuevoNombre: string = '';
  nuevoPrecio: number = 0;
  nuevoStock: number = 0;

  textoBusqueda: string = '';
  precioMaximo: number = 100;

  constructor(public stock: Stock) {}

  agregarMedicamento = () => {
    if (this.nuevoNombre !== '' && this.nuevoPrecio > 0) {
      const nuevoMed = {
        id: this.nuevoNombre + Date.now(),
        nombre: this.nuevoNombre,
        precio: this.nuevoPrecio,
        stock: this.nuevoStock,
      };

      this.stock.listaMedicamentos.push(nuevoMed);

      this.nuevoNombre = '';
      this.nuevoStock = 0;
    } else {
      console.log('Datos inválidos');
    }
  };

  limpiarFiltros = () => {
    this.textoBusqueda = '';
    this.precioMaximo = 100;
  };

  get medicamentosFiltrados() {
    return this.stock.listaMedicamentos.filter(
      (m) =>
        m.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) &&
        m.precio <= this.precioMaximo &&
        m.stock > 0,
    );
  }
}
