import { Injectable } from '@angular/core';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root',
})
export class Stock {
  listaMedicamentos: Medicamento[] = [
    { id: 1, nombre: 'Paracetamol', precio: 5, stock: 20 },
    { id: 2, nombre: 'Ibuprofeno', precio: 8, stock: 4 },
    { id: 3, nombre: 'Amoxicilina', precio: 12, stock: 10 },
    { id: 4, nombre: 'Omeprazol', precio: 15, stock: 25 },
    { id: 5, nombre: 'Aspirina', precio: 6, stock: 2 },
    { id: 6, nombre: 'Loratadina', precio: 10, stock: 15 },
    { id: 7, nombre: 'Metformina', precio: 20, stock: 30 },
    { id: 8, nombre: 'Vitamina C', precio: 18, stock: 45 },
  ];

  constructor() {
    const datosGuardados = localStorage.getItem('mis_medicamentos');
    if (datosGuardados) {
      this.listaMedicamentos = JSON.parse(datosGuardados);
    }
  }
  private guardarEnLocal() {
    localStorage.setItem('mis_medicamentos', JSON.stringify(this.listaMedicamentos));
  }

  buscarPorId = (idBuscado: number | string) =>
    this.listaMedicamentos.find((m) => m.id === idBuscado);

  realizarVenta = (id: number | string) => {
    const med = this.buscarPorId(id);
    if (med && med.stock > 0) {
      med.stock--;
      this.guardarEnLocal();
    } else {
      alert('¡No hay existencias para vender!');
    }
  };

  eliminarMedicamento = (idParaBorrar: number | string) => {
    if (confirm('¿Estás seguro de que deseas eliminar este medicamento?')) {
      this.listaMedicamentos = this.listaMedicamentos.filter((m) => m.id !== idParaBorrar);
      this.guardarEnLocal();
    }
  };

  agregarNuevoMedicamento(nuevo: Medicamento) {
    this.listaMedicamentos.push(nuevo);
    this.guardarEnLocal();
  }

  obtenerTotalProductos = () => this.listaMedicamentos.length;
}
